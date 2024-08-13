import React, { useState } from 'react';
import styles from './index.module.sass';
import Image from 'next/image';
import { Lang } from '../Lang';
import { useTranslations } from "next-intl";
import { Link } from "react-scroll";
import { Zoom, Fade } from "react-reveal";

export const Navbar = () => {
  const t = useTranslations();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`${styles.navbar} ${menuOpen ? styles.navbar_open : ''}`}>
      <Fade top cascade>
        <div className={styles.navbar__info}>
          <a href={'/'}>
            <Image className={styles.navbar__logo} src={'/assets/img/whitelogo.png'} alt='logo' width={194} height={186} />
          </a>
          <a href={'tel:+998781139545'} target='_blank' className={styles.navbar__number}>
            <button className={styles.navbar__register}> Записаться онлайн</button>
          </a>
          <button className={styles.navbar__toggle} onClick={toggleMenu}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
        <div className={`${styles.navbar__item} ${menuOpen ? styles.navbar__item_open : ''}`}>
          <ul className={styles.navbar__menu}>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500} className={styles.navbar__link}>
              <li>{t("about")}</li>
            </Link>
            <Link activeClass="active" to="courses" spy={true} smooth={true} offset={-70} duration={500} className={styles.navbar__link}>
              <li>{t("courses")}</li>
            </Link>
            <Link activeClass="active" to="reviews" spy={true} smooth={true} offset={-70} duration={500} className={styles.navbar__link}>
              <li>{t("reviews")}</li>
            </Link>
            <Link activeClass="active" to="teachers" spy={true} smooth={true} offset={-70} duration={500} className={styles.navbar__link}>
              <li>{t("teachers")}</li>
            </Link>
            <Link activeClass="active" to="prices" spy={true} smooth={true} offset={-70} duration={500} className={styles.navbar__link}>
              <li>{t("contact")}</li>
            </Link>
          </ul>
          <a href={'tel:+998781139545'} target='_blank' className={styles.navbar__number}>
            +998781139545
          </a>
          <Lang />
        </div>
      </Fade>
    </div>
  );
};
