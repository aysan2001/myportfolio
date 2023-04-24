import React, { useEffect } from 'react'
import foto4 from '../img/foto4.jpg'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const {t} = useTranslation();
  
  useEffect(()=>{
    AOS.init({
      duration : 1000
    });
  },[]);
  return (
    <>
    
<div className="container col-xxl-8 px-4 py-5" >
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
  
    <div className="col-lg-6" data-aos={"fade-left" }>
      <h6 className="display-5 fw-bold lh-1 mb-3">{t('entertext.9')}</h6>
      <h2 className="display-5 text-color fw-bold lh-1 mb-3">{t('entertext.10')}</h2>
      <p className="lead ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, ullam facilis necessitatibus quasi nesciunt incidunt illo aliquam repellat asperiores possimus optio voluptate, odit quod maxime perferendis tenetur qui quidem. Deleniti dicta ad voluptatem maxime id assumenda omnis expedita et pariatur odio a vitae nemo, aliquid aperiam veritatis quae, odit quisquam? </p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
      <Link to="/product">  <button type="button" className="btn button-shop px-4 me-md-2">{t('entertext.11')}</button></Link>
      </div>
    </div>

    <div className="col-10 col-sm-8 col-lg-6"  data-aos={"flip-left"}
     data-aos-easing={"ease-out-cubic"}
     data-aos-duration={"2000"} >
      <img src={foto4} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={400} height={100} loading="lazy" />
    </div>

  </div>
</div>

    
    </>
  )
}

export default Hero