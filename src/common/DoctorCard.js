import React from 'react'
import styled from 'styled-components'

const DoctorCard = (props) => {
  return (
    // <a href={props.pathName}>
    <DoctorCardContainer >
      <div className="img">
        <img src={props.img} alt="" />
      </div>
      <div className="detail1">
        <h5>{props.doctorName}</h5>
        <p>{props.specilization}</p>
        
      </div>
    </DoctorCardContainer>
    // </a>
  )
}

export default DoctorCard

const DoctorCardContainer = styled.div`
  width: 220px;
  height: 240px;
  border-radius: 20px;
  display: flex;
  margin: 10px 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */
  cursor: pointer;
  position: relative;
  text-decoration: none;

  .img{
    width: 120px;
    height: 120px;
    object-fit: cover;
    overflow: hidden;
    border-radius: 50%;
    border: 1px solid #e76a3c7b;
    box-shadow: 2px 2px 10px #23232442;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
      border-radius: 50%;
      padding: 5px;
      
    }
  }
  .detail1{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    
    h5{
      margin: 10px 0px 8px 0px;
      color: var(--thirdTxt);
      font-weight: 400;
      font-size: 18px;
    }
    p{
      color: var(--secondaryText);
      border: 1px solid #e76a3c7b;
      box-shadow: 1px 1px 4px #9bd49d7b;
      padding: 4px 10px;
      border-radius: 30px;
    }
  }
  @media(max-width: 1024px){
    width: 200px;
    .detail1{
      width: 100%;
    }
  }
  @media(max-width: 500px){
    width: 200px;
    padding: 20px 5px 10px 5px;
    height: 240px;
    padding: 0px 10px;
    align-items: center;
    .img{
      width: 100px;
      height: 100px;
    }
    .detail1{
    text-align: center;
    h5{
      font-size: 18px;
      margin: 10px opx;
    }
    p{
      width: 160px;
      font-size: 16px;
    }
  }
  }
`