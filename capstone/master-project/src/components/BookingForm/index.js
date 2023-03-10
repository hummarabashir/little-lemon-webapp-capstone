import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { submitAPI } from '../../api';
import Button from '../Button';
import styles from "./BookingForm.module.css";

const BookingForm = ({availableTimes,getAvailableTimes,setFormData}) => {
    const [guests,setGuests]=useState(1);
    const [date,setDate]=useState('');
    const [occasion,setOccasion]=useState("Birthday");
    const [time,setTime]=useState("time");
    const [dateError,setDateError]=useState(false);
    const [timeError,setTimeError]=useState(false);
    const navigate=useNavigate()

    const updateTimes=(date)=>{
        getAvailableTimes({payload:date});
    }
      useEffect(() => {
        updateTimes(date)
      }, [date]);

    const handleGuestsChange = (event) => {
        setGuests(event.target.value)
      }
      const handleTimeChange = (event) => {
        setTime(event.target.value)
        if(event.target.value==='time'){
            setTimeError(true);}else{
                setTimeError(false)
            }
      }
      const handleDateChange = (e) => {
const newDate=e.target.value;
if(!newDate){
    setDateError(true);}else{
        setDateError(false)
    }
    setDate(newDate);
      }
      const handleOccasionChange = (event) => {
        setOccasion(event.target.value)
      }
      const submitHandler=(e)=>{
        e.preventDefault();
        if(!date){
            setDateError(true);
            return
        }
        if(time==="time"){
            setTimeError(true);
            return
        }
        if(time){
            setTimeError(false);
        }
        if(date){
            setDateError(false);
        }
        console.log("output",guests,date,time,occasion)
        if(submitAPI()){
            setFormData({date,time,guests,occasion})
            navigate("/confirmation");
        }
      }
  return (
    <main>
    <form className={styles.form}>
        <h2 style={{textAlign:"center"}}>Book Table Now</h2>
        <br/>
        <div><label htmlFor="res-date">Choose date</label>
   <input type="date" id="res-date" onChange={handleDateChange} value={date} required/></div>
   {dateError && <p>Please select date</p>}
   <div><label htmlFor="res-time">Choose time</label>
   <select id="res-time " onChange={handleTimeChange} value={time}>
   <option disabled>time</option>
    {availableTimes.map(t=><option key={t}>{t}</option>)}
   </select>
   </div>
   {timeError && <p>Please select time</p>}
  <div> <label htmlFor="guests">Number of guests</label>
   <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={handleGuestsChange} value={guests}/></div>
   <div><label htmlFor="occasion" onChange={handleOccasionChange} value={occasion}>Occasion</label>
   <select id="occasion">
      <option>Birthday</option>
      <option>Anniversary</option>
   </select></div>
   <Button type="button" onClick={submitHandler} id="submit" disabled={dateError || timeError}>Make Your reservation</Button>
</form>
</main>
  )
}

export default BookingForm
