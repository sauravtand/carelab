import React, { useEffect } from 'react'
import AboutPageComponent from '../components/AboutUs/AboutPageComponent'

const AboutPageContainer = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <AboutPageComponent></AboutPageComponent>
    </>
  )
}

export default AboutPageContainer
