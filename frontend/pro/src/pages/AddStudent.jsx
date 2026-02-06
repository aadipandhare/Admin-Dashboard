// import React,{useState, useEffect} from 'react'
// import { Navbar } from './../components/Navbar';
// import { Side } from './../components/Side';

// export const AddStudent = () => {


//     const [formData,setFormData] = useState({
//         name:"",
//         age:"",
//         email:"",
//         stream:"",
//         grade:""
//     })

//     const handleChange=(e)=>{
//         setFormData({
//             ...formData,
//             [e.target.name] : e.target.value
//         })
//     }
//     const handleSubmit= async ()=>{
//         e.preventDefault();

//         try {
//             fetch("http://localhost:4000/student/post"),
//             {method : "POST",
//                 headers :{
//                     "Content-Type" : "application/json"
//                 },
//                 body : JSON.stringify(formData)
//             }

//             const data = await response.json();
//             alert("Added Succesfully")
//             console.log(data);

//         } catch (error) {
//             console.log(error.message)
//         }
//     }
//   return (
//     <>
//     <Navbar/>
//      <div className='flex gap-10 w-full items-start mt-'>
//         <Side/>
        
//         <div className='justify-center items-center'>
//             <p className='flex justify-center mt-5 text-3xl font-medium text-gray-500'>ADD Student Information</p>
//         </div>
        

//   <div className='flex justify-center mt-5 items-center '>
    
//     <form className='flex flex-col justify-between border border-gray-500 px-4 py-3' onSubmit={handleSubmit}>
//       <label>Name</label>
//       <input 
//        className='border border-gray-800 rounded-full px-2 py-0.5'
//         type="text"
//         name="name"
//         placeholder="Name"
//         onChange={handleChange}
//         required
//       />

//       <label>Age</label>
//       <input
//        className='border border-gray-800 rounded-full px-2 py-0.5'
//         type="number"
//         name="age"
//         placeholder="age"
//         onChange={handleChange}
//       />


//       <label>Email : </label>
//       <input 
//         className='border border-gray-800 rounded-full px-2 py-0.5'
//         type="email"
//         name="email"
//         placeholder="Email"
//         onChange={handleChange}
//         required
//       />

//       <label>Stream</label>
//       <input
//        className='border border-gray-800 rounded-full px-2 py-0.5'
//         type="text"
//         name="stream"
//         placeholder="stream"
//         onChange={handleChange}
//       />

//       <label>Grade</label>
//       <input
//        className='border border-gray-800 rounded-full px-2 mb-2 py-0.5'
//         type="text"
//         name="grade"
//         placeholder="Grade"
//         onChange={handleChange}
//       />

//       <button  className='bg-gray-700 border mt-2 border-gray-500 rounded-full text-white px-3 py-2 font-light ' type="submit" >Add Student</button>
//     </form>
//       </div>
//     </div>
//     </>
//   )
// }


// export {AddStudent}


import React,{useState, useEffect} from 'react'
import { Navbar } from './../components/Navbar';
import { Side } from './../components/Side';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export const AddStudent = () => {

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
            [e.target.name] : e.target.value,
        })
    }

    const handleSubmit= async (e)=>{
        e.preventDefault();

        try {

            const response = await fetch("http://localhost:4000/student/post",
            {method : "POST",
                headers :{
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(formData)
            })

            const data = await response.json();
            
            toast.success("Student Added Successfully")
            console.log(data);

            navigate('/student')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <>
      <Navbar/>

      <div className="flex gap-10 w-full min-h-screen text-gray-700 ">
        <Side/>

        <div className="flex-1 flex justify-center items-start">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6 mt-5">

            <h2 className="text-xl font-semibold text-gray-700 text-center mb-5">
              Add Student
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
                <label className="text-xs text-gray-500 block mb-1">Stream</label>
                <input
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
                  type="text"
                  name="stream"
                  placeholder="Science / Arts / Commerce"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="text-xs text-gray-500 block mb-1">Grade</label>
                <input
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
                  type="text"
                  name="grade"
                  placeholder="Grade"
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="mt-4 bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-lg text-sm font-medium transition"
              >
                Add Student
              </button>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}

