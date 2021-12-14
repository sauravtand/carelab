import React from 'react'
import styled from 'styled-components'
import Button from '../common/Button'

const LandingPageOne = () => {
  return (
    <LandingPageOneContainer>
      <div className="left">
        <div className="logo">
          <img src="./images/logo.png" alt="" />
        </div>
        <h1>Your Health Care Companion</h1>
        <Button title={'sign-in'} pathName='http://lunivacare.ddns.net:8080/mHealth/User/regiUser' primaryBtn></Button>
      </div>
      <div className="right">
        <div className="deviceContainer">
          <img src="./images/1.webp" alt="" />
        </div>
        

      </div>
    </LandingPageOneContainer>
  )
}

export default LandingPageOne

const LandingPageOneContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
  background-image: url('./images/svg2.webp');
  background-size: cover;
  height: 100vh;
  width: 100%;
  background-position: center;
  padding-top: 100px;
  padding-left: 200px;
  overflow: hidden;
  
  @media(max-width: 1024px){
    padding-left: 40px;
  }

  @media(max-width: 768px){
    height: 85vh;
    .right{
      width: 600px!important;
    }
    .left{
      img{
        width: 220px!important;
        margin: 0px!important;
      }
    }
  }
  
  @media (max-width: 500px){
    padding: 10px;
    height: auto;
    padding-top: 150px;
    padding-bottom: 40px;
    padding-left: 20px;
    .left{
      img{
        width: 160px;
      }
    }
  }
  .left, .right{
    width: 600px;
  }
  .left{
    h1{
      color: #4f4f4f;
     
    }
    img{
      width: 300px;
      margin-bottom: 10px;
    }
    span{
      font-size: 20px;
      font-weight: 600;
      color: var(--thirdTxt);
    }

  }
  .right{
    position: absolute;
    width: 1000px;
    bottom: -5px;
    right: -10px;
    .deviceContainer{
      /* width: 300px;
      border-radius: 20px;
      padding: 30px 20px;
      background-color: #fff;
      overflow: hidden;
      box-shadow: 3px 3px 19px 1px rgba(101,95,95,0.59) inset;
      -webkit-box-shadow: 3px 3px 19px 1px rgba(101,95,95,0.59) inset;
      -moz-box-shadow: 3px 3px 19px 1px rgba(101,95,95,0.59) inset; */
      img{
        width: 100%;

      }
      @media (max-width: 500px){
        img{
          display: none;
        }
      }
    }
  }
`