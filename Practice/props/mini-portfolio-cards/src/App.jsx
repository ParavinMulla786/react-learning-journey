import { useState } from 'react'

import './App.css'
import Skills from './Components/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Skills skill= "HTML"/>
     <Skills skill= "CSS"/>
     <Skills skill= "JS"/>
     <Skills skill= "NodeJS"/>
     <Skills skill= "ExpressJS"/>
     <Skills skill= "MYSQL"/>
     <Skills skill= "MongoDB"/>
     
     
    </>
  )
}

export default App
