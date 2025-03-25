import React from 'react'
import Navbar from '../layout/navbar'
import Products from '../_components/products'
// import { productsData, productsData2 } from '../_data/products';
import Footer from '../layout/footer';
import HeroPages from '../_components/heroPages';
import ProductsPage from '../_components/products';
const page = () => {
  return (
    <div>
      <Navbar />
      <HeroPages img="kkk.jpeg" title="#stayhome" text="save more with coupons & up to 70% off!" />
      <ProductsPage
        title="Featured Products"
        text="Deluxe Collection New Modem Deisgns"
         />
      <Footer />
    </div>
  )
}

export default page 