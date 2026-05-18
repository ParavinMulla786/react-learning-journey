import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Products from './Components/Products'
import Users from './Components/Users'

import Recipes from './Components/Recipes'

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Products />}></Route>
      <Route path='/users' element={<Users />}></Route>
      <Route path='/Recipes' element={<Recipes />}></Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App