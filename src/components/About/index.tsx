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
          <Zoom>
            <div className={styles.about__card}>
              <div className={styles.about__cardContent}>
                <p className={styles.about__desc}>{t("servicesBlock.titleOne")}</p>
                <ul className={styles.about__list}>
                <li>{t("servicesBlock.first")}</li>
                  <li>{t("servicesBlock.descOne")}</li>
                  <li>{t("servicesBlock.correction")}</li>
                  <li>{t("servicesBlock.hirurgy")}</li>
                  <li>{t("servicesBlock.face")}</li>
                </ul>
              </div>
              <Image src={'/assets/img/tooth2.png'} alt='cardone' width={250} height={240} className={styles.about__cardImage} />

            </div>
          </Zoom>
          <Zoom>
            <div className={styles.about__card}>
              <div className={styles.about__cardContent}>
                {/* <p className={styles.about__cardTitle}>{t("servicesBlock.titleOne")}</p> */}
                <p className={styles.about__desc}> {t("servicesBlock.titleTwo")}</p>
                <ul className={styles.about__listtwo}>
                <li>{t("servicesBlock.descTwo")}</li>
                <li>{t("servicesBlock.second")}</li>
                <li>{t("servicesBlock.three")}</li>
                <li>{t("servicesBlock.four")}</li>
                <li>{t("servicesBlock.five")}</li>
                <li>{t("servicesBlock.six")}</li>
                </ul>
              </div>
              <Image src={'/assets/img/13.png'} alt='cardone' width={250} height={240} className={styles.about__cardImage} />


            </div>
          </Zoom>
          <Zoom>
            <div className={styles.about__card}>
              <div className={styles.about__cardContent}>
                <p className={styles.about__desc}>{t("servicesBlock.titleThree")}</p>
                <ul className={styles.about__listthree}>
                <li>{t("servicesBlock.descThree")}</li>
                <li>{t("servicesBlock.seven")}</li>
                <li>{t("servicesBlock.eight")}</li>
                </ul>
              </div>
              <Image src={'/assets/img/11.jpg'} alt='cardone' width={250} height={240} className={styles.about__cardImage} />

            </div>
          </Zoom>

        </div>
      </Fade>
    </div>
  )
}
