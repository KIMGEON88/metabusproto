import styled from "styled-components";
import "../styles/css/App.css";

import ReactPlayer from "react-player/youtube";

const LineSizeOne = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 4vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeTwo = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 3vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeThree = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 2vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeFour = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 1.2vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const VideoContainer = styled.div`
  width: 100%;
  height: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f4f4f4;
`;

const VideoPlayWrapper = styled.div`
  width: 50vw;
  height: 30vw;
  display: flex;
  align-items: center;
  justify-items: center;
  background-color: #101010;
  margin-top: 2vw;
`;

const Video = () => {
  return (
    <VideoContainer>
      <LineSizeOne marginTop={"5vw"}>도전하세요!</LineSizeOne>
      <LineSizeTwo>
        여러분도 <text style={{ color: "#0d7377" }}>할 수 있습니다</text>
      </LineSizeTwo>
      <VideoPlayWrapper>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=7Si0YhhJ3Wo"
          width="50vw"
          height="30vw"
        />
      </VideoPlayWrapper>
      <LineSizeThree marginTop={"2vw"}>
        오프라인 수업의<text style={{ color: "#0d7377" }}> 가장 큰 장점</text>은
      </LineSizeThree>
      <LineSizeThree>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "27vw",
              height: "2.6vw",
              backgroundColor: "#101010",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <text style={{ color: "#00ffd6" }}>
              빠른 피드백과 소통할 동기, 선생님
            </text>
          </div>
          <div>
            <text style={{ color: "#101010" }}>이 있다는 것입니다</text>
          </div>
        </div>
      </LineSizeThree>
      <LineSizeFour marginTop={"0.5vw"}>
        <text style={{ color: "#353535" }}>
          유튜브를 많이 본다고 전문가가 되지 않는 것처럼
        </text>
        <text style={{ color: "#101010", marginLeft: "0.5vw" }}>
          훈련 없는 온라인 강의는 아무런 도움이 되지 않습니다
        </text>
      </LineSizeFour>
    </VideoContainer>
  );
};

export default Video;
