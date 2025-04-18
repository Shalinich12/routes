import React from 'react'
import Hero from './Hero'
import Nav from './Nav'
import Footer from './Footer'

function Home() {
 let showContactdetails = true;
 let userLoggedIn = true;
  return (
    <div>
      <Nav isLoggedIn={userLoggedIn}/>
      <Hero/>
      <Footer  showContact={showContactdetails}/>
    </div>
  )
}

export default Home