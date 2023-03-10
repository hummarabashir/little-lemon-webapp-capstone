import styles from "./About.module.css"
export default function About() {
    return (
        <article className={styles.about_us} id='about'>
            <section className={styles.hero_text}>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className={styles.about_subtext}>Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. 
                Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, 
                and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers 
                continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
            </section>

            <section className={styles.double_image}>
                <img className={styles.about_1} src={require('../../assets/food/food3.jpeg')} alt="Little Lemon restaurant cuisine 1"></img>
                <img className={styles.about_2} src={require('../../assets/food/food2.jpeg')} alt="Little Lemon restaurant cuisine 2"></img>
            </section>
    </article>
    );
}