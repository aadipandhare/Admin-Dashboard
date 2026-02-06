import express from 'express'
import { postStudent, getStudent} from './../controller/studentController.js';

const studentRoute = express.Router()

studentRoute.get('/get',getStudent)
studentRoute.post('/post',postStudent)

export{studentRoute}