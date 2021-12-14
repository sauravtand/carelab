import React from 'react'
import styled from 'styled-components'
import LandingPageTwo from '../LandingPageTwo'

const AboutMidComponent = () => {
  return (
    <AboutMidComponentContainer>
    <div className="container">
        <h3>About Luniva</h3>
        <p>"Your Health Care Companion" is an app to book home sample collection and view report online. It also helps to manage your personal medical records</p>
        
        
    </div>
    
    <div className="mid-container">
      <h3>Why Luniva</h3>
      <div className="row">
        <div className="content">
          <h4>24/7 Support</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod facere quaerat minus placeat numquam optio culpa ipsa illo quae expedita.</p>
        </div>
        <div className="content">
          <h4>24/7 Support</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod facere quaerat minus placeat numquam optio culpa ipsa illo quae expedita.</p>
        </div>
        <div className="content">
          <h4>24/7 Support</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod facere quaerat minus placeat numquam optio culpa ipsa illo quae expedita.</p>
        </div>
      </div>
      
      
    </div>
    <div className="services">
      <h3>Our Services</h3>
      <LandingPageTwo />
    </div>
    

    </AboutMidComponentContainer>
  )
}

export default AboutMidComponent

// const AboutMidComponentContainer = styled.div`
//   .container{
//     display: flex;
//     width: 100%;
//     height: 400px;
//     overflow: hidden;
    
//     .small{
//       flex: 0.5;
//     }
//     .big{
//       flex: 0.5;
//     }
//     img{
//       width: 100%;
//       object-fit: cover;
//       object-position: center;
//     }
    
//   }
//   .one{
//     background-color: var(--thirdTxt);
//   }
//   .two{
//     background-color: #e95724c7;
//   }
//   .content{
//     padding: 50px 40px;
//     display: flex;
//     height: 100%;
//     flex-direction: column;
//     justify-content: center;
//     h3{
//       color: #fefefe;
//       margin-bottom: 20px;
//     }
//     p{
//       color: var(--secondaryText);
//       letter-spacing: 1.5px;
//       font-size: 20px;
//     }
//     a{
//       color: #fefefe;
//       font-size: 20px;
//       margin-top: 20px;
//       letter-spacing: 1.4px;
//     }
//   }

// `

const AboutMidComponentContainer = styled.div`
  
  background-color: var(--backgroundColor);
 

  .container{
    padding: 60px 340px;
    text-align: center;
    h3{
      color: var(--thirdTxt);
      letter-spacing: 3px;
      text-transform: capitalize;
      font-weight: 500;
      margin-bottom: 10px;
    }
    p{
      color: var(--secondaryText);
      line-height: 1.5;
    }
    @media(max-width: 1024px){
      padding: 40px 100px 0px 100px;
    }
    @media(max-width: 500px){
      padding: 20px;
    }
  }
  .mid-container{
    text-align: center;

    h3{
      color: var(--thirdTxt);
      margin-bottom: 10px;
    }
    .row{
      display: flex;
      gap: 20px;
      justify-content: center;
    }
    .content{
      width: 400px;
      padding: 10px;
      h4{
        margin-bottom: 10px;
      }
    }
    @media(max-width: 500px){
      .row{
        flex-direction: column;
        .content{
          width: 100%;
        }
      }
    }
  }
  .services{
    text-align: center;
    margin-top: 50px;
    h3{
      color: var(--thirdTxt)
    }
  }
`
