import React from 'react'
import "./Sidebar.css"
import { NavLink, Link } from "react-router-dom"
import { useDispatch } from 'react-redux'

function Siderbar() {
  const dispatch = useDispatch("")
  return (
    <div className='sidebar'>
      <h2>Uzum admin</h2>
      <ul className='sidebar_collection'>
        <li className='sidebar_item'>
          <NavLink to="/admin/create-product" className="sidebar_link" ><span>Create Product</span></NavLink>
        </li>
        <li className='sidebar_item'>
          <NavLink to="/admin/manage-product" className="sidebar_link" ><span>Manage Product</span></NavLink>
        </li>
        <button><Link to="/">Go to home</Link></button>
        <button onClick={() => dispatch({type:"LOG_OUT"})} >LOG OUT</button>
      </ul>
    </div>
  )
}

export default Siderbar
