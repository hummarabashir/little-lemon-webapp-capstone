import './Specials.css';
import { RiEBike2Line } from 'react-icons/ri';

const Specials = () => {
  return (
    <section name='menu' className='specials'>
      <div className='specials-header'>
        <h1 className='specials-title'>This weeks Specials!</h1>
        <button className='menu-button'>Online Menu</button>
      </div>
   <div className='card-list'>
    <div className='card-container'>
            <div className='specials-image-container'>
                <img src={require('../../../assets/specials/greekSalad.jpg')} alt="" className='specials-image' />
            </div>
            <div className='specials-details'>
                <div className='specials-name'>
                <p>Greek Salad</p>
                <p className='specials-price'>$ 12.99</p>
                </div>
                <p className='specials-description'>The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                <div className='specials-delivery'>
                <p className='specials-name'>Order a delivery</p>
                <RiEBike2Line />
                </div>
            </div>
        </div>
        <div className='card-container'>
            <div className='specials-image-container'>
                <img src={require('../../../assets/specials/bruschetta.jpg')} alt="" className='specials-image' />
            </div>
            <div className='specials-details'>
                <div className='specials-name'>
                <p>Bruschetta</p>
                <p className='specials-price'>$ 5.99</p>
                </div>
                <p className='specials-description'>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive.</p>
                <div className='specials-delivery'>
                <p className='specials-name'>Order a delivery</p>
                <RiEBike2Line />
                </div>
            </div>
        </div>
        <div className='card-container'>
            <div className='specials-image-container'>
                <img src={require('../../../assets/specials/lemonDessert.jpg')} alt="" className='specials-image' />
            </div>
            <div className='specials-details'>
                <div className='specials-name'>
                <p>Greek Salad</p>
                <p className='specials-price'>$ 5.00</p>
                </div>
                <p className='specials-description'>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                <div className='specials-delivery'>
                <p className='specials-name'>Order a delivery</p>
                <RiEBike2Line />
                </div>
            </div>
        </div>
   </div>
    </section>
  );
};

export default Specials;