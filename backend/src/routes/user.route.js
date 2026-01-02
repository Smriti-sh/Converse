import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getMyFriends,getRecommendedUsers,sendFriendRequest,acceptFriendRequest,getFriendRequests,getOutGoingFriendReqs } from "../controller/user.controller.js";

const router = express.Router();

//apply protectRoute to all routes
router.use(protectRoute)

router.get("/", getRecommendedUsers);
router.get("/friends", getMyFriends);

router.post("/friend-request/:id", sendFriendRequest);
router.put("/friend-request/:id/accept", acceptFriendRequest);
// router.put("/friend-request/:id/reject", rejectFriendRequest);

//for notification page
router.get("/friend-requests", getFriendRequests)
router.get("/outgoing-friend-requests",getOutGoingFriendReqs)

export default router;

