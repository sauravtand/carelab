import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavLInkCompoenntTop = (props) => {
  
  return (
    <NavLInkContainer>
      <a href={props.pathName}>
        <div className="link">
        <li className='top'>
          <h5 style={{color: 'var(--secondaryText)', fontSize: '20px'}}>{props.title}</h5>
          <p style={{color: 'dimgray', fontSize: '12px'}}>{props.subTitle}</p>
      </li>
        </div>
      </a>
      
      
    </NavLInkContainer>
  )
}

export const NavLInkCompoenntBot = (props) => {

  return (
    <NavLInkContainer>
      <li className='bot'>
        <Link to={props.pathName}>
          <h5>{props.title}</h5>
          <p className='res'>{props.subTitle}</p>
        </Link>
      </li>
      
    </NavLInkContainer>
  )
}

const NavLInkContainer = styled.div`

    li{
    list-style: none;
    padding: 4px 10px;
    margin: 4px 10px;
    
    a{
      text-decoration: none;
      color: var(--primaryTxt);
      h5{
        font-size: 20px;
        font-weight: 400;
        letter-spacing: 1.2px;
        text-transform: capitalize;
        color: var(--secondaryText);
      }
      p{
        font-size: 12px;
        text-transform: capitalize;
        color: dimgray;
      }
    }
    @media (max-width: 768px){
      /* text-align: center; */
      margin-left: 20px;
      .res{
        font-size: 20px;
        font-weight: 600;
        letter-spacing: 1.2px;
        text-transform: capitalize;
        color: var(--secondaryText);
      }
    }


    @media (max-width: 500px){
      /* text-align: center;
       */
      /* &::after{
        content: ' ';
        position: absolute;
        border: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 20%;
        height: 1px;
        background-color: #5cbcac71;
        display: block;
        z-index: 200;
        margin: 10px 0;
      } */
      .res{
        font-size: 20px;
        font-weight: 600;
        letter-spacing: 1.2px;
        text-transform: capitalize;
        color: var(--secondaryText);
      }
    }
    

    
  }
  

`