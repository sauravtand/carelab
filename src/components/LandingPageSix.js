import React from 'react'
import styled from 'styled-components'
import Button from '../common/Button'
import phone2 from '../assets/images/phone2.webp'
import blob2 from '../assets/images/blob.png'

const LandingPageSix = () => {
  return (
    <>
    <LandingPageContainer>
      <div className="left">
        <h3>Your Health Care Companion</h3>
        <li>
          <i className='icon-mobile-alt'></i>
          <p>Online Consultation</p>
        </li>
        <li>
          <i className='icon-home2'></i>
          <p>Home Sample Collection</p>
        </li>
        <li>
          <i className='icon-chat-3'></i>
          <p>Receive online medical advices, lab report & Prescriptions</p>
        </li>
        <li>
          <i className='icon-line-calendar'></i>
          <p>Appointment Booking</p>
        </li>
        <li>
          <i className='icon-file-medical'></i>
          <p>Personalize Medical History</p>
        </li>
        <div className="btn">
        {/* <a href="https://play.google.com/store/apps/details?id=com.luniva.lunivacare&hl=en&gl=US&showAllReviews=true" className='downImg'>
            <img src="./images/googleplay.png" alt="" />
          </a> */}
          <Button title='Get Started' primaryBtn pathName='http://lunivacare.ddns.net:8080/mHealth/User/regiUser'></Button>
        </div>
      </div>
      <div className="right">
          <div className="img">
            <img src={phone2} alt="" />
          </div>
        
        <div className="blob">
          <img src={blob2} alt="" />
        </div>
      </div>
      
     
    </LandingPageContainer>
    </>
  )
}

export default LandingPageSix

const LandingPageContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 0px 200px;
  min-height: 90vh;
  align-items: center;
  position: relative;
  overflow: hidden;
  z-index: 10;
  .left, .right{
    flex: 0.5;
  }
  .right{
    img{
      width: 100%;
      height: 100%;
    }
    .img{
      position: absolute;
      top: 0px;
      z-index: -10;
    }
    .blob{
      position: absolute;
      width: 600px;
      height: 600px;
      top: 10%;
      right: 15%;
      z-index: -100;
    }
  }
  .left{
    display: flex;
    flex-direction: column;
    li{
      list-style: none;
      margin: 10px;
      color: #62626e;
      font-size: 16px;
      display: flex;
      
      
      i{
        margin-right: 20px;
        color: var(--thirdTxt);
      }
    }
    h3{
      color: var(--secondaryText);
    }
    .btn{
      margin-top: 10px;
    }
   

  }
  @media(max-width: 1024px){
    padding: 10px 10px 100px 100px;
    .left{
      flex: 0.6;
      margin-top: 100px;
    }
    .right{
      flex: 0.4;
      .img{
        position: absolute;
        top: 0px;
        right: -30px;
        width: 650px;
        
      }
      .blob{
        width: 450px;
        height: 450px;
      }
     
    }
  }

  
  @media(max-width: 768px){
    padding: 100px 40px 40px 40px;
    overflow: hidden;
    .left{
      margin-top: 60px;
    }
    .right{
     
      .img{
        position: absolute;
        width: 550px;
        top: 80px;
        right: -100px;
      }
      .blob{
        width: 480px;
        height: 480px;
        top: 60px;
        right: 20px;
      }
     
    }
  }
  @media(max-width: 500px){
    display: flex;
    flex-direction: column;
    padding: 85px 20px 0px 20px;
  
    .left{
      order: 3;
      li{
        i{
          margin-right: 14px;
        }
      }
    }
    .right{
      order: 1;
      .img{
        position: relative;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 300px;
        height: 400px;
        margin-bottom: -40px;
        img{
          width: 100%;
          object-fit: cover;
          object-position: top;
        }
      }
      .blob{
        margin-top: 0px;
        width: 380px;
        height: 380px;
      }
     
    }
    
  }
`

