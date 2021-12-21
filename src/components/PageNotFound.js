import React from 'react'
import styled from 'styled-components'
import Footer from '../common/Footer'
import NavigationBar from '../common/NavigationBar'

const PageNotFound = () => {
  return (
    <>
      <Container>
        <img src="./images/pageNotFound.svg" alt="" />
       <h3>page not found</h3>
      </Container>
    </>
  )
}

export default PageNotFound

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  img{
    width: 400px;
  }
  h3{
    color: var(--thirdTxt);
    text-transform: lowercase;
    margin-top: 40px;
    letter-spacing: 2px;
  
  }
  @media(max-width: 768px){
   img{
    width: 300px;
   }
  }
  @media(max-width: 500px){
    height: 60vh;
   img{
    width: 260px;
   }
  }
`