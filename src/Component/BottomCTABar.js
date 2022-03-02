import styled from "styled-components";
import "../styles/css/App.css";

import React, { useState } from "react";
import Timer from "../Function/Timer";

import WhiteArrow from "../Image/WhiteArrow.png";

const ContentsOneContainer = styled.div`
  position: fixed;
  bottom: 1vw;
  width: 70%;
  height: 6vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #101010;
  border-radius: 1vw;
  background-size: 11vw 1.3vw;
  background-image: url(${WhiteArrow});
  background-position: right 85% bottom 78%;
  background-repeat: no-repeat;
`;

const FirstLine = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 1.5vw;
  color: #0d7377;
`;

const SecondLine = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 2.2vw;
  color: #0d7377;
`;

const ThirdLine = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 1.5vw;
  color: #101010;
`;

const ApplyButton = styled.button`
  width: 12vw;
  height: 2.5vw;
  background-color: #00ffd6;
  border-color: #00ffd6;
  border-radius: 1vw;
  margin-top: 0.5vw;
  cursor: pointer;
`;

const CloseButton = styled.div`
  margin-top: 0.7vw;
  margin-left: 1vw;
  width: 1.5vw;
  height: 1.5vw;
  cursor: pointer;
`;

const XImageLeft = styled.div`
  width: 1.5vw;
  height: 0.1vw;
  background-color: #cecece;
  transform: rotate(45deg);
`;

const XImageRight = styled.div`
  width: 1.5vw;
  height: 0.1vw;
  background-color: #cecece;
  transform: rotate(-45deg);
`;

const dday = new Date("April 4, 2022, 0:00:00").getTime();

const today = new Date().getTime(); // 밀리 초 단위
const gap = dday - today;
const day = Math.ceil(gap / (1000 * 60 * 60 * 24));
const hour = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const min = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60));
const sec = Math.ceil((gap % (1000 * 60)) / 1000);

const hoursMinSecs = { hours: hour, minutes: min, seconds: sec };

const BottomCTABar = () => {
  const [CTAAtive, setCTAAtive] = useState(true);
  return CTAAtive === true ? (
    <ContentsOneContainer>
      <div
        style={{
          width: "70%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          marginLeft: "4vw",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "80%",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <FirstLine>
            <text style={{ color: "#00ffd6" }}>수강료</text>
          </FirstLine>
          <FirstLine>
            <text style={{ color: "white", marginLeft: "0.5vw" }}>
              15,962,000원
            </text>
          </FirstLine>
          <FirstLine>
            <text style={{ color: "#00ffd6", marginLeft: "1.5vw" }}>0원!!</text>
          </FirstLine>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <SecondLine>
            <text style={{ color: "#00ffd6" }}>수강신청 마감까지</text>
          </SecondLine>
          <SecondLine>
            <text style={{ color: "white", marginLeft: "0.5vw" }}>
              {`${day}`}일
            </text>
            <Timer hoursMinSecs={hoursMinSecs}></Timer>
          </SecondLine>
          <SecondLine>
            <text style={{ color: "white", marginLeft: "0.5vw" }}>
              남았어요!
            </text>
          </SecondLine>
        </div>
      </div>
      <div style={{ width: "18%", height: "3vw" }}>
        <ApplyButton>
          <ThirdLine>수강신청하기{">>"}</ThirdLine>
        </ApplyButton>
      </div>
      <div style={{ width: "4%", height: "5vw" }}>
        <CloseButton
          onClick={() => {
            setCTAAtive(false);
          }}
        >
          <XImageLeft></XImageLeft>
          <XImageRight></XImageRight>
        </CloseButton>
      </div>
    </ContentsOneContainer>
  ) : (
    <></>
  );
};

export default BottomCTABar;
