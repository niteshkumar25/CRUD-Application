const mongoose = require('mongoose')



const StudentSechma = new mongoose.Schema({
    name: {type:String, required:true, trim:true},
    age: {type:Number, required: true, min:18, max:50},
    fees: {type:mongoose.Decimal128, required:true, validate:(v)=> v >= 5000.5}
});

const StudentModel = mongoose.model('student',  StudentSechma)

module.exports = StudentModel;