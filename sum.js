
// const { time } = require("console");
const fs= require("fs");
const currentdate= new Date();
d=parseInt(currentdate.toString(). slice(8,10));
console.log(d);
m=currentdate.toString(). slice(4,7);
t=currentdate.toString(). slice(16,24);
fname=d.toString()+m.toString();
data1= currentdate.toString();
// // console.log(date,time);
// // console.log(data1);
fs.writeFile(`${fname}.txt`,data1,(err)=>{
    console.log("completed writing!!");
});
// fs.readFile("./name.txt", "utf-8",(err,data)=>{
//     if(err)
//     console.error(err);

// console.log(data);}
// )
// const data2="this is statement is appended";
// fs.appendFile("./name.txt", data2+ "\n", (err)=>{
//     console.log("finished appending!!!");
// })
