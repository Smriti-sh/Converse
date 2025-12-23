import express from "express";
import { login,signup,logout } from "../controller/auth.controller.js";

const router = express.Router();

// router.get("/signup", (req,res)=>{
//     res.send("Signup Route")
// });

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

export default router;
 