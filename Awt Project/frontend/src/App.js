import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './header';
import Home from './home';
import Login from './Login';
import Signup from './signup';
import Booknow from './booknow';
import Mybookings from './mybookings';

function App() {
  const[addedCart,setAddedCart]=useState([]);
  
  const addedFun=(item)=>{
      let temp = [item];
      setAddedCart(temp);
  }
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/home" element={<Home purchaseItem = {addedFun}/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Signup/>}/>
        <Route path="/booknow" element={<Booknow purchaseItem = {addedCart}/>}/>
        <Route path="/mybookings" element={<Mybookings />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
