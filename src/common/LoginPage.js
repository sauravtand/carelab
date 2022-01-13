import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import Button from './Button'



const LoginPage = ({ closeFun, ...props }) => {
  const handleClick = () => {
    closeFun(false)
  }
  return (
    <LoginPageContainer>
      <div className="container">
        <img src="./images/logo.png" alt="" />
        <Button title='Doctors Login' pathName='http://lunivacare.ddns.net:8080/mHealth/' secondaryBtn></Button>
        <Button title='Patient Login' pathName='http://lunivacare.ddns.net:8080/mHealth/Member/memLogin' secondaryBtn></Button>
        <div className="cross" onClick={handleClick}>
          <i className='icon-times'></i>
        </div>
      </div>

    </LoginPageContainer>
  )
}

export default LoginPage

const LoginPageContainer = styled.div`
  background: rgba( 255, 255, 255, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 10px );
  -webkit-backdrop-filter: blur( 4px );
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
 
 
  .container{
    width: 400px;
    padding: 40px;
    background-color: #fefefe;
    position: relative;
    gap: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
    box-shadow: 2px 2px 20px #6e6e885a;
    border-radius: 10px;
  }
  .cross{
    position: absolute;
    top: -20px;
    right: -20px;
    cursor: pointer;
    background-color: var(--primaryTxt);
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    i{
      color: #fefefe;
      font-size: 20px;
    }
  }
`