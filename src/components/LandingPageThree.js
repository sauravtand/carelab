import React from 'react'
import styled from 'styled-components'
import CareCard from './CareCard'

const careContent = [
  {
    id : 1,
    title: "Covid Home Isolation Support",
    txt: "Patients Who are asymptomatic or have mild symptoms can avail the facility of home isolation from comfort of their home",
    img: './images/svg/COVID-Icons (12).svg'
  },
  {
    id : 2,
    title: "Doctor Video Consultation",
    txt: "We provide online video consultation with our registered doctor for all patient all over the world.",
    img: './images/svg/COVID-Icons (11).svg'
  },
  {
    id : 3,
    title: "Home Sample Collection / Lab Tests",
    txt: "No need to visit lab and wait in queue to do test. Our expert lab technicians and phlebotomists visits your place collects your samples and provides report online.",
    img: './images/svg/COVID-Icons (19).svg'
  },
  {
    id : 4,
    title: "Online Reports",
    txt: "We store your medical record online in safe and secure server, so that you can access your record easily whenever you need.",
    img: './images/svg/COVID-Icons (25).svg'
  },
  {
    id : 5,
    title: "Book Appointments",
    txt: "You can schedule online appointment with our registered doctors easily",
    img: './images/svg/COVID-Icons (15).svg'
  },
  {
    id : 5,
    title: "Dietician Consultation",
    txt: "We also provide information about diets to improve health.",
    img: './images/svg/food.png'
  }
]

const LandingPageThree = () => {
  return (
    <>
    <LandingPageThreeContainer>
      <h1>How We care</h1>
     {careContent.map(e => (
       <CareCard key={e.id} id={e.id} title={e.title} txt= {e.txt} img={e.img} />
     ))}
    </LandingPageThreeContainer>
    <hr />
    </>
  )
}

export default LandingPageThree

const LandingPageThreeContainer = styled.div`
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media(max-width: 768px){
    padding: 20px;
  }

  @media(max-width: 500px){
    padding: 10px;
  }
  
  
`