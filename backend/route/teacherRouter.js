import express from 'express'
import { getTeacher, postTeacher } from './../controller/teacherController.js';

const teacherRoute = express.Router()

teacherRoute.get('/get',getTeacher)
teacherRoute.post('/post',postTeacher)

export{teacherRoute}