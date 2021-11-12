import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

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
    <Carousel PrevIcon={false} NextIcon={false}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper
      style={{
        position: "relative",
        height: "288px",
        backgroundColor: "#BEB0A7",
        textAlign: "center",
      }}
    >
      <p
        style={{
          position: "absolute",
          // height: "288px",
          top: "60px",
          width: "100%",
          textAlign: "center",
          fontSize: "16px",
          fontFamily: "Pretendard",
          fontWeight: "bold",
          color: "#45332F",
        }}
      >
        {props.item.title}
      </p>
      <p
        style={{
          position: "absolute",
          top: "90px",
          width: "100%",
          fontSize: "20px",
          fontFamily: "Pretendard",
          fontWeight: "bold",
          color: "#FFFFFF",
        }}
      >
        {props.item.description}
      </p>
      <p
        style={{
          position: "absolute",
          top: "178px",
          textAlign: "center",
          width: "100%",
          fontSize: "12px",
          fontFamily: "Pretendard",
          fontWeight: "bold",
          color: "#000000",
        }}
      >
        {props.item.name}
      </p>
    </Paper>
  );
}

export default Example;
