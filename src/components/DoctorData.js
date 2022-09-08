import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import DoctorInfo from "./DoctorInfo";
import data from "../data/doctors.json";

const getData = data.data;

const DoctorData = () => {
  return (
    <PageContainer className="forPadding">
      <div className="detail">
        <h3>Doctor Profile </h3>
      </div>

      {/* autoplay={true} */}

      <div className="mid-container"></div>

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

export default DoctorData;

const PageContainer = styled.div``;
