import React from 'react'
import styles from './index.module.sass'
import { Zoom, Fade } from "react-reveal";
import { useTranslations } from "next-intl";
import { FaPhoneAlt, FaRegEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export const Learn = () => {
    const t = useTranslations();

    return (
        <div className={styles.learn} id='learn'>
            <Zoom cascade>
                <p className={styles.learn__title}>{t("whyChooseUs")}</p>
                <div className={styles.learn__content}>
                    <div className={styles.learn__cards}>
                        <div className={styles.learn__card}>
                            <FaPhoneAlt className={styles.learn__icon} />
                            <p className={styles.learn__text}>{t("whyChooseUsBlock.title")}</p>
                        </div>
                        <div className={styles.learn__card}>
                            <FaRegEnvelope className={styles.learn__icon} />
                            <p className={styles.learn__text}>{t("whyChooseUsBlock.desc")}</p>
                        </div>
                        <div className={styles.learn__card}>
                            <FaMapMarkerAlt className={styles.learn__icon} />
                            <p className={styles.learn__text}>{t("whyChooseUsBlock.descTwo")}</p>
                        </div>
                    </div>
                </div>
            </Zoom>
        </div>
    )
}
