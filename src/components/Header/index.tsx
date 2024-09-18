import React, { useState, useEffect } from 'react';
import styles from './index.module.sass';
import Image from 'next/image';
import { useTranslations } from "next-intl";

export const Header = () => {
  const t = useTranslations();
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  const images = [
    '/assets/img/.jpg',
    '/assets/img/fasad.jpg' // Shu yerda boshqa rasm qo'shishingiz mumkin
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setFade(true);
      }, 500); // fade-out effekti 500ms davom etadi
    }, 4000); // 4 soniyada bir marta rasm almashtiriladi

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.header} id='aboutus'>
      <div className={styles.header__container}>
        <div className={styles.header__text}>
          <p className={styles.header__name}>{t("welcome")}</p>
          <p className={styles.header__descone}>{t("aboutBlock.title")}</p>
          <p className={styles.header__desc}>{t("aboutBlock.desc")}</p>
          {/* <p className={styles.header__numbers}>{t("aboutBlock.descTwo")}</p> */}
        </div>
          {/* <div className={`${styles.header__image} ${fade ? styles.fadeIn : styles.fadeOut}`}>
          <Image
            src={images[currentImage]}
            alt='headercont'
            width={700}
            height={504}
            key={currentImage}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Header;
