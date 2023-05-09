import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './router/home/Home';
import Wishlist from './router/wishlist/Wishlist';
import Cart from './router/cart/Cart';
import Login from "./router/login/Login"
import SingleRouter from "./router/SingleRouter/SingleRouter"
import Admin from './router/admin/Admin';
import { useSelector } from 'react-redux';
import Footer from './components/footer/Footer';


function App() {
  const auth = useSelector(s => s.auth)
  console.log(auth);
  
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart' element={<Cart />} />
        {
          auth ?
          <Route path='/login' element={<Navigate to={"/admin/*"} replace />} />
          :
          <Route path='/admin/*' element={<Navigate to={"/login"} replace />} />
        }
        <Route path='/login' element={<Login />} />
        <Route path='/admin/*' element={<Admin />} />
        <Route path='/product/:id' element={<SingleRouter />} />
        <Route path='*' element={<h1 className='not__found'>404</h1>} />
      </Routes>

      <Footer />

      <div className="container">
      
      </div>
    </div>
  );
}

export default App;
