import jwt from "jsonwebtoken";
import User from "../models/User.js";
// import "dotenv/config";
// import { messageSetPagination } from "stream-chat/dist/types/utils";

export const protectRoute = async (req,res,next) => {

    try {
        const token = req.cookies.jwt;  //to use this import cookieparser in server.js
        if (!token) {
            return res.status(401).json({message:"Unauthorised - no token provided"})
        }

        const decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY); //It checks if the JWT token is real and valid using the secret key, and if it is, it returns the data inside the token.

        if (!decoded) {
            return res.status(401).json({message:"Unauthorised - Invalid token"});
        }

        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(401).json({message:"Unauthorised - user not found"})
        }
        req.user = user;
        next();
    } 
    catch (error) {
        console.log("Error in protectRoute middleware ",error);
        res.status(500).json({message:"Internal server error"});
    }
}