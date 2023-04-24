import React from 'react'
import { useCart } from 'react-use-cart'
import cartgif from '../img/check.gif'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'



const Cart = () => {
  const {t} = useTranslation();
  const {isEmpty,totalUniqueItems, items,totalItems,cartTotal,updateItemQuantity,removeItem,emptyCart} = useCart();
  if(isEmpty) return <h1 className='text-center'> <img src={cartgif} alt=""  height={300} /> </h1>


  // login alerti
  const isLoggedIn = localStorage.getItem("isLoggedIn");
const alert =()=>{
 Swal.fire("Please Login!")


}
 
 
  return (

  <section className='py-4 container'>
      <div className='row justify-content-center'>
       <div className='col-12'>
         <h5 className='lead fw-bold'>{t('entertext.27')} ({totalUniqueItems}) {t('entertext.28')}: ({totalItems})</h5>
         <table className='table table-light table-hover m-0'>
          <tbody>
            
           {items.map((item,i)=>{
            return(
            <tr key={i}>
              <td> <img src={item.image} style={{height:'6rem'}} alt="" /> </td>
              <td >{item.title}</td>
              <td >{(item.price*item.quantity).toFixed(2)}</td>
              <td >{t('entertext.29')} ({item.quantity})</td>
              <td>
                <button className='btn button-shop m-2' onClick={()=>updateItemQuantity(item.id, item.quantity - 1) }>-</button>
                <button className='btn button-shop m-2'  onClick={()=>updateItemQuantity(item.id, item.quantity + 1) }>+</button>
                <button className='btn btn-danger m-2' onClick={()=>removeItem(item.id) } >{t('entertext.30')}</button>
              </td>
            </tr>
            )
           })}
           </tbody>
         </table>
       </div>


       <div className='col-auto ms-auto'>
        <h2 className=' title-bot mt-2'>{t('entertext.30')}: {cartTotal}$</h2>
       </div>

       <div className='col-auto'>
        <button className='btn btn-danger m-2' onClick={()=>emptyCart()}>{t('entertext.32')}</button>
        {/* <button className='btn btn-dark m-2'>Buy Now</button> */}
        
        {isLoggedIn ? (
          <button className=" btn btn-dark" onClick={()=>{items.forEach((fd) => emptyCart(fd.id))}}>{t('entertext.33')}</button>
         ):( 
          <button className="btn btn-dark " onClick={(alert)}> <Link className='btn-log' to="/login" >{t('entertext.33')}</Link> </button>
        )} 
       </div>

{/* alert('please log in') */}
{/* () => alert('please log in') */}

      </div>
  </section>
  )
}

export default Cart