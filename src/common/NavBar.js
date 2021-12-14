import React from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import Button from './Button'


const NavBar = () => {
  return (
    <NavBarContainer>
      <div className="logo">
      <Link to='/'>
      <img src="./images/logo.png" alt="" />
      </Link>
        
      </div>
      <div className="nav-link">
        
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/contactus">Contact us</Link>
        </li>
        <li className='dropDown'>
          <Link>Our Services</Link>
          <div className="dropItem">
            <li>
              <Link to="/covidcare">Covid Care</Link>
            </li>
            <li>
              <Link to="/videoconsult">Video consult</Link>
            </li>
            <li>
              <Link to="/labtest">lab Test</Link>
            </li>
            <li>
              <Link to="/appointment">appointment</Link>
            </li>
            <li>
              <Link to="/medicine">medicine</Link>
            </li>
          </div>
        </li>
        <div className="button">
        <Button title='covid care' pathName="/covidcare" secondaryBtn></Button>
        <Button title="sign-in" pathName="/login" secondaryBtn></Button>
      </div>
      </div>
      
    </NavBarContainer>
  )
}

export default NavBar



const NavBarContainer = styled.div`
  position: fixed;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:0px 40px;
  background-color: #fefefe;
  box-shadow: 2px 2px 20px #3b353642;

  .logo{
    width: 200px;
    img{
      width: 100%;
    }
  }

  .nav-link{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 40px;
    li{
      list-style: none;
      padding: 30px 0;
      cursor: pointer;
      position: relative;
      a{
        color: var(--secondaryText);
        font-size: 16px;
        letter-spacing: 1.3px;
        text-transform: uppercase;
        font-weight: 400;
      }
      &:hover{
        a{
          color: var(--primaryTxt)
        }
      }
      
      
    }

    .dropDown{
      position: relative;
      cursor: pointer;
       
      &:hover{
        .dropItem{
          visibility: visible;
          transition: 0.3s ease-in;
        }
      }
      .dropItem{
        position: absolute;
        background-color: #f3f7f5;
        padding: 10px 20px;
        top: 100%;
        z-index: 100;
        visibility: hidden;
        transition: 0.3s ease-in;
        
        li{
          padding: 10px;
          cursor: pointer;
          
          
          a{
            color: var(--secondaryText);
            font-size: 16px;
            letter-spacing: 1.3px;
            text-transform: uppercase;
            cursor: pointer;
          }
          &:hover{
            a{
              color: var(--primaryTxt); 
            }
          }
        }
      }
    }
  }
  .button{
    display: flex;
    gap: 20px;
  }
`
