const dotenv=require('dotenv')
dotenv.config()
const cors=require('cors')
const express=require('express')
const app= express() 


app.get('/',(req,res)=>{
     res.send('Talknext......')
});


module.exports=app;