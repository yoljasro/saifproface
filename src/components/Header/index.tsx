import React, { useState, useEffect } from 'react';
import styles from './index.module.sass';
import { useTranslations } from "next-intl";

export const Header = () => {
  const t = useTranslations();
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);
  const [isMobile, setIsMobile] = useState(false); // Mobil holatni saqlash

  const images = [
    '/assets/img/image1.jpg',
    '/assets/img/fasad.jpg'
  ];

  useEffect(() => {
    // Mobil ekranni aniqlash
    const checkMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 769);
      }
    };

    checkMobile(); // Dastlabki tekshirish
    window.addEventListener('resize', checkMobile); // O'lcham o'zgarishi uchun kuzatish

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setFade(true);
      }, 500); // fade-out effect for 500ms
    }, 4000); // image changes every 4 seconds

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', checkMobile); // O'chirish
    };
  }, [images.length]);

  // Video manzilini belgilash
  const videoSrc = isMobile ? "/assets/img/phonevideo.mp4" : "/assets/img/saifvideo.mp4";

  return (
    <div className={styles.header} id='aboutus'>
      <div className={styles.header__container}>
        {/* Video Background */}
        <video
          className={styles.header__video}
          autoPlay      
          loop  
          muted
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
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
