import React from "react";
import './App.css';
import Carousel from "./Carousel";


class Landing extends React.Component{
  

render(){
  const kakaoname = '김한울';
  const giftname = '비공개';
  const gifttarget = '친구';
  const giftst = '생일선물 / 일반적인 선물'
  const age = '25~31세';
  const sex = '여성';
  const price = '20만원 내외';
  const like = '화장품'
    return (  
      <div >
        <img className="img" src="img/beo_logo.png" alt={'logo'} /> 
        <p className='title'>{kakaoname}님을 위한 선물 제안서</p>
        <p className='title2'>200백만개의 상품 데이터베이스에서 {kakaoname}님에게 가장 잘 맞는 선물을 찾아보았어요. 광고 없이 오직 당신의 만족만을 생각하고 제안합니다</p>
        <div className='bgcolor' />
        <p className='commentName'>For.{giftname}</p>
        <p className='comment'>선물대상</p>
        <p className='comment2'>{gifttarget}</p>
        <p className='comment3'>선물상황</p>
        <p className='comment4'>{giftst}</p>
        <p className='comment5'>나이</p>
        <p className='comment6'>{age}</p>
        <p className='comment7'>성별</p>
        <p className='comment8'>{sex}</p>
        <p className='comment9'>선물예산</p>
        <p className='comment10'>{price}</p>
        <p className='comment11'>관심사</p>
        <p className='comment12'>{like}</p>
        <img className="commentimg" src="img/beo_logo.png" alt={'commentlogo'} /> 
        <div className='slide'>
       {/* <Carousel /> */}
        </div>
        
      </div>
  );
}

}

export default Landing;