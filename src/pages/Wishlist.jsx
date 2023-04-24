import cartgif from '../img/cart.gif'
import { useCart } from 'react-use-cart';
import { useWishlist } from 'react-use-wishlist'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Wishlist = () => {
  const {t} = useTranslation();
  const {items} = useWishlist();
  const {addItem} = useCart();
  const {isWishlistEmpty,removeWishlistItem} = useWishlist();
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
  
  if( isWishlistEmpty) return <h1 className='text-center'><img src={cartgif} alt=""  height={300} /> </h1>
  return ( 

   
       <div className="container-fluid ">
    <div className="row ">  
      {items.map((item,id)=>{
    
    return <>
   
 
<div className='col-12 col-md-3 g-5  mt-5'>
<div className="card gizlim " data-aos={"zoom-in-up" }>
  <img src={item.image} className="card-img-top  border-bottom" style={{height:240}} alt="..." />
  <div className="card-body">
    <h5 className="card-title">{t(`productdata.${item.id}`)}</h5>
    {/* <p className="card-text">{item.name}</p> */}
    <p className="card-text fw-bold">{item.price}$</p>

    <div className='gizli '>
<div className=" card box border-0" >
  <div className="card-body" >
    <button  className="btn btn-outline-dark me-5 "  onClick={() =>{notify(removeWishlistItem(item.id))}}><i class="fa-solid fa-heart"></i></button>
    <Link to={`/product/${id}`}  className="btn btn-outline-dark ms-5 ">...</Link>
    <button className="btn btn-outline-dark mt-5 my-5" onClick={() =>{notify(addItem(item))}} ><i class="fa-solid fa-cart-shopping"></i> {t('entertext.27')}</button>
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
</>

    
   

    
    

      })}

</div>
</div>
   
  )
}

export default Wishlist