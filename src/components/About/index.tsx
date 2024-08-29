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
                {/* <p className={styles.about__cardTitle}>{t("servicesBlock.titleOne")}</p> */}
                <p className={styles.about__desc}>{t("servicesBlock.descOne")}</p>
                <p className={styles.about__desclast}>{t("servicesBlock.desclast")}</p>
              </div>
              <Image src={'/assets/img/service4.jpg'} alt='cardone' width={250} height={240}  className={styles.about__cardImage}/>
             
            </div>
          </Zoom>
          <Zoom>
          <div className={styles.about__card}>
            <div className={styles.about__cardContent}>
                {/* <p className={styles.about__cardTitle}>{t("servicesBlock.titleOne")}</p> */}
                <p className={styles.about__desc}> Инъекционные методики (ботокс, филлеры)</p>
              </div>
              <Image src={'/assets/img/service3.jpg'} alt='cardone' width={250} height={240}  className={styles.about__cardImage}/>
             
            </div>
          </Zoom>
          <Zoom>
          <div className={styles.about__card}>
            <div className={styles.about__cardContent}>
                {/* <p className={styles.about__cardTitle}>{t("servicesBlock.titleOne")}</p> */}
                <p className={styles.about__desc}>Лазерные и аппаратные процедуры</p>
              </div>
              <Image src={'/assets/img/11.jpg'} alt='cardone' width={250} height={240}  className={styles.about__cardImage}/>
             
            </div>
          </Zoom>
          <Zoom>
            <div className={styles.about__card}>
            <div className={styles.about__cardContent}>
                {/* <p className={styles.about__cardTitle}>{t("servicesBlock.titleOne")}</p> */}
                <p className={styles.about__desc}>{t("servicesBlock.descOne")}</p>
              </div>
              <Image src={'/assets/img/12.png'} alt='cardone' width={250} height={240}  className={styles.about__cardImage}/>
             
            </div>
          </Zoom>

          <Zoom>
            <div className={styles.about__card}>
            <div className={styles.about__cardContent}>
                {/* <p className={styles.about__cardTitle}>{t("servicesBlock.titleOne")}</p> */}
                <p className={styles.about__desc}>{t("servicesBlock.descOne")}</p>
              </div>
              <Image src={'/assets/img/13.png'} alt='cardone' width={250} height={240}  className={styles.about__cardImage}/>
             
            </div>
          </Zoom>

          <Zoom>
            <div className={styles.about__card}>
            <div className={styles.about__cardContent}>
                {/* <p className={styles.about__cardTitle}>{t("servicesBlock.titleOne")}</p> */}
                <p className={styles.about__desc}>{t("servicesBlock.descOne")}</p>
              </div>
              <Image src={'/assets/img/15.png'} alt='cardone' width={250} height={240}  className={styles.about__cardImage}/>
             
            </div>
          </Zoom>



          <Zoom>
            <div className={styles.about__card}>
            <div className={styles.about__cardContent}>
                {/* <p className={styles.about__cardTitle}>{t("servicesBlock.titleOne")}</p> */}
                <p className={styles.about__desc}>{t("servicesBlock.descOne")}</p>
              </div>
              <Image src={'/assets/img/16.png'} alt='cardone' width={250} height={240}  className={styles.about__cardImage}/>
             
            </div>
          </Zoom>

          <Zoom>
            <div className={styles.about__card}>
            <div className={styles.about__cardContent}>
                {/* <p className={styles.about__cardTitle}>{t("servicesBlock.titleOne")}</p> */}
                <p className={styles.about__desc}>{t("servicesBlock.descOne")}</p>
              </div>
              <Image src={'/assets/img/service4.jpg'} alt='cardone' width={250} height={240}  className={styles.about__cardImage}/>
             
            </div>
          </Zoom>

          <Zoom>
            <div className={styles.about__card}>
            <div className={styles.about__cardContent}>
                {/* <p className={styles.about__cardTitle}>{t("servicesBlock.titleOne")}</p> */}
                <p className={styles.about__desc}>{t("servicesBlock.descOne")}</p>
              </div>
              <Image src={'/assets/img/service4.jpg'} alt='cardone' width={250} height={240}  className={styles.about__cardImage}/>
             
            </div>
          </Zoom> 

          <Zoom>
            <div className={styles.about__card}>
            <div className={styles.about__cardContent}>
                {/* <p className={styles.about__cardTitle}>{t("servicesBlock.titleOne")}</p> */}
                <p className={styles.about__desc}>{t("servicesBlock.descOne")}</p>
              </div>
              <Image src={'/assets/img/service4.jpg'} alt='cardone' width={250} height={240}  className={styles.about__cardImage}/>
             
            </div>
          </Zoom>

          <Zoom>
            <div className={styles.about__card}>
            <div className={styles.about__cardContent}>
                {/* <p className={styles.about__cardTitle}>{t("servicesBlock.titleOne")}</p> */}
                <p className={styles.about__desc}>{t("servicesBlock.descOne")}</p>
              </div>
              <Image src={'/assets/img/service4.jpg'} alt='cardone' width={250} height={240}  className={styles.about__cardImage}/>
             
            </div>
          </Zoom>

          <Zoom>
            <div className={styles.about__card}>
            <div className={styles.about__cardContent}>
                {/* <p className={styles.about__cardTitle}>{t("servicesBlock.titleOne")}</p> */}
                <p className={styles.about__desc}>{t("servicesBlock.descOne")}</p>
              </div>
              <Image src={'/assets/img/service4.jpg'} alt='cardone' width={250} height={240}  className={styles.about__cardImage}/>
             
            </div>
          </Zoom>
        </div>
      </Fade>
    </div>
  )
}
