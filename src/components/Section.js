import React from "react";
import styled from "styled-components";

function Section() {
  return (
    <Wrap>
      <ItemText>
        <h1>Model S</h1>
        <p>Order Online for Touchless Delivery</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <Button tColor={"white"} bColor={"rgba(23, 26, 32, 0.8)"}>
            CUSTOM ORDER
          </Button>
          <Button tColor={""}>EXISTING INVENTORY</Button>
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/images/model-s.jpg");
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
  width: 530px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  color: ${(props) => props.tColor};
  background-color: ${(props) => props.bColor};

  border: none;
  border-radius: 30px;
  height: 48px;
  width: 256px;
  opacity: 0.85;
  font-size: 12px;
  cursor: pointer;
`;
const DownArrow = styled.img`
  height: 50px;

  animation: animateDown infinite 1.5s;
`;
const Buttons = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
