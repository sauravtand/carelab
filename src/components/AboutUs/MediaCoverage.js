import React from 'react'
import styled from 'styled-components'

const MediaCoverage = () => {
  return (
    <MediaCoverageContainer>
    <div className="content txt">
      <h1>Our media Coverage</h1>
    </div>
    
    <div className="content one">
        <img src="./images/media/3.png" alt="" />
      </div>
      <div className="content two">
        <img src="./images/media/4.png" alt="" />
      </div>
      <div className="content three">
        <img src="./images/media/5.png" alt="" />
      </div>
      <div className="content three">
        <img src="./images/media/1.jpg" alt="" />
      </div>

    </MediaCoverageContainer>
  )
}

export default MediaCoverage

const MediaCoverageContainer = styled.div`
  padding: 40px 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  background-image: url('./images/svg2.webp');
  background-size: cover;
  background-position: center;
  .content{
    overflow: hidden;
    padding: 20px;
    cursor: pointer;
    
    img{
      width: 100%;
    }
  }
  .one{
    width: 500px;
    height: 400px;
  }
  .two{
    width: 600px;
    height: 500px;
  }
  .three{
    width: 600px;
  }
  .txt{
    width: 500px;
    background-color: var(--thirdTxt);
    outline: 5px solid white;
    outline-offset: -10px;
    h1{
      color: #fefefe;
      text-transform: uppercase;
    }
  }
  @media(max-width: 500px){
    padding: 20px;
  }
`
