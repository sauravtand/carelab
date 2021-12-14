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
    title: 'Video Consult',
    txt: 'Consult doctors via online',
    img: './images/svg/COVID-Icons (11).svg'
  },
  {
    title: 'Lab Test',
    txt: 'Home based sample collection and reports',
    img: './images/svg/COVID-Icons (19).svg'
  },
  {
    title: 'Appintment',
    txt: 'Book an appointment wherever whenever',
    img: './images/svg/COVID-Icons (5).svg'
  },
  {
    title: 'Online Repots',
    txt: 'Reporting system online via internet',
    img: './images/svg/COVID-Icons (25).svg'
  }

]

const LandingPageTwo = () => {
  return (
    <LandingPageTwoContainer>
      {/* multipel cards */}
      {
        servicesContent.map(e=>(
          <ServicesCard key={e.title} title={e.title} txt={e.txt} img={e.img} />
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