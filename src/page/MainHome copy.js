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
      className=""
      style={{ margin: "auto", }}
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
        <img src="img/main_image.png" style={{ width: "100%" }} />
        <div
          className=""
          style={{
            position: "absolute",
            left: "20px",
            top: "80px",
            width: "126px",
          }}
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="img/kakao_img.png" />
        </div>
        <div
          className=""
          style={{
            position: "absolute",
            left: "20px",
            top: "95px",
            // width: "100%",
            color: "white",
            fontSize: "32px",
            fontFamily: "Pretendard",
            fontWeight: "bold",
            lineHeight: "38px",
          }}
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <p>선물 고민 중인가요?</p>
        </div>
        <div
          className=""
          style={{
            position: "absolute",
            left: "20px",
            top: "140px",
            // width: "100%",
            color: "white",
            fontSize: "32px",
            fontFamily: "Pretendard",
            fontWeight: "bold",
            lineHeight: "38px",
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>1분이면 충분해요</p>
        </div>
        <div
          className=""
          style={{
            position: "absolute",
            left: "20px",
            top: "205px",
            // width: "100%",
            color: "white",
            fontSize: "14px",
            fontFamily: "Pretendard",
            lineHeight: "17px",
          }}
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <p>200만건 이상의 선물 데이터를 분석했어요.</p>
        </div>
        <div
          className=""
          style={{
            position: "absolute",
            left: "20px",
            top: "225px",
            // width: "100%",
            color: "white",
            fontSize: "14px",
            fontFamily: "Pretendard",
            lineHeight: "17px",
          }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p>내게 꼭 맞는 선물 추천을 받아보세요.</p>
        </div>
      </div>
      <Sliders />
      <div
        className=""
        style={{
          position: "relative",
          width: "100%",
          height: "758px",
          textAlign: "center",
        }}
      >
        <div
          className=""
          style={{
            position: "absolute",
            top: "60px",

            width: "100%",
            color: "black",
            fontSize: "16px",
            fontFamily: "Pretendard",
          }}
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <p>선물 전문가 베오가 도와드릴게요.</p>
        </div>
        <div
          className=""
          style={{
            position: "absolute",
            top: "139px",
            width: "100%",
            color: "black",
            whiteSpace: "pre-wrap",
            fontSize: "26px",
            fontFamily: "Pretendard",
            fontWeight: "bold",
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>{beo_comment}</p>
        </div>
        <div
          className=""
          style={{
            position: "absolute",
            top: "229px",
            width: "100%",
            color: "black",
            whiteSpace: "pre-wrap",

            fontSize: "15px",
            fontFamily: "Pretendard",
          }}
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <p>{beo_comment2}</p>
        </div>
        <div
          className=""
          style={{
            position: "absolute",
            top: "273px",
            height: "484.9px",
            width: "100%",
          }}
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="img/phone.png" />
        </div>
      </div>

      <div
        className=""
        style={{
          position: "relative",
          width: "100%",
          height: "537px",
          textAlign: "center",
        }}
      >
        <div
          className=""
          style={{
            position: "absolute",
            top: "100px",
            width: "100%",
            color: "black",
            whiteSpace: "pre-wrap",
            fontSize: "26px",
            fontFamily: "Pretendard",
            fontWeight: "bold",
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>{beo_comment3}</p>
        </div>
        <div
          className=""
          style={{
            position: "absolute",
            top: "190px",
            width: "100%",
            color: "black",
            whiteSpace: "pre-wrap",

            fontSize: "15px",
            fontFamily: "Pretendard",
            fontWeight: "bold",
          }}
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <p>{beo_comment4}</p>
        </div>
        <div
          className=""
          style={{ position: "absolute", top: "279px", width: "100%" }}
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="img/no_ads.png" />
        </div>
      </div>

      <div
        className=""
        style={{
          position: "relative",
          width: "100%",
          height: "598px",
          textAlign: "center",
        }}
      >
        <div
          className=""
          style={{
            position: "absolute",
            top: "100px",
            width: "100%",
            color: "black",
            whiteSpace: "pre-wrap",
            fontSize: "26px",
            fontFamily: "Pretendard",
            fontWeight: "bold",
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>{beo_comment5}</p>
        </div>
        <div
          className=""
          style={{
            position: "absolute",
            top: "190px",
            width: "100%",
            color: "black",
            whiteSpace: "pre-wrap",

            fontSize: "15px",
            fontFamily: "Pretendard",
          }}
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <p>{beo_comment6}</p>
        </div>

        <div style={{ textAlign: "center",width:'100%',}}>
          <div
            className=""
            style={{
              position: "absolute",
              width:'100%',
              right:'20px',
              // left: "10px",
              top: "279px",
            }}
            data-aos="fade-up"
            aos-easing="ease-in-sine"
          >
            <img src="img/beo_chat01.png" />
          </div>

          <div
            className=""
            style={{
              textAlign: "right",
              position: "absolute",
              width: '100%',
              right:'50px',
              // left:'130px' ,
              top: "350px",
            }}
            data-aos="fade-up"
            aos-easing="ease-in-sine"
          >
            <img src="img/beo_chat02.png" />
          </div>

          <div
            className=""
            style={{
              position: "absolute",
              width:'100%',
              right:'10px',
              top: "403px",
            }}
            data-aos="fade-up"
            aos-easing="ease-in-sine"
          >
            <img src="img/beo_chat03.png" />
          </div>

          <div
            className=""
            style={{
              textAlign: "right",
              position: "absolute",
              width:'100%',
              right:'50px',
              // left: "292px",
              top: "492px",
            }}
            data-aos="fade-up"
            aos-easing="ease-in-sine"
          >
            <img src="img/beo_chat04.png" />
          </div>
        </div>
      </div>

       <div
        className=""
        style={{
          position: "relative",
          width: "100%",
          height: "768px",
          textAlign: "center",
        }}
      >
        <div
          className=""
          style={{
            position: "absolute",
            top: "60px",
            width: "100%",
            color: "black",
            whiteSpace: "pre-wrap",
            fontSize: "30px",
            fontFamily: "Pretendard",
            fontWeight: "bold",
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>{beo_comment7}</p>
        </div>
        <div
          className=""
          style={{ position: "absolute", top: "201px", width: "100%", }}
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="img/beo_req.png" />
        </div>
      </div>

      <div
        className=""
        style={{
          position: "relative",
          width: "100%",
          height: "1270px",
          textAlign: "center",
          backgroundColor: "#FFFAF5",
        }}
      >
      <div
          className=""
          style={{
            position: "absolute",
            top: "40px",
            width: "100%",
            color: "#49382E",
            whiteSpace: "pre-wrap",
            fontSize: "20px",
            fontFamily: "Pretendard",
            fontWeight: "bold",
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>{review_comment}</p>
        </div>
        <div
          className=""
          style={{
            position: "absolute",
            top: "96px",
            width: "100%",
            color: "#49382E",
            whiteSpace: "pre-wrap",

            fontSize: "18px",
            fontFamily: "Pretendard",
            fontWeight: "bold",
          }}
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <p>{review_comment2}</p>
        </div>

        <div
          className=""
          style={{ position: "absolute", top: "180px", width: "100%", }}
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="img/beo_review01.png" />
        </div>

        <div
          className=""
          style={{ position: "absolute", top: "450px", width: "100%", }}
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="img/beo_review02.png" />
        </div>

        <div
          className=""
          style={{ position: "absolute", top: "723px", width: "100%", }}
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="img/beo_review03.png" />
        </div>

        <div
          className=""
          style={{ position: "absolute", top: "973px", width: "100%", }}
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="img/beo_review04.png" />
        </div>
      </div>

      <div
        className=""
        style={{
          position: "relative",
          width: "100%",
          height: "475px",
          textAlign: "center",
        }}
      >
        <div
          className=""
          style={{
            position: "absolute",
            top: "70px",
            width: "100%",
            color: "black",
            whiteSpace: "pre-wrap",
            fontSize: "26px",
            fontFamily: "Pretendard",
            fontWeight: "bold",
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>선물 연구소</p>
        </div>

        <div
          className=""
          style={{
            position: "absolute",
            top: "132px",
            width: "100%",
            color: "black",
            whiteSpace: "pre-wrap",
            fontSize: "15px",
            fontFamily: "Pretendard",
            fontWeight: "bold",
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>좋은 선물에 대해서 고민하고 연구합니다.</p>
        </div>
        <div
          className=""
          style={{ position: "absolute", top: "208px", width: "100%", }}
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="img/beo_gift01.png" />
        </div>

        <div
          className=""
          style={{ position: "absolute", top: "329px", width: "100%", }}
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="img/beo_gift02.png" />
        </div>
      </div>

      <div
        className=""
        style={{
          position: "relative",
          width: "100%",
          height: "495px",
          textAlign: "center",
        }}
      >
        <div
          className=""
          style={{
            position: "absolute",
            top: "70px",
            width: "100%",
            color: "black",
            whiteSpace: "pre-wrap",
            fontSize: "22px",
            fontFamily: "Pretendard",
            fontWeight: "bold",
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>FAQ</p>
        </div>

        <div
          className=""
          style={{
            position: "absolute",
            top: "150px",
            width: "100%",
            textAlign: "center",
          }}
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <div style={{textAlign:'center',width:'90%', margin:'auto'}}>
          <Accordion />
          </div>
        </div>
      </div>

      <div
        className=""
        style={{
          position: "relative",
          width: "100%",
          height: "266px",
          textAlign: "center",
        }}
      >
        <div
          className=""
          style={{ position: "absolute", width: "100%", }}
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="img/beo_bg01.png" style={{width: "100%"}}  />
        </div>

        <div
          className=""
          style={{
            position: "absolute",
            top: "5px",
            width: "100%",
            height: "90px",
            color: "black",
            whiteSpace: "pre-wrap",
            fontSize: "22px",
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>{req_comment}</p>
        </div>
        <div
          className=""
          style={{ position: "absolute", top: "134px", width: "100%", }}
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="/img/beo_req_button.png" />
        </div>
      </div>

      <div
        className=""
        style={{
          position: "relative",
          width: "100%",
          height: "340px",
          textAlign: "center",
        }}
      >
        <div
          className=""
          style={{ position: "absolute", top: "194px", width: "100%", }}
        >
          <img src="/img/beo_bottom.png"  style={{ width: "100%", }}/>
        </div>
      </div>

      <div
        className=""
        style={{
          position: "relative",
          width: "100%",
          height: "200px",

          textAlign: "center",
        }}
      >
        <div
          className=""
          style={{
            position: "absolute",
            height: "75px",
            top: "250px",
            width: "100%",
          }}
        >
          <img src="/img/gift_button.png" />
        </div>
      </div>
    </div>
  );


  return (
    <div
      className=""
      style={{ margin: "auto", }}
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
        <img src="img/main_image.png" style={{ width: "100%" }} />
        <div
          className=""
          style={{
            position: "absolute",
            left: "20px",
            top: "80px",
            width: "126px",
          }}
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="img/kakao_img.png" />
        </div>
        <div
          className=""
          style={{
            position: "absolute",
            left: "20px",
            top: "95px",
            // width: "100%",
            color: "white",
            fontSize: "32px",
            fontFamily: "Pretendard",
            fontWeight: "bold",
            lineHeight: "38px",
          }}
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <p>선물 고민 중인가요?</p>
        </div>
        <div
          className=""
          style={{
            position: "absolute",
            left: "20px",
            top: "140px",
            // width: "100%",
            color: "white",
            fontSize: "32px",
            fontFamily: "Pretendard",
            fontWeight: "bold",
            lineHeight: "38px",
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>1분이면 충분해요</p>
        </div>
        <div
          className=""
          style={{
            position: "absolute",
            left: "20px",
            top: "205px",
            // width: "100%",
            color: "white",
            fontSize: "14px",
            fontFamily: "Pretendard",
            lineHeight: "17px",
          }}
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <p>200만건 이상의 선물 데이터를 분석했어요.</p>
        </div>
        <div
          className=""
          style={{
            position: "absolute",
            left: "20px",
            top: "225px",
            // width: "100%",
            color: "white",
            fontSize: "14px",
            fontFamily: "Pretendard",
            lineHeight: "17px",
          }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p>내게 꼭 맞는 선물 추천을 받아보세요.</p>
        </div>
      </div>
      <Sliders />
      <div
        className=""
        style={{
          position: "relative",
          width: "100%",
          height: "758px",
          textAlign: "center",
        }}
      >
        <div
          className=""
          style={{
            position: "absolute",
            top: "60px",

            width: "100%",
            color: "black",
            fontSize: "16px",
            fontFamily: "Pretendard",
          }}
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <p>선물 전문가 베오가 도와드릴게요.</p>
        </div>
        <div
          className=""
          style={{
            position: "absolute",
            top: "139px",
            width: "100%",
            color: "black",
            whiteSpace: "pre-wrap",
            fontSize: "26px",
            fontFamily: "Pretendard",
            fontWeight: "bold",
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>{beo_comment}</p>
        </div>
        <div
          className=""
          style={{
            position: "absolute",
            top: "229px",
            width: "100%",
            color: "black",
            whiteSpace: "pre-wrap",

            fontSize: "15px",
            fontFamily: "Pretendard",
          }}
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <p>{beo_comment2}</p>
        </div>
        <div
          className=""
          style={{
            position: "absolute",
            top: "273px",
            height: "484.9px",
            width: "100%",
          }}
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="img/phone.png" />
        </div>
      </div>

      <div
        className=""
        style={{
          position: "relative",
          width: "100%",
          height: "537px",
          textAlign: "center",
        }}
      >
        <div
          className=""
          style={{
            position: "absolute",
            top: "100px",
            width: "100%",
            color: "black",
            whiteSpace: "pre-wrap",
            fontSize: "26px",
            fontFamily: "Pretendard",
            fontWeight: "bold",
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>{beo_comment3}</p>
        </div>
        <div
          className=""
          style={{
            position: "absolute",
            top: "190px",
            width: "100%",
            color: "black",
            whiteSpace: "pre-wrap",

            fontSize: "15px",
            fontFamily: "Pretendard",
            fontWeight: "bold",
          }}
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <p>{beo_comment4}</p>
        </div>
        <div
          className=""
          style={{ position: "absolute", top: "279px", width: "100%" }}
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="img/no_ads.png" />
        </div>
      </div>

      <div
        className=""
        style={{
          position: "relative",
          width: "100%",
          height: "598px",
          textAlign: "center",
        }}
      >
        <div
          className=""
          style={{
            position: "absolute",
            top: "100px",
            width: "100%",
            color: "black",
            whiteSpace: "pre-wrap",
            fontSize: "26px",
            fontFamily: "Pretendard",
            fontWeight: "bold",
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>{beo_comment5}</p>
        </div>
        <div
          className=""
          style={{
            position: "absolute",
            top: "190px",
            width: "100%",
            color: "black",
            whiteSpace: "pre-wrap",

            fontSize: "15px",
            fontFamily: "Pretendard",
          }}
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <p>{beo_comment6}</p>
        </div>

        <div style={{ textAlign: "center",width:'100%',}}>
          <div
            className=""
            style={{
              position: "absolute",
              width:'100%',
              right:'20px',
              // left: "10px",
              top: "279px",
            }}
            data-aos="fade-up"
            aos-easing="ease-in-sine"
          >
            <img src="img/beo_chat01.png" />
          </div>

          <div
            className=""
            style={{
              textAlign: "right",
              position: "absolute",
              width: '100%',
              right:'50px',
              // left:'130px' ,
              top: "350px",
            }}
            data-aos="fade-up"
            aos-easing="ease-in-sine"
          >
            <img src="img/beo_chat02.png" />
          </div>

          <div
            className=""
            style={{
              position: "absolute",
              width:'100%',
              right:'10px',
              top: "403px",
            }}
            data-aos="fade-up"
            aos-easing="ease-in-sine"
          >
            <img src="img/beo_chat03.png" />
          </div>

          <div
            className=""
            style={{
              textAlign: "right",
              position: "absolute",
              width:'100%',
              right:'50px',
              // left: "292px",
              top: "492px",
            }}
            data-aos="fade-up"
            aos-easing="ease-in-sine"
          >
            <img src="img/beo_chat04.png" />
          </div>
        </div>
      </div>

       <div
        className=""
        style={{
          position: "relative",
          width: "100%",
          height: "768px",
          textAlign: "center",
        }}
      >
        <div
          className=""
          style={{
            position: "absolute",
            top: "60px",
            width: "100%",
            color: "black",
            whiteSpace: "pre-wrap",
            fontSize: "30px",
            fontFamily: "Pretendard",
            fontWeight: "bold",
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>{beo_comment7}</p>
        </div>
        <div
          className=""
          style={{ position: "absolute", top: "201px", width: "100%", }}
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="img/beo_req.png" />
        </div>
      </div>

      <div
        className=""
        style={{
          position: "relative",
          width: "100%",
          height: "1270px",
          textAlign: "center",
          backgroundColor: "#FFFAF5",
        }}
      >
      <div
          className=""
          style={{
            position: "absolute",
            top: "40px",
            width: "100%",
            color: "#49382E",
            whiteSpace: "pre-wrap",
            fontSize: "20px",
            fontFamily: "Pretendard",
            fontWeight: "bold",
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>{review_comment}</p>
        </div>
        <div
          className=""
          style={{
            position: "absolute",
            top: "96px",
            width: "100%",
            color: "#49382E",
            whiteSpace: "pre-wrap",

            fontSize: "18px",
            fontFamily: "Pretendard",
            fontWeight: "bold",
          }}
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <p>{review_comment2}</p>
        </div>

        <div
          className=""
          style={{ position: "absolute", top: "180px", width: "100%", }}
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="img/beo_review01.png" />
        </div>

        <div
          className=""
          style={{ position: "absolute", top: "450px", width: "100%", }}
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="img/beo_review02.png" />
        </div>

        <div
          className=""
          style={{ position: "absolute", top: "723px", width: "100%", }}
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="img/beo_review03.png" />
        </div>

        <div
          className=""
          style={{ position: "absolute", top: "973px", width: "100%", }}
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="img/beo_review04.png" />
        </div>
      </div>

      <div
        className=""
        style={{
          position: "relative",
          width: "100%",
          height: "475px",
          textAlign: "center",
        }}
      >
        <div
          className=""
          style={{
            position: "absolute",
            top: "70px",
            width: "100%",
            color: "black",
            whiteSpace: "pre-wrap",
            fontSize: "26px",
            fontFamily: "Pretendard",
            fontWeight: "bold",
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>선물 연구소</p>
        </div>

        <div
          className=""
          style={{
            position: "absolute",
            top: "132px",
            width: "100%",
            color: "black",
            whiteSpace: "pre-wrap",
            fontSize: "15px",
            fontFamily: "Pretendard",
            fontWeight: "bold",
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>좋은 선물에 대해서 고민하고 연구합니다.</p>
        </div>
        <div
          className=""
          style={{ position: "absolute", top: "208px", width: "100%", }}
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="img/beo_gift01.png" />
        </div>

        <div
          className=""
          style={{ position: "absolute", top: "329px", width: "100%", }}
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="img/beo_gift02.png" />
        </div>
      </div>

      <div
        className=""
        style={{
          position: "relative",
          width: "100%",
          height: "495px",
          textAlign: "center",
        }}
      >
        <div
          className=""
          style={{
            position: "absolute",
            top: "70px",
            width: "100%",
            color: "black",
            whiteSpace: "pre-wrap",
            fontSize: "22px",
            fontFamily: "Pretendard",
            fontWeight: "bold",
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>FAQ</p>
        </div>

        <div
          className=""
          style={{
            position: "absolute",
            top: "150px",
            width: "100%",
            textAlign: "center",
          }}
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <div style={{textAlign:'center',width:'90%', margin:'auto'}}>
          <Accordion />
          </div>
        </div>
      </div>

      <div
        className=""
        style={{
          position: "relative",
          width: "100%",
          height: "266px",
          textAlign: "center",
        }}
      >
        <div
          className=""
          style={{ position: "absolute", width: "100%", }}
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="img/beo_bg01.png" style={{width: "100%"}}  />
        </div>

        <div
          className=""
          style={{
            position: "absolute",
            top: "5px",
            width: "100%",
            height: "90px",
            color: "black",
            whiteSpace: "pre-wrap",
            fontSize: "22px",
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>{req_comment}</p>
        </div>
        <div
          className=""
          style={{ position: "absolute", top: "134px", width: "100%", }}
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="/img/beo_req_button.png" />
        </div>
      </div>

      <div
        className=""
        style={{
          position: "relative",
          width: "100%",
          height: "340px",
          textAlign: "center",
        }}
      >
        <div
          className=""
          style={{ position: "absolute", top: "194px", width: "100%", }}
        >
          <img src="/img/beo_bottom.png"  style={{ width: "100%", }}/>
        </div>
      </div>

      <div
        className=""
        style={{
          position: "relative",
          width: "100%",
          height: "200px",

          textAlign: "center",
        }}
      >
        <div
          className=""
          style={{
            position: "absolute",
            height: "75px",
            top: "250px",
            width: "100%",
          }}
        >
          <img src="/img/gift_button.png" />
        </div>
      </div>
    </div>
  );

  return (
    <div
      className=""
      style={{ margin: "auto", }}
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
        <img src="img/main_image.png" style={{ width: "100%" }} />
        <div
          className=""
          style={{
            position: "absolute",
            left: "20px",
            top: "80px",
            width: "126px",
          }}
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="img/kakao_img.png" />
        </div>
        <div
          className=""
          style={{
            position: "absolute",
            left: "20px",
            top: "95px",
            // width: "100%",
            color: "white",
            fontSize: "32px",
            fontFamily: "Pretendard",
            fontWeight: "bold",
            lineHeight: "38px",
          }}
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <p>선물 고민 중인가요?</p>
        </div>
        <div
          className=""
          style={{
            position: "absolute",
            left: "20px",
            top: "140px",
            // width: "100%",
            color: "white",
            fontSize: "32px",
            fontFamily: "Pretendard",
            fontWeight: "bold",
            lineHeight: "38px",
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>1분이면 충분해요</p>
        </div>
        <div
          className=""
          style={{
            position: "absolute",
            left: "20px",
            top: "205px",
            // width: "100%",
            color: "white",
            fontSize: "14px",
            fontFamily: "Pretendard",
            lineHeight: "17px",
          }}
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <p>200만건 이상의 선물 데이터를 분석했어요.</p>
        </div>
        <div
          className=""
          style={{
            position: "absolute",
            left: "20px",
            top: "225px",
            // width: "100%",
            color: "white",
            fontSize: "14px",
            fontFamily: "Pretendard",
            lineHeight: "17px",
          }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p>내게 꼭 맞는 선물 추천을 받아보세요.</p>
        </div>
      </div>
      <Sliders />
      <div
        className=""
        style={{
          position: "relative",
          width: "100%",
          height: "758px",
          textAlign: "center",
        }}
      >
        <div
          className=""
          style={{
            position: "absolute",
            top: "60px",

            width: "100%",
            color: "black",
            fontSize: "16px",
            fontFamily: "Pretendard",
          }}
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <p>선물 전문가 베오가 도와드릴게요.</p>
        </div>
        <div
          className=""
          style={{
            position: "absolute",
            top: "139px",
            width: "100%",
            color: "black",
            whiteSpace: "pre-wrap",
            fontSize: "26px",
            fontFamily: "Pretendard",
            fontWeight: "bold",
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>{beo_comment}</p>
        </div>
        <div
          className=""
          style={{
            position: "absolute",
            top: "229px",
            width: "100%",
            color: "black",
            whiteSpace: "pre-wrap",

            fontSize: "15px",
            fontFamily: "Pretendard",
          }}
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <p>{beo_comment2}</p>
        </div>
        <div
          className=""
          style={{
            position: "absolute",
            top: "273px",
            height: "484.9px",
            width: "100%",
          }}
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="img/phone.png" />
        </div>
      </div>

      <div
        className=""
        style={{
          position: "relative",
          width: "100%",
          height: "537px",
          textAlign: "center",
        }}
      >
        <div
          className=""
          style={{
            position: "absolute",
            top: "100px",
            width: "100%",
            color: "black",
            whiteSpace: "pre-wrap",
            fontSize: "26px",
            fontFamily: "Pretendard",
            fontWeight: "bold",
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>{beo_comment3}</p>
        </div>
        <div
          className=""
          style={{
            position: "absolute",
            top: "190px",
            width: "100%",
            color: "black",
            whiteSpace: "pre-wrap",

            fontSize: "15px",
            fontFamily: "Pretendard",
            fontWeight: "bold",
          }}
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <p>{beo_comment4}</p>
        </div>
        <div
          className=""
          style={{ position: "absolute", top: "279px", width: "100%" }}
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="img/no_ads.png" />
        </div>
      </div>

      <div
        className=""
        style={{
          position: "relative",
          width: "100%",
          height: "598px",
          textAlign: "center",
        }}
      >
        <div
          className=""
          style={{
            position: "absolute",
            top: "100px",
            width: "100%",
            color: "black",
            whiteSpace: "pre-wrap",
            fontSize: "26px",
            fontFamily: "Pretendard",
            fontWeight: "bold",
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>{beo_comment5}</p>
        </div>
        <div
          className=""
          style={{
            position: "absolute",
            top: "190px",
            width: "100%",
            color: "black",
            whiteSpace: "pre-wrap",

            fontSize: "15px",
            fontFamily: "Pretendard",
          }}
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <p>{beo_comment6}</p>
        </div>

        <div style={{ textAlign: "center",width:'100%',}}>
          <div
            className=""
            style={{
              position: "absolute",
              width:'100%',
              right:'20px',
              // left: "10px",
              top: "279px",
            }}
            data-aos="fade-up"
            aos-easing="ease-in-sine"
          >
            <img src="img/beo_chat01.png" />
          </div>

          <div
            className=""
            style={{
              textAlign: "right",
              position: "absolute",
              width: '100%',
              right:'50px',
              // left:'130px' ,
              top: "350px",
            }}
            data-aos="fade-up"
            aos-easing="ease-in-sine"
          >
            <img src="img/beo_chat02.png" />
          </div>

          <div
            className=""
            style={{
              position: "absolute",
              width:'100%',
              right:'10px',
              top: "403px",
            }}
            data-aos="fade-up"
            aos-easing="ease-in-sine"
          >
            <img src="img/beo_chat03.png" />
          </div>

          <div
            className=""
            style={{
              textAlign: "right",
              position: "absolute",
              width:'100%',
              right:'50px',
              // left: "292px",
              top: "492px",
            }}
            data-aos="fade-up"
            aos-easing="ease-in-sine"
          >
            <img src="img/beo_chat04.png" />
          </div>
        </div>
      </div>

       <div
        className=""
        style={{
          position: "relative",
          width: "100%",
          height: "768px",
          textAlign: "center",
        }}
      >
        <div
          className=""
          style={{
            position: "absolute",
            top: "60px",
            width: "100%",
            color: "black",
            whiteSpace: "pre-wrap",
            fontSize: "30px",
            fontFamily: "Pretendard",
            fontWeight: "bold",
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>{beo_comment7}</p>
        </div>
        <div
          className=""
          style={{ position: "absolute", top: "201px", width: "100%", }}
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="img/beo_req.png" />
        </div>
      </div>

      <div
        className=""
        style={{
          position: "relative",
          width: "100%",
          height: "1270px",
          textAlign: "center",
          backgroundColor: "#FFFAF5",
        }}
      >
      <div
          className=""
          style={{
            position: "absolute",
            top: "40px",
            width: "100%",
            color: "#49382E",
            whiteSpace: "pre-wrap",
            fontSize: "20px",
            fontFamily: "Pretendard",
            fontWeight: "bold",
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>{review_comment}</p>
        </div>
        <div
          className=""
          style={{
            position: "absolute",
            top: "96px",
            width: "100%",
            color: "#49382E",
            whiteSpace: "pre-wrap",

            fontSize: "18px",
            fontFamily: "Pretendard",
            fontWeight: "bold",
          }}
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <p>{review_comment2}</p>
        </div>

        <div
          className=""
          style={{ position: "absolute", top: "180px", width: "100%", }}
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="img/beo_review01.png" />
        </div>

        <div
          className=""
          style={{ position: "absolute", top: "450px", width: "100%", }}
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="img/beo_review02.png" />
        </div>

        <div
          className=""
          style={{ position: "absolute", top: "723px", width: "100%", }}
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="img/beo_review03.png" />
        </div>

        <div
          className=""
          style={{ position: "absolute", top: "973px", width: "100%", }}
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="img/beo_review04.png" />
        </div>
      </div>

      <div
        className=""
        style={{
          position: "relative",
          width: "100%",
          height: "475px",
          textAlign: "center",
        }}
      >
        <div
          className=""
          style={{
            position: "absolute",
            top: "70px",
            width: "100%",
            color: "black",
            whiteSpace: "pre-wrap",
            fontSize: "26px",
            fontFamily: "Pretendard",
            fontWeight: "bold",
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>선물 연구소</p>
        </div>

        <div
          className=""
          style={{
            position: "absolute",
            top: "132px",
            width: "100%",
            color: "black",
            whiteSpace: "pre-wrap",
            fontSize: "15px",
            fontFamily: "Pretendard",
            fontWeight: "bold",
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>좋은 선물에 대해서 고민하고 연구합니다.</p>
        </div>
        <div
          className=""
          style={{ position: "absolute", top: "208px", width: "100%", }}
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="img/beo_gift01.png" />
        </div>

        <div
          className=""
          style={{ position: "absolute", top: "329px", width: "100%", }}
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="img/beo_gift02.png" />
        </div>
      </div>

      <div
        className=""
        style={{
          position: "relative",
          width: "100%",
          height: "495px",
          textAlign: "center",
        }}
      >
        <div
          className=""
          style={{
            position: "absolute",
            top: "70px",
            width: "100%",
            color: "black",
            whiteSpace: "pre-wrap",
            fontSize: "22px",
            fontFamily: "Pretendard",
            fontWeight: "bold",
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>FAQ</p>
        </div>

        <div
          className=""
          style={{
            position: "absolute",
            top: "150px",
            width: "100%",
            textAlign: "center",
          }}
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <div style={{textAlign:'center',width:'90%', margin:'auto'}}>
          <Accordion />
          </div>
        </div>
      </div>

      <div
        className=""
        style={{
          position: "relative",
          width: "100%",
          height: "266px",
          textAlign: "center",
        }}
      >
        <div
          className=""
          style={{ position: "absolute", width: "100%", }}
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="img/beo_bg01.png" style={{width: "100%"}}  />
        </div>

        <div
          className=""
          style={{
            position: "absolute",
            top: "5px",
            width: "100%",
            height: "90px",
            color: "black",
            whiteSpace: "pre-wrap",
            fontSize: "22px",
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>{req_comment}</p>
        </div>
        <div
          className=""
          style={{ position: "absolute", top: "134px", width: "100%", }}
          data-aos="fade-up"
          aos-easing="ease-in-sine"
        >
          <img src="/img/beo_req_button.png" />
        </div>
      </div>

      <div
        className=""
        style={{
          position: "relative",
          width: "100%",
          height: "340px",
          textAlign: "center",
        }}
      >
        <div
          className=""
          style={{ position: "absolute", top: "194px", width: "100%", }}
        >
          <img src="/img/beo_bottom.png"  style={{ width: "100%", }}/>
        </div>
      </div>

      <div
        className=""
        style={{
          position: "relative",
          width: "100%",
          height: "200px",

          textAlign: "center",
        }}
      >
        <div
          className=""
          style={{
            position: "absolute",
            height: "75px",
            top: "250px",
            width: "100%",
          }}
        >
          <img src="/img/gift_button.png" />
        </div>
      </div>
    </div>
  );

};

export default Index;
