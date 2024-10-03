import React, { useState } from 'react';
import styles from './index.module.sass';
import Image from 'next/image';
import { Lang } from '../Lang';
import { useTranslations } from "next-intl";
import { Link } from "react-scroll";
import { Zoom, Fade, Slide } from "react-reveal";
import { useRouter } from 'next/router';
import { FaPhoneAlt } from 'react-icons/fa'; // react-icons dan telefon ikonasini import qilish

export const Nav = () => {
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
            <div className={styles.navbar__container}>
                <a href={'/'}>
                    <Image
                        className={styles.navbar__logo}
                        src={getLogoSrc()} // Logoni dinamik ravishda ko'rsatish
                        alt='logo'
                        width={380}
                        height={20}
                    />
                </a>
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
            <div className={styles.navbar__containertwo}>
                <a
                    href={'tel:+998781139545'}
                    className={styles.navbar__number}
                //   style={{ left: router.locale === 'uz' || router.locale === 'kl' ? '150px' : '250px' }}
                >
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
            <Lang/>
            </div>
        </div>
    );
};
