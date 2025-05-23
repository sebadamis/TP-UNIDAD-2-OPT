import React from 'react'
import './global.css'
import { Route, Routes } from 'react-router'

import NavBar from './components/NavBar/NavBar'

import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import Login from './Pages/Login/Login'
import CreateProduct from './Pages/CreateProduct/CreateProduct'





function App() {


  return (
    <>

        <NavBar/>

        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/products/:prod_id' element={<ProductDetail/>}/>
          <Route path='/login' element={<Login/>}/>

          {/* <Route path='/ProductDetail' element={<ProductDetail/>}/> */}
          <Route path='/crearproducto' element={<CreateProduct/>}/>

        </Routes>

    </>
  )
}

export default App
