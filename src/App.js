import './App.css';
import React, { Component } from "react";
import Navigation from './components/Navigation/Navigation';
import BootstrapCarousel from './components/BootstrapCarousel/BootstrapCarousel';
import LandingPage from './Pages/LandingPage/LandingPage';
import ModuleList from './Pages/ModuleList/ModuleList';
import Testimonials from './Pages/Testmonials/Testimonials';
import Footer from './components/Footer/Footer';


class App extends Component{
    render(){
        return (
          <div className="App">
            <Navigation  onRouteChange={this.onRouteChange} />
            <BootstrapCarousel  />
            <LandingPage />
            <div className='intro'>
              <ModuleList />
              </div>
          
              <div className="testimonial">
                <Testimonials />
              </div>
           
            <div className='footer'>
              <Footer />
            </div> 
          </div>
        );
    };
}

export default App;


// Routings 
//     summercourses
//     tutoring 
//     test_prep
//     pricing 
//     Aboutus
//     blog
//     login 
//     signup