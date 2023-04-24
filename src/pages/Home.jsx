import React from 'react'
import Hero from '../components/Hero'
import Selection from '../components/Selection'
import Timeless from '../components/Timeless'
import Carusel from '../components/Carusel'
import Luxiorius from '../components/Luxiorius'
import ScrollToTop from "react-scroll-to-top";



const Home = () => {
  return (
    <div>
  
      <Carusel />
      <Hero />
      <Selection />
      <Luxiorius />
      <Timeless />
    
      {/* <div style={{ marginTop: "150vh" }} /> */}
      <ScrollToTop smooth color="#3e9f8e"/>
    </div>
    
  )
}

export default Home