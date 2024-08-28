import React from 'react'
import styles from './index.module.sass'
import Image from 'next/image'
import { Zoom, Fade } from "react-reveal";
import { useTranslations } from "next-intl";

export const About = () => {
  const t = useTranslations()

  return (
    <div className={styles.about} id='ourservices'>
      <Fade left cascade>
      <p className={styles.about__title}>{t("servicesBlock.title")}</p>
      <div className={styles.about__cards}>
        <div className={styles.about__card}>
          <Image src={'/assets/img/icon11.png'} alt='cardone' width={48} height={48} />
          <p className={styles.about__cardTitle}>{t("servicesBlock.titleOne")}</p>
          <p className={styles.about__cardTitle}>{t("servicesBlock.descOne")}</p>
        </div>
        <div className={styles.about__card}>
          <Image src={'/assets/img/icon2.png'} alt='cardone' width={48} height={48} />
          <p className={styles.about__cardTitle}>{t("servicesBlock.titleTwo")}</p>
          <p className={styles.about__cardTitle}>{t("servicesBlock.descTwo")}</p>
        </div>
        <div className={styles.about__card}>
          <Image src={'/assets/img/icon1.png'} alt='cardone' width={48} height={48} />
          <p className={styles.about__cardTitle}>{t("servicesBlock.titleThree")}</p>
          <p className={styles.about__cardTitle}>{t("servicesBlock.descThree")}</p>
        </div>
      </div>
      </Fade>
    </div>
  )
}
