import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Login } from './pages/Login.jsx';
import { Navbar } from './components/Navbar.jsx';
import { Side} from './components/Side.jsx'
import { Routes,Route } from "react-router-dom"
import { Home } from './components/Home';
import { StudData } from './components/StudData.jsx';
import { AddStudent } from './pages/AddStudent';
import { TeacherData} from './components/TeacherData'
import { AddTeacher } from './pages/AddTeacher';
import { Register } from './pages/Register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ToastContainer/>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/student' element={<StudData/>}></Route>
        <Route path='/addStudent' element={<AddStudent/>}></Route>
        <Route path='/teacher' element={<TeacherData/>}></Route>
        <Route path='/addTeacher' element={<AddTeacher/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
      
    </>
  )
}

export default App
