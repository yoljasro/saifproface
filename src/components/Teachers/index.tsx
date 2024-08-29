import React from 'react'
import styles from './index.module.sass'
import Image from 'next/image'
import { Fade } from "react-reveal";
import { useTranslations } from "next-intl";

export const Teachers = () => {
  const t = useTranslations();

  return (
    <div className={styles.teachers} id='team'>
      <Fade top cascade>
        <p className={styles.teachers__title}>{t("team")}</p>
      </Fade>

      <div className={styles.teachers__cards}>
        <Fade bottom cascade>

          {['/assets/img/t1.jpg', '/assets/img/t2.jpg',  '/assets/img/t4.jpg', ].map((src, index) => (
            <div key={index} className={styles.teachers__card}>
              <Image
                className={styles.teachers__image}
                src={src}
                alt={`teacher-${index + 1}`}
                width={295}
                height={400}
              />
            </div>
          ))}
        </Fade>

      </div>
    </div>
  )
}
