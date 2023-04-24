import React, { useEffect } from 'react';
import about1 from '../../img/about1.webp';
import { useTranslation } from 'react-i18next';
import AOS from "aos";
import "aos/dist/aos.css";

const Brand = () => {
  const {t} = useTranslation();
  useEffect(()=>{
    AOS.init({
      duration : 1000
    });
  },[]);
  return (
    <>
<div className="container ">
<div className="row">
  <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
  <div data-aos={"zoom-in-right"}
   data-aos-duration={"3000"}>
  <img  src={about1} alt="" className='w-100 d-block' />
</div>


  </div>
  <div className="col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12"  data-aos={"zoom-in-left"}>
    <h2 className='brand'>{t('entertext.22')}</h2>
    <p className='title-bot'>{t('entertext.23')}</p>
  </div>
</div>
</div>

    
    </>
  )
}

export default Brand