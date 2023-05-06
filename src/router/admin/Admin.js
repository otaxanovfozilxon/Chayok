import React from 'react'
import "./Admin.css"
import Siderbar from '../../components/sidebar/Siderbar'
import CreateProduct from './create-product/CreateProduct'
import ManageProduct from './manage-product/ManageProduct'
import { Routes, Route } from 'react-router-dom'

function Admin() {
  return (
    <div className='admin'>
      <Siderbar />
      <div className='admin_content'>
        <Routes>
            <Route path='/create-product' element={<CreateProduct />} />
            <Route path='/manage-product' element={<ManageProduct />} />
        </Routes>
      </div>
    </div>
  )
}

export default Admin
