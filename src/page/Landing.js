import React from "react";
import './App.css';
import Carousel from "./Carousel.js";
// import Carousel from 'react-material-ui-carousel'
// import { Paper, Button } from '@mui/material'


//https://github.com/Learus/react-material-ui-carousel/blob/master/README.md
// function Example(props)
// {
//     var items = [
//         {
//             name: "Random Name #1",
//             description: "Probably the most random thing you have ever seen!",
//             image: "/img/beo_logo.png"
            
//         },
//         {
//             name: "Random Name #2",
//             description: "Hello World!",
//             image: "/img/beo_logo.png"
//         }
//     ]

//     return (
//         <Carousel className='slide' fullHeightHover = {false} indicators ={false} autoPlay={false} >
//             {
//                 items.map( (item, i) => <Item key={i} item={item} /> )
//             }
//         </Carousel>
//     )
// }

// function Item(props)
// {
//     return (
//         <Paper >
//             <h2>{props.item.name}</h2>
//             <p>{props.item.description}</p>
//             <img src = {props.item.image}/>

//             <Button className="CheckButton">
//                 Check it out!
//             </Button>
//         </Paper>
//     )
// }


class Landing extends React.Component{
  

render() {
  const kakaoname = '김한울';
  const giftname = '비공개';
  const gifttarget = '친구';
  const giftst = '생일선물 / 일반적인 선물'
  const age = '25~31세';
  const sex = '여성';
  const price = '20만원 내외';
  const like = '화장품'
  const giftcomment = '제품 가격'
  const giftcomment2 = '367,000원'
  const giftcomment3 = '제품 설명'
  const giftcomment4 = '상품 설명이 보여집니다.\n설명이 없는경우 제품설명 텍스트까지 전체 다 보여지지 않습니다'
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
        <Carousel />
        <p className ='recommand'>01</p>
        <p className ='recommand2'>첫번째 선물 추천</p>
        <p />
        <p className ='recommand3'>첫번째 선물 추천 제품명</p>
        <hr className='divider' />
        <p className = 'reason'>추천 이유</p>
        <p className = 'reason2'>추천 이유 (태그라인)설명이 들어갑니다. 추천이유가 길어지는 경우 전체가 다 보여야 합니다</p>
        <hr className='divider2'/>
        <p className='giftcomment'>{giftcomment}</p>
        <p className='giftcomment2'>{giftcomment2}</p>
        <p className='giftcomment3'>{giftcomment3}</p>
        <p className='giftcomment4'>{giftcomment4}</p>
        <div className='jb-wrap'>
          <div className='button'>
            <img src='img/rectangle1.png' />
          </div>
          <div className='buttontext'>
            <a>구매하기</a>
          </div>
        </div>

        <div className='jb-wrap'>
          <div className='button2'>
            <img src='img/shared1.png' />
          </div>
       
        </div>

        <div className='jb-wrap'>
          <div className='button3'>
            <img src='img/rectangle2.png' />
          </div>
          <div className='buttontext3'>
            <a>구매하기</a>
          </div>
        </div>

          <div className='divider3'>
            <img src='img/rectangle5.png' />
          </div>

        <div className='q-wrap' >
        <img className='qbg' src ='img/rectangle4.png' />
            <div>
             <a className='qcomment'>혼자 결정하기 어렵다면,</a>
             <a className='qcomment2'>친구에게 물어보기</a>
            </div>
          <div>
            <div className='qicon'>
              <img src ='img/kakaoicon.png' />
            </div>
            <div className='qicon2'>
              <img src ='img/shared.png' />
            </div>
          </div>
          <div className='qimg'>
            <img src ='img/kakaocomment.png' />
          </div>
         
        </div>

        <div className='divider4'>
            <img src='img/rectangle5.png' />
          </div>

          <div>
            <a className='beotitle'>선물 연구소</a>
            <a className='beotitle2'>좋은 선물에 대해서 고민하고 연구합니다.</a>
          </div>

          <div>
            <div className='beoimg'>
              <img src ='img/backimage1.png' />
            </div>
            <div>
              <a className='beocomment'>상품 자체 검증 프로세스</a>
              <a className='beocomment2'>5단계 검증 프로세스를 통해 선별한 차별화된 상품 데이터</a>
            </div>
         
          </div>

          <div>
            <div className='beoimg2'>
              <img src ='img/backimage2.png' />
            </div>
            <div>
              <a className='beocomment3'>개인화 추천 알고리즘</a>
              <a className='beocomment4'>선물 상황, 개인의 성향까지 반영할 수 있는 추천 알고리즘</a>
            </div>
         
          </div>

          <div className='bottomimg'>
            <img  src ='img/bottom.png' />
          </div>
        
        
        
       
        
        
      </div>
  );
}

}

export default Landing;