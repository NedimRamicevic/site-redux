// admin dashboard component

import React from 'react'
import {Outlet } from 'react-router-dom'
import SideBar from '../components/sideBar'


function AdminDashboard() {
  return (
    <div className='adminDashboard h-full grid grid-cols-7'>
        <div className='sideBar col-span1'>
            <SideBar />
        </div>
        <div className="p-12 col-span-6 m-auto w-2/3 self-center">
            <Outlet />
        </div>
    </div>
  )
}
export default AdminDashboard
