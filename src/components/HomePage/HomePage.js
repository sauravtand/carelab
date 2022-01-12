import React from 'react'
import styled from 'styled-components'
import NavigationBar from '../../common/NavigationBar'
import Footer from '../../common/Footer'
import DoctorsCarousel from '../DoctorsCarousel'
import LandingPageTwo from '../LandingPageTwo'
import Offers from '../LabTest/Offers'
import LandingPageSix from '../LandingPageSix'
import MentalHealth from './MentalHealth'
import WomenHealth from './WomenHealth'

const HomePage = () => {
  return (
    <MainContainer>
      <NavigationBar />
      <LandingPageSix></LandingPageSix>
      <LandingPageTwo></LandingPageTwo>
      <WomenHealth></WomenHealth> 
      <MentalHealth />
      <DoctorsCarousel/>
      <Offers></Offers>
      
      <Footer/>

    </MainContainer>
  )
}

export default HomePage

const MainContainer = styled.div`
  /* .forPadding{
    padding: 40px 100px;
    @media(max-width: 768px){
      padding: 20px 40px;
    }
    @media(max-width: 500px){
      padding: 20px;
    }
  } */
`