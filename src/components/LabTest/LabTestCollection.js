import React from 'react'
import styled from 'styled-components'
import TestCard from './TestCard'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import data from '../../data/doctors.json'
import Button from '../../common/Button';

const getData = data.test;

const LabTestCollection = () => {
  
  return (
    <Conatiner className='forPadding'>
      {/* CArds */}
      <div className="top">
        <h3>Booke Test</h3>
        <p>Some of the top selected tests,</p>
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
          items: 1.8
        },
        600:{
          items: 1.2,
        },
        700:{
          items: 2.8
        },
        1024:{
          items: 3.2
        },
        1440:{
          items: 4.2
        }
      }}>
        {
          getData.map((e) => (
            <TestCard key={e.tesName} tesName={e.tesName} testDis={e.testDis} price={e.price} img={e.img}></TestCard>
          ))
        }
      </OwlCarousel>

      </div>
      <div className="btn">
        <Button title='Lern more' secondaryBtn></Button>
      </div>
      
     
    </Conatiner>
  )
}

export default LabTestCollection

const Conatiner = styled.div`
  /* padding: 40px 0; */
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  background-color: var(--backgroundColor);
  .top{
    h3{
    margin-bottom: 10px;
  }
  p{
    margin-bottom: 10px;
  }
  }
  .mid{
    padding: 10px 0px; 
    display: flex;
    align-items: center;
  }
 
  .btn{
    position: absolute;
    top: 30px;
    right: 100px;
  }
  @media(max-width: 768px){
    .btn{
      right: 40px
    }
    
  }
  @media(max-width: 500px){
    .btn{
      right: 20px
    }
    .top{
      width: 200px;
    }
    
  }
`
