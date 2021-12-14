import React, { useEffect } from 'react'
import ContactUsComponent from '../components/ContactUsComponent'

const ContactUsContainer = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <ContactUsComponent />
    </>
  )
}

export default ContactUsContainer
