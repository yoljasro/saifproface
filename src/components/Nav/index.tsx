import React, { useState, useEffect } from 'react';
import styles from './index.module.sass';
import Image from 'next/image';
import { Lang } from '../Lang';
import { useTranslations } from "next-intl";
import { Link } from "react-scroll";
import { useRouter } from 'next/router';
import { FaPhoneAlt } from 'react-icons/fa';

export const Nav = () => {
    const t = useTranslations();
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
            document.body.classList.add(styles.bodyOverlay); // Add overlay class
        } else {
            document.body.style.overflow = 'auto';
            document.body.classList.remove(styles.bodyOverlay); // Remove overlay class
        }
    }, [menuOpen]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

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
                return '/assets/img/defaultlogo.png';
        }
    };

    return (
        <div className={`${styles.navbar} ${menuOpen ? styles.navbar_open : ''}`}>
            <div className={`${styles.navbar__container} ${menuOpen ? styles.navbar__container_open : ''}`}>
                <a href={'/'}>
                    <Image
                        className={styles.navbar__logo}
                        src={getLogoSrc()}
                        alt='logo'
                        width={500}
                        height={20}
                    />
                </a>
                <div className={styles.navbar__toggle} onClick={toggleMenu}>
                    {menuOpen ? '✕' : '☰'}
                </div>
                <ul className={`${styles.navbar__menu} ${menuOpen ? styles.navbar__menu_open : ''}`}>
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
            <div className={styles.navbar__containertwo}>
                <a href={'tel:+998781139545'} className={styles.navbar__number}>
                    <Image
                        style={{ marginRight: '15px' }}
                        src={'/assets/img/phoneicon.png'}
                        width={35}
                        height={35}
                        alt='phoneicon'
                        className={styles.navbar__iconphone}
                    />
                    +998 (78) 113-95-45
                </a>
                <a href={'tel:+998884307000'}>
                    <button className={styles.navbar__register}>{t("btn")}</button>
                </a>
                <Lang />
            </div>

            {/* Mobile menu */}
            <div className={`${styles.navbar__mobileMenu} ${menuOpen ? styles.navbar__mobileMenu_open : ''}`}>
                <div className={styles.navbar__mobileContainer}>
                    <Link to="aboutus" spy={true} smooth={true} offset={-70} duration={500} className={styles.navbar__link} onClick={toggleMenu}>
                        {t("about")}
                    </Link>
                    <Link to="ourservices" spy={true} smooth={true} offset={-70} duration={500} className={styles.navbar__link} onClick={toggleMenu}>
                        {t("services")}
                    </Link>
                    <Link to="advantage" spy={true} smooth={true} offset={-70} duration={500} className={styles.navbar__link} onClick={toggleMenu}>
                        {t("advantages")}
                    </Link>
                    <Link to="team" spy={true} smooth={true} offset={-70} duration={500} className={styles.navbar__link} onClick={toggleMenu}>
                        {t("contact")}
                    </Link>
                </div>
                <a href="tel:+998781139545" className={styles.navbar__mobileNumber}>
                    <FaPhoneAlt className={styles.navbar__mobileIcon} />
                    +998 (78) 113-95-45
                </a>

                <a href={'tel:+998884307000'}>
                    <button className={styles.navbar__registertwo}>{t("btn")}</button>
                </a>
                <Lang />
            </div>
        </div>
    );
};
