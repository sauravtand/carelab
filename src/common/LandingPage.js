import React from 'react'
import styled from 'styled-components'
import Button from '../common/Button'

const LandingPage = (props) => {
  const {title, subTitle, btnTitle, var1, var2, img,pathName} = props.data
  return (
    <Container>
      <div className="left">
        <h3>
          {title}
        </h3>
        <p>{subTitle}</p>
        <Button title={btnTitle} primaryBtn pathName={pathName}></Button>
        <div className="bot">
          <p><span><i className='icon-line2-badge'></i>{var1}</span></p>
          <p><span><i className='icon-file-text'></i>{var2}</span></p>
        </div>
        

      </div>
      <div className="right">
        <img src={img} alt="" />
      </div>
    </Container>
  )
}

export default LandingPage

const Container = styled.div`
  margin-top: 60px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background-color: #fefefe;
  box-shadow: 2px 2px 32px #4444463e;
  padding: 50px 100px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  position: relative;
  width: calc(100% - 100px);
  

  .left{
    h3{
      color: var(--thirdTxt);
      margin-bottom: 13px;
    }
    p{
      margin-bottom: 13px;
      color: #232324;
      
      span{
        color: var(--thirdTxt);
      }
    }
    .bot{
      display: flex;
      margin-top: 30px;
      
      p{
        margin-right: 30px;
        display: flex;
        i{
          margin-right: 10px;
        }
      }
    }
  }

  .right{
    position: absolute;
    text-align: center;
    bottom: -4px;
    right: 0;
    overflow: hidden;
    
    img{
      width: 300px;
      border-bottom-right-radius: 20px;
    }
   
  }
  /* @media(max-width: 900px){
    margin-top: 70px;
    padding: 20px;
    .left{
      flex: 0.8;
    }
    .right{
      img{
        width: 260px;
      }
    }
    
  } */

  @media(max-width: 1024px){
      padding: 20px 40px;
      .left{
        flex: 0.6;
      }
    }

  @media(max-width: 768px){
    margin-top: 70px;
    /* padding: 20px; */
    width: calc(100% - 40px);
    .left{
      flex: 0.8;
    }
    .right{
      img{
        width: 260px;
      }
    }
    
  }
  @media(max-width: 500px){
    margin-top: 0px;
    flex-direction: column;
    .left{
      order: 2;
      .bot{
        flex-direction: column;
      }
    }
    .right{
      display: none;
    }
  }
`