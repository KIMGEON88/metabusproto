import styled from "styled-components";
import "../styles/css/App.css";

import Logo from "../Image/logo.png";
import MinistryImage from "../Image/MinistryImage.png";
import ShortLine from "../Image/ShortLine.png";
import LongLine from "../Image/LongLine.png";
import Facebook from "../Image/Facebook.png";

const ContentsTwoContainer = styled.div`
  width: 100%;
  height: 125vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f4f4f4;
`;
const LineSizeOne = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 3.5vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;
const LineSizeTwo = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 1vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeThree = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 2vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeFour = styled.div`
  font-family: "Pretendard-Light";
  font-size: 2vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeFive = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 2vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeSix = styled.div`
  font-family: "Pretendard-Light";
  font-size: 1.5vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const XImageLeft = styled.div`
  width: 3vw;
  height: 0.1vw;
  background-color: #cecece;
  transform: rotate(45deg);
`;

const XImageRight = styled.div`
  width: 3vw;
  height: 0.1vw;
  background-color: #cecece;
  transform: rotate(-45deg);
`;

const ImageContainerOne = styled.div`
  width: 10vw;
  height: 5vw;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  ${({ src }) => {
    return src ? `background-image: url(${src})` : null;
  }}
`;

const ImageContainerTwo = styled.div`
  width: 15vw;
  height: 3vw;
  margin-top: 1vw;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  ${({ src }) => {
    return src ? `background-image: url(${src})` : null;
  }}
`;

const MiddleLineContainer = styled.div`
  width: 100%;
  height: 5vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 5vw;
`;

const GreenBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25vw;
  margin-top: 5vw;
`;

const GreenBoxWrapperOne = styled.div`
  width: 25vw;
  height: 20vw;
  border: solid;
  border-width: thin;
  border-radius: 3vw;
  border-color: #00ffd6;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 3vw;
  background-size: 6vw 1.5vw;
  background-image: url(${ShortLine});
  background-position: right 29% bottom 66%;
  background-repeat: no-repeat;
`;

const GreenBoxWrapperTwo = styled.div`
  width: 25vw;
  height: 20vw;
  border: solid;
  border-width: thin;
  border-radius: 3vw;
  border-color: #00ffd6;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 3vw;
  background-size: 12vw 1.3vw;
  background-image: url(${LongLine});
  background-position: right 66% bottom 67%;
  background-repeat: no-repeat;
`;

const GreenBoxWrapperThree = styled.div`
  width: 75vw;
  height: 20vw;
  border: solid;
  border-width: thin;
  border-radius: 3vw;
  border-color: #00ffd6;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10vw;
  background-size: 15vw 1.3vw;
  background-image: url(${LongLine});
  background-position: right 56% bottom 78%;
  background-repeat: no-repeat;
`;

const ContentsTwo = () => {
  return (
    <ContentsTwoContainer>
      <LineSizeOne>
        <text>당신의 </text>
        <text style={{ color: "#0d7377" }}>미래를 경정할 핵심기술!</text>
      </LineSizeOne>
      <LineSizeOne>
        <text>기회를 잡고 싶다면 </text>
        <text style={{ color: "#0d7377" }}>메타버스</text>
        <text>가 답이다!</text>
      </LineSizeOne>
      <LineSizeTwo marginTop={"1vw"}>
        <text style={{ color: "#cecece" }}>
          세상의 판이 바뀔때마다 미리 앞서간 10%의 사람들이 나머지 90% 기회를
          독점합니다.
        </text>
      </LineSizeTwo>
      <LineSizeTwo>
        <text style={{ color: "#cecece" }}>
          2022년 가장 경쟁력 있는 기술 중 단연코 `메타버스`가 있습니다.
        </text>
      </LineSizeTwo>
      <LineSizeFour marginTop={"6vw"}>
        <text style={{ color: "#101010" }}>
          코로나로 인해 세상의 판은 확실하게 변화되었습니다.
        </text>
      </LineSizeFour>
      <div
        style={{ width: "52vw", height: "2.5vw", backgroundColor: "#101010" }}
      >
        <LineSizeThree>
          <text style={{ color: "#00ffd6", marginLeft: "1vw" }}>
            2022년 가장 경쟁력 있는 기술
          </text>
          <text style={{ color: "white" }}> 중 단연코 </text>
          <text style={{ color: "#00ffd6" }}>'메타버스'</text>
          <text style={{ color: "white" }}>가 있습니다</text>
        </LineSizeThree>
      </div>
      <LineSizeOne marginTop={"6vw"}>그래서 디지털 교육에 특화된</LineSizeOne>
      <LineSizeOne>
        <text style={{ color: "#0d7377" }}>
          경일과 고용노동부가 준비했습니다
        </text>
      </LineSizeOne>
      <div
        style={{
          width: "50vw",
          height: "10vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "5vw",
        }}
      >
        <ImageContainerOne src={Logo}></ImageContainerOne>
        <div>
          <XImageLeft></XImageLeft>
          <XImageRight></XImageRight>
        </div>
        <ImageContainerOne src={MinistryImage}></ImageContainerOne>
      </div>
      <MiddleLineContainer>
        <div
          style={{ width: "25%", height: "0.2vw", backgroundColor: "#101010" }}
        ></div>
        <LineSizeOne>
          <text>부트캠프 수강생을 위한 </text>
          <text style={{ color: "#0d7377" }}>혜택!</text>
        </LineSizeOne>
        <div
          style={{ width: "25%", height: "0.2vw", backgroundColor: "#101010" }}
        ></div>
      </MiddleLineContainer>
      <GreenBoxContainer>
        <GreenBoxWrapperOne>
          <LineSizeFive marginTop={"5vw"}>수강료 0원</LineSizeFive>
          <LineSizeSix marginTop={"3vw"}>
            <text>K-Digital Training으로</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>40주간 무료로 강의를 듣고</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>메타버스 개발자로 취업하세요</text>
          </LineSizeSix>
        </GreenBoxWrapperOne>
        <GreenBoxWrapperTwo>
          <LineSizeFive marginTop={"5vw"}>기업 프로젝트 진행</LineSizeFive>
          <LineSizeSix marginTop={"3vw"}>
            <text>협약 기업을 통해</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>상용화 프로젝트를 직접 참여하여</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>기업 문제를 해결하고</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>실무능력을 기릅니다</text>
          </LineSizeSix>
        </GreenBoxWrapperTwo>
        <GreenBoxWrapperTwo>
          <LineSizeFive marginTop={"3vw"}>취업할 때까지</LineSizeFive>
          <LineSizeFive>1:1 취업 컨설팅 진행</LineSizeFive>
          <LineSizeSix marginTop={"3vw"}>
            <text>프로필, 기술이력서, 포트폴리오</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>면접준비까지?</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>취업할 때까지 지속적인 컨설팅 제공!</text>
          </LineSizeSix>
        </GreenBoxWrapperTwo>
      </GreenBoxContainer>
      <GreenBoxWrapperThree>
        <LineSizeFive marginTop={"3vw"}>카카오도 메타버스로 간다</LineSizeFive>
        <LineSizeTwo>
          <text style={{ color: "#cecece" }}>
            자회사 프렌즈 게임즈를 '메타보라'로 변경
          </text>
        </LineSizeTwo>
        <div
          style={{
            width: "0.1vw",
            height: "4vw",
            backgroundColor: "#00ffd6",
            marginTop: "1vw",
          }}
        ></div>
        <ImageContainerTwo src={Facebook}></ImageContainerTwo>
        <LineSizeTwo>
          <text style={{ color: "#cecece" }}>
            페이스북은 'META'로 사명을 변경
          </text>
        </LineSizeTwo>
      </GreenBoxWrapperThree>
    </ContentsTwoContainer>
  );
};

export default ContentsTwo;
