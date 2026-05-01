import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './component/Header'
import Gallery from './component/Gallery'
import Aboutus from './component/Aboutus'
import Maincharacters from './component/Maincharacters'
import GadgetSection from './component/GadgetSection';
import Footer from './component/footer';



function App() {
  
  return (

<>
    <Header />
      <Aboutus />
      <Maincharacters />
      <GadgetSection/>
      <Gallery />
      <Footer/>
    
</>
    
   
  )
}

export default App
