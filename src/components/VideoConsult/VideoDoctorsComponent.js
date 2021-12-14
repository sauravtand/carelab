import React from 'react'
import styled from 'styled-components'
import DoctorCard from '../../common/DoctorCard'
import data from '../../data/doctors.json'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const getData = data.data;




const VideoDoctorsComponent = () => {
  return (
    <Container>
      <div className="top">
        <h3>Consult best doctors of Nepal for any health concern</h3>
        <p>Talk with doctor privately. Best for inside Nepal</p>
      </div>
      <div className="mid">
      <OwlCarousel className="owl-theme" loop autoplay={true} responsive={{
        0:{
          items: 1
        },
        375:{
          items: 1.4
        },
        425:{
          items: 1.6
        },
        600:{
          items: 2.5,
        },
        700:{
          items: 2.5
        },
        1000:{
          items: 3.2
        },
        1440:{
          items: 4.5
        }
      }}>
        {
          getData.map((e) => (
            <DoctorCard key={e.doctorName} doctorName={e.doctorName} specilization={e.specilization} img={e.img} pathName={e.pathName}></DoctorCard>
          ))
        }
      </OwlCarousel>
      </div>
      <div className="bot">
        <p>Consoult Now</p>
      </div>

      
    </Container>
  )
}

export default VideoDoctorsComponent

const Container = styled.div`
  margin: 40px 0px;
  
  /* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ); */
  border-radius: 20px;
  .top{
    width: 100%;
    text-align: center;
    padding: 20px 0;
    background-color: var(--thirdTxt);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    h3{
      color: #fefefe;
    }
    @media(max-width:500px){
      padding: 10px;
    }
  }
  .mid{
    padding: 40px 10px;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 20px;
    align-content: flex-start;
    justify-content: center;
    @media(max-width:500px){
      padding: 10px;
    }
  }
  .bot{
    background-color: var(--thirdTxt);
    text-align: center;
    padding: 20px 0;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    color: #fefefe;
  }
  @media(max-width:500px){
    margin: 20px 0;
  }
`
