import React from 'react'
import styles from './index.module.sass'
import Image from 'next/image'
import { Zoom, Fade } from "react-reveal";
import Link from 'next/link';
import { useTranslations } from "next-intl";

export const Courses = () => {
    const t = useTranslations()

    return (
        <div className={styles.courses} id='courses'>
            <Zoom cascade>
                <p className={styles.courses__title}>{t("coursesList.title")}</p>
                <div className={styles.courses__cards}>
                    <div className={styles.courses__card}>
                        <div className={styles.courses__info}>
                            <p className={styles.courses__name}>{t("coursesList.english")}</p>
                            <p className={styles.courses__desc}>corresponds to basic users of English who can understand and very basic phrases.</p>
                        </div>
                        <div className={styles.courses__content}>
                            <Image src={'/assets/img/sucha.png'} alt='sucharaboy' width={74} height={74} />
                            <Link href={'https://student-union.modme.uz/entry/lead?utm_source=4564&section=145181'} target='_blank'>
                                <button className={styles.courses__btn}>{t("coursesList.start")}</button>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.courses__card}>
                        <div className={styles.courses__info}>
                            <p className={styles.courses__name}>{t("coursesList.it")}</p>
                            <p className={styles.courses__desc}>corresponds to basic users of English who can understand and very basic phrases.</p>
                        </div>
                        <div className={styles.courses__content}>
                            <Image src={'/assets/img/sucha.png'} alt='sucharaboy' width={74} height={74} />
                            <Link href={'https://student-union.modme.uz/entry/lead?utm_source=4564&section=145181'} target='_blank'>
                                <button className={styles.courses__btn}>{t("coursesList.start")}</button>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.courses__card}>
                        <div className={styles.courses__info}>
                            <p className={styles.courses__name}>{t("coursesList.korean")}</p>
                            <p className={styles.courses__desc}>corresponds to basic users of English who can understand and very basic phrases.</p>
                        </div>
                        <div className={styles.courses__content}>
                            <Image src={'/assets/img/sucha.png'} alt='sucharaboy' width={74} height={74} />
                            <Link href={'https://student-union.modme.uz/entry/lead?utm_source=4564&section=145181'} target='_blank'>
                                <button className={styles.courses__btn}>{t("coursesList.start")}</button>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.courses__card}>
                        <div className={styles.courses__info}>
                            <p className={styles.courses__name}>{t("coursesList.russian")}</p>
                            <p className={styles.courses__desc}>corresponds to basic users of English who can understand and very basic phrases.</p>
                        </div>
                        <div className={styles.courses__content}>
                            <Image src={'/assets/img/sucha.png'} alt='sucharaboy' width={74} height={74} />
                            <Link href={'https://student-union.modme.uz/entry/lead?utm_source=4564&section=145181'} target='_blank'>
                                <button className={styles.courses__btn}>{t("coursesList.start")}</button>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.courses__card}>
                        <div className={styles.courses__info}>
                            <p className={styles.courses__name}>{t("coursesList.chinese")}</p>
                            <p className={styles.courses__desc}>corresponds to basic users of English who can understand and very basic phrases.</p>
                        </div>
                        <div className={styles.courses__content}>
                            <Image src={'/assets/img/sucha.png'} alt='sucharaboy' width={74} height={74} />
                            <Link href={'https://student-union.modme.uz/entry/lead?utm_source=4564&section=145181'} target='_blank'>
                                <button className={styles.courses__btn}>{t("coursesList.start")}</button>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.courses__card}>
                        <div className={styles.courses__info}>
                            <p className={styles.courses__name}>{t("coursesList.biology")}</p>
                            <p className={styles.courses__desc}>corresponds to basic users of English who can understand and very basic phrases.</p>
                        </div>
                        <div className={styles.courses__content}>
                            <Image src={'/assets/img/sucha.png'} alt='sucharaboy' width={74} height={74} />
                            <Link href={'https://student-union.modme.uz/entry/lead?utm_source=4564&section=145181'} target='_blank'>
                                <button className={styles.courses__btn}>{t("coursesList.start")}</button>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.courses__card}>
                        <div className={styles.courses__info}>
                            <p className={styles.courses__name}>{t("coursesList.chemistry")}</p>
                            <p className={styles.courses__desc}>corresponds to basic users of English who can understand and very basic phrases.</p>
                        </div>
                        <div className={styles.courses__content}>
                            <Image src={'/assets/img/sucha.png'} alt='sucharaboy' width={74} height={74} />
                            <Link href={'https://student-union.modme.uz/entry/lead?utm_source=4564&section=145181'} target='_blank'>
                                <button className={styles.courses__btn}>{t("coursesList.start")}</button>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.courses__card}>
                        <div className={styles.courses__info}>
                            <p className={styles.courses__name}>{t("coursesList.mathematic")}</p>
                            <p className={styles.courses__desc}>corresponds to basic users of English who can understand and very basic phrases.</p>
                        </div>
                        <div className={styles.courses__content}>
                            <Image src={'/assets/img/sucha.png'} alt='sucharaboy' width={74} height={74} />
                            <Link href={'https://student-union.modme.uz/entry/lead?utm_source=4564&section=145181'} target='_blank'>
                                <button className={styles.courses__btn}>{t("coursesList.start")}</button>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.courses__card}>
                        <div className={styles.courses__info}>
                            <p className={styles.courses__name}>{t("coursesList.nursing")}</p>
                            <p className={styles.courses__desc}>corresponds to basic users of English who can understand and very basic phrases.</p>
                        </div>
                        <div className={styles.courses__content}>
                            <Image src={'/assets/img/sucha.png'} alt='sucharaboy' width={74} height={74} />
                            <Link href={'https://student-union.modme.uz/entry/lead?utm_source=4564&section=145181'} target='_blank'>
                                <button className={styles.courses__btn}>{t("coursesList.start")}</button>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.courses__card}>
                        <div className={styles.courses__info}>
                            <p className={styles.courses__name}>{t("coursesList.design")}</p>
                            <p className={styles.courses__desc}>corresponds to basic users of English who can understand and very basic phrases.</p>
                        </div>
                        <div className={styles.courses__content}>
                            <Image src={'/assets/img/sucha.png'} alt='sucharaboy' width={74} height={74} />
                            <Link href={'https://student-union.modme.uz/entry/lead?utm_source=4564&section=145181'} target='_blank'>
                                <button className={styles.courses__btn}>{t("coursesList.start")}</button>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.courses__card}>
                        <div className={styles.courses__info}>
                            <p className={styles.courses__name}>{t("coursesList.sat")}</p>
                            <p className={styles.courses__desc}>corresponds to basic users of English who can understand and very basic phrases.</p>
                        </div>
                        <div className={styles.courses__content}>
                            <Image src={'/assets/img/sucha.png'} alt='sucharaboy' width={74} height={74} />
                            <Link href={'https://student-union.modme.uz/entry/lead?utm_source=4564&section=145181'} target='_blank'>
                                <button className={styles.courses__btn}>{t("coursesList.start")}</button>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.courses__card}>
                        <div className={styles.courses__info}>
                            <p className={styles.courses__name}>{t("coursesList.arabic")}</p>
                            <p className={styles.courses__desc}>corresponds to basic users of English who can understand and very basic phrases.</p>
                        </div>
                        <div className={styles.courses__content}>
                            <Image src={'/assets/img/sucha.png'} alt='sucharaboy' width={74} height={74} />
                            <Link href={'https://student-union.modme.uz/entry/lead?utm_source=4564&section=145181'} target='_blank'>
                                <button className={styles.courses__btn}>{t("coursesList.start")}</button>
                            </Link>
                        </div>
                    </div>


                    
                </div>
            </Zoom>
        </div>
    )
}
