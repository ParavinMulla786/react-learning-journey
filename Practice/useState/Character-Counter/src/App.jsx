import { useState } from 'react'

import './App.css'

function App() {
  const[text,setText] = useState("");
  const[age,setAge] = useState("")

  return (
    <>
     
      <input type="text" 
      placeholder='enter text'
      value={text}
      onChange={(e) => setText(e.target.value)}
      />
      

       <input
        type="number"
        placeholder="Enter your age"
        value={age}
        onChange={(event) => setAge(event.target.value)}
      />

      <h2>Charecters : {text.length}</h2>
      <h3>{text}</h3>
      <h3>{text.toUpperCase()}</h3>
      <h3>Age :{age}</h3>
    </>
  );
}

export default App
