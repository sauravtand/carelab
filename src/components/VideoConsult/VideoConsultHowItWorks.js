import React from 'react'
import styled from 'styled-components'
import Button from '../../common/Button'

const VideoConsultHowItWorks = () => {
  return (
    <Conaitner>
        <div className="left">
          <img src="./images/mobDoc3.png" alt="" />
        </div>
        <div className="right">
        <h3>How It Works</h3>
        <li><i className='icon-mobile-alt'></i>Download Lunivacare</li>
        <li><i className='icon-line-circle-check'></i>Register with your phone number</li>
        <li><i className='icon-line-user-plus'></i>Select the best doctors of nepal</li>
        <li><i className='icon-line-message-circle'></i>Consult with over 10+ best doctors of nepal</li>
        <li><i className='icon-line2-doc'></i>Reports and followback</li>
        <div className="btn">
          <Button title='get Started' primaryBtn></Button>
        </div>
        
        </div>
 
      
      
    </Conaitner>
  )
}

export default VideoConsultHowItWorks

const Conaitner = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  margin: 30px 0;

  h3{
    color: var(--secondaryText);
    margin-bottom: 30px;

  }
  .left, .right{
    flex: 0.5
  }

  .left{
    text-align: right;
    img{
      width: 100%;
    }
  }
  .right{
  
    margin-top:130px;
    
    li{
      list-style: none;
      color: var(--secondaryText);
      font-size: 16px;
      margin: 20px 0;
      display: flex;
      align-items: center;
      text-align: center;
      i{
        margin-right: 20px;
        color: var(--thirdTxt);
        font-size: 20px;
        width: 30px;

      }
    }
    .btn{
      padding-top: 10px;
    }

  }
  

`