import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import "./MainApp.css";
import { style } from "@mui/system";

function Example(props) {
  var items = [
    {
      title: "이런 고민 많았죠?",
      description:
        "뭘 좋아할지 몰라 네**, 인***램에서 몇 시간을 허비했는지 몰라요",
      name: "30대 서울 직장인 김*성님",
      
    },
    {
      title: "",
      description:
        "선물 추천을 받고 싶어 검색해도 온통 광고. 믿을 수가 없어요.",
      name: "20대 인천 대학생 오* 연님",
    },
    {
      title: "",
      description:
        "부모님 선물 찾다가 어려워서 역시 현금이 최고라고 합리화해 버리곤 해요",
      name: "40대 대구 자영업자 이*영님",
    },
  ];

  return (
    <Carousel  animation='slide' navButtonsAlwaysInvisible={true}   
    indicatorIconButtonProps={{
      style: {
        fontSize:'3px',
          padding: '5px',    // 1
          color: "#FFFFFF",
         // 3
      }
  }}
 
  activeIndicatorIconButtonProps={{
    style: {
      color: "#EC5800",
      fontSize:'3px', // 2
    }
}}
    indicatorContainerProps={{
      style: {
        position: "absolute",
        top:'230px',
        fontSize:'3px',
          marginTop: '0px', // 5
          textAlign: 'center' ,
          zIndex:'1'
          // 4
      }

  }} >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper className='slider'
      style={{
        position: "relative",
        height: "288px",
        backgroundColor: "#BEB0A7",
        textAlign: "center",
      }}
    >
      <p className='slider-text'

      >
        {props.item.title}
      </p>
      <p className='slider-text2'

  
      >
        {props.item.description}
      </p>
      <p className='slider-text3'
   
      >
        {props.item.name}
      </p>
    </Paper>
  );
}

export default Example;
