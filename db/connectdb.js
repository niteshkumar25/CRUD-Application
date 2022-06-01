const mongoose = require('mongoose');
mongoose.connect("mongodb://0.0.0.0:27017/Collage", {useNewUrlParser: true}).then(()=>{
        console.log("Connection SucessFull");
    }).catch((e)=>{
        console.log("Not Connect");
    });
    // const StudentModel = require('../Models/Student')

