import React from 'react'
import Empty from '../../components/empty/Empty'
import { AiOutlineShoppingCart, AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TO_HEART, REMOVE_FROM_HEART } from "../../context/action/actionType"

function Wishlist() {
  const heart = useSelector(s => s.heart)
  const dispatch = useDispatch()
  return (
    <div className='container'>
      {
        heart.length === 0 ?
      <Empty 
      url="https://uzum.uz/static/img/hearts.cf414be.png"
      title="Sizga yoqqanini qoʻshing"
      desc="Mahsulotdagi ♡ belgisini bosing. Akkauntga kiring va barcha saralanganlar saqlanib qoladi"
      btn="Akkauntga kirish"
      /> 
       :
      <div className='product__wrapper' style={{justifyContent:"flex-start"}}>
        {
                heart?.map((item, inx)=><div className='product__card' key={inx}>
                    <div className="pro__card-img">
                        <img src={item.url} alt="" />
                    </div>
                    <p className='pro__card-title'>{item?.title}</p>
                    <span className='pro__card-monthly'>{Math.round((item.price * 1.4) / 12)} so'm</span>
                    
                    <div className='pro__bottom'>
                        <div>
                            <del>{item.price * 1.2} so'm</del>
                            <p className='pro__card-price'>{item?.price}</p>
                        </div>
                        <div className='pro__cart'>
                          <AiOutlineShoppingCart />
                        </div>
                        <div className="pro_heart">
                        {
                            heart?.some(i => i.id === item.id) ?
                            <AiFillHeart onClick={() => dispatch({type: REMOVE_FROM_HEART, payload: item})} />
                            :
                          <AiOutlineHeart onClick={()=> dispatch ({type: ADD_TO_HEART, payload: item}) } />
                          }
                        </div>
                    </div>
                </div> )
            }
      </div>
      }
    </div>
  )
}

export default Wishlist
