import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [showpassword, setShowpassword] = useState(false)

  return (
    <>
      <h1>Show/Hide Password</h1>
      <input type= {showpassword ? "text" : "password"}
      value="123456"
      readOnly
      />


      <br />
      <br />

      <button onClick={() => setShowpassword(!showpassword)}>
        {showpassword ? "Hide Password" : "Show Password"}
      </button>

    </>
  )
}

export default App
