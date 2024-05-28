import React from 'react'
import './NewsLatter.css'

const NewsLatter = () => {
  return (
    <div className='newslatter'>
        <h1>Get Exclusive offers on your Email</h1>
        <p>Subscribe to our newletter and stay updated</p>
        <div>
            <input type="email" placeholder="Your Email Id" />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLatter
