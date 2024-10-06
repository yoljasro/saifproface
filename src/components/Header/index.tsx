import React, { useState, useEffect } from 'react';
import styles from './index.module.sass';
import { useTranslations } from "next-intl";

export const Header = () => {
  const t = useTranslations();
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  const images = [
    '/assets/img/image1.jpg',
    '/assets/img/fasad.jpg'
  ];

  useEffect(() => {
    // Slayder uchun interval
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setFade(true);
      }, 500); // fade-out effect for 500ms
    }, 4000); // image changes every 4 seconds

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div className={styles.header} id='aboutus'>
      <div className={styles.header__container}>
        {/* Video Background */}
        <video
          className={`${styles.header__video} ${styles.desktopVideo}`}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/img/saifvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          className={`${styles.header__video} ${styles.mobileVideo}`}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/img/phonevideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.header__text}>
          <p className={styles.header__name}>{t("welcome")}</p>
          <p className={styles.header__descone}>{t("aboutBlock.title")}</p>
          <p className={styles.header__desc}>{t("aboutBlock.desc")}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
