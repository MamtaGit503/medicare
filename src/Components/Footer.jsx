import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className='footer_sec'>

    <div className='footer_nav'>
    <div className='LogoFooter'>
    <Link to="/"><img src="Assets/Images/MediCare.png" alt="img" /></Link>
    </div>

    <div className='FooterList_Main'>
        <ul className='headList'>
            <li><Link to="/" className='nav-link2'>Home</Link></li>
            <li><Link to="/about" className='nav-link2'>About</Link></li>             
            <li><Link to="/service" className='nav-link2'>Services</Link></li>
            <li><Link to="/news" className='nav-link2'>News</Link></li>
         </ul>
    </div>
    </div>

    <div className='social_box'>
    <div className='social_boxInner'>
    <p><i className="fa-brands fa-facebook-f"></i></p>
    <p><i className="fa-brands fa-google"></i></p>
    <p><i className="fa-brands fa-twitter"></i></p>
    </div>
    <p>©2023 - 011BQ </p>
    </div>

    </section>
  )
}

export default Footer