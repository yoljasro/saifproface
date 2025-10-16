import React, { useState } from 'react';
import styles from './index.module.sass';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Lang } from '../Lang';

export const Navbar = () => {
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const getLogoSrc = () => {
        switch (router.locale) {
            case 'uz':
                return '/assets/img/logonewor.png';
            case 'en':
                return '/assets/img/logonewor.png';
            case 'ru':
                return '/assets/img/logonewor.png';
            default:
                return '/assets/img/logonewor.png';
        }
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar__container}>
                <div className={styles.navbar__left}>
                    <a href={'/'}>
                        <Image
                            className={styles.navbar__logo}
                            src={getLogoSrc()}
                            alt='logo'
                            width={150}
                            height={50}
                        />
                    </a>
                    <button className={styles.navbar__toggle} onClick={toggleMenu}>
                        {menuOpen ? '✕' : '☰'}
                    </button>
                </div>
                <div className={`${styles.navbar__right} ${menuOpen ? styles.navbar__right_open : ''}`}>
                    <a href={'tel:+998884307000'} className={styles.navbar__number}>
                        +998 (88) 430-70-00
                    </a>
                    <button className={styles.navbar__register}>Register</button>
                    <Lang />
                    {menuOpen && (
                        <ul className={styles.navbar__menu}>
                            <li className={styles.navbar__link}>About</li>
                            <li className={styles.navbar__link}>Services</li>
                            <li className={styles.navbar__link}>Advantages</li>
                            <li className={styles.navbar__link}>Contact</li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
};
