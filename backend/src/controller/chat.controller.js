import { generateStreamToken } from "../lib/stream.js";

export async function getStreamToken(req, res) {
  try {
    // Backend signs a ticket → frontend uses that ticket to log into chat.
    const token = generateStreamToken(req.user.id);

    // Sends token back as JSON & Frontend uses token to log in to Stream SDK
    res.status(200).json({ token });
  } catch (error) {
    console.log("Error in getStreamToken controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
} 