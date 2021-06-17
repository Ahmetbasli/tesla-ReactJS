import React from "react";
import styled from "styled-components";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Fade from "react-reveal/Fade";
function Header() {
  const [isNavBar, setisNavBar] = React.useState(false);
  console.log(isNavBar);
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
        <MenuIcon
          className="MenuIcon"
          onClick={() => {
            setisNavBar(true);
          }}
        />
        <BurgerNav isNavBar={isNavBar}>
          <CustomIcon>
            <CustomIconInside
              onClick={() => {
                setisNavBar(false);
              }}
            >
              {" "}
            </CustomIconInside>
          </CustomIcon>
          <div>
            <li>Existing Inventory</li>
            <li>Used Inventory</li>
            <li>Trade-in</li>
            <li>Cybertruck</li>
            <li>Roadaster</li>
            <li>Existing Inventory</li>
          </div>
        </BurgerNav>
      </BurgerIcon>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  z-index: 999;
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
  font-size: 12px;

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
.MenuIcon{
  cursor : pointer;
  &:hover {

    border-radius:100px;
    
    transform: scale(0.98)
  }
}
  
  }
`;
const BurgerNav = styled.div`
  position: fixed;
  right: 0px;
  top: 0;
  bottom: 0;
  width: 300px;
  background-color: white;
  list-style: none;
  padding: 20px;
  text-align: start;
  display: flex;
  transform: ${(props) =>
    props.isNavBar ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.2s;
  flex-direction: column;
  li {
    padding: 12px 0;
    border-bottom: 1px solid red;
    a {
      font-weight: 200;
    }
  }
`;

const CustomIconInside = styled(CloseIcon)`
  cursor: pointer;
`;
const CustomIcon = styled.div`
  display: flex;
  justify-content: flex-end;
`;
