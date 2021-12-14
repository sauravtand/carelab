import React from 'react'
import styled from 'styled-components'

const TestCard = (props) => {
  return (
    <TestCardContainer>
      <div className="img">
        <img src={props.img} alt="" />
      </div>
      <div className="content">
        <h5>{props.tesName}</h5>
        <p>{props.testDis}</p>
        <hr />
        <h4>{props.price}</h4>
      </div>
      
    </TestCardContainer>
  )
}

export default TestCard

const TestCardContainer = styled.div`
  width: 250px;
  border: 1px solid #23232436;
  border-radius: 3px;
  cursor: pointer;
  h5{
    color: var(--primaryTxt);
  }
  p{
    color: #232324;
  }
  h4{
    color: var(--thirdTxt);
  }
  hr{
    border: none;
    width: 100%;
    height: 1px;
    background-color: #23232452;
  }
  .img{
    width: 100%;
    height: 100px;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .content{
    padding: 3px 10px;
  }
  @media(max-width: 768px){
    width: 240px;
    .img{
      height: 100px;
    }
    .content{
      padding: 4px;
      h5{
        font-size: 20px;
      }
      h4{
        font-size: 26px;
      }
    }
  }
  @media(max-width: 500px){
    width: 200px;
    height: 230px;
  }
`