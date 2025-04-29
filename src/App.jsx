import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Product from './Pages/Product'
import Cart from './Pages/Cart'

import ProductDetail from './Pages/ProductDetail'
import Login from './Pages/Login'
import Signup from './Pages/Signup'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
