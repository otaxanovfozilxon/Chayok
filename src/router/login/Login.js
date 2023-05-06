import React, { useState } from 'react'
import "./Login.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';

function Login() {
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch("")

  const handleLogin = ()=>{
    let newUser = {user,password}
    if( user === "Fozilxon" && password === "12345678" ){
      toast.success("Successfully log in")
      dispatch({type:"LOG_IN", payload:newUser})
    }else{
      toast.error("username or password is incorrect")
    }
  }
  return (
    <div className='container'>
        <div className="login">
            <h2>Telefon raqamini kiriting</h2><br />
            <p>Tasdiqlash kodni SMS orqali yuboramiz</p><br />
            <input required value={user} onChange={e => setUser(e.target.value)} type="text" placeholder='username' /><br /><br />
            <input required value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='password' /><br /><br />
            <button onClick={handleLogin}>Kodni olish</button><br />
            <h5>Parol bilan kirish</h5><br />
            <h6>Avtotizatsiyadan o'tish orqali siz <font>shaxsiy <br />
             ma'lumotlarni qayta ishlash siyosatiga rozilik <br />
             bildirasiz </font></h6>
        </div>
        <ToastContainer />
    </div>
  )
}

export default Login
