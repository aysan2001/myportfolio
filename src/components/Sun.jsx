import React, { useEffect, useState } from 'react'
import '../i18n/i18next';
import { useTranslation } from 'react-i18next';

const Sun = () => {
  const {t, i18n} = useTranslation();
  const handleClick = (lang)=>{
    i18n.changeLanguage(lang)
  }

  const [theme, setTheme] = useState("bg-white");
  const toggleTheme = () =>{
    if(theme == "bg-white"){
      localStorage.setItem("theme", "bg-dark");
      setTheme("bg-dark");
    }else{
      localStorage.setItem("theme", "bg-white");
      setTheme("bg-white");
    }
  };

  useEffect(()=>{
    const localTheme = localStorage.getItem("theme");
    if(localTheme){
      setTheme(localTheme);
    }
    document.body.className = theme
  },[theme])

  return (
    <>
    
<nav className=" sari">
  <div className="container-fluid d-flex flex-wrap align-items-center justify-content-space-between ">
    <ul className="nav me-auto">
      <li className="nav-item "><p className="nav-link link-light px-2 active mt-2" aria-current="page"><i className="fa-solid fa-clock"></i></p></li>
      <li className="nav-item"><p className="nav-link  px-2 sari mt-2">{t('entertext.0')}</p></li>

    </ul>
    <ul className="nav">
      <li className="nav-item"><a href="#a" className="nav-link link-dark px-2"><button className='btn btn-outline-light' onClick={()=>handleClick('az')}>AZ</button></a></li>
      <li className="nav-item"><a href="#a" className="nav-link link-dark px-2"><button className='btn btn-outline-light' onClick={()=>handleClick('en')}>EN</button></a></li>
      <li className="nav-item"><a href="#a" className="nav-link link-dark px-2"><button className='btn btn-outline-light'onClick={toggleTheme}>{theme?"Light":"Dark"}</button></a></li>

    
    </ul>
  </div>
</nav>

    
    </>
  )
}

export default Sun