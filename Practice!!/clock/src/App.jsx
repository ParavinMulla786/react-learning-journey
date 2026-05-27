import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Title from './component/Title'
import Slogan from './component/Slogan'
import CurrentTime from './component/CurrentTime'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 

  return (
    <center>
      <Title/> 
      <Slogan/>
      <CurrentTime/>
    </center>
  )
}

export default App
