import React from 'react';
import styles from './index.module.sass';
import Image from 'next/image';
import { Zoom, Fade, Rotate } from "react-reveal";
import Link from 'next/link';
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__left}>
        <Image src={'/assets/img/minilogo.png'} alt='footerlogo' width={202} height={205} className={styles.footer__logo} />
        <div className={styles.footer__social}>
          <Rotate bottom cascade>
            <Link href={'https://www.facebook.com/profile.php?id=61563997641973&mibextid=LQQJ4d'}>
            <FaFacebook className={styles.footer__icon}/>
            </Link>
            <Link href={'https://www.instagram.com/saifproface/'} target='_blank'>
              <FaSquareInstagram className={styles.footer__icon}  width={45} height={45} />
            </Link>
            <Link href={"https://t.me/saifproface"} target='_blank'>
              <FaTelegram className={styles.footer__icon} width={45} height={45} />
            </Link>
          </Rotate>
        </div>
      </div>
      
      <div className={styles.footer__center}>
        <Fade bottom cascade>
          <p className={styles.footer__menu}>About Us</p>
          <p className={styles.footer__menu}>Our Services</p>
          <p className={styles.footer__menu}>Our Advantages</p>
          <p className={styles.footer__menu}>Why Choose Us</p>
          <p className={styles.footer__menu}>Team</p>
        </Fade>
      </div>

      <div className={styles.footer__right}>
        <div className={styles.footer__contact}>
          <p className={styles.footer__platform}>+998781139545</p>
          <p className={styles.footer__email}>email@gmail.com</p>
          <p className={styles.footer__email}>Manzil: Toshkent shahri, Yashnobod tumani, Alimkent 1-tor, 32</p>
        </div>
        
      </div>
      <div className={styles.footer__patternContainer}>
          <Image src={'/assets/img/pattern.png'} alt='pattern' width={300} height={300} className={styles.footer__pattern} />
        </div>
    </div>
  );
};
