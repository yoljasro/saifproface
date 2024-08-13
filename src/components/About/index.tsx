import React from 'react'
import styles from './index.module.sass'
import Image from 'next/image'
import { Zoom, Fade } from "react-reveal";
import { useTranslations } from "next-intl";

export const About = () => {
  const t = useTranslations()

  return (
    <div className={styles.about} id='about'>
      <Fade left cascade>
      <p className={styles.about__title}>{t("about")}</p>
      <div className={styles.about__cards}>
        <div className={styles.about__card}>
          <Image src={'/assets/img/icon11.png'} alt='cardone' width={48} height={48} />
          <p className={styles.about__cardTitle}>{t("aboutBlock.title")}</p>
          <p className={styles.about__desc}>{t("aboutBlock.desc")}</p>
        </div>
        <div className={styles.about__card}>
          <Image src={'/assets/img/icon2.png'} alt='cardone' width={48} height={48} />
          <p className={styles.about__cardTitle}>{t("aboutBlock.title")}</p>
          <p className={styles.about__desc}>{t("aboutBlock.descTwo")}</p>
        </div>
        <div className={styles.about__card}>
          <Image src={'/assets/img/icon1.png'} alt='cardone' width={48} height={48} />
          <p className={styles.about__cardTitle}>{t("aboutBlock.titleThre")}</p>
          <p className={styles.about__desc}>{t("aboutBlock.descThree")} </p>
        </div>
      </div>
      </Fade>
    </div>
  )
}
