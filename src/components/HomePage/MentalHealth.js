import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Button from '../../common/Button'
import gsap from 'gsap'
import {  Power4 } from 'gsap/gsap-core'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from '../../assets/images/doctor1.png'
import img2 from '../../assets/images/pattern.png'
import img3 from '../../assets/images/blob.svg'

const MentalHealth = () => {
  const imgMove = useRef([]);

  useEffect(() => {
    gsap.from(imgMove.current, {
      x: -200,
      duration: 5,
      opacity: 0,
      ease: Power4.inOut,
      scrollTrigger: {
        trigger: imgMove.current,
        // markers: true,
        start: "top bottom",
        end: "top center",
        scrub: true
      }
    });
  }, []);
  return (
    <MentalHealthContainer className=''>
      <div className="left">
        <div className="img" >
          <img ref={imgMove} src={img1} alt="" />
          <div className="pattern">
            <img src={img2} alt="" />
          </div>
          <div className="blob">
            <img src={img3} alt="" />
          </div>
        </div>
        
        
      </div>
      <div className="right">
        <div className="content">
          <h3>Mental Health Companion</h3>
          <p>If you are struggling with emotional problems or simply want to be more aware of 
your mood and mental wellbeing, Luniva care accompanies you with personalized care support.</p>
          <div className="btn">
          <Button title="Consult now" secondaryBtn pathName=''></Button>
          </div>
        </div>
      </div>
    </MentalHealthContainer>
  )
}

export default MentalHealth

const MentalHealthContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 30px;
  /* background-color: red; */
  overflow: hidden;

  .left, .right{
    flex: 0.4;
    margin-bottom: -4px;
  }
  .left{
    .img{
      text-align: center;
      position: relative;
    }
    .pattern{
      position: absolute;
      top: 0;
      left: 0;
      z-index: -10;
      width: 220px;
      img{
        width: 100%;
      }
    }
    .blob{
      position: absolute;
      bottom: -30%;
      left: 0;
      right: -15%;
      z-index: -10;
      
    }
    @media(max-width: 1024px){
      .img{
        width: 300px;
        margin-left: 100px;
        img{
          width: 100%;
        }
        .pattern{
          left: -100px;
        }
        .blob{
          bottom: -10%;
          width: 500px;
        }
      }
    }
    @media(max-width: 768px){
      .img{
        width: 250px;
        margin-left: 60px;
      }
      .pattern{
        left: -50px;
      }
      .blob{
        bottom: -110px!important;
        left: -100px;
      }
    }
  }
  .right{
    text-align: left;
    h3{
      color: var(--thirdTxt);
      margin-bottom: 20px;
    }
    p{
      color: var(--secondaryText);
      margin-bottom: 10px;
    }
    .btn{
      width: 200px;
      margin-top: 30px;
    }
  }
  @media(max-width: 500px){
    flex-direction: column;
    .left{
      order: 2;
      margin: 20px 0;
    }
    .right{
      order: 1;
      padding: 0 20px;
      
    }
  }
`