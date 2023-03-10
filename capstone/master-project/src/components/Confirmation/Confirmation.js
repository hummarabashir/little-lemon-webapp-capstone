import React from 'react'
import styles from "./Confirmation.module.css"

const Confirmation = ({formData}) => {
  return (
    <main className={styles.confirmation}>
<section >
        <h2>Your Reservation is Confirmed!</h2>
        <p>Date: {formData.date}</p>
        <p>Time: {formData.time}</p>
        <p>No of Guests: {formData.guests}</p>
        <p>Occassion: {formData.occasion}</p>
        <p>A confirmation message has been sent to your email.</p>
        <p>Thanks for dining with us!</p>
      </section>
    </main>
  )
}

export default Confirmation
