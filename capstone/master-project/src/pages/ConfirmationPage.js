import React from 'react'
import Confirmation from '../components/Confirmation/Confirmation'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NavBar from '../components/Nav'

const ConfirmationPage = ({formData}) => {
  return (
    <>
      <Header><NavBar/></Header>
      <Confirmation formData={formData}/>
      <Footer/>
    </>
  )
}

export default ConfirmationPage
