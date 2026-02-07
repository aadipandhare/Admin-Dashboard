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
