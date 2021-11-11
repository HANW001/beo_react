import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import './MainApp.css';

const Index = () => {
    const beo_comment = '1분\n선물 추천'
    const beo_comment2 = '몇 시간씩 인터넷 검색에 시간 허비할 필요 없어요.\n몇가지 질문에 답해주시면, 선물을 추천해드려요.'
    const beo_comment3 = '광고 없는\n선물 추천'
    const beo_comment4 = '광고일까 더 이상 고민하지 마세요.\n베오의 선물 추천에는 광고가 없습니다.'
    const beo_comment5 = '취향을 반영한\n선물 추천'
    const beo_comment6 = '받는 분의 취향을 고려해서 선물을 추천해드려요.\n당신에게 딱 맞는 선물로 고르고 골랐어요.'
    const beo_comment7 = '당신만을 위한\n선물 제안서가\n도착했어요'

    const review_comment = '후기로 보는 베오'
    const review_comment2 = '베오 덕에\n행복한 시간을 보냈어요.'

    const req_comment = '베오와 함께라면\n당신의 기념일이\n새로워질 거예요'
    let boxStyle = {
        width: '40%',
        height: '200px',
        fontSize: '30px',
        lineHeight: '200px',
        background: 'black',
        color: 'white',
        textAlign: 'center'
    }

    useEffect(() => {
        AOS.init({
            duration : 1000
        });
    });

    return(
        <>
          {/* <div>
            <div>
                <p data-aos="fade-up">AOS 테스트1</p>
            </div>
            <div style={{height: '500px'}}></div>
            <div style={boxStyle}>
                <p data-aos="fade-up">AOS 테스트2</p>
            </div>
            <div style={{height: '500px'}}></div>
            <div style={boxStyle} data-aos="fade-up">
                <p>AOS 테스트3</p>
            </div>
            <div style={{height: '500px'}}></div>
          </div> */}
          <div>
              <div className="bg">
                  <img  src="img/main_image.png" />
              </div>
              <div className='img' data-aos="fade-up">
                  <img  src="img/kakao_img.png" />
              </div>
              <div  className='img-comment' data-aos="fade-up">
                  <a>선물 고민 중인가요?</a>
              </div>
              <div  className='img-comment2' data-aos="fade-up">
                  <a>1분이면 충분해요</a>
              </div>
              <div  className='img-comment3' data-aos="fade-up">
                  <a>200만건 이상의 선물 데이터를 분석했어요.</a>
              </div>
              <div  className='img-comment4' data-aos="fade-up">
                  <a>내게 꼭 맞는 선물 추천을 받아보세요.</a>
              </div>
          </div>
          <div className='slide' data-aos="fade-up">
              <img src='img/bg_rec.png' />
          </div>
          <div>
              <div className='beo-comment' data-aos="fade-up"> 
                  <a >선물 전문가 베오가 도와드릴게요.</a>
              </div>
              <div className='beo-comment2' data-aos="fade-up">
                  <a >{beo_comment}</a>
              </div>
              <div className='beo-comment3' data-aos="fade-up">
                  <a >{beo_comment2}</a>
              </div>
              <div className='beo-img' data-aos="fade-up">
                  <img src='img/phone.png' />
              </div>
              <div className='beo-comment4' data-aos="fade-up">
                  <a >{beo_comment3}</a>
              </div>
              <div className='beo-comment5' data-aos="fade-up">
                  <a >{beo_comment4}</a>
              </div>
              <div className='beo-img2' data-aos="fade-up">
                  <img src='img/no_ads.png' />
              </div>

              <div className='beo-comment6' data-aos="fade-up">
                  <a >{beo_comment5}</a>
              </div>

              <div className='beo-comment7' data-aos="fade-up">
                  <a >{beo_comment6}</a>
              </div>
              <div className='beo-chatimg' data-aos="fade-up">
                  <img src='img/beo_chat01.png'/>
              </div>
              <div className='beo-chatimg2' data-aos="fade-up">
                  <img src='img/beo_chat02.png'/>
              </div>
              <div className='beo-chatimg3' data-aos="fade-up">
                  <img src='img/beo_chat03.png'/>
              </div>
              <div className='beo-chatimg4' data-aos="fade-up">
                  <img src='img/beo_chat04.png'/>
              </div>
              <div className='beo-comment8' data-aos="fade-up">
                  <a >{beo_comment7}</a>
              </div>
              <div className='beo-img3' data-aos="fade-up">
                  <img src='img/beo_req.png'/>
              </div>
          </div>

          <div className = 'bg-color'>
              <div className='review-comment' data-aos="fade-up">
                  <a>{review_comment}</a>
              </div>
              <div className='review-comment2' data-aos="fade-up">
                  <a>{review_comment2}</a>
              </div>
              <div className='review-img' data-aos="fade-up">
                  <img src='img/beo_review01.png'/>
              </div>
              <div className='review-img2' data-aos="fade-up">
                  <img src='img/beo_review02.png'/>
              </div>
              <div className='review-img3' data-aos="fade-up">
                  <img src='img/beo_review03.png'/>
              </div>
              <div className='review-img4' data-aos="fade-up">
                  <img src='img/beo_review04.png'/>
              </div>
          </div>
          <div>
              <div className='gift-comment' data-aos="fade-up">
                  <a>선물 연구소</a>
              </div>
              <div className='gift-comment2' data-aos="fade-up">
                  <a>좋은 선물에 대해서 고민하고 연구합니다.</a>
              </div>
              <div className='gift-img' data-aos="fade-up">
                  <img src = 'img/beo_gift01.png'/>
              </div>
              <div className='gift-img2' data-aos="fade-up">
                  <img src = 'img/beo_gift02.png'/>
              </div>
          </div>
          <div>
              <div className = 'faq' data-aos="fade-up">
                  <a>FAQ</a>
              </div>
          </div>
          <div>
              <div className='req-bg' data-aos="fade-up">
                  <img src='img/beo_bg01.png' />
              </div>
              <div className='req-comment' data-aos="fade-up">
                  <a>{req_comment}</a>
              </div>
              <div className='req-button' data-aos="fade-up">
                <img src='img/beo_req_button.png' />
              </div>
          </div>
          <div className='bottom' data-aos="fade-up">
              <img src='img/beo_bottom.png'></img>
          </div>
          <div className='bottom-button' data-aos="fade-up">
              <img src='img/gift_button.png'></img>
          </div>
          <div className='bottom-40'>
              <a>''</a>
          </div>
        </>
    )
};

export default Index;