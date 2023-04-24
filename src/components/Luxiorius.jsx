import React, { useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ins1 from '../img/instagram1.webp'
import ins2 from '../img/instagram2.webp'
import ins3 from '../img/instagram3.webp'
import ins4 from '../img/instagram4.webp'
import ins5 from '../img/instagram5.webp'
import ins6 from '../img/instagram6.webp'
import { useTranslation } from 'react-i18next';
import AOS from "aos";
import "aos/dist/aos.css";




const Luxiorius = () => {
  const {t} = useTranslation();

  useEffect(()=>{
    AOS.init({
      duration : 1000
    });
  },[]);


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };



    // const responsive = {
    //     desktop: {
    //         breakpoint: { max: 3000, min: 1024 },
    //         items: 3,
    //         slidesToSlide: 3 // optional, default to 1.
    //       },
    //       tablet: {
    //         breakpoint: { max: 1024, min: 464 },
    //         items: 2,
    //         slidesToSlide: 2 // optional, default to 1.
    //       },
    //       mobile: {
    //         breakpoint: { max: 464, min: 0 },
    //         items: 1,
    //         slidesToSlide: 1 // optional, default to 1.
    //       }
    //   };
     
  return (
    <>

<div className="col-12 luxim">
  <h1 className='text-center my-4' data-aos={"flip-left"}
     data-aos-easing={"ease-out-cubic"}
     data-aos-duration={"2000"}> <a href="https://www.instagram.com/"className='instagram' > {t('entertext.21')}</a></h1>
      <Carousel responsive={responsive}>
        <div ><img src={ins1} className='luxi' alt="" /></div>
        <div><img src={ins2} className='luxi' alt="" /></div>
        <div ><img src={ins3} className='luxi' alt="" /></div>
        <div ><img src={ins4} className='luxi' alt="" /></div>
        <div ><img src={ins5} className='luxi' alt="" /></div>
        <div><img src={ins6} className='luxi' alt="" /></div>        
      </Carousel>;


</div>

    
    
    </>
  )
}

export default Luxiorius

