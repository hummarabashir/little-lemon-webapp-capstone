import { useState, useRef, useEffect } from 'react';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR} from "react-router-dom";
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { FaTimes } from 'react-icons/fa';
import './NavBar.styles.css';

const NavBar = () => {
  // STATE FOR HAMBURGER MENU
  const [nav, setNav] = useState(false);

  // onClick HANDLER
  const handleClick = () => {
    if (nav) {
      return setNav(!nav);
    }
  };

  // REF
  const navRef = useRef(null);

  // NAVBAR HIDE/ SHOW ON SCROLL
  useEffect(() => {
    let previousScrollPosition = window.scrollY;
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      const navElement = navRef.current;

      if (!navElement) return;
      if (previousScrollPosition > currentScrollPosition) {
        navElement.style.transform = 'translateY(0)';
        navElement.style.transition = '350ms';
      } else {
        navElement.style.transform = 'translateY(-110px)';
        navElement.style.transition = '800ms';
      }
      previousScrollPosition = currentScrollPosition;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // NAVLINKS


  return (
    <>
      <header>
        <nav className='nav-container'>
          <LinkR
            to='/'
          >
            <img src='./Logo.svg' alt='logo' className='logo' />
          </LinkR>

          <ul className='nav-links-container'>
          <li key="1">
        <LinkS
          to="about"
          smooth
          duration={550}
          onClick={handleClick}
          aria-label='On Click'
          className='nav-links'
        >
          about
        </LinkS>
      </li>
       <li key="2">
       <LinkS
         to="menu"
         smooth
         duration={550}
         onClick={handleClick}
         aria-label='On Click'
         className='nav-links'
       >
         menu
       </LinkS>
       </li>
       <li key="3">
       <LinkR
         to="/booking"
         className='nav-links'
       >
         reservation
       </LinkR>
       </li>
       <li key="4">
       <LinkS
         to="testimonials"
         smooth
         duration={550}
         onClick={handleClick}
         aria-label='On Click'
         className='nav-links'
       >
         testimonials
       </LinkS>
       </li>
       <li key="5">
       <LinkS
         to="contact"
         smooth
         duration={550}
         onClick={handleClick}
         aria-label='On Click'
         className='nav-links'
       >
         contact
       </LinkS>
     </li>
          </ul>
          {/* HAMBURGER MENU */}
          <div onClick={() => setNav(!nav)} aria-label='On Click'>
            <HiOutlineMenuAlt1
              size={30}
              style={{
                position: 'fixed',
                top: '25',
                right: '10',
              }}
              className={`${nav ? 'hamburger-off' : 'hamburger-on'}`}
            />
          </div>
        </nav>
      </header>

      {/* NAV-ITEMS WHEN HAMBURGER MENU IS ON */}
      {nav && (
        <FaTimes
          size={30}
          style={{
            color: '#edefee',
            position: 'fixed',
            top: '38',
            right: '10',
            zIndex: '99',
            cursor: 'pointer',
          }}
          onClick={() => setNav(!nav)}
          aria-label='On Click'
        />
      )}
      <ul className={`${nav ? 'nav-menu active' : 'nav-menu'}`}>
      <li key="1">
        <LinkS
          to="about"
          smooth
          duration={550}
          onClick={handleClick}
          aria-label='On Click'
          className='nav-links'
        >
          about
        </LinkS>
      </li>
       <li key="2">
       <LinkS
         to="menu"
         smooth
         duration={550}
         onClick={handleClick}
         aria-label='On Click'
         className='nav-links'
       >
         menu
       </LinkS>
       </li>
       <li key="3">
       <LinkS
         to="testimonials"
         smooth
         duration={550}
         onClick={handleClick}
         aria-label='On Click'
         className='nav-links'
       >
         testimonials
       </LinkS>
       </li>
       <li key="4">
       <LinkS
         to="contact"
         smooth
         duration={550}
         onClick={handleClick}
         aria-label='On Click'
         className='nav-links'
       >
         contact
       </LinkS>
     </li>
      </ul>
    </>
  );
};

export default NavBar;
