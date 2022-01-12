import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Button from '../../common/Button'
import gsap from 'gsap'
import {  Power4 } from 'gsap/gsap-core'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from '../../assets/images/women.png'
import img2 from '../../assets/images/blob2.svg'
 

const WomenHealth = () => {

  const imgMove = useRef([]);

  useEffect(() => {
    gsap.from(imgMove.current, {
      x: 200,
      y: 200,
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
    <WomenHealthContainer>
      <div className="left">
        <div className="content">
          <h3>Women Health Care</h3>
          <p>Delivering better outcomes in lower cost through modern virtual care for women and families. <br/> Through experts Anywhere, Anytime</p>
          <div className="btn">
            <Button title='consult now' secondaryBtn></Button>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="img" >
          <img ref={imgMove} src={img1} alt="" />
          <div className="blob2">
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
    </WomenHealthContainer>
  )
}

export default WomenHealth

const WomenHealthContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--backgroundColor);
  overflow: hidden;
  /* .left, .right{
    flex: 0.4;
  } */
  .left{
    padding: 20px;
    margin-left: 160px;
    text-align: left;
    flex: 0.5;
    z-index: 30;
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
    @media(max-width: 1024px){
      margin-left: 100px;
    }
    @media(max-width: 768px){
      margin-left: 40px;
      flex: 1;
    }
    @media(max-width: 500px){
      margin-left: 20px;
      flex: 1;
    }
  }
  .right{
    .img{
      text-align: center;
      width: 400px;
      position: relative;
      z-index: 10;
      img{
        width: 100%;
      }
      .blob2{
        position: absolute;
        top: 0;
        right: 0;
        z-index: -10;
        width: 800px;
      }

      @media(max-width: 1024px){
        width: 300px;

        .blob2{
          width: 600px;
          /* img{
            width: 100%;
          } */
        }
      }
      @media(max-width: 768px){
        width: 250px;

        .blob2{
          width: 500px;
          /* img{
            width: 100%;
          } */
        }
      }
      @media(max-width: 500px){
        width: 200px;

        .blob2{
          width: 400px;
          /* img{
            width: 100%;
          } */
        }
      }

    }
    
  }
  @media(max-width: 500px){
    flex-direction: column;
    .right{
      height: 200%;
      .img{
        margin-right: -200px; 
      }
    }
    .left{
      width: 100%;
      margin: 0;
      padding: 20px;
    }
  }
`