const express= require('express');
const fs= require("fs");
const PORT=9000;
const app=express();


app.get("/", (request,response)=>{
    
const currentdate= new Date();
d=parseInt(currentdate.toString(). slice(8,10));
m=currentdate.toString(). slice(4,7);
fname=d.toString()+m.toString();
data1= currentdate.toString();
fs.writeFile(`${fname}.txt`,data1,(err)=>{
    console.log("completed writing!!");
});
    response.send(`completed writing!!created a file:${fname}.txt`,)
});

//create a server and make it to listen 
app.listen(PORT,()=>console.log("server started on the port:",PORT));