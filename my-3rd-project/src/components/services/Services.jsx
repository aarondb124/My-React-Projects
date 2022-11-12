import React from 'react';
import './services.css'
import { BsCheckLg } from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
      
      {/*UI/UX Design*/}

      <article className="service" 
      data-aos="zoom-out-right"
      data-aos-duration="1000"
      data-aos-offset="300"
      
      >
          <div className="service_head">
            <h3>Microsoft Office</h3>
          </div>

          <ul className='service_list'>

            <li>
              < BsCheckLg className='service_list-icon'/>
              <p>CV design.</p>
            </li>

            <li>
              < BsCheckLg className='service_list-icon'/>
              <p>Letter writting both english and bangla.</p>
            </li>
            
            <li>
              < BsCheckLg className='service_list-icon'/>
              <p>Creating visiting Cards.</p>
            </li>
            
            <li>
              < BsCheckLg className='service_list-icon'/>
              <p>Creating Excel user interctive charts.</p>
            </li>
            
            <li>
              < BsCheckLg className='service_list-icon'/>
              <p>Excel data entry.</p>
            </li>
            

            <li>
              < BsCheckLg className='service_list-icon'/>
              <p>Power point design.</p>
            </li>
            
          </ul>
        </article>

         {/*Web Development*/}

        <article className="service"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-offset="300"
        
        >
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className='service_list'>

            <li>
              < BsCheckLg className='service_list-icon'/>
              <p>Disigning a fully functional website.</p>
            </li>

            <li>
              < BsCheckLg className='service_list-icon'/>
              <p>Developing a user interctive website.</p>
            </li>
            
            <li>
              < BsCheckLg className='service_list-icon'/>
              <p>Designing a portfolio website.</p>
            </li>
            
            <li>
              < BsCheckLg className='service_list-icon'/>
              <p>Designing any eCommerce website.</p>
            </li>
            
            <li>
              < BsCheckLg className='service_list-icon'/>
              <p>Designing any Blog website.</p>
            </li>

            <li>
              < BsCheckLg className='service_list-icon'/>
              <p>Profitable or Non-profitable any website</p>
            </li>
            
          </ul>
        </article>

        {/*Content Creation*/}

        <article className="service"
        data-aos="zoom-out-left"
        data-aos-duration="1000"
        data-aos-offset="300"
        
        >
          <div className="service_head">
            <h3>Technical Support</h3>
          </div>

          <ul className='service_list'>

            <li>
              < BsCheckLg className='service_list-icon'/>
              <p>Home or Office wirring and circuit.</p>
            </li>

            <li>
              < BsCheckLg className='service_list-icon'/>
              <p>Software and hardware install.</p>
            </li>
            
            <li>
              < BsCheckLg className='service_list-icon'/>
              <p>Software and hardware problem identification.</p>
            </li>
            
            <li>
              < BsCheckLg className='service_list-icon'/>
              <p>Customer service.</p>
            </li>
            
            <li>
              < BsCheckLg className='service_list-icon'/>
              <p>Basic cooking.</p>
            </li>
            
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services