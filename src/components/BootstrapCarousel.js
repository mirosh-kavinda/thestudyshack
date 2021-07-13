import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class Testimonials extends Component {
  render() {
    return (
      <div  style={{marginTop:'100px',width:'cover'}} >
      <Carousel
        showIndicators={false}
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={5100}
        style={{width:'cover'}}
        

      >
       
        <div   >
          <img alt='' src="/images/81co8nilff5r9eer3xga.png" />
          <div className="myCarousel">
              <p class="text-white ">
                <h1 class="display-4">
                  Transforming your mind and broadening your visions
                </h1>
              </p>
        
          </div>
        </div>

        <div >
          <img alt='' src="./images/john.png" />
          <div className="myCarousel">
              <p class="text-white ">
                <h1 class="display-4">
                People teach. People learn. This is where they connect
                </h1>
              </p>
            
          </div>
        </div>

        <div >
          <img alt='' src="/images/theo.png" />
          <div className="myCarousel">
             <p class="text-white ">
                <h1 class="display-4">
                Maximizing potential through individual attention
                </h1>
              </p>
            
          </div>
        </div>
      </Carousel>
    </div>
    );
  }
}