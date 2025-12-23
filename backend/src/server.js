import express from "express";
import "dotenv/config";
// import dotenv from "dotenv";
// dotenv.config();  //to read  process.env.PORT
import authRoutes from "./routes/auth.route.js"
import { connectDB } from "./lib/db.js";

const app = express();
const PORT = process.env.PORT;

//noob
// app.get("/api/auth/signup", (req,res)=>{
//     res.send("Sign Up route");
// });
// app.get("/api/auth/signin", (req,res)=>{
//     res.send("Sign In route");
// });
// app.get("/api/auth/logout", (req,res)=>{
//     res.send("Log out route");
// });

app.use(express.json());    //Parses JSON request bodies ,Converts JSON → JavaScript object ,Attaches it to req.body

app.use("/api/auth",authRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running at port ${PORT}`);
    // calling this db function as soon as our app starts
    connectDB();
});