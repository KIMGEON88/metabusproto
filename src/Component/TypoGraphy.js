import styled from "styled-components";
import "../styles/css/App.css";

import Typed from "react-typed";

const TypoGraphyContainer = styled.div`
  width: 100%;
  height: 15vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #00ffd6;
`;

const LineText = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 2.5vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const TypoGraphy = () => {
  return (
    <TypoGraphyContainer>
      <div style={{ width: "50vw" }}>
        <LineText>
          <text>부트캠프 수강 후 여러분들은</text>
        </LineText>
      </div>
      <div
        style={{
          width: "50vw",
          display: "flex",
          flexDirection: "row",
          marginTop: "0.5vw",
        }}
      >
        <Typed
          strings={[
            "메타버스 건축가",
            "아바타 플랫폼 개발자",
            "XR콘텐츠 개발자",
            "융합 복합 콘텐츠 개발자",
            "맞춤형 게임 프로그래머",
            "게임 개발자",
            "메타버스 크리에이터",
          ]}
          typeSpeed={40}
          backSpeed={50}
          attr="placeholder"
          loop
        >
          <input
            type="text"
            style={{
              width: "25vw",
              height: "3.5vw",
              border: "solid",
              borderColor: "gray",
              boxShadow: "0.1vw 0.1vw 0.1vw 0.1vw #00ffd6",
              paddingTop: "1vw", // placeholder 상하 위치 조절
            }}
          />
        </Typed>
        <LineText>
          <text style={{ marginLeft: "0.5vw" }}>가 될 수 있습니다</text>
        </LineText>
      </div>
    </TypoGraphyContainer>
  );
};

export default TypoGraphy;
