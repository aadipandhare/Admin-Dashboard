 import mongoose from 'mongoose'

 const studentSchema = new mongoose.Schema({
    name : {
        type : String
    },
    age : {
        type: Number
    },
    email : {
        type: String
    },
    stream : {
        type: String
    },
    grade : {
        type : String
    }

 })

 export const Student = mongoose.model('Student',studentSchema)