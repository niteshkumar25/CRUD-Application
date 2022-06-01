const res = require("express/lib/response")
const StudentModel = require('../Models/Student.js')
// require("express/lib/response")
const async = require('hbs/lib/async')

module.exports = class StudentController {

    static CreateDoc = async(req,res)=>{
        const {name, age, fees} = req.body;
        const doc = await new StudentModel({
            name:name,
            age:age,
            fees:fees
        });
        const result = await doc.save()
        console.log(result);
        res.redirect('/student/')
    }
    static getAllDoc = async(req,res)=>{
        const result = await StudentModel.find();
        //console.log(result);
        res.render('index', {data: result})  
    }

    static editDoc = async(req,res)=>{
        const result = await StudentModel.findById(req.params.id)
        // console.log(result);
        res.render('edit', {data:result});
    }

    static updateDoc = async(req,res)=>{
        // console.log(req.params.id);
        // console.log(req.body);

        const result = await StudentModel.findByIdAndUpdate(req.params.id, req.body)
        res.redirect('/student')
    }

    static DeleteDoc = async(req,res)=>{
        // console.log(req.params.id);
        const result = await StudentModel.findByIdAndDelete(req.params.id)     
        res.redirect('/student/');

    }
}



// module.exports(StudentController);