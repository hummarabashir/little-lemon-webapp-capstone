import React from 'react'
import styles from "../Specials.module.css"
import delivery from "../../../assets/delivery.png"

const FoodCard = (props) => {
  return (
<article className={styles.food_card}>
            <img src={props.image} alt="Special Menu"/>
            <section className={styles.menu_card_content}>
                <div><h3>{props.name}</h3>
                <h4>{props.price}</h4></div>
                <p>{props.description}</p>
                <div className={styles.special_button}><p>Order for Delivery</p><img src={delivery} alt="delivery"/></div>
            </section>
        </article>
  )
}

export default FoodCard
