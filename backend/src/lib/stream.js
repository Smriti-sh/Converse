import {StreamChat} from "stream-chat";
import "dotenv/config";

const apikey = process.env.STREAM_API_KEY;
const apisecret = process.env.STREAM_SECRET;

if (!apikey || !apisecret) {
    console.error("Stream API key or secret is missing.")
}

const streamClient = StreamChat.getInstance(apikey,apisecret);

export const upsertStreamUser = async function(userData){
    try {
        await streamClient.upsertUsers([userData]);
        return userData;
    } catch (error) {
        console.error("Error upserting stream user: ", error)
    }
}

export const generateStreamToken = (userId)=>{
    try {
        // ensure userId is a string
        const userIdStr = userId.toString();
        return streamClient.createToken(userIdStr);
      } catch (error) {
        console.error("Error generating Stream token:", error);
      }
}