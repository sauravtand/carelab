import React from 'react'
import styled from 'styled-components'
import Button from '../../common/Button'
import NavigationBar from '../../common/NavigationBar'
import Footer from '../../common/Footer'

const faciliteis = [
  {
    id: 1,
    title: 'ONLINE CONSOLTATION AS PER NEED AND CONDITION OF PATIENT'
  },
  {
    id: 2,
    title: 'DIET CHARTING AND OTHER SUPPORTIVE MEDICAL MANAGEMENT.'
  },
  {
    id: 3,
    title: 'COUNSELING ON WARNING SYMPTOMS'
  },
  {
    id: 4,
    title: 'PATIENT PORTAL TO INSERT DAILY VITALS AND TEMPARTURES'
  },
  {
    id: 5,
    title: 'REGULAR MONITOR OF PATIENT VITAL BY DOCTORS AND MEDICAL REPRESENTATIVES'
  },
  {
    id: 6,
    title: 'HOME SAMPLE COLLECTION FOR COVID TEST AND OTHER REGULAR TEST TO BE DONE TO MONITOR HEALTH'
  },
  {
    id: 7,
    title: 'PROVIDE MENTAL HEALTH COUNCELLING INCASE OF NEED'
  }

]

const CovidCareComponent = () => {
  return (
    <>
    <NavigationBar></NavigationBar>
    <Container>
      <div className="container">
        <div className="top">
          <div className="left">
            <img src="./images/covid-doc.webp" alt="" />
          </div>
          <div className="right">
            <div className="content">
              <h3>Do you want to book an online covid isolation support with our regsitered doctors?</h3>
              <p>Covid Home Isolation Care Programme for COVID-19 positive patients</p>
              <Button title='request consuletion' pathName='http://lunivacare.ddns.net:8080/mHealth/OutApp/addOutAppointment' primaryBtn></Button>
            </div>
          </div>
        </div>
        <div className="bot">
          <div className="btn">
            <Button title='Request Covid 19 Test' pathName='http://lunivacare.ddns.net:8080/mHealth/OutApp/addOutAppointment' primaryBtn></Button>
          </div>
          <p>Patients Who are asymptomatic or have mild symptoms can avail the facility of home isolation from comfort of their home</p>
        </div>
      </div>
    </Container>
    <FacilitiesContainer>
      <div className="container">
        <div className="box" style={{borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}}>
          <h4>Our Facilities Include</h4>
        </div>
        
        <div className="content">
          {
            faciliteis.map(e=>(
              <li><span>{e.id}</span> <p>{e.title}</p> </li>
            ))
          }
          
        </div>
        <div className="box" style={{borderBottomLeftRadius:'10px',borderBottomRightRadius:'10px'}}>
          <h4>Our Facilities Include</h4>
        </div>
      </div>
    </FacilitiesContainer>

    <Footer></Footer>
    </>
  )
}

export default CovidCareComponent


const Container = styled.div`
  padding: 160px 0 50px 0;
  display: flex;
  justify-content: center;
  background-color: var(--backgroundColor);
  
  .container{
    width: 1000px;
    box-shadow: 0 2px 10px 0 rgba( 31, 38, 135, 0.37 );
    border-radius: 10px;
    overflow: hidden;
    .top{
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: var(--thirdTxt);
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      margin-bottom: -4px;
      .left{
        flex: 0.3;
        img{
          width: 300px;
        }
      }
      .right{
        flex: 0.7;
        .content{
          padding: 20px 30px;
          h3{
            color: #fefefe;
            text-transform: capitalize;
            margin-bottom: 20px;
            letter-spacing: 2px;
            font-weight: 500;
          }
          p{
            font-size: 20px;
            letter-spacing: 1.5px;
            font-weight: 400;
            margin-bottom: 20px;
            color: var(--secondaryText);

          }
        }
      }
     
      @media(max-width: 500px){
        flex-direction: column;
        .left{
          img{
            width: 200px;
          }
        }
      }
    }
    .bot{
      display: flex;
      justify-content: space-between;
      padding: 20px;
      background: #fefefe;
      backdrop-filter: blur( 14.5px );
      -webkit-backdrop-filter: blur( 14.5px );
      border: 1px solid rgba( 255, 255, 255, 0.18 );
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      p{
        padding-left: 80px;
      }
      @media (max-width: 500px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .btn{
          order: 5;
        }
        p{
          padding: 10px;
          order: 1;
          text-align: center
        }
        
      }
    }
   
  }
  @media(max-width: 768px){
    padding: 100px 20px 20px 20px;
  }
  @media(max-width: 768px){
    padding: 80px 20px 20px 20px;
  }
`
const FacilitiesContainer = styled.div`
 
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  .container{
    width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 10px 0 rgba( 31, 38, 135, 0.37 );
    .box{
      background-color: var(--thirdTxt);
      width: 100%;
      padding: 20px 0;
      text-align: center;
      h4{
        color: #fefefe;
        text-transform: capitalize;
      }
    }
    .content{
      
      li{
        list-style: none;
        margin: 30px 0;
        display: flex;
        align-items: center;
        padding: 0 20px;
        span{
          background-color: var(--primaryTxt);
          padding: 10px 15px;
          border-radius: 50%;
          margin-bottom: 10px;
          color: #fefefe;
          margin-right: 20px;
        }
      }
      @media(max-width: 500px){
        li{
          padding: 0 10px;
          span{
            margin-right: 10px;
          }
        }
      }
    }
  }
  @media(max-width: 768px){
    padding: 20px;
  }
`