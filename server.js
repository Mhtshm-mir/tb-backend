const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const url = process.env.DatabaseURL
const port = process.env.PORT
const cors= require("cors")
const app  = express()
const authController = require("./controllers/authController")
const courseController = require("./controllers/courseController")
app.use(express.json())
app.use(cors())

app.post('/signin',authController.signin)
app.get("/course",courseController.course)

mongoose.connect(url)
.then(()=>{
    console.log('connected to MongoDB');
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`);
    })  
})
.catch((err)=>{
    console.error("MongoDB connection error:", err);

})