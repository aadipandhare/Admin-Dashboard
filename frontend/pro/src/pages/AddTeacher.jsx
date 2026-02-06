import React,{useState, useEffect} from 'react'
import { Navbar } from './../components/Navbar';
import { Side } from './../components/Side';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


export const AddTeacher = () => {

    const navigate = useNavigate();

    const [formData,setFormData] = useState({
        name:"",
        // age:"",
        email:"",
        stream:"",
        grade:""
    })

    const handleChange=(e)=>{
        setFormData({
            ...formData,
            age : Number(formData.age),
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit= async (e)=>{
        e.preventDefault();

        try {

            const response = await fetch("http://localhost:4000/teacher/post",
            {method : "POST",
                headers :{
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(formData)
            })

            const data = await response.json();
          
            toast.success("Teacher Added Successfully")
            console.log(data);
            navigate('/student')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <>
      <Navbar/>

      <div className="flex gap-10 w-full min-h-screen `bg-gradient-to-br` from-gray-100 to-gray-200 px-6 py-8">
        <Side/>

        <div className="flex-1 flex justify-center items-start">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6">

            <h2 className="text-xl font-semibold text-gray-700 text-center mb-5">
              Add Teacher
            </h2>

            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>

              <div>
                <label className="text-xs text-gray-500 block mb-1">Name</label>
                <input
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
                  type="text"
                  name="name"
                  placeholder="Student name"
                  onChange={handleChange}
                  required
                />
              </div>


              <div>
                <label className="text-xs text-gray-500 block mb-1">Email</label>
                <input
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
                  type="email"
                  name="email"
                  placeholder="Email address"
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="text-xs text-gray-500 block mb-1">Age</label>
                <input
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
                  type="number"
                  name="age"
                  placeholder="Age"
                  onChange={handleChange}
                />
              </div>

              

              <div>
                <label className="text-xs text-gray-500 block mb-1">Gender</label>
                <input
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
                  type="text"
                  name="gender"
                  placeholder="Male/Female"
                  onChange={handleChange}
                />
              </div>

              

              <button
                type="submit"
                className="mt-4 bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-lg text-sm font-medium transition"
              >
                Add Teacher
              </button>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}


// export {AddTeacher}