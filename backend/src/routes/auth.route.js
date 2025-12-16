import express from "express";
import { login,signup,logout } from "../controller/auth.controller.js";

const router = express.Router();

// router.get("/signup", (req,res)=>{
//     res.send("Signup Route")
// });

router.get("/signup", signup);

router.get("/login", login);

router.get("/logout", logout);

export default router;
 