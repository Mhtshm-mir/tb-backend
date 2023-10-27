const User = require("../models/User")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const key = process.env.jwtkey

exports.signin = async(req,res,next)=>{
    const {name,email,password} = req.body;
    let user= await User.find({email});
   
    try{
        
        if(user.length>0){
            res.status(409).json({message:"Email already exists"})
        }else{
            const newUser = {
                name:name ,email:email
             }
            const token = jwt.sign(newUser,key)
            user = new User({name:name,email:email,password:password})
            await user.save()
            return res.status(200).json({message:"Successfully logged in", token,name})

        }

    }
   catch (err) {
     res.status(500).json({ message: "Internal server error", error: err });
   }
}
