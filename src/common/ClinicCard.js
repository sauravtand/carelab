import React from 'react'
import styled from 'styled-components'

const ClinicCard = (props) => {
  return (
    <Container>
      <img src={props.img} alt="" />
    </Container>
  )
}

export default ClinicCard

const Container = styled.div`
  background-color: #fefefe;
  width: 200px;
  img{
    width: 100%;
    height: 100px;
    object-fit: contain;
  }
`