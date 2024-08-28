import React from 'react'
import styles from './index.module.sass'
import Image from 'next/image'
import { Zoom, Fade , Rotate } from "react-reveal";
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <Image src={'/assets/img/minilogo.png'} alt='footerlogo' width={202} height={205} className={styles.footer__logo} />
      <div className={styles.footer__content}>
        <p className={styles.footer__platform}>+998781139545</p>
        <p className={styles.footer__email}>email@gmail.com</p>
        <p className={styles.footer__email}>Manzil: Toshkent shahri, Yashnobod tumani, Alimkent 1-tor, 32</p>
      </div>
      <div className={styles.footer__social}>
        <Rotate bottom cascade>
        <Image className={styles.footer__icon} src={'/assets/img/face.png'} alt='facebook' width={45} height={45} />
        <Link href={'https://www.instagram.com/saifproface/'} target='_blank'>
        <Image className={styles.footer__icon} src={'/assets/img/insta.png'} alt='insta' width={45} height={45} />
        </Link>
        <Image className={styles.footer__icon} src={'/assets/img/linkedin.png'} alt='linkedin' width={45} height={45} />
        <Image className={styles.footer__icon} src={'/assets/img/telegram.png'} alt='telegram' width={45} height={45} />
        </Rotate>
      </div>
    </div>
  )
}
