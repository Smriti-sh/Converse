import express from "express";
import { login,signup,logout,onboard } from "../controller/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// router.get("/signup", (req,res)=>{
//     res.send("Signup Route")
// });

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.post("/onboarding", protectRoute , onboard);

//to check if user is logged in
router.get("/me",protectRoute, (req,res)=>{
    res.status(200).json({success:true, user: req.user})
});

export default router;
 