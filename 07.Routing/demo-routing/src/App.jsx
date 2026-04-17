import { useState } from 'react'
import { Routes, Route, Link, NavLink } from 'react-router'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import NotFound from './components/NotFound'
import City from './components/City'
import Redirect from './components/Redirect'
import style from './components/App.module.css'

function App() {

  return (
    <>
      <h1>React Router</h1>
      
      <nav>
        <NavLink className={({isActive}) => isActive ? style['selected-item'] : {}} to='/'>Home</NavLink>
        <NavLink className={({isActive}) => isActive ? style['selected-item'] : {}} to='/about'>About</NavLink>
        <NavLink></NavLink>
      </nav>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/cities/:city' element={<City />} />
        <Route path='/redirect' element={<Redirect />} />
      </Routes>
    </>
  );
}

export default App
