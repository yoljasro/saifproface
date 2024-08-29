import React, { useState } from 'react';
import styles from './index.module.sass';
import Image from 'next/image';
import { Lang } from '../Lang';
import { useTranslations } from "next-intl";
import { Link } from "react-scroll";
import { Zoom, Fade, Slide } from "react-reveal";

export const Navbar = () => {
  const t = useTranslations();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`${styles.navbar} ${menuOpen ? styles.navbar_open : ''}`}>
      <Slide top>
        <div className={styles.navbar__info}>
          <a href={'/'}>
            <Image
              className={styles.navbar__logo}
              src={'/assets/img/svglogo.svg'}
              alt='logo'
              width={250}
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
            <Link activeClass="active" to="teachers" spy={true} smooth={true} offset={-70} duration={500} className={styles.navbar__link}>
              <li>{t("whyChooseUs")}</li>
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
          <a href={'tel:+998781139545'} target='_blank' className={styles.navbar__number}>
            +998781139545
          </a>  
        </div>
      </Slide>
      <a href={'tel:+998781139545'} target='_blank'>
            <button className={styles.navbar__register}> Записаться онлайн</button>
          </a>
          <Lang />
     
    </div>
  );
};
