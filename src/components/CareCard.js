import React from 'react'
import styled from 'styled-components'

const CareCard = (props) => {
  return (
    <CareCardContainer>
      <div className="number">
        <h4>{props.id}</h4>
      </div>
      <div className="detail">
        <h4>{props.title}</h4>
        <p>{props.txt}</p>
      </div>
      <div className="img">
        <img src={props.img} alt="" />
      </div>
    </CareCardContainer>
  )
}

export default CareCard

const CareCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;

  .number{
    background-color: #f19090;
    padding: 30px 35px;
    border-radius: 50%;
    margin: 0 30px;
    h4{
      color: #fefefe;
      
    }
  }
  .detail{
    width: 400px;
    margin: 0 30px;
    h4{
      color: var(--thirdTxt);
      margin-bottom: 10px;
    }
  }
  .img{
    width: 200px;
    margin: 0 30px;
    img{
      width: 100%;
    }
  }
  @media(max-width: 768px){
    .number{
      padding: 20px 25px;
    }
    .detail{
      width: 300px;
    }
    .img{
      width: 160px;
    }
  }

  @media(max-width: 500px){
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    padding: 10px;
    .img{
      order: 1;
    }
    .number{
      position: absolute;
      top: 0;
      left: 0;
      z-index: -10;
      /* 82baff blur */
      /* ffc3b8 pink */
      /* 48413d black */
    }
    
    .detail{
      order: 3;
      width: 100%;
    }
  }
`