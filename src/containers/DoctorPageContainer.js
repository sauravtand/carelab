import React from "react";
import DoctorInfo from "../components/DoctorInfo";
import data from "../data/doctors.json";

const getData = data.data;
const DoctorPageContainer = (props) => {
  const selectedDocName = new URLSearchParams(props.location.search).get("a");
  return (
    <>
      {getData.map(
        (e) =>
          selectedDocName === e.doctorName && (
            <>
              <DoctorInfo
                key={e.doctorName}
                allDocData={e}
                // doctorName={e.doctorName}
                // specilization={e.specilization}
                // img={e.img}
                // pathName={e.pathName}
              ></DoctorInfo>
            </>
          )
      )}
    </>
  );
};

export default DoctorPageContainer;
