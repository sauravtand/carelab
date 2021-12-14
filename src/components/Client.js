import React from 'react'
import styled from 'styled-components'

const ClientImg = [
  {
    img:"./images/logo/nrl2.png"
  },
  {
    img:"./images/logo/crystalDi.png"
  },
  {
    img:"./images/logo/samjana.jpg"
  },
  // {
  //   img:"./images/logo/matri-sisu.jpg"
  // },
  {
    img:"./images/logo/LifeCareDi.png"
  },
  // {
  //   img:"./images/logo/manmohan.jpg"
  // },
  // {
  //   img:"./images/logo/nepal.png"
  // },
  // {
  //   img:"./images/logo/sarobar.jpg"
  // },
  // {
  //   img:"./images/logo/khangriHospital.jpg"
  // },
  // {
  //   img:"./images/logo/skinarts.jpg"
  // },
  // {
  //   img:"./images/logo/chirayupolyclinic.png"
  // },
  // {
  //   img:"./images/logo/ChinariHospital.jpg"
  // }
]

const Client = () => {
  return (
    <ClientContainer>
    {
      ClientImg.map(e=>(
        <ClientCard>
        <img src={e.img} alt="" />
      </ClientCard>
      ))
    }
      
    </ClientContainer>
  )
}

export default Client


const ClientContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`
 const ClientCard = styled.div`
    width: 25%;
    padding: 40px;
    img{
      width: 100%;
    }
 `

