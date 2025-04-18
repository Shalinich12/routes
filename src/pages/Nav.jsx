import React from 'react'
import './Nav.css'
function Nav({isLoggedIn}) {
  return (
    <div className='nav-container'>
        <h3>Logo</h3>
        <nav className='navigation'>
            <ul className='nav-menu'>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                {isLoggedIn ? (
            <li>Login</li>
          ) : (
            <>
              <li>SignUp</li>
            </>
          )}
            </ul>
        </nav>
    </div>
  )
}

export default Nav