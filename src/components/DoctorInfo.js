import React from "react";
import styled from "styled-components";
import Footer from "../common/Footer";
import NavigationBar from "../common/NavigationBar";

const DoctorInfo = (props) => {
  const { allDocData } = props;

  const education =
    allDocData?.education !== undefined ? allDocData?.education.split(",") : [];
  const experience =
    allDocData?.experience !== undefined
      ? allDocData?.experience.split(",")
      : [];

  return (
    // <a href={props.pathName}>
    <>
      <NavigationBar />
      <Top>
        <div className="doc">
          <h2>Doctor Details</h2>
        </div>
      </Top>
      <DoctorInfoContainer>
        <div className="photo">
          <img src={allDocData.img} alt="" />
        </div>
        <div className="detail1">
          <h2 className="hello">{allDocData.doctorName}</h2>
          <h4 className="hello1">NMC NO: {allDocData.nmc}</h4>

          <h4 className="hello4">Specialization: {allDocData.specilization}</h4>
          <h4 className="hello2">Education:</h4>
          <div>
            {education.map((ele) => (
              <p>{ele}</p>
            ))}
          </div>
          <h4 className="hello3">Experience:</h4>
          <div>
            {experience.map((ele) => (
              <p>{ele}</p>
            ))}
          </div>
        </div>
      </DoctorInfoContainer>

      <Footer />
    </>
  );
};

export default DoctorInfo;
const Top = styled.div`
  padding-top: 135px;
  text-align: center;
  color: var(--primaryTxt);
`;

const DoctorInfoContainer = styled.div`
  display: flex;
  width: fit-content;
  margin: auto;
  padding: 15px;
  background-color: var(--backgroundColor);
  border-radius: 50px;
  box-shadow: 2px 2px 5px 5px gray;

  .hello {
    color: var(--thirdTxt);
    text-shadow: 2px 2px gray;
  }
  .detail1 {
    margin-left: 60px;
    margin-bottom: 10px;
  }
  .photo img {
    height: 60vh;
    width: 100%;
    border-radius: 50px;
    box-shadow: 1px 1px 1px 1px var(--primaryTxt);
    margin: 10px 10px 10px 10px;
  }

  .hello1 {
    margin-top: 20px;
    font-weight: bold;
  }
  .hello2 {
    margin-top: 20px;
    font-weight: bold;
  }
  .hello3 {
    margin-top: 20px;
    font-weight: bold;
  }
  .hello4 {
    margin-top: 20px;
    font-weight: bold;
  }
`;
