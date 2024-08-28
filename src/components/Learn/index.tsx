import React from 'react'
import styles from './index.module.sass'
import Image from 'next/image'
import { Zoom, Fade } from "react-reveal";
import { useTranslations } from "next-intl"

export const Learn = () => {
    const t = useTranslations()

    return (
        <div className={styles.learn} id='learn'>
            <Zoom cascade>
                    <p className={styles.learn__title}>{t("whyChooseUs")}</p>
                <div className={styles.learn__content}>
                    <Image className={styles.learn__image} src={'/assets/img/learnBoy.png'} width={438} height={438} alt='image' />
                    <div className={styles.learn__cards}>
                        <div className={styles.learn__card}>
                            <button className={styles.learn__btn}>{t("learn.contact")}</button>
                            <p className={styles.learn__text}>{t("whyChooseUsBlock.title")}</p>
                        </div>
                        <div className={styles.learn__card}>
                            <button className={styles.learn__btn}>{t("learn.contact")}</button>
                            <p className={styles.learn__text}>{t("whyChooseUsBlock.desc")}</p>
                        </div>
                        <div className={styles.learn__card}>
                            <button className={styles.learn__btn}>{t("learn.contact")}</button>
                            <p className={styles.learn__text}>{t("whyChooseUsBlock.descTwo")}</p>
                        </div>
                    </div>
                </div>
            </Zoom>
        </div>
    )
}
