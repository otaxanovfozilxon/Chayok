  import React from 'react'
  import { useParams, useLocation } from "react-router-dom"
  import { useSelector, useDispatch } from 'react-redux'
  import "./SingleRouter.css"
  import { ADD_TO_CART, REMOVE_FROM_CART, ADD_TO_HEART, REMOVE_FROM_HEART } from '../../context/action/actionType'
  import {AiFillHeart, AiOutlineHeart, AiOutlineShoppingCart} from "react-icons/ai"

  // Import Swiper React components
  import { Swiper, SwiperSlide } from "swiper/react";

  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";

  import "./styless.css";

  // import required modules
  import { Navigation } from "swiper";


  function SingleRouter() {
      const oneItem = useLocation()?.state
      const heart = useSelector(s => s.heart)

      const dispatch = useDispatch()

      
      if(!oneItem){
          return <div style={{textAlign:"center"}}>
              <h1>404</h1>
              <p>Mahsulot topilmadi</p>
          </div>
      }


    return (
      <div className='container'>
        <div className="single">

  <div className="left">
    <div className="rasm">
    <img src={oneItem?.url} width={100} alt="" />
    <img src={oneItem?.url} width={100} alt="" />
    <img src={oneItem?.url} width={100} alt="" />
    <img src={oneItem?.url} width={100} alt="" />
    </div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <div className='chap'>
        <SwiperSlide>
        <img src={oneItem?.url} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={oneItem?.url} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={oneItem?.url} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={oneItem?.url} alt="" />
        </SwiperSlide>
        </div>
          <div className="ong">
          <SwiperSlide>
        <img src={oneItem?.url}  alt="" />
          </SwiperSlide>
        </div>
        </Swiper>
        </div>
        <div className="right">
        <h2>{oneItem?.title}</h2>
        
        <p className='heart'>Sevimliga qo'shish {
                            heart?.some(i => i.id === oneItem.id) ?
                            <AiFillHeart onClick={() => dispatch({type: REMOVE_FROM_HEART, payload: oneItem})} />
                            :
                          <AiOutlineHeart onClick={()=> dispatch ({type: ADD_TO_HEART, payload: oneItem}) } />
                          } </p>
        <hr />
        <div className="part2">
        
          <div className="narx">
          <p>Narx:</p>
          <div className="v">
          <p className='pv'>{oneItem?.price} so'm</p>
          </div>
          </div>
      <div className="about">
        <h3>Mahsulot haqida</h3>
        <p>{oneItem?.about}</p>
      </div>
      
  <div className="gul">
      <button className='qwe' onClick={()=> dispatch({type: ADD_TO_CART, payload: oneItem})}>Savatga qo'shish</button>
      </div>
      </div>
        </div>
        </div>
      



      
      </div>
    )
  }

  export default SingleRouter
