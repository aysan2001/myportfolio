import React from 'react'
import {  Link, NavLink } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import { useWishlist } from 'react-use-wishlist';
import { useTranslation } from 'react-i18next';

import img1 from '../img/instagram6.webp'



const Nav = () => {
  const { t } = useTranslation();
  const {totalItems} = useCart();
  const {totalWishlistItems} = useWishlist();
  
  
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const email = localStorage.getItem('userEmail');
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    window.location.reload();

  };
  

  return (
    <>
    {/* <div className="container"> */}
<nav className="navbar navbar-expand-lg  border-top py-4">
  <div className="container-fluid">
  <a className="navbar-brand text-color" href="/">JEWELRY</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
        <li className="nav-item ">
          <NavLink className="nav-link ms-4 " aria-current="page" to="/">{t('entertext.1')}</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link ms-4" to="/about">{t('entertext.2')}</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link ms-4"to="/product">{t('entertext.3')}</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link ms-4" to="/contact">{t('entertext.4')}</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link ms-4" to="/blogs">Blog</NavLink>
        </li>
      </ul>

      <div className="col-md-4 text-end d-flex align-items-center  justify-content-center ">


      <div className="lll">
              {isLoggedIn && email ? (

                <div className="test">
                  <div className="dropdown">
                    <button className="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <div className="loginimg"><img src={img1} className='img1' alt="" /></div>
                    </button>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item " href="#"> <p style={{ color: "gray" }}><i className="fa-solid fa-user"></i>{email}</p></Link></li>
                      <li><Link className="dropdown-item " href="#"><button className='logoutt btn btn-outline' onClick={handleLogout}>log out</button></Link></li>
                    </ul>
                  </div>

                </div>
              ) : (
                <NavLink className="nav-link " to="/login">
                  <button className='nav-icon-login btn btn-outline'><img src={img1} className='img1' alt="" /> </button>
                </NavLink>
              )}
            </div>


            <div  className="ms-4"> <NavLink className="nav-link " to="/login"> <i class="fa-solid fa-user"></i></NavLink>  </div>
            <div  className="ms-4"> <NavLink className="nav-link " to="/wishlist"> <i class="fa-regular fa-heart"></i> ({totalWishlistItems})</NavLink>  </div>
      <div  className=" ms-4"> <NavLink  className="nav-link " to="/search"><i class="fa-solid fa-magnifying-glass"></i> </NavLink></div>
      <div  className="ms-4"> <NavLink className="nav-link " to="/cart"> <i class="fa-solid fa-cart-shopping"></i> ({totalItems})</NavLink>   </div>

{/* logout start */}





    </div>

 
    
 

    
    </div>
  </div>
</nav>

{/* </div> */}

    </>
  )
}

export default Nav