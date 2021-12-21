import React from 'react'
import styled from 'styled-components'
import ServicesCard from './ServicesCard'


const servicesContent = [
  // {
  //   title: 'Covid',
  //   txt: 'Home Isolation Support',
  //   img: './images/svg/COVID-Icons (12).svg'
  // },
  {
    title: 'Online Consult',
    txt: 'Consult doctors via online',
    img: './images/svg/COVID-Icons (11).svg'
  },
  {
    title: 'Lab Test',
    txt: 'Home sample collection and reports',
    img: './images/svg/COVID-Icons (19).svg'
  },
  {
    title: 'Appointment',
    txt: 'Book an appointment wherever whenever',
    img: './images/svg/COVID-Icons (5).svg'
  },
  {
    title: 'Online Repots',
    txt: 'Online reporting system',
    img: './images/svg/COVID-Icons (25).svg'
  }

]

const LandingPageTwo = () => {
  return (
    <LandingPageTwoContainer>
      {/* multipel cards */}
      {
        servicesContent.map(e=>(
          <ServicesCard  key={e.title} title={e.title} txt={e.txt} img={e.img} />
        ))
      }
      
     
    </LandingPageTwoContainer>
  )
}

export default LandingPageTwo

const LandingPageTwoContainer = styled.div`
  padding: 40px 100px 40px 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  /* gap: 10px; */
 
  @media(min-width: 1200px){
    justify-content: space-evenly;
    gap: 20px;
  }
  @media(max-width: 1024px){
    justify-content: center;
    padding: 40px 10px 40px 10px;
    gap: 20px;
  }
 

  @media(max-width: 768px){
    padding: 60px 0px 40px 0px;
    justify-content: center;
    gap: 10px;
  }

  @media (max-width: 500px){
    
    padding: 20px 0px;
    gap: 15px;
  }
  @media (max-width: 400px){
    padding: 20px 0px;
    gap: 16px;
  }
  
`