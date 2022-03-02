import React, { useState } from "react";
import styled from "styled-components";
import "../styles/css/App.css";

const ContentsThreeContainer = styled.div`
  width: 100%;
  height: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f4f4f4;
`;

const LineTextOne = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 3vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineTextTwo = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 2vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineTextThree = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 2vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineTextFour = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 1.5vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const SectionBox = styled.button`
  font-family: "Pretendard-ExtraBold";
  width: 15vw;
  height: 3.5vw;
  border-radius: 1vw;
  border-color: #aecbcc;
  font-size: 2vw;
  color: white;
  cursor: pointer;
  margin-top: 1vw;
  ${({ backgroundColor }) => {
    return backgroundColor ? `background-color: ${backgroundColor}` : null;
  }}
`;

const SectionPage = (sectionState) => {
  if (sectionState === 1) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <LineTextThree marginTop={"5vw"}>
          구현에 필요한 기초지식과 문법을 배웁니다
        </LineTextThree>
        <LineTextFour marginTop={"2vw"}>
          프로그래밍 언어 기초와 기본 문법
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>객체지향과 게임 기초수학</LineTextFour>
        <LineTextFour marginTop={"1vw"}>알고리즘 학습하기</LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          아키텍쳐 설계와 아바타 구현
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>가상공간 구현</LineTextFour>
      </div>
    );
  } else if (sectionState === 2) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <LineTextThree marginTop={"5vw"}>Section 2</LineTextThree>
      </div>
    );
  } else if (sectionState === 3) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <LineTextThree marginTop={"5vw"}>Section 3</LineTextThree>
      </div>
    );
  } else if (sectionState === 4) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <LineTextThree marginTop={"5vw"}>Section 4</LineTextThree>
      </div>
    );
  }
};

const ContentsThree = () => {
  const [sectionState, setSectionState] = useState(1);
  return (
    <ContentsThreeContainer>
      <LineTextOne marginTop={"5vw"}>불필요한 내용은 빼고</LineTextOne>
      <LineTextOne>
        <text style={{ color: "#0d7377" }}>취업에 꼭 필요한 내용</text>으로
        채웠습니다
      </LineTextOne>
      <div
        style={{
          backgroundColor: "#0d7377",
          width: "60vw",
          height: "3vw",
          textAlign: "center",
          paddingTop: "0.2vw",
          marginTop: "0.5vw",
        }}
      >
        <LineTextTwo>
          <text
            style={{
              color: "white",
              letterSpacing: "0.5vw",
              wordSpacing: "1vw",
            }}
          >
            게임 개발사 대표가
          </text>
          <text
            style={{
              color: "#aecbcc",
              letterSpacing: "0.5vw",
              wordSpacing: "1vw",
              marginLeft: "1vw",
            }}
          >
            직접 설계한 40주 커리큘럼
          </text>
        </LineTextTwo>
        <div
          style={{
            width: "60vw",
            height: "25vw",
            marginTop: "3vw",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "30%",
              height: "25vw",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {sectionState === 1 ? (
              <SectionBox
                onClick={() => {
                  setSectionState(1);
                }}
                backgroundColor={"#0d7377"}
              >
                Section 1
              </SectionBox>
            ) : (
              <SectionBox
                onClick={() => {
                  setSectionState(1);
                }}
                backgroundColor={"#aecbcc"}
              >
                Section 1
              </SectionBox>
            )}
            {sectionState === 2 ? (
              <SectionBox
                onClick={() => {
                  setSectionState(2);
                }}
                backgroundColor={"#0d7377"}
              >
                Section 2
              </SectionBox>
            ) : (
              <SectionBox
                onClick={() => {
                  setSectionState(2);
                }}
                backgroundColor={"#aecbcc"}
              >
                Section 2
              </SectionBox>
            )}

            {sectionState === 3 ? (
              <SectionBox
                onClick={() => {
                  setSectionState(3);
                }}
                backgroundColor={"#0d7377"}
              >
                Section 3
              </SectionBox>
            ) : (
              <SectionBox
                onClick={() => {
                  setSectionState(3);
                }}
                backgroundColor={"#aecbcc"}
              >
                Section 3
              </SectionBox>
            )}
            {sectionState === 4 ? (
              <SectionBox
                onClick={() => {
                  setSectionState(4);
                }}
                backgroundColor={"#0d7377"}
              >
                Section 4
              </SectionBox>
            ) : (
              <SectionBox
                onClick={() => {
                  setSectionState(4);
                }}
                backgroundColor={"#aecbcc"}
              >
                Section 4
              </SectionBox>
            )}
          </div>
          <div
            style={{
              width: "70%",
              height: "25vw",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {SectionPage(sectionState)}
          </div>
        </div>
      </div>
    </ContentsThreeContainer>
  );
};

export default ContentsThree;
