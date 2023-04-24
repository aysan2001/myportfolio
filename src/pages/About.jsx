import React from 'react'
import Brand from '../components/About/Brand'
import Timeless from '../components/Timeless'
import World from '../components/About/World'
import ScrollToTop from "react-scroll-to-top";
const About = () => {
  return (
<>
<World />
<Brand />
 <Timeless />
 <ScrollToTop smooth color="#3e9f8e"/>
</>

  )
}

export default About