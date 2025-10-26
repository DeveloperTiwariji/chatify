import jwt from "jsonwebtoken";
import { ENV } from "./env.js";

export const generateToken = (userId, res) =>{
    const token = jwt.sign({userId}, ENV.JWT_SECRET, {
        expiresIn: "7d",
    });

    res.cookie("jwt", token, {
        maxAge: 7*24*60*60*1000, // MS in 7 days
        httpOnly: true,  // accessible only by web server [cross-site scripting attacks]
        sameSite: "strict", // CSRF protection
        secure: ENV.NODE_ENV === "development"? false : true, // HTTPS in production 
    });

    return token;
}