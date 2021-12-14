import React from 'react'
import styled from 'styled-components'
import LandingPage from '../../common/LandingPage';
import NavigationBar from '../../common/NavigationBar';
import Footer from '../../common/Footer';
import LandingPageFour from '../LandingPageFour';
// import NavigationBar from '../../common/NavigationBar'
import LabTestCollection from './LabTestCollection'
// import Footer from '../Footer'
import Offers from './Offers'
// import LandingPageFour from './LandingPageFour'
// import LandingPage from '../common/LandingPage'
import HowItWorks from '../../common/HowItWorks'
import HowItWorksNew from '../../common/HowItWorksNew';
import NavBar from '../../common/NavBar';
import Clinics from '../Clinics';
import Labs from '../Labs';


const data=  {
  title: 'Book a Lab Test Online',
  subTitle: 'Home services availabele for sample collection',
  btnTitle: 'book now',
  var1: 'Certified Clicnic',
  var2: 'Online Reports',
  img: './images/labTest.webp',
  pathName: 'http://lunivacare.ddns.net:8080/mHealth/Member/sampleWithTestList'
};
const howData = [
  {
    title: 'register',
    dis: 'Register an account using your phone number',
    img: './images/app.png'
  },
  {
    title: 'Book Lab test',
    dis: 'Home base sample collection, on users request',
    img: './images/mobDoc2.png'
  },
  {
    title: 'Reports',
    dis: 'Repots can be Obtained via Online',
    img: './images/app.png'
  },
]

const LabTestComponent = () => {
  return (
    <>
      {/* <NavBar /> */}
      <NavigationBar></NavigationBar>
      <Container>
        <LandingPage data = {data}></LandingPage>
        <HowItWorksNew data= {howData} />
        <LabTestCollection></LabTestCollection>
        {/* offer */}
        <Offers />
        {/* <LandingPageFour></LandingPageFour> */}
        {/* <Clinics></Clinics> */}
        <Labs></Labs>
      </Container>
      <Footer></Footer>
    </>
  )
}

export default LabTestComponent

const Container = styled.div`
  padding: 60px 0px 0px 0px;
  @media(max-width: 768px){
    padding: 100px 0px 0px 0xp;
  }
  @media(max-width: 500px){
    padding: 120px 0px 0px 0px;
  }
`