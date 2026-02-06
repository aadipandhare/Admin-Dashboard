import express from 'express'
import {studentRoute} from './route/studentRoute.js'
import {teacherRoute} from './route/teacherRouter.js'
import {userRoute} from './route/userRoute.js'
import './config/Db.js'
import cors from 'cors'


const app = express();

//imp
app.use(express.json());

app.use(cors())

app.get('/',(req,res)=>{
    res.send("API Working")
    //   const { email, password } = req.body;

})

app.use('/student',studentRoute)
app.use('/teacher',teacherRoute)
app.use('/user',userRoute)

app.listen('4000',()=>{
    console.log("Server is running on PORT 4000...")
})