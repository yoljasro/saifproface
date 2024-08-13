import React from 'react';
import styles from './index.module.sass';
import Image from 'next/image';
import Link from 'next/link';
import { Zoom, Fade } from "react-reveal";
import { useTranslations } from "next-intl";

export const Header = () => {
  const t = useTranslations();

  return (
    <div className={styles.header} id='header'>
      <Fade bottom cascade>
        <div className={styles.header__info}>
          <p className={styles.header__title}>{t("welcome")}</p>
          <Image className={styles.header__logo} src={'/assets/img/blacklogo.png'} alt='bigLogo' width={405} height={350} />
          <p className={styles.header__desc}>{t("headeText")}</p>
          <div className={styles.header__btns}>
            <button className={styles.header__getBtn}>Get started</button>
            <Link href={'https://student-union.modme.uz/entry/lead?utm_source=4564&section=145181'} target='_blank'>
              <button className={styles.header__freeBtn}>Try free</button>
            </Link>
          </div>
        </div>
        <Image className={styles.header__bookBoy} src={'/assets/img/bookBoy.png'} alt='bookBoy' width={530} height={530} />
      </Fade>
    </div>
  );
};

export default Header;
