import React from 'react'
import styled from 'styled-components'

const HowItWorksNew = (props) => {
  console.log(props.data);
  return (
    
    <HowItWorksNewContainer>
    <h3>How It Works</h3>
    <div className="row">
      {
        props.data.map(e => (
          <div className="content">
          <div className="img">
            <img src={e.img} alt="" />
          </div>
          <div className="detail">
            <h4>{e.title}</h4>
            <p>{e.dis}</p>
          </div>
        </div>
        ))
      }
    </div>
    
    </HowItWorksNewContainer>
  )
}

export default HowItWorksNew

const HowItWorksNewContainer = styled.div`
  text-align: center;
  margin: 80px 0;
  h3{
    color: var(--secondaryText);
    margin-bottom: 20px;
  }
  .row{
    width: 100%;
    display: flex;
    justify-content: space-evenly;

   
    .content{
      margin-top: 20px;
      width: 300px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      gap: 20px;

    }
    .img{
      width: 150px;
      height: 150px;
      overflow: hidden;
      border-radius: 50%;
      border: 2px solid #fefefe;
      background-color: #e5e9eb;
      img{
        width: 100%;
        
      }
    }
    .content{
      text-align: center;
      h4{
        margin-bottom: 10px;
        color: var(--thirdTxt);
      }
      p{
        color: var(--secondaryText);
      }
    }
    @media(max-width: 1024px){
      padding: 10px 100px;
      gap: 20px;


    }
    @media(max-width: 768px){

      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      gap: 20px;
      .content{
        width: 100%;
      }
    }
    

  }
  @media(max-width: 768px){
    margin: 30px 0;
    h3{
      margin-bottom: 10px;
    }
  }
  

`