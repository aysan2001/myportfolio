import React, {useState, createContext} from "react";
import productdata from '../data/productdata';

export const ProductContext = createContext();

export const ProductProvider =props=>{
    const [products,setProducts] = useState(productdata);
    return(
        <ProductContext.Provider value={[products,setProducts] }>
         {props.children}
        </ProductContext.Provider>
    )
}