import React from 'react'
import styles from './index.module.sass'
import Image from 'next/image'
import { useTranslations } from "next-intl";
import { useRouter } from 'next/router';
import { Zoom, Fade } from "react-reveal";


export const Reviews = () => {
    const t = useTranslations()
    const router = useRouter();

    return (
        <div className={styles.reviews} id='reviews'>
            <Fade bottom cascade>
            <p className={styles.reviews__title}>Reviews</p>
            <div className={styles.reviews__cards}>
                <div className={styles.reviews__card}>
                    <Image className={styles.reviews__img} src={'/assets/img/reviewsone.png'} alt='reviews' width={200} height={170} />
                    <p className={styles.reviews__pupilTitle}>{t("pupils.one")}</p>
                    <p className={styles.reviews__pupilDesc}>{t("pupils.oneDesc")}</p>
                </div>
                <div className={styles.reviews__card}>
                <Image className={styles.reviews__img} src={'/assets/img/reviewstwo.png'} alt='reviews' width={200} height={170} />
                    <p className={styles.reviews__pupilTitle}>{t("pupils.two")}</p>
                    <p className={styles.reviews__pupilDesc}>{t("pupils.twoDesc")}</p>
                </div>
                <div className={styles.reviews__card}>
                <Image className={styles.reviews__img} src={'/assets/img/reviewsthree.png'} alt='reviews' width={200} height={170} />
                    <p className={styles.reviews__pupilTitle}>{t("pupils.three")}</p>
                    <p className={styles.reviews__pupilDesc}>{t("pupils.threeDesc")}</p>
                </div>
                <div className={styles.reviews__card}>
                <Image className={styles.reviews__img} src={'/assets/img/reviewsone.png'} alt='reviews' width={200} height={170} />
                    <p className={styles.reviews__pupilTitle}>{t("pupils.four")}</p>
                    <p className={styles.reviews__pupilDesc}>{t("pupils.fourDesc")}</p>
                </div>
                <div className={styles.reviews__card}>
                <Image className={styles.reviews__img} src={'/assets/img/reviewstwo.png'} alt='reviews' width={200} height={170} />
                    <p className={styles.reviews__pupilTitle}>{t("pupils.five")}</p>
                    <p className={styles.reviews__pupilDesc}>{t("pupils.fiveDesc")}</p>
                </div>
                <div className={styles.reviews__card}>
                <Image className={styles.reviews__img} src={'/assets/img/reviewsthree.png'} alt='reviews' width={200} height={170} />
                    <p className={styles.reviews__pupilTitle}>{t("pupils.six")}</p>
                    <p className={styles.reviews__pupilDesc}>{t("pupils.sixDesc")}</p>
                </div>

            </div>
            </Fade>
        </div>
    )
}
