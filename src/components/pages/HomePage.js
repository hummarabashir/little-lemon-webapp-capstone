import { Link } from "react-router-dom";
import Specials from '../sections/Specials/Specials';
import Testimonials from "../sections/Testimonials/Testimonials";
import About from "../sections/About/About";
import NavBar from "../../components/NavBar/NavBar";


export default function Homepage() {
  return (
    <>
    <NavBar />
      <header>
          <article className="call-to-action">
              <section className="hero-text">
                  <h1>Little Lemon</h1>
                  <h2>Chicago</h2>
                  <p className="subsection">We are a family owned Mediterranean restaurant, located on  Maldove Street in Chicago, Illionis. We focus
                  on traditional recipes served with a modern twist.</p>
                  <br></br>
                  <Link className="action-button" to="/booking">Reserve a table</Link>
              </section>

              <section className="hero-image">
                  <img src={require('../../assets/food/restaurantfood.jpg')} alt="Little Lemon restaurant cuisine"></img>
              </section>
          </article>
      </header>
      <Specials />
      <Testimonials />
      <About />
    </>
  );
}
