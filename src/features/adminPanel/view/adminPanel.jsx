// admin dashboard component

import React from 'react'
import { Link } from 'react-router-dom'
import AddCategory from '../components/addCategory'
import AddProduct from '../components/addProduct'
import SideBar from '../components/sideBar'


function AdminDashboard() {
  return (
    <div className='adminDashboard h-full '>
        <div className='sideBar '>
            <SideBar />
        </div>
    </div>
  )
}
export default AdminDashboard
