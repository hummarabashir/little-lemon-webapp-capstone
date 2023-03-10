import React, { useEffect, useRef } from 'react';
import styles from "./Header.module.css";
import desktopLogo from "../../assets/desktop-logo.png"

const Header= ({children}) => {
  const headerRef = useRef(null);

 useEffect(() => {
   let prevScrollPos = window.scrollY;

   const handleScroll = () => {
     const currentScrollPos = window.scrollY;
     const headerElement = headerRef.current;
     if (!headerElement) {
       return;
     }
     if(currentScrollPos<headerElement.offsetHeight){
      return
     }
     if (prevScrollPos > currentScrollPos) {
       headerElement.style.top = "0";
     } else {
       headerElement.style.top = `-${headerElement.offsetHeight}px`;
     }
     prevScrollPos = currentScrollPos;
   }
   window.addEventListener('scroll', handleScroll)

   return () => {
     window.removeEventListener('scroll', handleScroll)
   }
 }, []);

  return (
    <header className={styles.header} ref={headerRef} >
      <div className={styles.container}>
      <img src={desktopLogo} alt="little-lemon-logo" className={styles.logo}/>{children}
      </div>
    </header>
  )
}

export default Header

