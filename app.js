const express=require('express');
const app=new express();


const bodyParser = require("body-parser");
const mongoose = require("mongoose");
app.use(bodyParser.json());

//database connection
let URL="mongodb+srv://<username>:<password>@cluster0.75qh3yi.mongodb.net/MernEcommerce?retryWrites=true&w=majority";
let Option={user:'ostad123',pass:'ostad123',autoIndex:true};
mongoose.connect(URL,Option).then((res)=>{
    console.log("Database connection successfull")
}).catch((e)=>{
    console.log(e);
})


module.exports=app;