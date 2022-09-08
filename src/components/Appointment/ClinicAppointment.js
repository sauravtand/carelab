import React from "react";
import styled from "styled-components";
import Button from "../../common/Button";
import ClinicCard from "../../common/ClinicCard";
import data from "../../data/doctors.json";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const getData = data.clinic;

const ClinicAppointment = () => {
  return (
    <Container className="forPadding">
      <div className="detail">
        <h3>Book a Clinic Appointment</h3>
        <p>Consult with best clinic Doctors of Nepal for any health concern</p>
      </div>

      <OwlCarousel
        className="owl-theme"
        loop
        autoplay={true}
        responsive={{
          0: {
            items: 1,
          },
          375: {
            items: 1.4,
          },
          425: {
            items: 1.5,
          },
          600: {
            items: 2,
          },
          700: {
            items: 2.5,
          },
          1000: {
            items: 3.2,
          },
          1440: {
            items: 4.5,
          },
        }}
      >
        {getData.map((e) => (
          <ClinicCard key={e.name} img={e.img} />
        ))}
      </OwlCarousel>
      <div className="btn">
        <Button
          title={"Book now"}
          secondaryBtn
          pathName={"http://lunivacare.ddns.net:8080/mHealth/Member/memBookLab"}
        ></Button>
      </div>
    </Container>
  );
};

export default ClinicAppointment;

const Container = styled.div`
  margin-top: 40px;

  position: relative;
  background-color: var(--backgroundColor);
  h3 {
    margin-bottom: 6px;
  }
  p {
    margin-bottom: 10px;
  }
  .btn {
    position: absolute;
    top: 30px;
    right: 110px;
  }
  .detail {
    margin-bottom: 20px;
  }
  @media (max-width: 768px) {
    .detail {
      width: 470px;
    }
  }

  @media (max-width: 500px) {
    .btn {
      display: none;
    }
    .detail {
      width: 100%;
    }
  }
`;
