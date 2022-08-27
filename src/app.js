const express= require('express');
const port= process.env.PORT || 8000;
const app=express();
const path= require('path');
const hbs= require('hbs');


const static_path= path.join(__dirname,"../public");
const template_path= path.join(__dirname,"../template/views");



app.get("/login",(req,res)=>{
    res.render('login');
});

app.get("/signup",(req,res)=>{
    res.render("signup");
})


app.listen(port,()=>{
    console.log("listening");
})