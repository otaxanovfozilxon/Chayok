import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Empty from '../../components/empty/Empty'
import { ADD_TO_CART, REMOVE_FROM_CART, DECREMENT_FROM_CART, REMOVE_ALL_FROM_CART } from '../../context/action/actionType'
import "./Cart.css"
import { BsFillTrashFill } from "react-icons/bs"

const BOT_TOKEN = "6174098068:AAHb4eJHk5AbTo-8VkZrvIrGF2ixRu8aAQ8"
const CHAT_ID = "-788641593"

// CHAT_ID
// https://api.telegram.org/bot6212058636:AAFXNvAWt09X10TjXulkQCMNN8WpC3bPUuU/getUpdates

// xabar yuborish
// https://api.telegram.org/bot[your_token]/sendMessage?chat_id=[your chat_id]

function Cart() {
  const cart = useSelector(s => s.cart)
  const dispatch = useDispatch()

  // useState yordamida qiymat olsak - Controlled form
  const [name, setName] = useState("")

  const handleSubmitMsg = () => {
    let text = ""
    text += `Ismi: <b>${name}</b> %0A`
    text += `Tel: <b>${tel.current.value}</b> %0A`
    text += `Manzil: <b>${address.current.value}</b> %0A%0A`

    cart?.forEach(item => {
      text += `Nomi: ${item.title} %0A`
      text += `Narxi: ${item.price} %0A`
      text += `Miqdori: ${item.quantity} %0A%0A`
    })
    text += `Jami: ${cart?.reduce((a, b) => a + (b.price * b.quantity), 0)}`

    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`

    let api = new XMLHttpRequest()
    api.open("GET", url, true)
    api.send()
    dispatch({ type: REMOVE_ALL_FROM_CART })
  }

  // useRef yordamida qiymat olsak - Uncontrolled form
  const tel = useRef()
  const address = useRef()

  return (
    <div>
      {!cart.length ? (
        <Empty
          url="https://uzum.uz/static/img/shopocat.8cee444.png"
          title="Savatda hozircha mahsulot yoʻq"
          desc="Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni qidiruv orqali toping"
          btn="Bosh sahifa"
        />
      ) : (
        <div className='container'>
          <p>Savatingiz,</p>
          <p>Siz harid qilmoqchi bo'lgan mahsulotlar</p>
          <div className="choy">
            <div className="border">
              <div className="bosh">
                <p>Sizning mahsulotlaringiz</p>
                <div className="first">
                  <p>Yetkazib berish xizmati mavjud</p>
                </div>
              </div>
              <hr className='hr' />
              {cart?.map((item, inx) => (
                <div key={inx}>
                  <div className="cart">
                    <div className="main">
                      <img src={item?.url} width={120} alt="" />
                      <div className="trash">
                        <p className='item'>{item?.title}</p>
                        <p className='quti' onClick={() => dispatch({ type: REMOVE_FROM_CART, payload: item })}>
                          <BsFillTrashFill />Trash
                        </p>
                      </div>
                    </div>
                    <div className="son">
                      <p>Sotuvchi: Chayok.uz</p>
                      <div className="btn">
                        <button className='minus' onClick={() => {
                          if (item?.quantity > 1) {
                            dispatch({ type: DECREMENT_FROM_CART, payload: item });
                          } else {
                            dispatch({ type: REMOVE_FROM_CART, payload: item });
                          }
                        }}>-</button>
                        <span>{item?.quantity}</span>
                        <button className='plus' onClick={() => dispatch({ type: ADD_TO_CART, payload: item })}>+</button>
                      </div>
                      <p className='som'>{item?.price}</p>
                    </div>
                  </div>
                  <br />
                  <br />
                  <hr className='hr' />
                </div>
              ))}
            </div>

            {/* partttttttttttttttttttt 2222222222 */}

            <div className="kichik">
              <div className="div">
                <p>Yetkazib berish xirmati bor</p>
              </div><br />
              <hr /><br />
              <div className="inp">
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Ismingiz' /><br /><br />
                <input ref={tel} type="number" placeholder='Telefon raqamingiz' /><br /><br />
                <input ref={address} type="text" placeholder='Manzilingiz' /><br /><br />
              </div>
              <div className="finish">
                <div className="jami">
                  <p>Jami:</p>
                  <h3>{cart?.reduce((a, b) => a + (b.price * b.quantity), 0)} so'm</h3>
                </div>
                <button className='on' onClick={handleSubmitMsg}>Buyurma berish</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
