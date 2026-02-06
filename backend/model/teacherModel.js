import mongoose from 'mongoose'

const teacherSchema = new mongoose.Schema({
    name : {
        type: "String"
    },
    email:{
        type: "String"
    },
    age: {
        type: "String"
    },
    gender: {
        type: "String"
    }
})

export const Teacher = mongoose.model("Teacher",teacherSchema)