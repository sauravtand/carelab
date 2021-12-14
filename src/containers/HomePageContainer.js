import React, { useEffect } from 'react'
import styled from 'styled-components'
import HomePage from '../components/HomePage/HomePage'

const HomePageContainer = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Container>
      <HomePage></HomePage>
    </Container>
  )
}

export default HomePageContainer

const Container = styled.div`

`