import React from 'react'
import styles from "../Testimonials.module.css"
import star from "../../../assets/star.jpeg"

const TestimonialsCard = (props) => {
  return (
    <div className={styles.card}>
<div className={styles.rating_box}>{[0,1,2,3,4].map(i=><img src={star} alt='ratings' className={styles.rating} key={i}/>)}</div>
<div className={styles.profile_box}><img src={props.image} alt="profile" className={styles.profile_pic}/>
<p>{props.name}</p></div>

<p className={styles.comment}>{props.testimonials}</p>
    </div>
  )
}

export default TestimonialsCard
