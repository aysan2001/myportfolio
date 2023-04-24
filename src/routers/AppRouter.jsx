import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from 'react-use-cart'
import { WishlistProvider } from 'react-use-wishlist'
// import Jevels from '../components/Jevels'

import Nav from '../components/Nav'
import Sun from '../components/Sun'
import { ProductProvider } from '../context/ProductContext'
import About from '../pages/About'
import Cart from '../pages/Cart'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Login from '../pages/Login/Login'
import Product from '../pages/Product'
import ProductDetails from '../pages/ProductDetails'
import Wishlist from '../pages/Wishlist'
import Footer from '../components/Footer'
import Search from '../pages/Search'

import BlogDetails from '../pages/BlogDetails'
import Dashboard from '../pages/admin/Dashboard'
import AddBlog from '../pages/admin/update/AddBlog'
import EditBlog from '../pages/admin/update/EditBlog'
import BlogList from '../pages/BlogList'


const AppRouter = () => {
  return (
    <BrowserRouter>
<WishlistProvider>
<CartProvider>
    <ProductProvider>
       <Sun />
                 {/* <Jevels /> */}
       <Nav/>
 

   <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/product' element={<Product />}></Route>
    <Route path='/product/:url' element={<ProductDetails />}></Route>
    <Route path='/contact' element={<Contact />}></Route>
    <Route path='/search' element={<Search />}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/cart' element={<Cart />}></Route>
    <Route path='/wishlist' element={<Wishlist />}></Route>
    {/* <Route path='/wishlist/:url' element={<ProductDetails />}></Route> */}
    {/* <Route path='/search/:url' element={<ProductDetails />}></Route> */}


    <Route path='/blogs' element={<BlogList />}></Route>
    <Route path='/blogs/:id' element={<BlogDetails />}></Route>
    <Route path='/admin' element={<Dashboard />}></Route>
    <Route path='/dashboard' element={<Dashboard />}></Route>
    <Route path='/add' element={<AddBlog />}></Route>
    <Route path='/edit/:id' element={<EditBlog />}></Route>




    

   </Routes>

  <Footer />
 
   </ProductProvider> 
</CartProvider>
</WishlistProvider>

</BrowserRouter>
 
  )
}

export default AppRouter