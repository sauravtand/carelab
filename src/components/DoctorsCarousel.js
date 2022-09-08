import styled from "styled-components";
import Button from "../common/Button";
import DoctorCard from "../common/DoctorCard";
import data from "../data/doctors.json";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import DoctorPageContainer from "../containers/DoctorPageContainer";
const getData = data.data;

const DoctorsCarousel = () => {
  return (
    <PageContainer className="forPadding">
      <div className="detail">
        <h3>Consult best doctors for any health concern</h3>
        <p>Safe, Secure and Reliable</p>
      </div>

      {/* autoplay={true} */}

      <div className="mid-container">
        <OwlCarousel
          className="owl-theme"
          loop
          autoplay={true}
          responsive={{
            0: {
              items: 1,
            },
            320: {
              items: 1.6,
            },
            375: {
              items: 2,
            },
            425: {
              items: 2,
            },
            600: {
              items: 2.2,
            },
            700: {
              items: 3.5,
            },
            1000: {
              items: 4,
            },
            1100: {
              items: 5,
            },
            1440: {
              items: 6,
            },
          }}
        >
          {getData.map((e) => (
            <>
              <Link to={`/docinfo?a=${e.doctorName}`}>
                <DoctorCard
                  key={e.doctorName}
                  doctorName={e.doctorName}
                  specilization={e.specilization}
                  img={e.img}
                  pathName={e.pathName}
                />
              </Link>
            </>
          ))}
        </OwlCarousel>
      </div>

      <div className="button">
        <Button
          title="Other Doctors"
          viewButton
          pathName="http://lunivacare.ddns.net:8080/mHealth/Member/viewDocList"
        ></Button>
      </div>
    </PageContainer>
  );
};

export default DoctorsCarousel;

const PageContainer = styled.div`
  /* padding: 20px 100px; */
  position: relative;
  background-color: var(--backgroundColor);
  .mid-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width: 768px) {
      overflow-x: hidden;
    }
  }
  h3 {
    margin-bottom: 10px;
    text-transform: capitalize;
  }
  p {
    margin-bottom: 20px;
  }

  .button {
    position: absolute;
    top: 30px;
    right: 120px;
  }
  @media (max-width: 1300px) {
    .detail {
      width: 800px;
    }
  }
  @media (max-width: 1024px) {
    /* padding: 20px 40px; */
    .detail {
      width: 500px;
    }
    .button {
      right: 100px;
    }
  }
  @media (max-width: 768px) {
    /* padding: 20px 40px; */
    .detail {
      width: 470px;
    }
    .button {
      right: 40px;
    }
  }
  @media (max-width: 500px) {
    .detail {
      width: 100%;
      padding: 20px 20px 0px 20px;
    }
    padding: 0px;
    .button {
      display: none;
    }
  }
`;
