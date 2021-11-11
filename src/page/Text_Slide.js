import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './MainApp.css';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
    const hstyle = {
      // position: 'absolute',
      width: '113px',
      height: '19px',
      left: '124px',
      top: '60px',
      
      fontfamily: 'Pretendard',
      fontstyle: 'normal',
      fontweight: 'bold',
      fontsize: '16px',
      lineheight: '19px',
      
      color: '#45332F',
    }
    return (
   
        <Slider {...settings} className='slider'>
          <div className='slider-container'>
            <div className='slider-text' >
              <a>이런 고민 많았죠?</a>
            </div>
            <div  className='slider-text2'>
              <a>뭘 좋아할지 몰라 네**, 인***램에서 몇 시간을 허비했는지 몰라요</a>
            </div>
             <div className='slider-text3' >
              <a> 30대 서울 직장인 김*성님</a>
            </div>
           

          </div>
          <div>
          <div className='slider-text' >
              <a></a>
            </div>
            <div className='slider-text4' >
              <a>선물 추천을 받고 싶어 검색해도 온통 광고. 믿을 수가 없어요.  </a>
            </div>
             <div  className='slider-text5'>
              <a> 20대 인천 대학생 오* 연님</a>
            </div>
           

          </div> <div>
          <div className='slider-text' >
              <a></a>
            </div>
            <div  className='slider-text6'>
              <a>부모님 선물 찾다가 어려워서 역시 현금이 최고라고 합리화해 버리곤 해요</a>
            </div>
             <div className='slider-text7'>
              <a> 40대 대구 자영업자 이*영님</a>
            </div>
           

          </div>
         
        </Slider>
    
    );
  }
}