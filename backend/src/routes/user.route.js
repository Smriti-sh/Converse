import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getMyFriends,getRecommendedUsers,sendFriendRequest,acceptFriendRequest } from "../controller/user.controller.js";

const router = express.Router();

//apply protectRoute to all routes
router.use(protectRoute)

router.get("/", getRecommendedUsers);
router.get("/friends", getMyFriends);
router.post("/friend-request/:id", sendFriendRequest);
router.put("/friend-request/:id/accept", acceptFriendRequest);

export default router;

