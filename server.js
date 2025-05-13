const mongoose = require("mongoose")
const express = require("express")
const dontenv = require("dotenv")
 
const app = express();
app.use(express.json())
const PORT = process.env.PORT || 3000;

app.get("/",(req,res)=> {
    res.send("server is running")
})

app.post("/signup",(req,res)=>{
    const { username, email, password,dob}= req.body

if(!username){
    return res.status(400).json({error:"username cannot be empty"})
}
if(!email || email.trim()===0){
    return res.status(400).json({error:"email cannot be empty"})
}
if(!password || password.length() <8 || password.length>16){
    return res.status(400).json({error:"password should be greater than 8 and lesser than 16"})
}
 res.status(201).json({message:"signup sucessfull",
    data:{
        username,
        email,
        dob,
    },
 })
});