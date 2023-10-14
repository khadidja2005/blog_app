const mongoose = require("mongoose");

const Userschema= new mongoose.Schema({
    name:{type:String},
    email:{type:String , unique:true},
    password:{type:String},
})


const usermodel = new mongoose.model("User",Userschema);

module.exports = usermodel;