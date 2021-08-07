import React from 'react';
import '../css/LandingPage.css';
import back1234 from '../img/back1234.jpg'; // gives image path
import {BootstrapCarousel} from './BootstrapCarousel.jsx';
import {ModuleList} from './ModuleList.jsx';
import { Offering } from './Offering';
import {Testimonials} from './Testimonials.jsx';
import { Measurements } from './Measurements';

export  let LandingPage = ({onInputChange,onButtonSubmit}) => {
  return (
    <div className="search">
      <img src={back1234} className='img'alt=''/>
      <form className=" form ">
        <input className="form-control" type="text" onChange={onInputChange} placeholder="Search By language or specialty" aria-label="Search" />
      </form>
      <BootstrapCarousel  />
      <div className='modules'>
          <ModuleList />
      </div>
      <div className='offering'>
          <Offering />
      </div>
      <div className='counts'>
          <Measurements />
      </div>
     
      <div className="testimonial">
          <Testimonials />
      </div>
        <button className='button' onClick={onButtonSubmit}>Explore</button>
    </div>
  
  );
}



