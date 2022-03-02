import styled from "styled-components";
import "../styles/css/App.css";

import ArrowImage from "../Image/ArrowBlack.png";

const ContentsFourContainer = styled.div`
  width: 100%;
  height: 55vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #353535;
`;

const TextStyleOne = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 3.5vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const TextStyleTwo = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 2vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const TextStyleThree = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 1.5vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const BlackBox = styled.div`
  width: 30vw;
  height: 12vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #101010;
  border-radius: 2vw;
  margin-left: 2vw;
`;

const SupplyBox = styled.div`
  font-family: "Pretendard-Bold";
  margin-top: 2vw;
  width: 30vw;
  height: 3.5vw;
  background-color: #00ffd6;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ArrowImageSpan = styled.button`
  width: 7vw;
  height: 3vw;
  margin-left: 1vw;
  background-size: contain;
  background-image: url(${ArrowImage});
  background-position: center center;
  background-repeat: no-repeat;
`;

const ContentsFour = () => {
  return (
    <ContentsFourContainer>
      <TextStyleOne marginTop={"7vw"}>
        <text style={{ color: "#00ffd6" }}>아래의 지원을 갖췄다면 지원</text>
        <text style={{ color: "white" }}>하세요</text>
      </TextStyleOne>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2vw",
        }}
      >
        <BlackBox>
          <TextStyleTwo>
            <text style={{ color: "#00ffd6" }}>국민내일배움카드</text>
          </TextStyleTwo>
          <TextStyleTwo>
            <text style={{ color: "white" }}>발급이 가능한 분</text>
          </TextStyleTwo>
        </BlackBox>
        <BlackBox>
          <TextStyleTwo>
            <text style={{ color: "#00ffd6" }}>오전 9시부터 오후 6시까지</text>
          </TextStyleTwo>
          <TextStyleTwo>
            <text style={{ color: "white" }}>풀타임 학습이 가능한 분</text>
          </TextStyleTwo>
        </BlackBox>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2vw",
        }}
      >
        <BlackBox>
          <TextStyleTwo>
            <text style={{ color: "#00ffd6" }}>흥미가 아니라</text>
          </TextStyleTwo>
          <TextStyleTwo>
            <text style={{ color: "white" }}>취업을 위해 전력질주 하실 분</text>
          </TextStyleTwo>
        </BlackBox>
        <BlackBox>
          <TextStyleTwo>
            <text style={{ color: "#00ffd6" }}>지금이 마지막이라는</text>
          </TextStyleTwo>
          <TextStyleTwo>
            <text style={{ color: "white" }}>절박감으로 도전하실 분</text>
          </TextStyleTwo>
        </BlackBox>
      </div>
      <TextStyleThree marginTop={"3vw"}>
        <text style={{ color: "white" }}>국민내일배움카드가 처음이신가요?</text>
      </TextStyleThree>
      <TextStyleThree>
        <text style={{ color: "white" }}>
          걱정하지 마세요! 1분 만에 쉽고 빠르게 신청할 수 있습니다
        </text>
      </TextStyleThree>
      <TextStyleThree>
        <text style={{ color: "#00ffd6" }}>
          여러분을 위한 전화 안내 서포터를 통해 쉽고 빠르게 신청하세요!
        </text>
      </TextStyleThree>
      <SupplyBox>
        <text
          style={{
            fontSize: "2vw",
            color: "#101010",
            marginLeft: "0.5vw",
          }}
        >
          신청하러가기
        </text>
        <ArrowImageSpan as={"a"} href={"/"}></ArrowImageSpan>
      </SupplyBox>
    </ContentsFourContainer>
  );
};

export default ContentsFour;
