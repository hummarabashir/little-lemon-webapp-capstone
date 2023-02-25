import { useEffect, useState } from 'react';
import './Confirmation.css';
import { Link as LinkR } from 'react-router-dom';
import location from '../../../assets/booking/location.svg';
import home from '../../../assets/booking/home.svg';

const Confirmation = () => {
  const [reservedDetails, setReserveDetails] = useState('');

  useEffect(() => {
    const data = localStorage.getItem('Bookings');
    if (data !== null) setReserveDetails(JSON.parse(data));
  }, []);

  return (
    <section name='booking-confirmation' className='booking-confirmation'>
      <LinkR to='/'>
        <img src={home} alt='home' className='booking-home' />
      </LinkR>
      <img src='./Logo.svg' alt='logo' className='booking-logo' />
<br/>
      <h1 className='confirmation-confirmed'>Your reservation is confirmed!</h1>
      <div className='confirmation-details-container'>
        <h3>
          DATE:{' '}
          <span className='confirmation-details'>{reservedDetails.date}</span>
        </h3>
        <h3>
          TIME:{' '}
          <span className='confirmation-details'>{reservedDetails.time}</span>
        </h3>
        <h3>
          GUESTS:{' '}
          <span className='confirmation-details'>{reservedDetails.guests}</span>
        </h3>
        <h3>
          OCCASION:
          <span className='confirmation-details'>
            {' '}
            {reservedDetails.occasion}
          </span>
        </h3>
      </div>

      <div className='confirmation-location'>
        <img src={location} alt='location' className='location-logo' />
        Little Lemon, E Chicago LaSalle Street
        <br />
        Chicago, Illinois 60602
        <a
          href='https://www.google.com/search?rlz=1C1CHBF_enPH1002PH1002&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=AJOqlzUVABLySjS1_j6nP8INrJrMR9gAww:1673692519116&q=E+Chicago+LaSalle+Street++Chicago,+Illinois+60602&rflfq=1&num=10&ved=2ahUKEwioosLA7sb8AhWY0GEKHVi_Al4QtgN6BAgXEAY#rlfi=hd:;si:;mv:[[41.89831356097401,-87.60044139182128],[41.873329069965436,-87.6648144081787],null,[41.885822536777205,-87.63262789999999],15]'
          target={'_blank'}
          rel='noreferrer'
        >
          <p>Get Directions</p>
        </a>
      </div>
    </section>
  );
};

export default Confirmation;
