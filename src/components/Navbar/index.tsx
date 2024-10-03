  import React, { useState } from 'react';
  import styles from './index.module.sass';
  import Image from 'next/image';
  import { Lang } from '../Lang';
  import { useTranslations } from "next-intl";
  import { Link } from "react-scroll";
  import { Zoom, Fade, Slide } from "react-reveal";
  import { useRouter } from 'next/router';
  import { FaPhoneAlt } from 'react-icons/fa'; // react-icons dan telefon ikonasini import qilish

  export const Navbar = () => {
    const t = useTranslations();
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    // Logoni tilga qarab o'zgartiruvchi funksiya
    const getLogoSrc = () => {
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
          return '/assets/img/defaultlogo.png'; // default logo agar boshqa holatlar bo'lsa
      }
    };

    return (
      <div className={`${styles.navbar} ${menuOpen ? styles.navbar_open : ''}`}>
        <Slide top>
          <div className={styles.navbar__info}>
            <a href={'/'}>
              <Image
                className={styles.navbar__logo}
                src={getLogoSrc()} // Logoni dinamik ravishda ko'rsatish
                alt='logo'
                width={300}
                height={20}
              />
            </a>
            <Fade top cascade>
              <div className={`${styles.navbar__item} ${menuOpen ? styles.navbar__item_open : ''}`}>
                <ul className={styles.navbar__menu}>
                  <Link activeClass="active" to="aboutus" spy={true} smooth={true} offset={-70} duration={500} className={styles.navbar__link}>
                    <li>{t("about")}</li>
                  </Link>
                  <Link activeClass="active" to="ourservices" spy={true} smooth={true} offset={-70} duration={500} className={styles.navbar__link}>
                    <li>{t("services")}</li>
                  </Link>
                  <Link activeClass="active" to="advantage" spy={true} smooth={true} offset={-70} duration={500} className={styles.navbar__link}>
                    <li>{t("advantages")}</li>
                  </Link>
                  <Link activeClass="active" to="team" spy={true} smooth={true} offset={-70} duration={500} className={styles.navbar__link}>
                    <li>{t("contact")}</li>
                  </Link>
                </ul>
              </div>
            </Fade>

            <button className={styles.navbar__toggle} onClick={toggleMenu}>
              {menuOpen ? '✕' : '☰'}
            </button>
            <a
              href={'tel:+998781139545'}
              className={styles.navbar__number}
              style={{ left: router.locale === 'uz' || router.locale === 'kl' ? '150px' : '250px' }}
            >
              <Image
                style={{ marginRight: '15px' }}
                src={'/assets/img/phoneicon.png'}
                width={35}
                height={35}
                alt='phoneicon'
              />  
              +998 (78) 113-95-45
            </a>
          </div>
        </Slide>
        <a href={'tel:+998884307000'}>
          <button  style={{ marginLeft: router.locale === 'uz' || router.locale === 'kl' ? '150px' : '200px' }} className={styles.navbar__register}>{t("btn")}</button>
        </a>
        <Lang />
      </div>
    );
  };
