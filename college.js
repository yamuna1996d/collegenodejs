var express = require('express');
var express =require('express');
var parser=require('body-parser');
var app=express();
app.use(parser.urlencoded({extended:false}));
// app.get('/',(req,res)=>{
//     res.send("hai..");
// });
app.get('/register',(req,res)=>{
    var na = req.body.getname;
    var roll=req.body.getroll;
    var adno=req.body.getadno;
    var college=req.body.getcollege;
    res.send("Name" + na + "Rollno :" +roll + "Admission Number" + adno +"College" + college);
    res.json(req.body);
});
app.listen(process.env.PORT || 3000,()=>{
    console.log("Server Started");
});