import React, { useState, useEffect } from "react";
import styles from "./index.module.sass";
import { useTranslations, useLocale } from "next-intl";

export const Header = () => {
  const t = useTranslations();
  const locale = useLocale();
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);
  const [dynamicMotto, setDynamicMotto] = useState<any | null>(null);

  const images = ["/assets/img/image1.jpg", "/assets/img/fasad.jpg"];
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  useEffect(() => {
    const fetchMotto = async () => {
      try {
        const res = await fetch(`${API_URL}/api/motto`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            // Take the latest one
            setDynamicMotto(data[data.length - 1]);
          }
        }
      } catch (error) {
        console.error("Error fetching motto:", error);
      }
    };
    fetchMotto();
  }, [API_URL]);

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
            <p className={styles.header__name}>
              {dynamicMotto
                ? (dynamicMotto[`title_${locale}`] || dynamicMotto[`title_${locale === 'kl' ? 'uz_cyr' : locale}`] || dynamicMotto.title)
                : t("welcome")}
            </p>
            <p className={styles.header__descone}>
              {dynamicMotto
                ? (dynamicMotto[`subtitle_${locale}`] || dynamicMotto[`subtitle_${locale === 'kl' ? 'uz_cyr' : locale}`] || dynamicMotto.subtitle)
                : t("aboutBlock.title")}
            </p>
            <p className={styles.header__desc}>
              {dynamicMotto
                ? (dynamicMotto[`description_${locale}`] || dynamicMotto[`description_${locale === 'kl' ? 'uz_cyr' : locale}`] || dynamicMotto.description)
                : t("aboutBlock.desc")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
