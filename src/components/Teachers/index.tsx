import React from 'react'
import styles from './index.module.sass'
import Image from 'next/image'
import { Zoom, Fade , Rotate } from "react-reveal";
import { useTranslations } from "next-intl";

export const Teachers = () => {
  const t = useTranslations();

  return (
    <div className={styles.teachers} id='teachers'>
      <Fade right cascade>
      <p className={styles.teachers__title}>{t("teachers")}</p>
      <div className={styles.teachers__cards}>
        <div className={styles.teachers__card}>
          <Image className={styles.teachers__image} src={'/assets/img/teacher1.jpg'} alt='teachers' width={295} height={400}/>
          <div className={styles.teachers__info}>
            <p className={styles.teachers__name}>{t("coursesList.english")} kids</p>
            <p className={styles.teachers__experience}>Experience: 6 years</p>
            <p className={styles.teachers__certificate}>Certificates: IELTS</p>
          </div>
        </div>
        <div className={styles.teachers__card}>
        <Image className={styles.teachers__image} src={'/assets/img/teacher2.jpg'} alt='teachers' width={295} height={400}/>
          <div className={styles.teachers__info}>
            <p className={styles.teachers__name}>{t("coursesList.sat")}</p>
            <p className={styles.teachers__experience}>Experience: 6 years</p>
            <p className={styles.teachers__certificate}>Certificates: IELTS</p>
          </div>
        </div>
        <div className={styles.teachers__card}>
        <Image className={styles.teachers__image} src={'/assets/img/teacher3.jpg'} alt='teachers' width={295} height={400}/>
          <div className={styles.teachers__info}>
            <p className={styles.teachers__name}>{t("coursesList.chinese")} && {t("coursesList.german")}</p>
            <p className={styles.teachers__experience}>Experience: 6 years</p>
            <p className={styles.teachers__certificate}>Certificates: IELTS</p>
          </div>
        </div>
        <div className={styles.teachers__card}>
        <Image className={styles.teachers__image} src={'/assets/img/teacher4.jpg'} alt='teachers' width={295} height={400}/>
          <div className={styles.teachers__info}>
            <p className={styles.teachers__name}>{t("coursesList.mathematic")}</p>
            <p className={styles.teachers__experience}>Experience: 6 years</p>
            <p className={styles.teachers__certificate}>Certificates: IELTS</p>
          </div>
        </div>
        <div className={styles.teachers__card}>
        <Image className={styles.teachers__image} src={'/assets/img/teacher6.jpg'} alt='teachers' width={295} height={400}/>
          <div className={styles.teachers__info}>
            <p className={styles.teachers__name}>{t("coursesList.korean")}</p>
            <p className={styles.teachers__experience}>Experience: 6 years</p>
            <p className={styles.teachers__certificate}>Certificates: IELTS</p>
          </div>
        </div>
        <div className={styles.teachers__card}>
        <Image className={styles.teachers__image} src={'/assets/img/bonu.jpg'} alt='teachers' width={295} height={400}/>
          <div className={styles.teachers__info}>
            <p className={styles.teachers__name}>{t("coursesList.english")}</p>
            <p className={styles.teachers__experience}>Experience: 6 years</p>
            <p className={styles.teachers__certificate}>Certificates: IELTS</p>
          </div>
        </div>

      </div>
      </Fade>
    </div>
  )
}
