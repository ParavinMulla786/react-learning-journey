import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const[showtext,setShowtext] =useState(true);
   const handletoggle =()=>{

      setShowtext(!showtext)
    };
   
  return (
   
 <>
    <button onClick={handletoggle}>
     {showtext ? "hide" : "show" }
    </button>
    {showtext &&  <h1>Welcome to React</h1>}
      
    </>
  )
}

export default App
