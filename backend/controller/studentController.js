import {Student} from '../model/studentModel.js'

export const postStudent = async(req,res)=>{

    try {
    console.log(req.body)

    const student = new Student(req.body)
    await student.save();

    res.json({message:"Student added succesfully"})
    } catch (error) {
        res.json({error: error.message})
    }
    
}

export const getStudent = async(req,res)=>{
    try {
        const students = await Student.find()
        res.json(students)
    } catch (error) {
        res.json({error: error.message})
    }
}