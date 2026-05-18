import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkmode] = useState(false);
  const [name, setName] = useState("");

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#111" : "#fff",
        color: darkMode ? "#fff" : "#111",
        height: "100vh",
        padding: "20px",
        transition: "0.3s"
      }}
    >
      <h1>Counter App</h1>

      <button onClick={() => setDarkmode(!darkMode)}>
        Toggle Dark Mode
      </button>

      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <br /><br />

      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h3>Hello {name}!!!</h3>
    </div>
  )
}

export default App