import React from 'react'
import { useTranslation } from 'react-i18next';


const Footer = () => {
  const {t} = useTranslation();

  return (
    <>
<div className="container-fluid footer-bg ">
  <footer className="py-5  ">
    <div className="row">
      <div className="col-6 col-md-3 mb-3">
        <h5 className='footer-dark  fw-bold '>{t('footertext.1')}</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2 my-2"><a href="#a" className="nav-link p-0 footer-dark">{t('footertext.2')}</a></li>
          <li className="nav-item mb-2 my-2"><a href="#a" className="nav-link p-0 footer-dark">{t('footertext.3')}</a></li>
          <li className="nav-item mb-2 my-2"><a href="#a" className="nav-link p-0 footer-dark">{t('footertext.4')}</a></li>
          <li className="nav-item mb-2 my-2"><a href="#a" className="nav-link p-0 footer-dark">Email: demo@Yourstore.com</a></li>
        </ul>
      </div>
      <div className="col-6 col-md-3 mb-3">
        <h5 className='footer-dark'>{t('footertext.5')}</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 footer-dark">{t('footertext.6')}</a></li>
          <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 footer-dark">{t('footertext.7')}</a></li>
          <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 footer-dark">{t('footertext.8')}</a></li>
          <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 footer-dark">{t('footertext.9')}</a></li>
          <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 footer-dark">{t('footertext.10')}</a></li>
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3">
        <h5 className='footer-dark'>{t('footertext.11')}</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 footer-dark">{t('footertext.12')}</a></li>
          <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 footer-dark">{t('footertext.13')}</a></li>
          <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 footer-dark">{t('footertext.14')}</a></li>
          <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 footer-dark">{t('footertext.15')}</a></li>
          <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 footer-dark">{t('footertext.16')}</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5 className='footer-dark'>{t('footertext.17')}</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 footer-dark"><i class="fa-brands fa-facebook"></i> Facebook</a></li>
          <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 footer-dark"><i class="fa-brands fa-twitter"></i> Twitter</a></li>
          <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 footer-dark"><i class="fa-brands fa-youtube"></i> YouTube</a></li>
          <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 footer-dark"><i class="fa-brands fa-google-plus-g"></i> Google+</a></li>
          <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 footer-dark"><i class="fa-brands fa-pinterest-p"></i> Pinterest</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5 className='footer-dark'>{t('footertext.18')}</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 footer-dark">{t('footertext.19')}</a></li>
          <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 footer-dark">{t('footertext.20')}</a></li>
          <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 footer-dark">{t('footertext.21')}</a></li>
          <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 footer-dark">{t('footertext.22')}</a></li>
          <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 footer-dark">{t('footertext.23')}</a></li>
        </ul>
      </div>
   
    </div>

  </footer>
</div>

    
    
    
    
    </>
  )
}

export default Footer