import './css/App.css';
import React, { Component } from "react";
import Navigation from './components/Navigation';
import BootstrapCarousel from './components/BootstrapCarousel';
import LandingPage from './Pages/LandingPage';
import ModuleList from './Pages/ModuleList';
import Testimonials from './Pages/Testimonials';
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