import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export  class Testimonials extends Component {
  render() {
    return (
      <div  style={{background:'gray' ,width:'cover'}} >
              <h1 class="display-4"style={{textAlign:'center'}}>Testimonials</h1>
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
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site

              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
        
          </div>
        </div>

        <div >
          <img alt='' src="./images/john.png" />
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <h4>Designer</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site

              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>

        <div >
          <img alt='' src="/images/theo.png" />
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Designer</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site

              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>
      </Carousel>
    </div>
    );
  }
}