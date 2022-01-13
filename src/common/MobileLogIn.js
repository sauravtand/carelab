import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Button from './Button'

const MobileLogIn = () => {
  const history = useHistory();
  function handleClick() {
    history.push('/')
  }
  return (
    <MobileLogInContainer>
      <div className="container">
        <img src="./images/logo.png" alt="" />
        <Button title='Doctors Login' pathName='http://lunivacare.ddns.net:8080/mHealth/' secondaryBtn></Button>
        <Button title='Patient Login' pathName='http://lunivacare.ddns.net:8080/mHealth/Member/memLogin' secondaryBtn></Button>
        {/* <div className="cross" onClick={handleClick}>
          <i className='icon-times'></i>
        </div> */}
      </div>

    </MobileLogInContainer>
  )
}

export default MobileLogIn

const MobileLogInContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 150px;
  .container{
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    img{
      width: 100%;
    }
  }

`