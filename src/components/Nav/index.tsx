import React, { useState } from 'react';
import styles from './index.module.sass';
import Image from 'next/image';
import { Lang } from '../Lang';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';

export const Nav = () => {
  const t = useTranslations();
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const getLogoSrc = () => {
    switch (router.locale) {
      case 'uz':
      case 'kl':
      case 'en':
      case 'ru':
      default:
        return '/assets/img/logonewor.png';
    }
  };

  const handlePhoneClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
  };

  return (
    <div className={`${styles.navbar} ${menuOpen ? styles.navbar_open : ''}`}>
      <div className={styles.navbar__container}>
        {/* BRAND / LOGO */}
        <a href='/' className={styles.navbar__brand} aria-label='SAIF PROFACE'>
          <Image
            className={styles.navbar__logo}
            src={getLogoSrc()}
            alt='SAIF PROFACE logo'
            width={320}
            height={64}
            priority
            quality={100}
            sizes="(max-width: 768px) 180px, (max-width: 1200px) 260px, 320px"
          />
        </a>

        {/* BURGER (mobile) */}
        <button
          className={styles.navbar__toggle}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* DESKTOP MENU */}
        <ul className={`${styles.navbar__menu} ${menuOpen ? styles.navbar__menu_open : ''}`}>
          <li><a href="#aboutus" className={styles.navbar__link}>{t('about')}</a></li>
          <li><a href="#ourservices" className={styles.navbar__link}>{t('services')}</a></li>
          <li><a href="#advantage" className={styles.navbar__link}>{t('advantages')}</a></li>
          <li><a href="#team" className={styles.navbar__link}>{t('contact')}</a></li>
        </ul>
      </div>

      {/* RIGHT SIDE: phones + btn + lang */}
      <div className={styles.navbar__containertwo}>
        <a href="tel:+998884307000" className={styles.navbar__number} onClick={handlePhoneClick}>
          <Image
            src="/assets/img/phoneicon.png"
            width={35}
            height={35}
            alt="phone"
            className={styles.navbar__iconphone}
            style={{ marginRight: '12px' }}
          />
          +998 (88) 430-70-00
        </a>

        {/* NEW: second number */}
        <a href="tel:+712097878" className={styles.navbar__number} onClick={handlePhoneClick}>
          <Image
            src="/assets/img/phoneicon.png"
            width={35}
            height={35}
            alt="phone"
            className={styles.navbar__iconphone}
            style={{ marginRight: '12px' }}
          />
          +712097878
        </a>

        <a href="tel:+998884307000">
          <button className={styles.navbar__register}>{t('btn')}</button>
        </a>

        <Lang />
      </div>

      {/* MOBILE OVERLAY MENU */}
      {menuOpen && (
        <div className={styles.navbar__mobileMenu}>
          <ul className={styles.navbar__mobileContainer}>
            <li><a href="#aboutus" className={styles.navbar__link} onClick={() => setMenuOpen(false)}>{t('about')}</a></li>
            <li><a href="#ourservices" className={styles.navbar__link} onClick={() => setMenuOpen(false)}>{t('services')}</a></li>
            <li><a href="#advantage" className={styles.navbar__link} onClick={() => setMenuOpen(false)}>{t('advantages')}</a></li>
            <li><a href="#team" className={styles.navbar__link} onClick={() => setMenuOpen(false)}>{t('contact')}</a></li>

            {/* Mobile numbers */}
            <a href="tel:+998884307000" className={styles.navbar__mobileNumber} onClick={handlePhoneClick}>
              <Image src="/assets/img/phoneicon.png" width={28} height={28} alt="phone" className={styles.navbar__mobileIcon} />
              +998 (88) 430-70-00
            </a>

            <a href="tel:+712097878" className={styles.navbar__mobileNumber} onClick={handlePhoneClick}>
              <Image src="/assets/img/phoneicon.png" width={28} height={28} alt="phone" className={styles.navbar__mobileIcon} />
              +712097878
            </a>

            <a href="tel:+998884307000" style={{ textDecoration: 'none' }}>
              <button className={styles.navbar__registertwo} onClick={() => setMenuOpen(false)}>
                {t('btn')}
              </button>
            </a>

            <Lang />
          </ul>
        </div>
      )}
    </div>
  );
};
