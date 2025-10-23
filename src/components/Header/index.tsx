import React, { useState, useEffect } from "react";
import styles from "./index.module.sass";
import { useTranslations } from "next-intl";

export const Header = () => {
  const t = useTranslations();
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  const images = ["/assets/img/image1.jpg", "/assets/img/fasad.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((p) => (p + 1) % images.length);
        setFade(true);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.header} id="aboutus">
      <div className={styles.header__container}>
        {/* Video Background */}
        <video
          className={`${styles.header__video} ${styles.desktopVideo}`}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/img/videomain.mov" type="video/mp4" />
        </video>
        <video
          className={`${styles.header__video} ${styles.mobileVideo}`}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/img/phonevideo.mp4" type="video/mp4" />
        </video>

        {/* COLOR OVERLAY (#856CA9, semi-transparent) */}
        <div className={styles.header__overlay} />

        {/* Text */}
        <div className={styles.header__text}>
          <div className={styles.header__textBox}>
            <p className={styles.header__name}>{t("welcome")}</p>
            <p className={styles.header__descone}>{t("aboutBlock.title")}</p>
            <p className={styles.header__desc}>{t("aboutBlock.desc")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
