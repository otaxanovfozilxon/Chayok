import React from 'react'
import "../Admin.css"
import Product from '../../../components/product/Product'

function ManageProduct() {
  return (
    <div>
      <h2>Manage Product</h2>
      <Product admin={true} />
    </div>
  )
}

export default ManageProduct
