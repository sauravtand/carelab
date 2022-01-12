import React from 'react'
import styled from 'styled-components'
import Button from '../common/Button'
import NavigationBar from '../common/NavigationBar'
import Footer from '../common/Footer'

const ContactUsComponent = () => {
  return (
    <ContactContainer>
      <NavigationBar></NavigationBar>
        <div className="container">
        <div className="left">
          <h1>Get In Touch</h1>
          <li><i className="icon-phone"></i>01-5909085</li>
          <li><i className='icon-email3'></i>lunivatech.nepal@gmail.com</li>
          <li><i className='icon-location-arrow'></i>Kupandol, Lalitput</li>
          <li><i className='icon-facebook-square'></i>Message Us on Facebook</li>
          <li><i className='icon-instagram2'></i>Follow us for more updates</li>
        </div>
        <div className="right">
          <form action="#">
            <label htmlFor="">Name *</label>
            <input type="text"  />
            <label htmlFor="">email *</label>
            <input type="text" />
            <label htmlFor="">message *</label>
            <textarea name="" id="" ></textarea>
            <Button title='Submit' primaryBtn></Button>
          </form>
        </div>
      </div>
      
      <Footer></Footer>
    </ContactContainer>
  )
}

export default ContactUsComponent

const ContactContainer = styled.div`
  
  .container{
    display: flex;
    width: 100%;
    padding: 40px 40px 100px 40px;
    justify-content: space-evenly;
    align-items: center;
    background-image: url('./images/svg2.webp') ;
    background-size: cover;
    background-position: center;
    margin-bottom: -10px;
    .left{
      h1{
        color: var(--thirdTxt);
      }
      li{
        list-style: none;
        margin-bottom: 10px;
        color: var(--secondaryTxt);
        font-size: 20px;
        letter-spacing: 1.5px;
        
        i{
          background-color: #e95724c7;
          color: #fefefe;
          padding: 20px;
          border-radius: 50%;
          margin-right: 30px;
        }
      }
    }
    .right{
      form{
        width: 400px;
        padding: 50px 20px;
        border-radius: 10px;
        background: rgba( 255, 255, 255, 0.5 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 14.5px );
        -webkit-backdrop-filter: blur( 14.5px );
        border: 1px solid rgba( 255, 255, 255, 0.18 );
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        label{
          color: var(--thirdTxt);
          font-size: 20px;
          margin: 10px 0;
        }
        input{
          width: 100%;
          height: 36px;
          border-radius: 10px;
          padding: 10px;
          border: 1px solid #232325;
          &:focus-visible{
            border: 1px solid #415248;
          }
        }
        textarea{
          width: 100%;
          height: 100px;
          border-radius: 10px;
          margin-bottom: 30px;
          padding: 10px;
        }
      }
    }
    @media(max-width: 1024px){
      padding: 40px 40px 100px 40px;
    }
    @media(max-width: 768px){
      padding: 120px 10px 50px 10px;
      .left{
        li{
          i{
            padding: 10px;
            margin-right: 4px;
          }
      }
      }
      
    }

    @media(max-width: 500px){
      flex-direction: column;
      padding: 130px 10px 40px 10px;

      .left{
        li{
          i{
            padding: 10px;
            margin-right: 12px;
          }
        }
      }
      .right{
        margin-top: 20px;
      }
    }
  }
`