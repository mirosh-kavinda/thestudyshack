import './App.css';
import{ React ,useState, useEffect } from "react";
import {Navigation} from './components/Navigation.jsx';
import {Footer} from './components/Footer.jsx';
import JsonData from './data/data.json';
import SmoothScroll from 'smooth-scroll'
import {LandingPage} from './components/LandingPage';


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App =()=>{
    
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])
 
        return (
          <div className="App">
            <Navigation data={landingPageData.Header}  />
            <LandingPage/>
            <div className='footer'>
                 <Footer />
            </div>
          
          </div>
        );
    };


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