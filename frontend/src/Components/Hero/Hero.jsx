import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand.png'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero.jpg'


const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>Collection</p>
                <p>fro evetyone</p>
            </div>
            <div className="hero-latest-btn">
                <p>Latest Collection</p>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="Hero-right">
            <img src={hero_img} alt="" />
        </div>
      
    </div>
  )
}

export default Hero
