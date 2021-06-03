import React from "react";
import styled from "styled-components";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
function Header() {
  return (
    <Container>
      <a href="/#">
        <img src="images/logo.svg" alt="logo" />
      </a>
      <MiddleMenu>
        <a href="/#">Model S</a>
        <a href="/#">Model 3</a>
        <a href="/#">Model X</a>
        <a href="/#">Model Y</a>
      </MiddleMenu>
      <RightMenu>
        <a href="/#">shop tesla</a>
        <a href="/#">tesla account</a>
      </RightMenu>
      <BurgerIcon>
        <MenuIcon />
      </BurgerIcon>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  height: 5vh;
  width: 100%;
  position: fixed;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 0px 20px;
  margin-top: 10px;
  @media (max-width: 900px) {
    justify-content: space-between;
  }
`;
const MiddleMenu = styled.div`
  display: flex;
  justify-content: center;
  width: 1000px;
  white-space: nowrap;
  a {
    font-weight: 300;
    text-transform: uppercase;
    margin: 0 10px;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  width: 300px;
  display: flex;
  white-space: nowrap;
  justify-content: center;
  a {
    font-weight: 300;
    text-transform: uppercase;
    margin: 0 10px;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

const BurgerIcon = styled.div`
  cursor: pointer;
  }
`;
