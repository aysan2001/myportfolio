import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { ProductContext } from '../context/ProductContext';

const ProductDetails = () => {
  const {addItem,items} = useCart();
  const [products,setProduct] = useContext(ProductContext)

    const {url} = useParams();
    const productdetails = products.find(p=>p.id == url)
    
  return (
    <>
       {items.map((item,id)=>{
return  <div class="container col-xxl-8 px-4 py-5">

    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
  <img src={productdetails.image} className="d-block mx-lg-auto img-fluid" alt="" width={250} height={100}  />
</div>

      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">{productdetails.title}</h1>
        <p class="lead">{productdetails.description}</p>

      
  
  <div class="d-grid gap-2 d-md-flex justify-content-md-start">   
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" onClick={() =>addItem(item)}>Add to Cart</button>

        </div>


      </div>
    </div>
  </div>
       })}
    </>
  )
}

export default ProductDetails