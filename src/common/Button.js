import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Button = (props) => {
  const {title, primaryBtn, secondaryBtn, outlineBtn} = props;
  return (
    <>
    {primaryBtn && <a target={'_blank'} href={props.pathName}>
    <PrimaryButtonContainer>
        {title}
    </PrimaryButtonContainer>
     </a> }
    {secondaryBtn && <a href={props.pathName} onClick={props.onclick}>
      <SecondaryButtonContainer>
          {title}
      </SecondaryButtonContainer>
    </a> }
    
      </>
    
  )
}

export default Button

const PrimaryButtonContainer = styled.button`
  background: var(--primaryTxt);
  box-shadow: 0 1px 10px 0 rgb(31 38 135 / 37%);
  backdrop-filter: blur( 2px );
  -webkit-backdrop-filter: blur( 2px );
  font-size: 16px;
  letter-spacing: 1.6px;
  font-weight: 600;
  color: #fefefe;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  text-transform: uppercase;
  padding: 16px 40px;
  border: 3px solid rgba( 233, 83, 30, 0.85 );
  @media(max-width: 768px){
    font-size: 16px;
    font-weight: 400;
    padding: 10px 30px;
    border-radius: 10px;
  }
  @media(max-width: 500px){
    font-size: 16px;
    font-weight: 400;
    padding: 8px 20px;
    border-radius: 10px;
  }

`
const SecondaryButtonContainer = styled.div`
  border: 1px solid var(--primaryTxt);
  padding: 8px 20px;
  color: var(--primaryTxt);
  text-transform: lowercase;
  letter-spacing: 1.3px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  min-width: 100px;
  text-align: center;
`
