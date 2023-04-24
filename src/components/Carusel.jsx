import React, { useEffect } from 'react'
import foto1 from '../img/foto1.jpg';
import foto2 from '../img/foto2.jpg';
import foto3 from '../img/foto3.jpg';
import { useTranslation } from 'react-i18next';
import AOS from "aos";
import "aos/dist/aos.css";



const Carusel = () => {
  const {t} = useTranslation();

  useEffect(()=>{
    AOS.init({
      duration : 1000
    });
  },[])

  return (
    <>
    
<div id="carouselExampleCaptions" className="carousel slide"  data-aos={"flip-left"}
     data-aos-easing={"ease-out-cubic"}
     data-aos-duration={"2000"}   data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active yumru" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2 " className=" yumru"/>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3 " className=" yumru" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={foto1} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block" >
      <h1 className='text-color '  data-aos={"flip-left"}
     data-aos-easing={"ease-out-cubic"}
     data-aos-duration={"2000"}>{t('entertext.5')}</h1>
        <h5 className='text-dark'>{t('entertext.6')}</h5>
        <p className='text-dark'>{t('entertext.7')}</p>
        {/* <p className='text-dark'>Milan artisans in Milan </p> */}

      </div>
    </div>
    <div className="carousel-item" >
      <img src={foto2} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
      <h1 className='text-color'>{t('entertext.5')}</h1>
      <h5 className='text-dark'>{t('entertext.6')}</h5>
      <p className='text-dark'>{t('entertext.8')}</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={foto3} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
      <h1 className='text-color'>{t('entertext.5')}</h1>
      <h5 className='text-dark'>{t('entertext.6')}</h5>
      <p className='text-dark'>{t('entertext.8')}</p>

      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    
    
    </>
  )
}

export default Carusel