import { Link,useEffect} from 'react-router-dom';
import { useCart } from 'react-use-cart'
import { useWishlist } from 'react-use-wishlist';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SingleCard = ({title,price,image,name,desc,item,id}) => {
  
  const {addWishlistItem} = useWishlist();
  const {t} = useTranslation();
  const {addItem} = useCart();

// notify
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
    
<div className='col-sm-12  col-md-3 g-5 '>
<div className="card gizlim" data-aos={"zoom-in-up" }>
  <img src={image} className="card-img-top  border-bottom" style={{height:240}} alt="..." />
  <div className="card-body bg-light">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{name}<i class="fa-solid fa-star" ></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i></p>
    {/* <p className="card-text ">{desc.substring(0,30)}...</p> */}
    <p className="card-text fw-bold">{price}$</p>




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







    
    </>
  )
}

export default SingleCard