import React from 'react'
import styled from 'styled-components'
import OfferCard from '../../common/OfferCard'

const data = [
  {
    title: 'SARS Covid-19 package',
    subTitle: "Test Package for Covid Patient",
    test: 45,
    dPrice: '5000',
    aPrice: '1000',
    dPercent: '20%',
    img: './images/pcr.webp'
  },
  {
    title: "Mother's Package",
    subTitle: "Both for Mother and Child",
    test: 45,
    dPrice: '5000',
    aPrice: '1000',
    dPercent: '15%',
    img: './images/mothersDay.webp'
  },
  {
    title: "Father's Packgae",
    subTitle: "Both for Father and Child",
    test: 45,
    dPrice: '5000',
    aPrice: '1000',
    dPercent: '15%',
    img: './images/fathersDay.webp',
  },
  {
    title: "Covid Package",
    subTitle: "For all age Groups",
    test: 20,
    dPrice: '5000',
    aPrice: '1000',
    dPercent: '15%',
    img: './images/covid.webp',
  }

]

const Offers = () => {
  return (
    <Container className='forPadding'>
      <h3>Checkup Package Offers</h3>
      <div className="offerCollection">
        {
          data.map(e => (
            <OfferCard key={e.title} title={e.title} subTitle={e.subTitle} test={e.test} dPercent={e.dPercent} dPrice={e.dPrice} aPrice={e.aPrice} img={e.img}/>
          ))
        }
      </div>
      
    </Container>
  )
}

export default Offers

const Container = styled.div`
  
  .offerCollection{
    padding: 20px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 15px;
  }
`