import React from 'react'
import styled from 'styled-components'
import LandingPage from '../../common/LandingPage'
import NavigationBar from '../../common/NavigationBar'
import Footer from '../../common/Footer'
import HowItWorksNew from '../../common/HowItWorksNew'

const data=  {
  title: 'Get your medicine Online',
  subTitle: 'Home services availabele for medicine delivery',
  btnTitle: 'Order Now',
  var1: 'Certified Pharmecy',
  var2: 'Best Buy',
  img: './images/medecine.webp'
};
const howData = [
  {
    title: 'register',
    dis: 'Register an account using your phone number',
    img: './images/app.png'
  },
  {
    title: 'Oder Medecine',
    dis: 'Oder medecice via application',
    img: './images/mobDoc2.png'
  },
  {
    title: 'Get your Medicine',
    dis: 'Home delivery system',
    img: './images/app.png'
  },
]

const MedicineComponent = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Container>
        <LandingPage data={data}></LandingPage>
      </Container>
      <HowItWorksNew data={howData}></HowItWorksNew>

      <Footer></Footer>
    </>
  )
}

export default MedicineComponent

const Container = styled.div`
   padding: 60px 0px 40px 0px;
  @media(max-width: 768px){
    padding: 100px 0px 0px 0px; 
  }
  @media(max-width: 500px){
    padding: 70px 0px 0px 0px;
  }
`