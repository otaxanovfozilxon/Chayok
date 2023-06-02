import React, { useEffect, useState } from 'react'
import "./Product.css"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TO_CART } from "../../context/action/actionType"
import { Link } from 'react-router-dom'
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../../server'
import Loader from '../loader/Loader'

export const DATA = [
    {
        id: "pro-1",
        title: "Xurmo Handa",
        price: 16_000,
        url: "https://images.uzum.uz/cg9g7efhgiov1qieme2g/t_product_540_high.jpg#1679151861896"
    },

    {
        id: "pro-2",
        title: "Idish yuvish geli",
        price: 8_000,
        url: "https://images.uzum.uz/cg7bvmnhj8j9g699p9eg/t_product_540_high.jpg#1679214425825"
    },

    {
      id: "pro-3",
      title: "Kungaboqar yog'i",
      price: 16_000,
      url: "https://images.uzum.uz/cg644dfg49devoaa9nvg/t_product_540_high.jpg#1679214425832"
    },

    {
      id: "pro-4",
      title: "Xurmo",
      price: 22_000,
      url: "https://images.uzum.uz/cg63rsvg49devoaa9m00/t_product_540_high.jpg#1679214425834"
    },

    {
      id: "pro-5",
      title: "Tualet qog'ozi 8 dona",
      price: 19_000,
      url: "https://images.uzum.uz/cd1en3b5a95unf1241n0/t_product_540_high.jpg#1679214425836"
    },

    {
      id: "pro-6",
      title: "Sumalak",
      price: 12_000,
      url: "https://images.uzum.uz/cg6qsnnhj8j9g699n7jg/t_product_540_high.jpg#1679214425837"
    },

    {
      id: "pro-7",
      title: "Futbolka",
      price: 19_000,
      url: "https://images.uzum.uz/cg6435ng49devoaa9np0/t_product_540_high.jpg#1679214425839"
    },

    {
      id: "pro-8",
      title: "Palov qozani",
      price: 255_000,
      url: "https://images.uzum.uz/cg8opifg49devoaam8pg/t_product_540_high.jpg#1679225083728"
    },

    {
      id: "pro-9",
      title: "Chak-chak",
      price: 11_000,
      url: "https://images.uzum.uz/cg3ju1nhj8j9g699amsg/t_product_540_high.jpg#1679225083730"
    },

    {
      id: "pro-10",
      title: "Bolalar krossovkalari",
      price: 195_000,
      url: "https://images.uzum.uz/cg7ej0nhgiov1qiebn3g/t_product_540_high.jpg#1679225083737"
    }


    
]

function Product({admin}) {
  const heart = useSelector(s => s.heart)
  const dispatch = useDispatch()
  const [data, setData] = useState([])

  const productRef = collection(db, "products")
  const [Refresh, setRefresh] = useState(false)

  
  useEffect(()=> {
    const fetchData = async()=>{
      const getProducts = await getDocs(productRef)
      setData( getProducts.docs.map(item => ({ ...item.data(), id: item.id })) )

    }
    fetchData()
  }, [Refresh])


  const deleteProduct = async (id)=>{
    await deleteDoc(doc(db, "products", id))
    .then(res => setRefresh(!Refresh))
    .catch(res => console.log(res))
    console.log(id);
  }

  return (
    <div>
        <div className="product__wrapper">
          {
            !data.length && <Loader/>
          }
            {
                data?.map((item, inx)=><div className='product__card' key={inx}>
                    <div className="pro__card-img">
                      <Link to={`/product/${item.id}`} state={item}>
                        <img src={item.url} alt="" />
                        </Link>
                    </div>
                    <p className='pro__card-title'>{item?.title}</p>
                    <span className='pro__card-monthly'>{Math.round((item.price * 1.4) / 12)} so'm</span>
                    
                    <div className='pro__bottom'>
                        <div>
                            
                            <p className='pro__card-price'>{item?.price} so'm</p>
                        </div>
                        {
                          admin ?
                          <button onClick={()=> deleteProduct(item.id)} >Delete</button>
                          :
                          <div onClick={()=> dispatch({type: ADD_TO_CART, payload: item})} className='pro__cart' >
                          <AiOutlineShoppingCart/>
                        </div>
                        }
                    </div>
                </div> )
            }
        </div>
        
    </div>
  )
}

export default Product
