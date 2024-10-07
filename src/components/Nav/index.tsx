import React, { useState, useEffect } from 'react';
import styles from './index.module.sass';
import Image from 'next/image';
import { Lang } from '../Lang';
import { useTranslations } from "next-intl";
import { useRouter } from 'next/router';
import { FaPhoneAlt } from 'react-icons/fa';

export const Nav = () => {
    const t = useTranslations();
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

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

    const handlePhoneClick = (event) => {
        event.stopPropagation(); // Voqeani to'xtatish
    };

    return (
        <div className={`${styles.navbar} ${menuOpen ? styles.navbar_open : ''}`}>
            <div className={`${styles.navbar__container}`}>
                <a href={'/'}>
                    <Image
                        className={styles.navbar__logo}
                        src={getLogoSrc()}
                        alt='logo'
                        width={500}
                        height={20}
                    />
                </a>
                <div className={styles.navbar__toggle} onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? '✕' : '☰'}
                </div>
                <ul className={`${styles.navbar__menu} ${menuOpen ? styles.navbar__menu_open : ''}`}>
                    <li>
                        <a href="#aboutus" className={styles.navbar__link}>{t("about")}</a>
                    </li>
                    <li>
                        <a href="#ourservices" className={styles.navbar__link}>{t("services")}</a>
                    </li>
                    <li>
                        <a href="#advantage" className={styles.navbar__link}>{t("advantages")}</a>
                    </li>
                    <li>
                        <a href="#team" className={styles.navbar__link}>{t("contact")}</a>
                    </li>
                </ul>
            </div>
            <div className={styles.navbar__containertwo}>
                <a href={'tel:+998781139545'} className={styles.navbar__number} onClick={handlePhoneClick}>
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
        </div>
    );
};
