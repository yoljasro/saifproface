import React from 'react'
import styles from './index.module.sass'
import Image from 'next/image'
import { Zoom, Fade , Rotate } from "react-reveal";
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <Image src={'/assets/img/footerlogo.png'} alt='footerlogo' width={192} height={175} className={styles.footer__logo} />
      <div className={styles.footer__content}>
        <p className={styles.footer__platform}>Online english platform for all.</p>
        <p className={styles.footer__email}>bilimonlineschool@gmail.com</p>
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
