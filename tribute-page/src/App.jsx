import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import './components/Header.css'
import Home from './components/Home'
import './components/Home.css'

function App() {
 return(
    <div className='container'>
        <div className='header'>
  <Header/>
  </div>
  <div className='home'>
    <Home/>
  </div>
  </div>
 )}

export default App
