const Course = require("../models/Course")

exports.course = async(req,res)=>{
    const course= await Course.find() 
try{
return res.send(course)
}
catch(err){
    return res.status(400).json({message:"Something went wrong, please try again"})
}

}