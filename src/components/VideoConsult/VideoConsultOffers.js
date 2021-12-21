import React from 'react'
import styled from 'styled-components'
import OfferCard from '../../common/OfferCard'

const data = [
  {
    title: 'Diatetion Plan',
    subTitle: "For Evey age Group",
    dPrice: '5000',
    img: './images/diet.webp'
  },
  {
    title: 'Mental health',
    subTitle: "For Evey age Group",
    dPrice: '5000',
    img: './images/mental.webp'
  },
  {
    title: "Women's Health",
    subTitle: "For Evey age Group",
    dPrice: '5000',
    img: './images/women.webp'
  },
  {
    title: "Physical Health",
    subTitle: "For Evey age Group",
    dPrice: '5000',
    img: './images/women.webp'
  }

]

const VideoConsultOffers = () => {
  return (
    <div className="forPadding">
    <TitleHeading>
      <h3>Online Consultation Packages</h3>
      <p>Some of our best picked packages, with good reviews </p>
    </TitleHeading>
    <Caontiner>
    {
      data.map(e => (
        <OfferCard key={e.title} title={e.title} subTitle={e.subTitle} dPrice={e.dPrice} img={e.img}></OfferCard>
      ))
    }
      
      
    </Caontiner>
    </div>
  )
}

export default VideoConsultOffers

const Caontiner = styled.div`
  display: flex;
  flex: wrap;
  gap: 15px;
  padding: 20px 0;
  justify-content: space-between;

  
  @media(max-width: 500px){
    flex-direction: column;
  }
`
const TitleHeading = styled.div`
  h3{
    margin-bottom: 10px;
  }
  p{
    margin-bottom: 10px;
  }

`