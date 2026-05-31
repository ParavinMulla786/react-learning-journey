import { useState } from 'react'

import './App.css'
import Student from './components/student'

function App() {


  return (
    <>
      <Student name="Paravin"
      branch="CSE" />
      <Student name="Veda"
      branch="CSE" />
      <Student name="Divya"
      branch="CSE" />
    </>
  )
}

export default App
