import React from "react";
import "./MyPage.css";
import Tab from "../components/Tab";
import Avatar from "../components/Avatar";

class MyPage extends React.Component {
  render() {
    const kakaoname = "김한울";
    const giftname = "비공개";
    const gifttarget = "친구";
    const giftst = "생일선물 / 일반적인 선물";
    const age = "25~31세";
    const sex = "여성";
    const price = "20만원 내외";
    const like = "화장품";
    const giftcomment = "제품 가격";
    const giftcomment2 = "367,000원";
    const giftcomment3 = "제품 설명";
    const giftcomment4 =
      "상품 설명이 보여집니다.\n설명이 없는경우 제품설명 텍스트까지 전체 다 보여지지 않습니다";
    return (
      <div className="my-all">
        <div className="my-logo">
          <div className="my-img">
            <img src="img/beo_logo.png" />
          </div>
        </div>

        <div className="my-avatar">
          <div>
            <Avatar />
          </div>
          <div className="my-avatar-name">
            <a>name</a>
          </div>
        </div>
        <div className="tab">
          <Tab />
        </div>
      </div>
    );
  }
}

export default MyPage;
