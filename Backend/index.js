const express = require("express");
const User= require("./model/User.js");
const cors = require("cors");
const bcrypt = require("bcrypt");
const { default: mongoose } = require("mongoose");
const usermodel = require("./model/User.js");
const app = express();
 app.use(express.json());
require('dotenv').config();

app.use(cors ({
    credentials:true,
    origin:"*",
}));
const bcryptsat = bcrypt.genSaltSync(10);
app.get("/test",(req,res)=> {
res.json("test:okay");
})
app.post("/register",async (req,res) => {
    try{
    const  { name ,email,password}= req.body;

    const userdoc = await User.create({
    name,
    email,
    password:bcrypt.hashSync(password,bcryptsat),
   })
   res.json(userdoc) 
    }
    catch(err){
        console.error(err);
        res.status(422).json(err);
    }

})
mongoose.connect(process.env.mongoURL);
app.listen(4000 , ()=> {
    console.log("app is listening on port 4000");
})