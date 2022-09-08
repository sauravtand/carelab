import React from "react";
import styled from "styled-components";
import LandingPage from "../../common/LandingPage";
import NavigationBar from "../../common/NavigationBar";
import Footer from "../../common/Footer";
import LabTestCollection from "./LabTestCollection";
import Offers from "./Offers";
import HowItWorksNew from "../../common/HowItWorksNew";
import Labs from "../Labs";

const data = {
  title: "Book a Lab Test Online",
  subTitle: "Home services available for sample collection",
  btnTitle: "book now",
  var1: "Certified Pathology Labs ",
  var2: "Online Reports",
  img: "./images/labTest.webp",
  pathName: "http://lunivacare.ddns.net:8080/mHealth/Member/memBookLab",
};
const howData = [
  {
    title: "register",
    dis: "Register an account using your phone number",
    img: "./images/app.png",
  },
  {
    title: "Book Lab test",
    dis: "Home based sample collection, on users request",
    img: "./images/mobDoc2.png",
  },
  {
    title: "Reports",
    dis: "Repots can be Obtained via Online",
    img: "./images/app.png",
  },
];

const LabTestComponent = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Container>
        <LandingPage data={data}></LandingPage>
        <HowItWorksNew data={howData} />
        <LabTestCollection></LabTestCollection>
        <Offers />
        <Labs></Labs>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default LabTestComponent;

const Container = styled.div`
  padding: 60px 0px 0px 0px;
  @media (max-width: 768px) {
    padding: 100px 0px 0px 0xp;
  }
  @media (max-width: 500px) {
    padding: 70px 0px 0px 0px;
  }
`;
