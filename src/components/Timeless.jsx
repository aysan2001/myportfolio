import { Link } from 'react-router-dom';
import foto8 from '../img/foto8.jpg';
import foto9 from '../img/foto9.webp';
import { useTranslation } from 'react-i18next';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


const Timeless = () => {
  const {t} = useTranslation();
  useEffect(()=>{
    AOS.init({
      duration : 1000
    });
  },[]);
  return (
   <>
   <div className="container mt-5 mb-5 ">
    <div className="row">
      <div className="col-12 col-md-4"  data-aos={"zoom-in-right"}>
        <img src={foto8} alt="" className='w-100 d-block' />
      </div>
      <div className="col-12 col-md-4" data-aos={"fade-up"}
     data-aos-duration={"3000"}>
<div className="banner-center">
  <p className="title-top">{t('entertext.17')}</p>
  <h3 className="title">{t('entertext.18')}</h3>
  <p className="title-bot">{t('entertext.19')}</p>
  <Link to="/product" className="button-shop">{t('entertext.20')}</Link>
</div>

      </div>
      <div className="col-12 col-md-4"  data-aos={"zoom-in-left"}>
        <img src={foto9} alt="" className='w-100 d-block' />
      </div>

    </div>
   </div>
   
   
   
   </>
  )
}

export default Timeless