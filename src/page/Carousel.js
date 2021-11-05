import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


//https://sirong.tistory.com/38
//https://react-slick.neostack.com/docs/api/#adaptiveHeight
export default function SimpleSlider() {
  var settings = {
    // adaptiveHight:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider className='slide' {...settings}>
      <div>
        <img className='imgsize' src = 'img/beo_logo.png' />
      </div>
      <div>
      <img className='imgsize' src = 'img/gyul.jpg' />
      </div>
      <div>
      <img className='imgsize' src = 'img/ryan.jpg' />
      </div>
      <div>
      <img className='imgsize' src = 'img/totoro.jpg' />
      </div>
    
    </Slider>
  );
}
