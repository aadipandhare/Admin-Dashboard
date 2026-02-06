import React from 'react'
import { Navbar } from './Navbar'
import { Side } from './Side'
import { assets } from './../assets/assets.js'
import { useNavigate } from 'react-router-dom';

export const Home = () => {

  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex w-full">
        <Side />

        {/* Main Content */}
        <div className="flex-1 p-6">

          {/* Admin Card */}
          <div className="flex items-center gap-5 bg-linear-to-br from-cyan-900 via-cyan-800 to-cyan-700 text-white px-6 py-4 rounded-2xl shadow-md">
            <img
              className="w-20 h-20 rounded-full border-2 border-white"
              src={assets.human}
              alt="admin"
            />
            <div>
              <h1 className="text-xl font-semibold text-gray-300">Aditya Pandhare</h1>
              <p className="text-sm text-slate-200">Administrator</p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-6 ">

            <div className="bg-linear-to-br from-gray-700 via-gray-600 to-gray-500 rounded-xl shadow p-5 text-gray-300">
              <p className="text-sm text-gray-200">Total Students</p>
              <h2 className="text-2xl font-bold text-gray-100 mt-1">120</h2>
            </div>

            <div className="bg-linear-to-br from-gray-700 via-gray-600 to-gray-500 rounded-xl shadow p-5 text-gray-300">
              <p className="text-sm text-gray-200">Total Teachers</p>
              <h2 className="text-2xl font-bold text-gray-700 mt-1">18</h2>
            </div>

            <div className="bg-linear-to-br from-gray-700 via-gray-600 to-gray-500 rounded-xl shadow p-5 text-gray-300">
              <p className="text-sm text-gray-200">Active Users</p>
              <h2 className="text-2xl font-bold text-blue-700 mt-1">138</h2>
            </div>

            <div className="bg-linear-to-br from-gray-700 via-gray-600 to-gray-500 rounded-xl shadow p-5 text-green-600">
              <p className="text-sm text-gray-200">System Status</p>
              <h2 className="text-lg font-semibold text-gray-500 mt-1">
                Running
              </h2>
            </div>

          </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">
              Quick Actions
            </h2>

            <div className="flex gap-4">
              <button onClick={()=>navigate('/addStudent')} className="bg-blue-700 hover:bg-blue-600 text-white px-5 py-2 rounded- shadow">
                Add Student
              </button>

              <button onClick={()=>navigate('/addTeacher')} className="bg-emerald-700 hover:bg-emerald-600 text-white px-5 py-2 rounded-lg shadow">
                Add Teacher
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-8 bg-linear-to-br from-gray-700 via-gray-600 to-gray-500 rounded-xl shadow p-5 text-gray-100">
            <h2 className="text-lg font-semibold text-gray-400 mb-3">
              Recent Activity
            </h2>

            <ul className="text-sm text-gray-300 space-y-2">
              <li>• New student registered</li>
              <li>• Teacher profile updated</li>
              <li>• Admin logged in</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}
