import { useState } from 'react'
import { Routes, Route } from 'react-router'
import Home from './components/Home'
import Login from './components/Login'
import Marketplace from './components/Marketplace'
import Company from './components/Company'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header />
      
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/marketplace' element={<Marketplace />} />
          <Route path='/company' element={<Company />} />
      </Routes>
    </>
  )
}

export default App
