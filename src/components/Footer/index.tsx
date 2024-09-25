import React, { useState } from 'react';
import styles from './index.module.sass';
import Image from 'next/image';
import { Zoom, Fade, Rotate } from "react-reveal";
import Link from 'next/link';
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // import qilish
import { useTranslations } from "next-intl";
import { useRouter } from 'next/router'; // Import useRouter hook

export const Footer = () => {
  const [imageSrc, setImageSrc] = useState('/assets/img/whitelogomain.png');
  const t = useTranslations();
  const router = useRouter(); // Get current locale

  // Function to get the correct footer logo based on locale
  const getFooterLogoSrc = () => {
    switch (router.locale) {
      case 'uz':
        return '/assets/img/uzlogo.png';
      case 'kl':
        return '/assets/img/logokrl.png';
      case 'en':
        return '/assets/img/logoeng.png';
      case 'ru':
        return '/assets/img/rulogo.png';
      default:
        return '/assets/img/footerlogo_default.png'; // default logo agar boshqa holatlar bo'lsa
    }
  };

  return (
    <div className={styles.footer}>
      <div className={styles.footer__left}>
        <Image src={getFooterLogoSrc()} alt='footerlogo' width={400} height={55} className={styles.footer__logo} />
        <p className={styles.footer__liner}> © 2024 SAIF PROFACE  {t("advantagesBlock.footerone")}</p>
      </div>

      <div className={styles.footer__center}>
        <Fade bottom cascade>
          <Link href={'#aboutus'}>
          <p className={styles.footer__menu}>{t("about")}</p>
          </Link>
          <Link href={'#ourservices'}>
          <p className={styles.footer__menu}>{t("services")}</p>
          </Link>
          <Link href={'#advantage'}>
          <p className={styles.footer__menu}>{t("advantages")}</p>
          </Link>
          <Link href={'#team'}>
          <p className={styles.footer__menu}>{t("contact")}</p>
          </Link>
        </Fade>
      </div>

      <div className={styles.footer__work}>
        <Fade bottom cascade>
          <p className={styles.footer__menutwo}>{t("advantagesBlock.weekone")} : <span className={styles.footer__span}> 08:00-18:00</span> </p>
          <p className={styles.footer__menutwo}>{t("advantagesBlock.weektwo")} :  <span className={styles.footer__span}> 08:00-18:00</span> </p>
          <p className={styles.footer__menutwo}>{t("advantagesBlock.weekthree")} :   <span className={styles.footer__span}> 08:00-18:00</span>  </p>
          <p className={styles.footer__menutwo}>{t("advantagesBlock.weekfour")} :   <span className={styles.footer__span}> 08:00-18:00</span></p>
          <p className={styles.footer__menutwo}>{t("advantagesBlock.weekfive")} :   <span className={styles.footer__span}> 08:00-18:00</span></p>
          <p className={styles.footer__menutwo}>{t("advantagesBlock.weeksix")} :   <span className={styles.footer__span}> 08:00-18:00</span></p>
          <p className={styles.footer__menutwo}>{t("advantagesBlock.weekseven")} :   <span className={styles.footer__span}> {t("advantagesBlock.dayoff")}</span></p>
        </Fade>
      </div>

      <div className={styles.footer__socials}>
        <p className={styles.footer__email}>{t("advantagesBlock.oursocial")}</p>
        <div className={styles.footer__social}>
          <Rotate bottom cascade>
            <Link target='_' href={'https://www.facebook.com/profile.php?id=61563997641973&mibextid=LQQJ4d'}>
              <FaFacebook className={styles.footer__icon} width={40} height={40} />
            </Link>
            <Link href={'https://www.instagram.com/saifproface/'} target='_blank'>
              <FaSquareInstagram className={styles.footer__icon} width={40} height={40} />
            </Link>
            <Link href={"https://t.me/saifproface"} target='_blank'>
              <FaTelegram className={styles.footer__icon} width={40} height={40} />
            </Link> 
          </Rotate>
        </div>
        <Link href={'https://mainstream.global'} target='_blank'>
          <p className={styles.footer__created}> Разработано в:  </p>
          <div className={styles.footer__main}></div>
          </Link>
      </div>
      <div className={styles.footer__right}>
        <div className={styles.footer__contact}>
          <ul className={styles.footer__contextone}>
            <FaPhoneAlt className={`${styles.footer__iconic} ${router.locale === 'uz' ? styles.uz : router.locale === 'kl' ? styles.kl : ''}`}/>
            <div>
            <li className={`${styles.footer__first} ${router.locale === 'uz' ? styles.uz : router.locale === 'kl' ? styles.kl : ''}`}>
  {t("advantagesBlock.callme")}
</li>

              <li>+998781139545</li>
            </div>
          </ul>
        </div>

        <div className={styles.footer__contactold}>
          <ul className={styles.footer__context}>
            <FaEnvelope className={styles.footer__iconic} />
            <div>
              <li>{t("advantagesBlock.writeme")}</li>
              <li>saifproface@gmail.com</li>
            </div>
          </ul>
        </div>

        <div className={styles.footer__contactlast}>
          <ul className={styles.footer__context}>
            <FaMapMarkerAlt className={styles.footer__iconic} />
            <div>
              <li>{t("advantagesBlock.adressme")}</li>
              <li className={styles.footer__adres}>{t("advantagesBlock.adress")}</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
