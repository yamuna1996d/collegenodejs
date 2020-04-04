var express = require('express');
var express =require('express');
var parser=require('body-parser');
var mongoose = require('mongoose');

var app=express();
app.use(parser.urlencoded({extended:false}));

const studentSchema = new mongoose.Schema(
    {
        name: String,
        roll:Number,
        adno:Number,
        college: String
    }//creating Schema
); 
const studmodel = mongoose.model('students',studentSchema);//creating model
mongoose.connect("mongodb+srv://dbuser:ava1996@cluster0-ffwzj.mongodb.net/test?retryWrites=true&w=majority");
app.get('/',(req,res)=>{
    res.send("hai..");
});
app.get('/register',(req,res)=>{
    // var getna = req.body.name;
    // var getroll=req.body.roll;
    // var getadno=req.body.adno;
    // var getcollege=req.body.college;
    //res.send("Name" + na + "Rollno :" +roll + "Admission Number" + adno +"College" + college);

    try{
        var studentdata= new studmodel(req.body);
        var result=await studentdata.save();
        res.json(result);
        //res.json(req.body);
    }
    catch (error){
        console.log(error);
        res.status(500).send(error);
    }
});
app.listen(process.env.PORT || 3000,()=>{
    console.log("Server Started");
});