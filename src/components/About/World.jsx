import React, { useEffect } from 'react'
import world from '../../img/slide-image-caption-1.png'
import AOS from "aos";
import "aos/dist/aos.css";
const World = () => {
  useEffect(()=>{
    AOS.init({
      duration : 1000
    });
  },[]);
  return (
    <div className='container'>
        <div className="col-12">
           <span className='text-center my-5' data-aos={"flip-right"}>
             <img src={world}  className='w-100 d-block' alt="" />
             </span>
        </div>
    </div>
  )
}

export default World