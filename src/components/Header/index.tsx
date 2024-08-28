import React from 'react';
import styles from './index.module.sass';
import Image from 'next/image';
import { Zoom, Fade, Bounce } from "react-reveal";
import { useTranslations } from "next-intl";

export const Header = () => {
  const t = useTranslations();

  return (
    <div className={styles.header} id='aboutus'>
      <Fade bottom cascade>
        <p className={styles.header__title}>{t("about")}</p>
      </Fade>
      <div className={styles.header__container}>
        <Fade cascade left>
          <div className={styles.header__text}>
            <p className={styles.header__name}>{t("welcome")}</p>
            <p className={styles.header__desc}>{t("aboutBlock.title")}.</p>
            <p className={styles.header__desc}>{t("aboutBlock.desc")}.</p>
            <p className={styles.header__numbers}>{t("aboutBlock.descTwo")}</p>
          </div>
        </Fade>
        <Zoom>
          <div className={styles.header__image}>
            <Image 
              src={'/assets/img/headercont.png'} 
              alt='headercont' 
              width={700} 
              height={560} 
            />
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Header;
