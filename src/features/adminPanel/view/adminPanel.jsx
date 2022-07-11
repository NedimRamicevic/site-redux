// admin dashboard component

import React from 'react'
import { Link } from 'react-router-dom'
import SideBar from '../components/sideBar'
import AddPage from '../components/addPage'
import AddComponent from '../components/addComponent'

function AdminDashboard() {
  return (
    <div className='adminDashboard h-full grid grid-cols-7'>
        <div className='sideBar col-span1'>
            <SideBar />
        </div>
        <div className="p-12 col-span-6 self-center">
            <div className="grid grid-cols-2 gap-10 items-center">
                <AddPage />
                <AddComponent />
            </div>
        </div>
    </div>
  )
}
export default AdminDashboard
