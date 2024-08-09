import React from 'react'

const OurServices = () => {
  return (
    <section className='ourServ_main'>
    <div className='serviceCont'>
    <h2>Our Services</h2>
    <p>We provide the most full medical services, so every person could heave the oppurtunity to receive qualitative medical help.</p>
    </div>
    
    <div className='container'>
    <div className='row'>

    <div className='col-xl-3 col-lg-6 col-md-6'>
    <div className='serviceBox'>
    <img src="Assets/Images/tooth.png" alt="img" className='blueImg'/>
    <img src="Assets/Images/tooth_white.png" alt="img" className='whiteIMg'/>
    <h3>Dental Care</h3>
    <div className='hoverBox'>
    <p>Learn More</p>
    <i className="fa fa-angle-right" aria-hidden="true"></i>
    </div>
    </div>
    </div>

    <div className='col-xl-3 col-lg-6 col-md-6'>
    <div className='serviceBox'>
    <img src="Assets/Images/shape.png" alt="img" className='blueImg'/>
    <img src="Assets/Images/shape_white.png" alt="img" className='whiteIMg'/>
    <h3>Pulmonary</h3>
    <div className='hoverBox'>
    <p>Learn More</p>
    <i className="fa fa-angle-right" aria-hidden="true"></i>
    </div>
    </div>
    </div>

    
    <div className='col-xl-3 col-lg-6 col-md-6'>
    <div className='serviceBox'>
    <img src="Assets/Images/Brain.png" alt="img" className='blueImg'/>
    <img src="Assets/Images/Brain_white.png" alt="img" className='whiteIMg'/>
    <h3>Neurological</h3>
    <div className='hoverBox'>
    <p>Learn More</p>
    <i className="fa fa-angle-right" aria-hidden="true"></i>
    </div>
    </div>
    </div>

    <div className='col-xl-3 col-lg-6 col-md-6'>
    <div className='serviceBox'>
    <img src="Assets/Images/medicalFile.png" alt="img" className='blueImg'/>
    <img src="Assets/Images/medicalFile_white.png" alt="img" className='whiteIMg'/>
    <h3>Prediatrics</h3>
    <div className='hoverBox'>
    <p>Learn More</p>
    <i className="fa fa-angle-right" aria-hidden="true"></i>
    </div>
    </div>
    </div>

    </div>
    </div>
    </section>
  )
}

export default OurServices