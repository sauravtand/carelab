import React from 'react'
import styled from 'styled-components'
import OwlCarousel from 'react-owl-carousel';
import ClinicCard from '../common/ClinicCard';

const labData = [
  {
    "name" : "crystalDi",
    "img" : "./images/logo/crystalDi.png",
  },
  {
    "name" : "nrl",
    "img" : "./images/logo/nrl2.png",
  },
  {
    "name" : "lifeCareDi",
    "img" : "./images/logo/lifeCareDi.png",
  },
  {
    "name" : "samjana",
    "img" : "./images/logo/samjana.jpg",
  }
]

const Labs = () => {
  return (
    <Labscontainer className='forPadding'>
      <h3>Our Laboratory Partners</h3>
      <div className="row">
        
        
      <OwlCarousel className="owl-theme" loop autoplay={true} responsive={{
        0:{
          items: 1
        },
        375:{
          items: 1.4
        },
        425:{
          items: 1.5
        },
        600:{
          items: 2,
        },
        700:{
          items: 2.5
        },
        1000:{
          items: 3.2
        },
        1440:{
          items: 3.5
        }
      }} >
      {
        labData.map((e) => (
          <ClinicCard key={e.name} img={e.img}/>
        ))
      }
      </OwlCarousel>
      </div>
    </Labscontainer>
  )
}

export default Labs

const Labscontainer = styled.div`
  background-color: var(--backgroundColor);
  text-align: center;
  .row{
    padding: 30px 0px;
    /* display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px; */
    .content{
      width: 300px;
      img{
        /* width: 100%; */
        height: 100%;
      }
    }
  }
`
