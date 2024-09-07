import React from 'react';
import styles from './index.module.sass';
import Image from 'next/image';
import { Zoom, Fade, Rotate } from "react-reveal";
import Link from 'next/link';
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'; // import qilish
import { useTranslations } from "next-intl"

export const Footer = () => {
  const t = useTranslations()

  return (
    <div className={styles.footer}>
      <div className={styles.footer__left}>
        <Image src={'/assets/img/minilogo.png'} alt='footerlogo' width={260} height={260} className={styles.footer__logo} />
        <p className={styles.footer__liner}> © 2024 SAIF PROFACE <br /> {t("advantagesBlock.footerone")}</p>
      </div>

      <div className={styles.footer__center}>
        <Fade bottom cascade>
          <p className={styles.footer__menu}>{t("about")}</p>
          <p className={styles.footer__menu}>{t("services")}</p>
          <p className={styles.footer__menu}>{t("advantages")}</p>
          <p className={styles.footer__menu}>{t("contact")}</p>
        </Fade>
      </div>
      <div className={styles.footer__work} >
        <Fade bottom cascade>
          <p className={styles.footer__menu}>{t("advantagesBlock.weekone")} : <span className={styles.footer__span}> 08:00-18:00</span> </p>
          <p className={styles.footer__menu}>{t("advantagesBlock.weektwo")} :  <span className={styles.footer__span}> 08:00-18:00</span> </p>
          <p className={styles.footer__menu}>{t("advantagesBlock.weekthree")} :   <span className={styles.footer__span}> 08:00-18:00</span>  </p>
          <p className={styles.footer__menu}>{t("advantagesBlock.weekfour")} :   <span className={styles.footer__span}> 08:00-18:00</span></p>
          <p className={styles.footer__menu}>{t("advantagesBlock.weekfive")} :   <span className={styles.footer__span}> 08:00-18:00</span></p>
          <p className={styles.footer__menu}>{t("advantagesBlock.weeksix")} :   <span className={styles.footer__span}> 08:00-18:00</span></p>
          <p className={styles.footer__menu}>{t("advantagesBlock.weekseven")} :   <span className={styles.footer__span}> Выходной</span></p>

        </Fade>
      </div>

      <div className={styles.footer__socials}>
      <p className={styles.footer__email}>{t("advantagesBlock.oursocial")}</p>
        <div className={styles.footer__social}>
          <Rotate bottom cascade>
            <Link href={'https://www.facebook.com/profile.php?id=61563997641973&mibextid=LQQJ4d'}>
              <FaFacebook className={styles.footer__icon} />
            </Link>
            <Link href={'https://www.instagram.com/saifproface/'} target='_blank'>
              <FaSquareInstagram className={styles.footer__icon} width={45} height={45} />
            </Link>
            <Link href={"https://t.me/saifproface"} target='_blank'>
              <FaTelegram className={styles.footer__icon} width={45} height={45} />
            </Link>
          </Rotate>
        </div>
      </div>

      <div className={styles.footer__right}>
        <div className={styles.footer__contact}>
          <p className={styles.footer__platform}><FaPhoneAlt className={styles.footer__iconic} /> +998781139545</p>
          <p className={styles.footer__email}><FaEnvelope className={styles.footer__iconic} /> email@gmail.com</p>
          <p className={styles.footer__email}><FaMapMarkerAlt className={styles.footer__iconic} /> {t("advantagesBlock.adress")}</p>
        </div>
      </div>




      {/* <div className={styles.footer__patternContainer}>
          <Image src={'/assets/img/pattern.png'} alt='pattern' width={300} height={300} className={styles.footer__pattern} />
        </div> */}
    </div>
  );
};
