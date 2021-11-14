import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./MainApp.css";
import Sliders from "./Text_Slide";
import Accordion from "./Accordion";
import { fontFamily, fontWeight, height, textAlign } from "@mui/system";

const Index = () => {
  const beo_comment = "1분\n선물 추천";
  const beo_comment2 =
    "몇 시간씩 인터넷 검색에 시간 허비할 필요 없어요.\n몇가지 질문에 답해주시면, 선물을 추천해드려요.";
  const beo_comment3 = "광고 없는\n선물 추천";
  const beo_comment4 =
    "광고일까 더 이상 고민하지 마세요.\n베오의 선물 추천에는 광고가 없습니다.";
  const beo_comment5 = "취향을 반영한\n선물 추천";
  const beo_comment6 =
    "받는 분의 취향을 고려해서 선물을 추천해드려요.\n당신에게 딱 맞는 선물로 고르고 골랐어요.";
  const beo_comment7 = "당신만을 위한\n선물 제안서가\n도착했어요";

  const review_comment = "후기로 보는 베오";
  const review_comment2 = "베오 덕에\n행복한 시간을 보냈어요.";

  const req_comment = "베오와 함께라면\n당신의 기념일이\n새로워질 거예요";


  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <div
      className="all"
    >
      <div
        className=""
        // style={{
        //   position: "relative",
        //   width: "100%",
        //   height: "100%",
        //   objectFit: "cover",
        // }}
      >
        <div
        >
          <picture>
            <source media="(min-width:1020px)" srcSet="./img/main_image2.png" />
            <source media="(min-width:1440px)" srcSet="./img/main_image3.png" />
            <img src="img/main_image.png" style={{ width: "100%", height:"100%" }} />
          </picture>
           
        </div>
       
        <div
          className="img"
    
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="img/kakao_img.png" />
        </div>
        <div
          className="img-comment"

          data-aos="fade-up"
          data-aos-delay="50"
        >
          <p>선물 고민 중인가요?</p>
        </div>
        <div
          className="img-comment2"

          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>1분이면 충분해요</p>
        </div>
        <div
          className="img-comment3"
       
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <p>200만건 이상의 선물 데이터를 분석했어요.</p>
        </div>
        <div
          className="img-comment4"
         
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p>내게 꼭 맞는 선물 추천을 받아보세요.</p>
        </div>
      </div>
      <Sliders />
      <div
        className="beo"
     
      >
        <div
          className="beo-comment"
        
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <p>선물 전문가 베오가 도와드릴게요.</p>
        </div>
        <div
          className="beo-comment2"
      
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>{beo_comment}</p>
        </div>
        <div
          className="beo-comment3"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <p>{beo_comment2}</p>
        </div>
        <div
          className="beo-img"
       
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="img/phone.png" />
        </div>
      </div>

      <div
        className="beo2"
    
      >
        <div
          className="beo-comment4"
    
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>{beo_comment3}</p>
        </div>
        <div
          className="beo-comment5"

          data-aos="fade-up"
          data-aos-delay="150"
        >
          <p>{beo_comment4}</p>
        </div>
        <div
          className="beo-img2"
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
             <picture>
            
            <source media="(min-width:1440px)" srcSet="img/no_ads_03.png" />
            <img src="img/no_ads.png" />
          </picture>
         
        </div>
      </div>

      <div
        className="beo3"
      >
        <div
          className="beo-comment6"
   
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>{beo_comment5}</p>
        </div>
        <div
          className="beo-comment7"
    
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <p>{beo_comment6}</p>
        </div>

        <div  className="beo-imgs">
          <div
            className="beo-chatimg"
     
            data-aos="fade-up"
            aos-easing="ease-in-sine"
          >
            <picture>
            
            <source media="(min-width:1440px)" srcSet="img/beo_chat01_03.png" />
            <img src="img/beo_chat01.png" />
          </picture>
            
          </div>

          <div
            className="beo-chatimg2"
            data-aos="fade-up"
            aos-easing="ease-in-sine"
          >
            <picture>
            
            <source media="(min-width:1440px)" srcSet="img/beo_chat02_03.png" />
            <img src="img/beo_chat02.png" />
          </picture>
          </div>

          <div
            className="beo-chatimg3"
         
            data-aos="fade-up"
            aos-easing="ease-in-sine"
          >
             <picture>
            
            <source media="(min-width:1440px)" srcSet="img/beo_chat03_03.png" />
            <img src="img/beo_chat03.png" />
          </picture>
          </div>

          <div
            className="beo-chatimg4"
          
            data-aos="fade-up"
            aos-easing="ease-in-sine"
          >
             <picture>
            
            <source media="(min-width:1440px)" srcSet="img/beo_chat04_03.png" />
            <img src="img/beo_chat04.png" />
          </picture>
          </div>
        </div>
      </div>

       <div
        className="beo4"
      >
        <div
          className="beo-comment8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>{beo_comment7}</p>
        </div>
        <div
          className="beo-img3"
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="img/beo_req.png" />
        </div>
      </div>

      <div
        className="beo5"
   
      >
      <div
          className="review-comment"

          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>{review_comment}</p>
        </div>
        <div
          className="review-comment2"

          data-aos="fade-up"
          data-aos-delay="150"
        >
          <p>{review_comment2}</p>
        </div>

        <div
          className="review-img"
          
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="img/beo_review01.png" />
        </div>

        <div
          className="review-img2"
        
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="img/beo_review02.png" />
        </div>

        <div
          className="review-img3"
         
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="img/beo_review03.png" />
        </div>

        <div
          className="review-img4"
         
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="img/beo_review04.png" />
        </div>
      </div>

      <div
        className="beo6"

      >
        <div
          className="gift-comment"
    
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>선물 연구소</p>
        </div>

        <div
          className="gift-comment2"

          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>좋은 선물에 대해서 고민하고 연구합니다.</p>
        </div>
        <div
          className="gift-img"
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
           <picture>
            
            <source media="(min-width:1440px)" srcSet="img/beo_gift03.png" />
            <img src="img/beo_gift01.png" />
          </picture>
          
          
        </div>

        <div
          className="gift-img2"
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
           <picture>
            
            <source media="(min-width:1440px)" srcSet="img/beo_gift04.png" />
            <img src="img/beo_gift02.png" />
          </picture>
          
        </div>
      </div>

      <div
        className="beo7"

      >
        <div
          className="faq"
 
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>FAQ</p>
        </div>

        <div
          className="faq-menu"
       
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <div className='faq-menu2'>
          <Accordion  />
          </div>
        </div>
      </div>

      <div
        className="beo8"
      
      >
        <div
          className="req-bg"
 
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >

<picture>
<source media="(min-width:1020px)" srcSet="/img/beo_bg02.png" />
            <source media="(min-width:1440px)" srcSet="img/beo_bg03.png" />
            <img src="img/beo_bg01.png" style={{width: "100%"}}  />
          </picture>
         
        </div>

        <div
          className="req-comment"
  
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>{req_comment}</p>
        </div>
        <div
          className="req-button"
          
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="/img/beo_req_button.png" />
        </div>
      </div>

      <div
        className="beo9"
      >

        
        <div
          className="bottom"
        >
             <picture>
            <source media="(min-width:1020px)" srcSet="/img/beo_bottom_02.png" />
            <source media="(min-width:1440px)" srcSet="/img/beo_bottom_03.png" />
            <img src="/img/beo_bottom.png"  style={{ width: "100%", }}/>
          </picture>
         
        </div>
      </div>

      <div
        className="beo10"
      >
        <div
          className="bottom-button"
        >
           <picture>
           <source media="(min-width:360)" src="./img/gift_button.png" />
            <source media="(min-width:1020px )" src="./img/gift_button.png" />
            <source media="(min-width:1440px)"  />
            <img src="./img/gift_button.png" />
          </picture>
          
        </div>
      </div>
    </div>
  );


  

};

export default Index;
