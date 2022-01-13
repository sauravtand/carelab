import React from 'react'
import styled, { keyframes } from 'styled-components'

const TopNav = () => {
  return (
    <TopNavContainer>
      <p>COVID-19? We're in this together & will get through this, Together. <a href='covidcare'>Learn more</a></p>
    </TopNavContainer>
  )
}

export default TopNav

const animateNav = keyframes`
  0%{
    opacity: 0;
    top: -10px;
  }
  100%{
    opacity: 1;
    top: 0;
  }
`

const TopNavContainer = styled.div`
  background-color: var(--thirdTxt);
  /* orange 338e89
    green 3ab4ae
  */
  position: relative;
  z-index: 100;
  text-align: center;
  animation-name: ${animateNav};
  -webkit-animation-duration:0.5s;
  animation-duration:0.5s;
  /* -webkit-animation-iteration-count: 1; */
  -webkit-animation-timing-function: cubic-bezier(0.1, -0.6, 0.2, 0);
  animation-timing-function: cubic-bezier(0.1, -0.6, 0.2, 0);
  animation-direction: alternate;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  /* -webkit-animation-direction: normal; */
  p{
    color: #f3f3f3;
    padding: 4px 0;
  }
  a{
    color: var(--primaryTxt);
  }
  @media(max-width: 500px){
    display: none;
  }
`