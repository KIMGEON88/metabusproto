import styled from "styled-components";
import "../styles/css/App.css";

import StudentFaceImageOne from "../Image/StudentFaceImage1.png";
import StudentFaceImageTwo from "../Image/StudentFaceImage2.png";
import StudentFaceImageThree from "../Image/StudentFaceImage3.png";
import StudentFaceImageFour from "../Image/StudentFaceImage4.png";
import StudentFaceImageFive from "../Image/StudentFaceImage5.png";
import StudentFaceImageSix from "../Image/StudentFaceImage6.png";

const ContentsFiveContainer = styled.div`
  width: 100%;
  height: 65vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #cecece;
`;

const LineSizeOne = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 4vw;
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

const LineSizeThree = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 1.5vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeFour = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 1.4vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeFive = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 1vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const WhiteBoxWrapper = styled.div`
  width: 25vw;
  height: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  border-radius: 2vw;
`;

const ImageWrapper = styled.div`
  width: 8vw;
  height: 8vw;
  margin-top: 1vw;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;

  ${({ image }) => {
    return image ? `background-image: url(${image})` : null;
  }}
`;

const ContentsFive = () => {
  return (
    <ContentsFiveContainer>
      <LineSizeTwo marginTop={"7vw"}>
        여러분 또래의 취업 성공담을 확인하세요
      </LineSizeTwo>
      <LineSizeOne>GDB 챌린저 수강후기</LineSizeOne>
      <div
        style={{
          width: "80vw",
          height: "20vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "4vw",
        }}
      >
        <WhiteBoxWrapper>
          <ImageWrapper image={StudentFaceImageFive}></ImageWrapper>
          <LineSizeThree>GDB 김도형 챌린저</LineSizeThree>
          <LineSizeFour>VR 콘텐츠 개발사 입사</LineSizeFour>
          <div
            style={{
              width: "90%",
              height: "0.1vw",
              backgroundColor: "#cecece",
              marginTop: "0.5vw",
              marginBottom: "1vw",
            }}
          ></div>
          <LineSizeFive>개발자로써 게임을 만들고 있는 모습을</LineSizeFive>
          <LineSizeFive>상상하면서 동기부여를 했습니다.</LineSizeFive>
          <LineSizeFive>여러분도 할 수 있어요!</LineSizeFive>
        </WhiteBoxWrapper>
        <WhiteBoxWrapper>
          <ImageWrapper image={StudentFaceImageOne}></ImageWrapper>
          <LineSizeThree>GDB 김상균 챌린저</LineSizeThree>
          <LineSizeFour>캐쥬얼보드 메타버스 개발사 입사</LineSizeFour>
          <div
            style={{
              width: "90%",
              height: "0.1vw",
              backgroundColor: "#cecece",
              marginTop: "0.5vw",
              marginBottom: "1vw",
            }}
          ></div>
          <LineSizeFive>대학교 컴공과 졸업하고</LineSizeFive>
          <LineSizeFive>
            이렇다할 결과물이 없었는데 교수님 지도를 통해
          </LineSizeFive>
          <LineSizeFive>대기업 취업까지 성공해서 기쁩니다.</LineSizeFive>
        </WhiteBoxWrapper>
        <WhiteBoxWrapper>
          <ImageWrapper image={StudentFaceImageTwo}></ImageWrapper>
          <LineSizeThree>GDB 김희찬 챌린저</LineSizeThree>
          <LineSizeFour>메타버스 플랫폼 개발사 입사</LineSizeFour>
          <div
            style={{
              width: "90%",
              height: "0.1vw",
              backgroundColor: "#cecece",
              marginTop: "0.5vw",
              marginBottom: "1vw",
            }}
          ></div>
          <LineSizeFive>무언가 처음 시작한다면</LineSizeFive>
          <LineSizeFive>누구나 어려운 것 같아요. 하지만 </LineSizeFive>
          <LineSizeFive>
            중요한건 일단 시작해보는 일이라고 생각해요.
          </LineSizeFive>
        </WhiteBoxWrapper>
      </div>
      <div
        style={{
          width: "80vw",
          height: "25vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <WhiteBoxWrapper>
          <ImageWrapper image={StudentFaceImageThree}></ImageWrapper>
          <LineSizeThree>GDB 현하늘 챌린저</LineSizeThree>
          <LineSizeFour>스크린체험 콘텐츠개발사 입사</LineSizeFour>
          <div
            style={{
              width: "90%",
              height: "0.1vw",
              backgroundColor: "#cecece",
              marginTop: "0.5vw",
              marginBottom: "1vw",
            }}
          ></div>
          <LineSizeFive>프로그래밍 이해가 어려워 힘들고 지칠 때</LineSizeFive>
          <LineSizeFive>만들고 싶어하는 게임을 잔뜩 생각해보는게</LineSizeFive>
          <LineSizeFive>큰 힘이 되었어요.</LineSizeFive>
        </WhiteBoxWrapper>
        <WhiteBoxWrapper>
          <ImageWrapper image={StudentFaceImageSix}></ImageWrapper>
          <LineSizeThree>GDB 김지수 챌린저</LineSizeThree>
          <LineSizeFour>바이오 VR게임 개발사 입사</LineSizeFour>
          <div
            style={{
              width: "90%",
              height: "0.1vw",
              backgroundColor: "#cecece",
              marginTop: "0.5vw",
              marginBottom: "1vw",
            }}
          ></div>
          <LineSizeFive>자기가 하려하지 않고 떠먹으려고 하면</LineSizeFive>
          <LineSizeFive>힘들어집니다. 비전공자도 할 수 있어요!</LineSizeFive>
          <LineSizeFive>후배님들의 시작을 응원합니다.</LineSizeFive>
        </WhiteBoxWrapper>
        <WhiteBoxWrapper>
          <ImageWrapper image={StudentFaceImageFour}></ImageWrapper>
          <LineSizeThree>GDB 홍사민 챌린저</LineSizeThree>
          <LineSizeFour>실감형 콘텐츠개발사 입사</LineSizeFour>
          <div
            style={{
              width: "90%",
              height: "0.1vw",
              backgroundColor: "#cecece",
              marginTop: "0.5vw",
              marginBottom: "1vw",
            }}
          ></div>
          <LineSizeFive>기술적인 부분 뿐만 아니라</LineSizeFive>
          <LineSizeFive>팀워크를 통해 협업을 하는 방법을</LineSizeFive>
          <LineSizeFive>배울 수 있어서 좋았어요.</LineSizeFive>
        </WhiteBoxWrapper>
      </div>
    </ContentsFiveContainer>
  );
};

export default ContentsFive;
