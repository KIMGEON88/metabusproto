import styled from "styled-components";
import "../styles/css/App.css";

import SNSfacebook from "../Image/SNSfacebook.png";
import SNSinsta from "../Image/SNSinsta.png";
import SNSnaver from "../Image/SNSnaver.png";

const FooterContainer = styled.div`
  width: 100%;
  height: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #101010;
`;

const LineSizeOne = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 1vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeTwo = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 2vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const ImageContainer = styled.div`
  width: 3vw;
  height: 3vw;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  ${({ src }) => {
    return src ? `background-image: url(${src})` : null;
  }}
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div
        style={{
          color: "white",
          width: "80%",
          height: "15vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            color: "white",
            width: "30vw",
            height: "20vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "start",
            marginTop: "12vw",
          }}
        >
          <LineSizeTwo>
            <text style={{ color: "white" }}>경일게임아카데미</text>
          </LineSizeTwo>
          <LineSizeOne marginTop={"1vw"}>
            <text
              style={{
                color: "#cecece",
              }}
            >
              서울특별시 강동구 올림픽로 651 예경빌딩 4층
            </text>
          </LineSizeOne>
          <LineSizeOne marginTop={"0.5vw"}>
            <text
              style={{
                color: "#cecece",
              }}
            >
              대표자:박병준 | 개인정보관리책임자:서혁준
            </text>
          </LineSizeOne>
          <LineSizeOne marginTop={"0.5vw"}>
            <text
              style={{
                color: "#cecece",
              }}
            >
              사업자번호:212-81-89247 | 통신판매허가번호:제 2020-서울강동-1360호
            </text>
          </LineSizeOne>
          <LineSizeOne marginTop={"0.5vw"}>
            <text
              style={{
                color: "#cecece",
              }}
            >
              Tel:02-479-4050 | Fax:02-479-4056 | E-Mail:kigsnet@naver.com
            </text>
          </LineSizeOne>
        </div>
        <div
          style={{
            color: "white",
            width: "15vw",
            height: "20vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "start",
            marginTop: "12vw",
          }}
        >
          <LineSizeTwo>
            <text style={{ color: "white" }}>SNS</text>
          </LineSizeTwo>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "12vw",
              justifyContent: "space-between",
              marginTop: "1vw",
            }}
          >
            <ImageContainer
              as={"a"}
              href={"/"}
              src={SNSfacebook}
            ></ImageContainer>
            <ImageContainer as={"a"} href={"/"} src={SNSinsta}></ImageContainer>
            <ImageContainer as={"a"} href={"/"} src={SNSnaver}></ImageContainer>
          </div>
        </div>
      </div>
      <div
        style={{
          color: "white",
          width: "80%",
          height: "0.1vw",
          backgroundColor: "#cecece",
        }}
      ></div>
      <LineSizeOne marginTop={"1vw"}>
        <text
          style={{
            color: "#cecece",
          }}
        >
          COPYRIGHT Ⓒ KYUNGIL GAME ACADEMY. ALL RIGHTS RESERVED.
        </text>
      </LineSizeOne>
    </FooterContainer>
  );
};

export default Footer;
