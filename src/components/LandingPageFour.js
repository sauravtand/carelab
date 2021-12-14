import React from 'react'
import styled from 'styled-components'
import Button from '../common/Button'

const LandingPageFour = () => {
  return (
    <>
    <LandingPageContainer>
      <div className="left">
        <img src="./images/phone2.webp" alt="" />
      </div>
      <div className="right">
        <h3>Your Health Care Companion</h3>
        <li>
          <i className='icon-line-calendar'></i>Same-day Appointments
        </li>
        <li>
          <i className='icon-line-message-circle'></i>Get Unlimited 24/7 report
        </li>
        <li>
          <i className='icon-line-video'></i>Anytime vido-call with doctors
        </li>
        <li style={{marginTop: '30px'}}>
        <a href="https://play.google.com/store/apps/details?id=com.luniva.lunivacare&hl=en&gl=US&showAllReviews=true" className='downImg'>
            <img src="./images/googleplay.png" alt="" />
          </a>
        </li>
      </div>
     
    </LandingPageContainer>
    </>
  )
}

export default LandingPageFour

const LandingPageContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 40px 100px;
  align-items: center;

  .downImg{
    img{
      width: 200px;
    }
  }
  .left, .right{
    flex: 0.5
  }
  
  .left{
    img{
      width: 100%;
    }
    
  }
  .right{
    li{
      font-size: 20px;
      color: var(--thirdTxt);
      list-style: none;
      margin: 25px 0;
      letter-spacing: 1.3px;
      

      i{
        background-color: var(--thirdTxt);
        color: #fefefe;
        padding: 15px 15px;
        border-radius: 50%;
        margin-right: 15px;
      }
      
      
    }
  }
  @media(max-width: 768px){
    padding: 0px;
  }
  @media(max-width: 500px){
    display: flex;
    flex-direction: column;
    padding: 0 20px;
  }
`