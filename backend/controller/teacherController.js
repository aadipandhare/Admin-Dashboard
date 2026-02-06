
import { Teacher } from './../model/teacherModel.js';

export const postTeacher = async(req,res)=>{

    try {
    console.log(req.body)

    const teacher = new Teacher(req.body)
    await teacher.save();

    res.json({message:"Teacher added succesfully"})
    } catch (error) {
        res.json({error: error.message})
    }
    
}

export const getTeacher = async(req,res)=>{
    try {
        const teachers = await Teacher.find()
        res.json(teachers)
    } catch (error) {
        res.json({error: error.message})
    }
}