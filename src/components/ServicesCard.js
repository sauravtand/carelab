import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { Power4 } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServicesCard = (props) => {
  const linkRef = useRef([]);

  useEffect(() => {
    gsap.from(linkRef.current, {
      y: 100,
      duration: 5,
      opacity: 0,
      ease: Power4.inOut,
      scrollTrigger: {
        trigger: linkRef.current,
        // markers: true,
        start: "top bottom",
        end: "top 300px",
        scrub: true,
      },
    });
  }, []);

  return (
    <ServicesCardContainer ref={linkRef}>
      <img src={props.img} alt="" />
      <div className="card-content">
        <h4>{props.title}</h4>
        <p>{props.txt}</p>
      </div>
    </ServicesCardContainer>
  );
};

export default ServicesCard;

const ServicesCardContainer = styled.div`
  width: 220px;
  background: #fefefe;
  box-shadow: 1px 1px 10px #23232442;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 30px 15px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  img {
    width: 50%;
    margin-bottom: 10px;
  }
  .card-content {
    h4 {
      color: var(--thirdTxt);
      margin: 10px 0;
    }
    p {
      color: var(--secondryTxt);
    }
  }
  @media (max-width: 1024px) {
    width: 200px;
    padding: 20px 5px;
  }

  @media (max-width: 500px) {
    width: 180px;
    padding: 20px 5px;
  }
  @media (max-width: 400px) {
    width: 300px;
    padding: 20px 5px;
  }
`;
