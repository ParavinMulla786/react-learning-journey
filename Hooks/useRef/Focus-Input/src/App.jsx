import { useState , useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App(){
const inputref = useRef();

function handlefocus(){
  inputref.current.focus();
}


  return (
    <>

      <input ref={inputref} type="text" />
      
      <button onClick={handlefocus}>
        Focus Input
      </button>
    </>
  )
}

export default App
