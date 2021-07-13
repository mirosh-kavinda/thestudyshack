import React from 'react';
import '../css/LandingPage.css';
import back1234 from '../img/back1234.jpg'; // gives image path


const LandingPage = ({onInputChange,onButtonSubmit}) => {
  return (
    <div className="search">
      <img src={back1234} className='img'alt=''/>
      <form className=" form ">
        <input className="form-control" type="text" onChange={onInputChange} placeholder="Search By language or specialty" aria-label="Search" />
      </form>
        <button className='button' onClick={onButtonSubmit}>Explore</button>
    </div>
  
  );
}

export default LandingPage;


