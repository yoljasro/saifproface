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
        <p className={styles.header__title}>О нас</p>
        <div className={styles.header__container}>
          <div>
            <p className={styles.header__name}>Добро пожаловать в SAIF-PROFACE</p>
            <p className={styles.header__desc}>Глазная клиника «SAIF-OPTIMA» основана в 2004 году в Ташкенте с филиалом в Андижане. Клиника предлагает широкий спектр офтальмологических услуг на качественно новом уровне, с соблюдением международных стандартов и применением новейших технологий и методик.</p>
            <p className={styles.header__numbers}>БОЛЕЕ 20 ЛЕТ В РЕФРАКЦИОННОЙ ХИРУРГИИ</p>
          </div>
          <div>
            <Image src={'/assets/img/headercont.png'} alt='headercont' width={700} height={560} />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Header;
