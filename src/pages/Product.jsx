import React, { useContext, useEffect } from 'react'
import SingleCard from '../components/SingleCard'
import { ProductContext } from '../context/ProductContext'
import { useTranslation } from 'react-i18next';
import ScrollToTop from "react-scroll-to-top";
import AOS from "aos";
import "aos/dist/aos.css";

const Product = () => {
  const [products,setProducts] = useContext(ProductContext);
  const {t} = useTranslation();
  useEffect(()=>{
    AOS.init({
      duration : 1000
    });
  },[]);
  return (
   <div className="container-fluid" >
    <div className="row my-5"  >
      {products.map((item,i)=>{
        return <>
         <SingleCard key={i} id={item.id} alldata={item}  item={item} title={t(`productdata.${item.id}`)} price={item.price} desc={item.description} image={item.image} name={item.name} />
         
         <ScrollToTop smooth color="#3e9f8e"/>
       </>
      })}
   
   

   </div>
   </div>
  )
}

export default Product