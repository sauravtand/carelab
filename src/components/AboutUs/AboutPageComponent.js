import React from 'react'
import styled from 'styled-components'
import NavigationBar from '../../common/NavigationBar'
import Footer from '../../common/Footer'
import AboutMidComponent from './AboutMidComponent'
import MediaCoverage from './MediaCoverage'
import Client from '../Client'
import LandingPage from '../../common/LandingPage'
import NavBar from '../../common/NavBar'

const data=  {
  title: 'Right Choice of Careness',
  subTitle: 'Give us a Chance and we will make sure of your health',
  btnTitle: 'Sign-in',
  var1: 'Certified Company',
  var2: 'Best Overall in nepal',
  img: './images/doctor1.webp'
};


const AboutPageComponent = () => {
  return (
    <>
      {/* <NavBar /> */}
      <NavigationBar></NavigationBar>
      <AboutContainer>
        <div className="top">
          <div className="left">
            <img src="./images/3.png" alt="" />  
          </div>
          <div className="right">
            <h3>Our Vision</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eius eligendi sint tempora perferendis aspernatur illo temporibus beatae sit commodi dolorum</p>
          </div>
        </div>
{/*         
        <AboutLandingPage></AboutLandingPage> */}
        <AboutMidComponent></AboutMidComponent>
        <MediaCoverage />
        {/* <Client/> */}
        
      </AboutContainer>
      <Footer></Footer>
    </>
  )
}

export default AboutPageComponent

const AboutContainer = styled.div`
  /* background-color: var(--backgroundColor); */

  .top{
    padding: 200px 100px 20px 100px;
    display: flex;
    .left, .right{
      flex: 0.5
      
    }
    .left{
      text-align: center;
      img{
        outline: 3px solid #fefefe;
        outline-offset: -10px;
      }
    }
    .right{
      text-align: left;
      padding-top: 20px;
      h3{
        color: var(--thirdTxt);
        margin-bottom: 10px;
      }
      p{
        color: var(--secondaryText);
      }
      
    }
    
    @media(max-width: 768px){
      padding: 120px 40px;
    }
    @media(max-width: 500px){
      padding: 120px 20px 20px 20px;
      flex-direction: column;
      img{
        width: 100%
      }
      .right{
        text-align: center;
      }
    }
  }
  
`