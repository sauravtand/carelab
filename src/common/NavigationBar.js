import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import {
  NavLInkCompoenntBot,
  NavLInkCompoenntTop,
} from "../components/NavLInkCompoennt";
import Button from "./Button";
import LoginPage from "./LoginPage";
import TopNav from "./TopNav";

const navItem = [
  {
    title: "Online Consulation",
    subTitle: "Online Doctors",
    pathName: "videoconsult",
  },
  {
    title: "Lab Test",
    subTitle: "Home Sample Collection",
    pathName: "labtest",
  },
  {
    title: "Medicine",
    subTitle: "Home Delivery Service",
    pathName: "medicine",
  },
  {
    title: "Appointment",
    subTitle: "Book an appointment",
    pathName: "appointment",
  },
];
const menuItem = [
  {
    subTitle: "About us",
    pathName: "about",
  },
  {
    subTitle: "Contact us",
    pathName: "contactus",
  },
  {
    subTitle: "Our Partners",
    pathName: "/about",
  },
  {
    subTitle: "Covid Care",
    pathName: "/covidcare",
  },
];

const NavigationBar = () => {
  const [menu, setMenu] = useState(false);
  const [offset, setOffset] = useState(0);
  const [logPop, setlogPop] = useState(false);

  function popLog() {
    setlogPop(!logPop);
  }
  function closeFun(val) {
    setlogPop(val);
  }

  function bergerChangeValue() {
    if (menu == false) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  }

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);
  // console.log("offsets",offset);

  return (
    <>
      <NavigationContainer>
        {offset <= 100 ? <TopNav /> : ""}

        <NavContainer>
          <LogoContainer>
            <Link to="/">
              <img src="./images/logo.png" alt="" />
            </Link>
          </LogoContainer>
          <div className="navLink">
            {navItem.map((e) => (
              <NavLInkCompoenntTop
                key={e.title}
                title={e.title}
                subTitle={e.subTitle}
                pathName={e.pathName}
              />
            ))}
          </div>
          <Button
            title={"log-in"}
            secondaryBtn
            // pathName='login'
            onclick={popLog}
          ></Button>
        </NavContainer>
        <hr className="hrOne" />
        <MenuContainer>
          {menuItem.map((e) => (
            <NavLInkCompoenntBot
              key={e.subTitle}
              subTitle={e.subTitle}
              pathName={e.pathName}
            />
          ))}
        </MenuContainer>

        <div
          className={`loginInPop ${logPop === true ? "visible" : "notVisible"}`}
        >
          <LoginPage closeFun={closeFun}></LoginPage>
        </div>
      </NavigationContainer>
      <ResponiveNav>
        <TopNav></TopNav>
        <ResNavContainer>
          <LogoContainer>
            <Link to="/">
              <img src="./images/logo.png" alt="" />
            </Link>
          </LogoContainer>
          <div onClick={bergerChangeValue}>
            <i className={menu == false ? "icon-equals" : "icon-times"}></i>
          </div>
        </ResNavContainer>
        {menu == true ? (
          <HambergerMenu>
            {navItem.map((e) => (
              <NavLInkCompoenntTop
                key={e.title}
                title={e.title}
                subTitle={e.subTitle}
                pathName={e.pathName}
              />
            ))}
            {menuItem.map((e) => (
              <NavLInkCompoenntBot
                key={e.subTitle}
                subTitle={e.subTitle}
                pathName={e.pathName}
              />
            ))}
            <div style={{ marginLeft: "30px", marginTop: "10px" }}>
              <Button
                title={"log-in"}
                secondaryBtn
                pathName="login"
                // onclick={popLog}
              ></Button>
            </div>
          </HambergerMenu>
        ) : (
          ""
        )}
      </ResponiveNav>
    </>
  );
};
const hamNavAnimation = keyframes`
  0%{
    top: -300%;
  }
  100%{
    top: 100%;
  }
`;

export default NavigationBar;

const NavigationContainer = styled.div`
  background: #fefefe;
  box-shadow: 0 2px 10px 0 #8baab08d;
  backdrop-filter: blur(14.5px);
  -webkit-backdrop-filter: blur(14.5px);
  /* border: 1px solid rgba( 255, 255, 255, 0.18 ); */
  position: fixed;

  width: 100%;
  z-index: 100;

  .loginInPop {
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    bottom: 0;
  }
  .visible {
    visibility: visible;
  }
  .notVisible {
    visibility: hidden;
  }

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;
const NavContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 40px;
  justify-content: space-between;
  align-items: center;

  .navLink {
    display: flex;
  }
  @media (max-width: 1024px) {
    padding: 10px 20px;
  }
`;
const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  img {
    width: 100%;
  }
  @media (max-width: 1024px) {
    width: 150px;
  }
  @media (max-width: 500px) {
    width: 130px;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const ResponiveNav = styled.div`
  box-shadow: 0 5px 10px 0 #8baab08d;
  position: fixed;
  width: 100%;
  z-index: 100;
  background-color: dimgray;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }

  @media (max-width: 500px) {
    display: block;
  }
`;

const ResNavContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  position: relative;
  z-index: 100;

  background-color: #fefefe;
  i {
    font-size: 30px;
    transition: 0.3s ease;
    color: var(--primaryTxt);
  }

  /* img{
    width: 100px;
  } */
`;
const HambergerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  position: absolute;
  background-color: #fefefe;
  top: 100%;
  left: 0%;
  right: 0%;
  padding: 0 20px;
  z-index: 10;

  -webkit-animation-name: ${hamNavAnimation};
  -webkit-animation-duration: 0.5s;
  -webkit-animation-iteration-count: 1;
  -webkit-animation-timing-function: ease;
  -webkit-animation-fill-mode: forwards;
`;
