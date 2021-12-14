import React from 'react'
import styled from 'styled-components'
import LandingPage from '../../common/LandingPage';
import NavigationBar from '../../common/NavigationBar';
import Footer from '../../common/Footer';
import Offers from '../LabTest/Offers';
import LandingPageFour from '../LandingPageFour';
import VideoConsultHowItWorks from './VideoConsultHowItWorks'
import VideoConsultOffers from './VideoConsultOffers';
import VideoDoctorsComponent from './VideoDoctorsComponent'
import DoctorsCarousel from '../DoctorsCarousel';
import HowItWorks from '../../common/HowItWorks';
import HowItWorksNew from '../../common/HowItWorksNew';
import NavBar from '../../common/NavBar';

const data=  {
    title: 'Consult with best Doctors of Nepal',
    subTitle: 'safe, secure and reliable',
    btnTitle: 'Consult Now',
    var1: 'Verified Docotors',
    var2: 'Dogital Medication',
    img: './images/doc3.webp'
  };
  const howData = [
    {
      title: 'Register',
      dis: 'Register an account using your phone number',
      img: './images/app.png'
    },
    {
      title: 'Choose Your Doctor',
      dis: 'Select best doctors working in Nepal',
      img: './images/mobDoc2.png'
    },
    {
      title: 'Get your Medication',
      dis: 'Delevered from trusted pharmecies and clinics',
      img: './images/app.png'
    },
    
  ]
const VideoConsultComponent = () => {
  return (
    <>
    <NavigationBar></NavigationBar>
    {/* <NavBar /> */}
    <MainContainer>
      <LandingPage data= {data}></LandingPage>
      <HowItWorksNew data= {howData} />
      {/* <VideoConsultHowItWorks></VideoConsultHowItWorks> */}
      <VideoConsultOffers></VideoConsultOffers>
      {/* <VideoDoctorsComponent></VideoDoctorsComponent> */}
      <DoctorsCarousel/>
      {/* <LandingPageFour></LandingPageFour> */}
    </MainContainer>
    <Footer></Footer>
    </>
  )
}

export default VideoConsultComponent

const MainContainer = styled.div`
  
  padding: 30px 0px 0px 0px;
  @media(max-width: 768px){
    padding: 90px 0px 0px 0px;
  }
  @media(max-width: 500px){
    padding: 120px 20px 20px 20px;
  }
`