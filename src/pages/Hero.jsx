import React from 'react'
import './Hero.css'
function Hero() {
  return (
    <div>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block carousel-image" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block carousel-image" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://images.pexels.com/photos/3735655/pexels-photo-3735655.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block carousel-image" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Hero