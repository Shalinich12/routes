import React from 'react'
import Hero from './Hero'
import Nav from './Nav'
import Footer from './Footer'
import Products from './productspage/Products';


function Home() {
 let showContactdetails = true;
 let userLoggedIn = true;
  return (
    <div>
      <Nav isLoggedIn={userLoggedIn}/>
      <Hero/>
      <Products />
      <Footer  showContact={showContactdetails}/>
    </div>
  )
}

export default Home