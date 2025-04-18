import React from 'react'
import './Footer.css'
function Footer({showContact}) {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-company">
              <h3>Company</h3>
              <p>Our company is a leading provider of innovative solutions.</p>
              {showContact && (
                <>
                  <p>Address: 123 Main St, Anytown, USA 12345</p>
                  <p>Phone: 555-555-5555</p>
                </>
              )}
            </div>
            <p className="copyright">© Shalini 2025</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer