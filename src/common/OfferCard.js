import React from 'react'
import styled from 'styled-components'

const OfferCard = (props) => {
 
  return (
    <CardContainer>
      <div className="img">
        <img src={props.img} alt="" />
      </div>
      <div className="detail">
        <h4>{props.title}</h4>
        <p>{props.subTitle}</p>
        {props.test && <p><span>{props.test} Test Included</span> </p>}
{/*         
        <hr className='hrOne' /> */}
        {/* <div className="price">
          <div className="discounted">
            <h5>Rs. {props.dPrice}</h5>
          </div>
          {
            props.aPrice && <div className="actual">
            <h5><span>Rs. {props.aPrice}</span></h5>
          </div>
          }
          {
            props.dPercent && <div className="dicountPercent">
            <h5> {props.dPercent} off</h5>
          </div>

          }
          
        </div> */}
      </div>
    </CardContainer>
  )
}

export default OfferCard

const CardContainer = styled.div`
    width: calc(25% - 20px);
    background-color: #fefefe;
    box-shadow: 0 2px 4px 0 rgba( 31, 38, 135, 0.37 );
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    .hrOne{
      border: none;
      margin-bottom: 4px;
    }
    h4{
      color: var(--primaryTxt);
      margin-bottom: 10px;
      font-size: 20px;
    }
    p{
      color: #232324;
      margin: 10px 0;
      font-size: 16px;
      span{
        border: 20px;
        padding: 2px 10px;
        border: 1px solid #2323243e;
        border-radius: 10px;
      }
    }
    h5{
      font-weight: 400;
      color: var(--secondaryText);
      span{
        color: var(--thirdTxt);
      }
    }
    
  .img{
    width: 100%;
    height: 180px;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
    .detail{
        padding: 10px 20px;
        .price{
        display: flex;
        justify-content: space-between;
        align-items: start;
        .actual{
          h5{
            color: #53535ab7;
            position: relative;
            &::after{
              content: '';
              top: 50%;
              left: 0;
              right: 0;
              width: 100%;
              height: 4px;
              display: block;
              position: absolute;
              transform: translateY(-50%);
              background-color: #eb4e4e84;
            }
          }
        }
        
        .dicountPercent{
            h5{
              color: var(--thirdTxt);
            }
          }
      }
      }
  @media(max-width: 1024px){
    width: 48%;
  }
  .img{
      height: 220px;
    }
  @media(max-width: 768px){
    width: 48%;
    .img{
      height: 100px;
    }
    .detail{
      padding: 4px;
      
      
      .price{
        h5{
          font-size: 20px;
        }
        .actual{
          h5{
            font-size: 16px;
          } 
        }
        .dicountPercent{
          h5{
            font-size: 20px;
          }
        }
      }
    }
  }
  @media(max-width: 500px){
    width: 100%;
  }

`