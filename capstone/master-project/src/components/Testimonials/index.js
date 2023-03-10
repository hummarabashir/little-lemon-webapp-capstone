import React from 'react'
import TestimonialsCard from './TestMonialCard'
import john from "../../assets/profiles/john.jpeg"
import nicole from "../../assets/profiles/nicole.jpeg"
import sara from "../../assets/profiles/sara.jpeg"
import yang from "../../assets/profiles/yang.jpeg"
import styles from "./Testimonials.module.css"

const Testimonials = () => {
  return (
    <section className={styles.testimonials} id="testimonials">
<h2>Testimonials</h2>
<div>
    <TestimonialsCard name="John Dave" image={john} testimonials="This is the best Mediterranean food that I've ever had!"/>
    <TestimonialsCard name="Yang Che" image={yang} testimonials="My Shiba Inu, Mugi, really loved the cozy vibes and delicious food here."/>
    <TestimonialsCard name="Sara T" image={sara} testimonials="I've had some great Mediterranean food before, but none of them beats Little Lemon in flavor and texture."/>
    <TestimonialsCard name="Nicole Chloe" image={nicole} testimonials="Great food, welcoming staff, cozy atmosphere. A great place to treat your kids to."/>
</div>
    </section>
  )
}

export default Testimonials
