import React, { useEffect } from 'react'
import CovidCareComponent from '../components/CovidCare/CovidCareComponent';

const CovidCareContainer = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <CovidCareComponent></CovidCareComponent>
    </>
  )
}

export default CovidCareContainer;
