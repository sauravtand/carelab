import { Carousel } from '@trendyol-js/react-carousel'
import React from 'react'
import styled from 'styled-components'
import Button from '../../common/Button';
import DoctorCard from '../../common/DoctorCard';
import data from '../../data/doctors.json';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const getData = data.data;
 

const DoctorsAppointment = () => {
  return (
    
    <Container className='forPadding'>
      <h3>Book a Doctor Appointment</h3>
      <p>Consult best doctors of Nepal for any health concern</p>

     
      <OwlCarousel className="owl-theme" loop autoplay={true} responsive={{
        0:{
          items: 1
        },
        320:{
          items: 1.2
        },
        375:{
          items: 1.8
        },
        425:{
          items: 1.8
        },
        600:{
          items: 2.2,
        },
        700:{
          items: 3.5
        },
        1000:{
          items: 4.3
        },
        1440:{
          items: 6
        }
      }}>
        {
          getData.map((e) => (
            <DoctorCard key={e.doctorName} doctorName={e.doctorName} specilization={e.specilization} img={e.img} pathName={e.pathName}></DoctorCard>
          ))
        }
      </OwlCarousel>
      <div className="btn">
        <Button title={'Book now'} secondaryBtn pathName={'http://lunivacare.ddns.net:8080/mHealth/Member/viewDocList'}></Button>
      </div>
      
    </Container>
  )
}

export default DoctorsAppointment

const Container = styled.div`
  margin: 40px 0;
  position: relative;
  h3{
    margin-bottom: 6px;
  }
  p{
    margin-bottom: 10px;
  }
  .btn{
    position: absolute;
    top: 30px;
    right: 120px;
  }
  .mobile{
    display: none;
    visibility: hidden;
  }
  .tablet{
    display: none;
    visibility: hidden;
  }
  @media(max-width: 500px){
    .btn{
      display: none;
    }
  }
  
`
