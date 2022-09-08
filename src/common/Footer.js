import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Footer = () => {
  const date = new Date();

  return (
    <>
      <FooterContainer>
        <div className="footerCard">
          <div className="company">
            <img src="./images/logo.png" alt="" />
            <li>
              <i className="icon-location"></i> Kupondole, Lalitpur, Nepal
            </li>
            <li>
              <i className="icon-mail"></i> lunivatech@gmail.com
            </li>
            <li>
              <i className="icon-line-smartphone"></i> 01-5909085
            </li>
          </div>
          <h4>Follow Us:</h4>
          <li>
            <a href="https://www.facebook.com/lunivaCare">
              <i className="icon-facebook-square"></i>
            </a>
            <a href="#">
              <i className="icon-google"></i>{" "}
            </a>
            <a href="https://www.linkedin.com/company/lunivatech-pvt-ltd-/about/">
              <i className="icon-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/lunivacare/">
              <i className="icon-instagram"></i>{" "}
            </a>
          </li>
          <li>
            <Button
              title="sign-in"
              pathName="http://lunivacare.ddns.net:8080/mHealth/User/regiUser"
            ></Button>
          </li>
        </div>
        <div className="footerCard">
          <h4>Know Us</h4>
          <li>
            <a href="about">About us</a>
          </li>
          <li>
            <a href="contactus">Contact us</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="covidcare">Covid Care</a>
          </li>
        </div>
        <div className="footerCard">
          <h4>Our Services</h4>
          <li>
            <a href="covidcare">Covid Care</a>
          </li>
          <li>
            <a href="videoconsult">Video Consult</a>
          </li>
          <li>
            <a href="labtest">Lab Test</a>
          </li>
          <li>
            <a href="#">Online Reports</a>
          </li>
          <li>
            <a href="appointment">Appointments</a>
          </li>
        </div>
        <div className="footerCard">
          <h4>Partners</h4>
          <li>
            <a href="#">Doctors</a>
          </li>
          <li>
            <a href="#">Clinics</a>
          </li>
          <li>
            <a href="#">Labs</a>
          </li>
          <li>
            <a href="#">Pharmacy</a>
          </li>
        </div>

        <div className="footerCard">
          <h4>Download App</h4>
          <li>
            <a href="https://play.google.com/store/apps/details?id=com.luniva.lunivacare&hl=en&gl=US&showAllReviews=true">
              <img src="./images/googleplay.png" alt="" />
            </a>
          </li>
        </div>
      </FooterContainer>

      <FooterbottomContainer>
        <hr className="hrOne" />
        <p>
          Copyrights © {date.getFullYear()}{" "}
          <span className="companySpan">Luniva Care Pvt.Ltd.</span>{" "}
        </p>
      </FooterbottomContainer>
    </>
  );
};

export default Footer;

const FooterContainer = styled.div`
  padding: 50px 100px 60px 100px;
  display: flex;
  justify-content: space-between;
  background-color: #f8f8f8;
  box-shadow: 2px 2px 10px #23232445;

  .footerCard {
    .company {
      img {
        width: 180px;
      }
      i {
        font-size: 14px;
        color: #fefefe;
        background-color: var(--primaryTxt);
        margin-right: 10px;
        /* margin-left: 10px; */
        padding: 4px;
        border-radius: 50%;
      }
      li {
        display: flex;
        align-items: center;
      }
    }
    h4 {
      color: var(--thirdTxt);
    }
    li {
      list-style: none;
      margin: 5px 0;
      font-size: 14px;
      color: var(--secondaryText);
      display: flex;
      a {
        text-decoration: none;
        color: var(--secondaryTxt);

        i {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          margin: 6px 10px 10px 0px;
          border-radius: 100px !important;
          color: #fefefe;
          background: var(--secondaryText);
          backdrop-filter: blur(2px);
          -webkit-backdrop-filter: blur(2px);
          border-radius: 10px;
          border: 2px solid var(--secondaryText);
          transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

          &:hover {
            background-color: #fefefe;
            color: var(--secondaryText);
            border: 2px solid var(--secondaryText);
          }
        }
        img {
          width: 200px;
          margin-top: 10px;
        }
      }
    }
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px;
    width: 100%;
    .footerCard {
      margin-bottom: 20px;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    padding: 40px 100px;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 20px;
    width: 100%;
    .footerCard {
      margin-bottom: 20px;
    }
  }
`;
const FooterbottomContainer = styled.div`
  display: block;
  text-align: center;
  background-color: #f8f8f8;
  padding: 5px 0;
  p {
    color: var(--secondaryText);
    .companySpan {
      color: var(--primaryTxt);
    }
  }
`;
