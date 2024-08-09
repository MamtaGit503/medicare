import React from 'react'

const Subscribe = () => {
  return (
    <section className='subs_Sec'>
     <div className='subs_img'>
        <img src="Assets/Images/subs_bg.png" alt="img" />
    </div>
    
    <div className='subs_cont'>
    <h2>Subscribe to Newsletter</h2>
    <p>We have a wide experience in experience design and strategy,</p>

    <div className='subs_email'>
    <input type="text" placeholder='Enter your email address' />
    <button>Send Now</button>
    </div>
    </div>

    </section>
  )
}

export default Subscribe