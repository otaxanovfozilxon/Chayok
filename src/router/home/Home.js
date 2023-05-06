import React from 'react'
import Banner from '../../components/banner/Banner'
import Product from "../../components/product/Product"

function Home() {
  return (
    <div>
        <div className="container">
          <Banner />
          <div className="container">
          <Product admin={false} />
          </div>
      </div>
    </div>
  )
}

export default Home
