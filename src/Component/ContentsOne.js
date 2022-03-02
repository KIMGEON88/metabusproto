import styled from "styled-components";
import "../styles/css/App.css";

import Image from "../Image/firstBackgroundImage.png";
import ArrowImage from "../Image/ArrowImage.png";

const ContentsOneContainer = styled.div`
  width: 100%;
  height: 55vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f4f4f4;
  background-size: contain;
  background-image: url(${Image});
  background-position: center top;
  background-repeat: no-repeat;
`;

const FirstLine = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 1.5vw;
  color: #0d7377;
  margin-top: 8vw;
`;

const SecondLine = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 3.5vw;
  color: #101010;
`;

const ContentsBox = styled.div`
  font-family: "Pretendard-ExtraBold";
  margin-top: 2vw;
  width: 55vw;
  height: 35vw;
  box-shadow: 0.1vw 0.1vw 0.1vw 0.1vw lightgray;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const FirstLineInnerBox = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 2vw;
  color: #0d7377;
  margin-top: 2.5vw;
  margin-bottom: 1vw;
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

const LastLineInnerBox = styled.div`
  font-family: "Pretendard-Bold";
  margin-top: 2vw;
  width: 100%;
  height: 5vw;
  background-color: #101010;
  margin-top: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const InnerContentsBox = ({ title, duration }) => {
  return (
    <>
      <div style={{ marginTop: "1vw" }}>
        <text style={{ fontFamily: "Pretendard-Bold", fontSize: "1.5vw" }}>
          {`${title}`}
        </text>
      </div>
      <div
        style={{
          width: "2vw",
          height: "0.15vw",
          backgroundColor: "#0d7377",
          marginTop: "0.5vw",
        }}
      ></div>
      <div>
        <text
          style={{
            fontFamily: "Pretendard-Regular",
            fontSize: "1.5vw",
            marginTop: "0.5vw",
          }}
        >
          {`${duration}`}
        </text>
      </div>
    </>
  );
};

const ContentsOne = () => {
  return (
    <>
      <ContentsOneContainer>
        <FirstLine>막연함의 끝, 완벽한 경쟁력을 만들다</FirstLine>
        <SecondLine>메타버스 게임 개발자 부트캠프</SecondLine>
        <ContentsBox>
          <FirstLineInnerBox>GDB 부트캠프 36기</FirstLineInnerBox>
          <InnerContentsBox
            title={"모집기간"}
            duration={"2022.04.04 ~ 2023.01.23"}
          ></InnerContentsBox>
          <InnerContentsBox
            title={"시간"}
            duration={"AM 09:00 ~ PM 18:00"}
          ></InnerContentsBox>
          <InnerContentsBox
            title={"마감일"}
            duration={"2022.03.30"}
          ></InnerContentsBox>
          <InnerContentsBox
            title={"합격자 발표일"}
            duration={"2022.04.01"}
          ></InnerContentsBox>
          <LastLineInnerBox>
            <text
              style={{
                fontSize: "2vw",
                color: "white",
              }}
            >
              부트캠프 36기
            </text>
            <text
              style={{
                fontSize: "2vw",
                color: "#00ffd6",
                marginLeft: "0.5vw",
              }}
            >
              바로 지원하기
            </text>
            <ArrowImageSpan as={"a"} href={"/"}></ArrowImageSpan>
          </LastLineInnerBox>
        </ContentsBox>
        <div>
          {" "}
          <text
            style={{
              fontSize: "1vw",
              fontFamily: "Pretendard-Bold",
              color: "#cecece",
              marginTop: "0.5vw",
            }}
          >
            해당 부트캠프는 K-Digital Traning 과정으로{" "}
          </text>
          <text
            style={{
              fontSize: "1vw",
              fontFamily: "Pretendard-Bold",
              color: "#353535",
              marginTop: "0.5vw",
            }}
          >
            국민내일배움카드
          </text>
          <text
            style={{
              fontSize: "1vw",
              fontFamily: "Pretendard-Bold",
              color: "#cecece",
              marginTop: "0.5vw",
            }}
          >
            가 필요합니다.
          </text>
        </div>
      </ContentsOneContainer>
    </>
  );
};

export default ContentsOne;
