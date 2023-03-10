import React from 'react'
import Button from '../Button'
import FoodCard from './FoodCard'
import GreekSalad from '../../assets/greek-salad.webp';
import Bruschetta from '../../assets/bruschetta.jpeg';
import LemonDessert from '../../assets/lemon-dessert.webp';
import styles from "./Specials.module.css"

const Specials = () => {
  return (
    <section className={styles.specials} id="specials">
        <div className={styles.sub_heading}><h3>This Week's Specials</h3>
        <Button>Online Menu</Button></div>
        <div className={styles.food_card__container}><FoodCard image={GreekSalad} name="Greek Salad" price="$12.99" description="Refreshing salad, made with tomato, lettuce, feta cheese, and olives.
                 Dressed with salt, hot pepper, and olive oil."/>
                <FoodCard image={Bruschetta}name="Bruschetta" price="$16.99" description="Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with
                 salt and olive oil."/>
                <FoodCard image={LemonDessert} name="Lemon Dessert" price="$8.50" description="Fresh baked lemon bread coated in salt and sugar. Powdered in citrus
                 and lemon zest."/></div>

    </section>
  )
}

export default Specials
