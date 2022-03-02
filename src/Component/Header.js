import styled from "styled-components";
import "../styles/css/App.css";
import Logo from "../Image/logo.png";

const HeaderContainer = styled.div`
  width: 100%;
  height: 6vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #f4f4f4;
`;

const HeaderCenter = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 2vw;
`;

const HeaderRight = styled.button`
  font-family: "Pretendard-Bold";
  font-size: 1.3vw;
  height: 3vw;
  width: 12vw;
  color: white;
  border: solid;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0d7377;
  text-decoration: none;
`;

const HeaderLeft = styled.div`
  width: 9vw;
  height: 6vw;
  background-size: contain;
  background-image: url(${Logo});
  background-position: center center;
  background-repeat: no-repeat;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft></HeaderLeft>
      <HeaderCenter>4차산업혁명을 선도하는 게임아카데미</HeaderCenter>
      <HeaderRight as={"a"} href={"/"}>
        홈페이지 이동 {">"}
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
