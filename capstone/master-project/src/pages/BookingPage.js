import React, { useReducer } from 'react'
import BookingForm from '../components/BookingForm'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NavBar from '../components/Nav'
import {fetchAPI} from "../api"

const BookingPage = ({setFormData}) => {
    const reducer = (state, action) => {
          return fetchAPI(action.payload);
      };

        const [availableTimes, dispatch] = useReducer(reducer, []);
  return (
    <>
      <Header>
    <NavBar/>
  </Header>
  <BookingForm availableTimes={availableTimes} getAvailableTimes={dispatch} setFormData={setFormData}/>
  <Footer/>
    </>
  )
}

export default BookingPage
