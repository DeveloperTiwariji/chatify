import cloudinary from "../lib/cloudinary.js";
import Message from "../model/Message.js";
import User from "../model/User.js";

export const getAllContacts = async (req, res) => {

    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password");
        res.status(200).json(filteredUsers);
    }catch (error) {
        console.log("Error in getAllContacts controller:", error);
        res.status(500).json({message: "Internal server error"});
    }
};


export const getMessagesById = async (req, res) => {

    try{

        const myId = req.user._id;
        const {id: userToChatId} = req.params;

        const messages = await Message.find({
            $or: [
                {senderId: myId, receiverId: userToChatId},
                {senderId: userToChatId, receiverId: myId}
            ],
        });
        
        res.status(200).json(messages);
    }catch (error) {
        console.log("Error in getMessagesById controller:", error);
        res.status(500).json({message: "Internal server error"});
    }
};


export const sendMessage = async (req, res) => {

    try {
        const senderId = req.user._id;
        const {id: receiverId} = req.params;
        const {text, image} = req.body;
        let imageUrl;

        if(image){

            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl = uploadResponse.secure_url;
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            text,
            image: imageUrl,
        });

        await newMessage.save();

        // todo: send message in real-time using sockets.id
        res.status(201).json(newMessage);
    }catch (error) {
        console.log("Error in sendMessage controller:", error);
        res.status(500).json({message: "Internal server error"});
    }
}


export const getChatPartners = async (req, res) => {

    try {
        const loggedInUserId = req.user._id;
        const messages = await Message.find({
            $or: [{senderId: loggedInUserId}, {receiverId: loggedInUserId}],
        });

        const chatPartnerIds = [...new Set(
            messages.map((msg) => 
                msg.senderId.toString() === loggedInUserId.toString()? 
                msg.receiverId.toString() :
                msg.senderId.toString())
        )];

        const chatPartners = await User.find({_id: {$in: chatPartnerIds}}).select("-password");
        res.status(200).json(chatPartners);
    }catch (error) {
        console.log("Error in getChatPartners controller:", error);
        res.status(500).json({message: "Internal server error"});
    }
}

