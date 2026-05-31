import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const[count,setcount]=useState(0);

const increament = ()=>{
  setcount(count+1);

};
const decreament =()=>{
 setcount(count-1);
};

const reset =()=>{
  setcount(0)
};
  return (
    <>
      <h1>CounterApp</h1>
      <h2>count:{count}</h2>
      <button onClick={increament}>Increament</button>
      <button onClick={decreament}>Decreament</button>
       <button onClick={reset}>Reset</button>
    </>
  );
}

export default App
