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
        <p>О нас</p>
        <div className={styles.header__container}></div>
      </Fade>
    </div>
  );
};

export default Header;
