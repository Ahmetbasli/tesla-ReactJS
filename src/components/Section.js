import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
function Section({
  id,
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) {
  return (
    <Wrap backgroundImg={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <ButtonGroup>
          <Button tColor={"white"} bColor={"rgba(23, 26, 32, 0.8)"}>
            {leftBtnText}
          </Button>
          {rightBtnText && <Button tColor={""}>{rightBtnText}</Button>}
        </ButtonGroup>
        <Fade bottom>
          <DownArrow id={id} src="/images/down-arrow.svg" />
        </Fade>
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.backgroundImg});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const ItemText = styled.div`
  padding-top: 15vh;
  font-size: 26px;
`;
const ButtonGroup = styled.div`
  width: 780px;
  height: 60px;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    height: 80px;
  }
`;

const Button = styled.button`
  color: ${(props) => props.tColor};
  background-color: ${(props) => props.bColor};
  margin: 0 10px;
  border: none;
  border-radius: 30px;
  height: 32px;
  width: 300px;
  @media (max-width: 768px) {
    height: 35px;
    width: 200px;
  }

  opacity: 0.8;
  font-size: 12px;
  cursor: pointer;
`;
const DownArrow = styled.img`
  display: ${(props) => (props.id !== 1 ? "none" : "")};
  height: 50px;
  animation: animateDown infinite 1.5s;
  @media (max-width: 768px) {
    margin-top: 10px;
    height: 35px;
  }
`;
const Buttons = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
