import styled from "styled-components";
import "../styles/css/App.css";

import React from "react";
import Faq from "react-faq-component";

const FAQBoardContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
`;

const LineSizeOne = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 8vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeThree = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 3vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const data = {
  rows: [
    {
      title: "수강료가 정말 무료인가요?",
      content: "무료입니다.",
    },
    {
      title: "중간에 포기하면 불이익이 있나요?",
      content: "없습니다.",
    },
    {
      title: "지원에 제한이 있나요?",
      content: "없습니다.",
    },
    {
      title: "수강에 필요한 준비물이 있나요?",
      content: "없습니다.",
    },

    {
      title: "프로그래밍을 할 줄 모른다면 지원 할 수 없나요?",
      content: "있습니다.",
    },
  ],
};

const styles = {
  // bgColor: 'white',
  // titleTextColor: "blue",
  // titleTextSize: '48px',
  // rowTitleColor: "blue",
  rowTitleTextSize: "1.5vw",
  // rowContentColor: 'grey',
  rowContentTextSize: "1.5vw",
  rowContentPaddingTop: "0.5vw",
  rowContentPaddingBottom: "0.5vw",
  rowContentPaddingLeft: "0.5vw",
  rowContentPaddingRight: "7.5vw",
  // arrowColor: "red",
  //transitionDuration: "1s",
  // timingFunc: "ease"
};

const FAQBoard = () => {
  return (
    <FAQBoardContainer>
      <LineSizeOne marginTop="7vw">FAQ</LineSizeOne>
      <LineSizeThree>궁금한게 있으시다면 꼭 확인해보세요</LineSizeThree>
      <div style={{ marginBottom: "5vw" }}></div>
      <div style={{ width: "70vw" }}>
        <Faq
          data={data}
          styles={styles}
          config={{
            animate: true,
          }}
        />
      </div>
    </FAQBoardContainer>
  );
};

export default FAQBoard;
