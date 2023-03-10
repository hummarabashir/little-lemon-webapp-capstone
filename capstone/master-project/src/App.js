import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BookingPage from './pages/BookingPage';
import ConfirmationPage from './pages/ConfirmationPage';
import HomePage from './pages/HomePage';

function App() {
  const [formData,setFormData]=useState({})
  return (<>
  <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="booking" element={ <BookingPage setFormData={setFormData}/> } />
        <Route path="confirmation" element={ <ConfirmationPage formData={formData}/> } />
      </Routes>
</>
  )
}

export default App;
