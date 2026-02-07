import React,{useEffect,useState} from 'react'
import {Home} from './Home.jsx'
import { Navbar } from './Navbar';
import { Side } from './Side';
import { useNavigate } from 'react-router-dom';

export const TeacherData = () => {

    const[data,setData] = useState([])

    const navigate = useNavigate()

    useEffect(()=>{
        fetch("http://localhost:4000/teacher/get")
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data)
            setData(data)
        })
    },[])

    const handleClick=(e)=>{
        e.preventDefault();
        navigate('/addTeacher')
    }

  return (
    <>
      <Navbar/>

      <div className="flex gap-10 w-full  bg-gray-100 min-h-screen">
        <Side/>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center">

          {/* Header */}
          <div className="w-full max-w-5xl py-3 flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-700">
              TEACHER LIST
            </h2>

            <button
              onClick={handleClick}
              className="bg-blue-900 hover:bg-blue-800 transition text-white px-5 py-2 rounded-lg shadow-md"
            >
              + Add Teacher
            </button>
          </div>

          {/* Table Card */}
          <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
            <table className="w-full border-collapse text-center">
              
              <thead className="bg-gray-700 text-white">
                <tr>
                  <th className="px-4 py-3 border border-gray-500">Name</th>
                  <th className="px-4 py-3 border border-gray-500">Email</th>
                  <th className="px-4 py-3 border border-gray-500">Age</th>
                  <th className="px-4 py-3 border border-gray-500">Gender</th>
                </tr>
              </thead>

              <tbody>
                {data.map((res,index)=>{
                  return(
                    <tr
                      key={index}
                      className="hover:bg-gray-100 transition border-b"
                    >
                      <td className="px-4 py-3 border border-gray-500 text-gray-700">{res.name}</td>
                      <td className="px-4 py-3 border border-gray-500 text-gray-700">{res.email}</td>
                      <td className="px-4 py-3 border border-gray-500 text-gray-700">{res.age}</td>
                      <td className="px-4 py-3 border border-gray-500 text-gray-700">{res.gender}</td>
                    </tr>
                  )
                })}
              </tbody>

            </table>
          </div>

        </div>
      </div>
    </>
  )
}
