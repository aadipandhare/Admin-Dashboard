// import React from 'react'
// import {NavLink} from 'react-router-dom'

// export const Side = () => {
//   return (
//     <div className='w-[18%] min-h-screen border-r-2 border-gray-300'>
//         <div className='flex flex-col gap-4 pt-5 pl-[20%] text-[15px]'>

//             <NavLink  className='flex item-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg' to='/student'>
//               <p>Student</p>
//             </NavLink>

//             <NavLink  className='flex item-center border border-gray-300 border-r-0 px-3 py-2' to='/teacher'>
//                 <p>Teacher</p>
//             </NavLink>
//         </div>
//     </div>
//   )
// }


import React from 'react'
import { NavLink } from 'react-router-dom'


export const Side = () => {
  return (
    <div className="w-48 min-h-screen bg-linear-to-br from-cyan-900 via-cyan-800 to-cyan-700 text-slate-200">
      <div className="flex flex-col gap-2 pt-8 px-4 bg-linear-to-b">


      <NavLink
          to="/home"
          className={({ isActive }) =>
            `px-4 py-3 rounded-md transition-all
             ${isActive 
              ? 'bg-blue-600 text-white shadow-md no-underline' 
              : 'hover:bg-slate-800 text-slate-300'}`
          }
        >
          Home
        </NavLink>
        
      

        <NavLink
          to="/student"
          className={({ isActive }) =>
            `px-4 py-3 rounded-md transition-all
             ${isActive 
              ? 'bg-blue-600 text-white shadow-md' 
              : 'hover:bg-slate-800 text-slate-300'}`
          }
        >
          Student
        </NavLink>

        <NavLink
          to="/teacher"
          className={({ isActive }) =>
            `px-4 py-3 rounded-md transition-all
             ${isActive 
              ? 'bg-emerald-600 text-white shadow-md' 
              : 'hover:bg-slate-800 text-slate-300'}`
          }
        >
          Teacher
        </NavLink>

      </div>
    </div>
  )
}
