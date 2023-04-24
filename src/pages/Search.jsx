import React, { useRef, useState } from 'react';

import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart'
import { useWishlist } from 'react-use-wishlist';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import products from '../data/products';

const Search = () => {
  const {addWishlistItem} = useWishlist();
  const {addItem} = useCart();
  const [datam,setDatam] = useState(products);
  const [value,setValue] = useState('');
  const inputRef = useRef();


  const filterResult =(comingItem)=>{
    const result = products.filter(fd=>{
      return fd.category === comingItem
    })
    setDatam(result);
}
const {t} = useTranslation();

const notify = () => toast.success('Cart added', {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  });;

  return (
    <>
  <div className="container-fluid my-5">
  <form   onSubmit={(e)=>{e.preventDefault();
        setValue(inputRef.current.value)}}>

     <div className="input-group my-5 ">
      <input type="text" className=' form-control'  placeholder='Search...'    ref={inputRef}/>
      <button className='btn btn-outline-dark' type='submit' id='button-addon2'><i class="fa-solid fa-magnifying-glass"></i></button>
     </div>

    </form>


      <button  className='ms-2 btn title-bot  btn-outline-dark' onClick={()=>{filterResult("men")}}>{t('entertext.25')}</button>
      <button className='ms-2 btn title-bot  btn-outline-dark' onClick={()=>{filterResult("women")}}>{t('entertext.26')}</button>

  {/* </div> */}

  
  <div className="row  mt-3">

  {datam.filter(p=>p.title.toLocaleLowerCase().includes(value)).map((item,id)=>{
              return <div className='col-sm-12  col-md-3 g-5 '>

              <div className="card gizlim" data-aos={"zoom-in-up" }>
                <img src={item.image} className="card-img-top  border-bottom" style={{height:240}} alt="..." />
                <div className="card-body bg-light">
                  <h5 className="card-title">{t(`products.${item.id}`)}</h5>
                  <p className="card-text">{item.name}<i class="fa-solid fa-star" ></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i></p>
                  {/* <p className="card-text ">{desc.substring(0,30)}...</p> */}
                  <p className="card-text fw-bold">{item.price}$</p>
              
              
              
              
                  <div className='gizli'>
              <div className=" card box border-0" >
                <div className="card-body" >
              <button  className="btn btn-outline-dark" onClick={() =>{notify(addWishlistItem(item))}}><i class="fa-solid fa-heart"></i> </button>
                  <Link to={`/product/${id}`} className="btn btn-outline-dark ms-5 ">...</Link>
              <button  className="btn btn-outline-dark mt-5 my-5" onClick={() =>{notify(addItem(item))}}><i class="fa-solid fa-cart-shopping"></i> {t('entertext.24')}</button>
                     <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
                </div>
              </div>
              
              
              
                  </div>
                </div>
              </div>
              
              </div>

               
             
            })}
  </div>
  </div>


    
    
    </>
  )
}

export default Search