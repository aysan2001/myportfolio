import React, { useEffect } from 'react'
import mens from '../img/mens.webp'
import collection from '../img/collection.webp'
import collection2 from '../img/collection2.webp'
import { useTranslation } from 'react-i18next';
import AOS from "aos";
import "aos/dist/aos.css";


const Selection = () => {
  const {t} = useTranslation();
  useEffect(()=>{
    AOS.init({
      duration : 1000
    });
  },[])
  return (
    <>
    
    {/* <h1 className='text-center py-4'>Get 20% Off</h1> */}

    <div className="container-fluid mt-3">
    <h1 className='text-center py-4' data-aos={"zoom-in" }>{t('entertext.12')}</h1>
  <div className="row">
    <div className="col-4  ">
      <img src={mens} alt="" className='w-100 d-block' data-aos={"zoom-in" } />
     
      <div className="category-info">
              <div class="box-info">
                <p className="sub-title" data-aos={"fade-down"}
     data-aos-easing={"linear"}
     data-aos-duration={"1500"} >{t('entertext.13')}</p>
                <a href="/shop" className="title-collection">{t('entertext.14')}</a>
                
              </div>
            </div>

    </div>
    <div className="col-4 ">
    <img src={collection} alt="" className='w-100 d-block' data-aos={"zoom-in" } />
    <div className="category-info">
              <div class="box-info">
                <p className="sub-title"  data-aos={"fade-down"}
     data-aos-easing={"linear"}
     data-aos-duration={"1500"} >{t('entertext.13')}</p>
                <a href="/shop" className="title-collection">{t('entertext.15')}</a>
                
              </div>
            </div>
    </div>
    <div className="col-4 ">
    <img src={collection2} alt="" className='w-100 d-block' data-aos={"zoom-in" }/>
    <div className="category-info">
              <div class="box-info">
                <p className="sub-title"  data-aos={"fade-down"}
     data-aos-easing={"linear"}
     data-aos-duration={"1500"} >{t('entertext.13')}</p>
                <a href="/shop" className="title-collection">{t('entertext.16')}</a>
                
              </div>
            </div>

    </div>
  </div>
</div>



    
    </>
  )
}

export default Selection