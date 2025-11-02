import {create} from "zustand";

export const useAuthStore = create((set) => ({
    authUser: {name: "Satyam", _id: 123, age: 22},
    isloggedIn:false,

    login: () => {
        console.log("We just logged in");
        set({isloggedIn: true});
    }
}))