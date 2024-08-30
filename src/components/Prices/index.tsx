import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import styles from './index.module.sass';
import Image from 'next/image';
import Link from 'next/link';
import { Zoom, Fade, Rotate } from "react-reveal";
import { useTranslations } from "next-intl"

export const Prices: React.FC = () => {
  const t = useTranslations()
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.update();
    }
  }, []);

  return (
    <div className={styles.container} id='advantage'>
      <Zoom bottom cascade>
        <p className={styles.container__title}>{t("advantagesBlock.title")}</p>
      </Zoom>
      <Swiper
        effect="coverflow"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        grabCursor={true}
        centeredSlides={false} // Centered slides disabled
        slidesPerView={3} // Adjusted value for better appearance
        spaceBetween={20} // Reduced space between slides
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className={styles.swiper}
        ref={swiperRef}
      >

        <SwiperSlide className={styles.swiperSlide}>
          <p className={styles.swiperSlide__title}>{t("advantagesBlock.titleOne")}</p>
          <p className={styles.swiperSlide__lesson}>{t("advantagesBlock.descOne")}</p>
          {/* <Link href={'https://student-union.modme.uz/entry/lead?utm_source=4564&section=145181'} target='_blank'>
              <button className={styles.swiperSlide__btn}>Try it</button>
            </Link> */}
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <p className={styles.swiperSlide__title}> Гарантия результата</p>
          <p className={styles.swiperSlide__lesson}>Нам доверяют пациенты благодаря нашей репутации и множеству положительных отзывов</p>
          {/* <Link href={'https://student-union.modme.uz/entry/lead?utm_source=4564&section=145181'} target='_blank'>
              <button className={styles.swiperSlide__btn}>Try it</button>
            </Link> */}
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <p className={styles.swiperSlide__title}>Удобное расположение</p>
          <p className={styles.swiperSlide__lesson}>Наш центр находится в удобном и легко доступном месте, что делает его посещение комфортным для жителей города и области</p>
          {/* <Link href={'https://student-union.modme.uz/entry/lead?utm_source=4564&section=145181'} target='_blank'>
              <button className={styles.swiperSlide__btn}>Try it</button>
            </Link> */}
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <p className={styles.swiperSlide__title}>{t("advantagesBlock.titleTwo")}</p>
          <p className={styles.swiperSlide__lesson}>{t("advantagesBlock.descTwo")}</p>
          {/* <Link href={'https://student-union.modme.uz/entry/lead?utm_source=4564&section=145181'} target='_blank'>
              <button className={styles.swiperSlide__btn}>Try it</button>
            </Link> */}
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <p className={styles.swiperSlide__title}>{t("advantagesBlock.titleThree")}</p>
          <p className={styles.swiperSlide__lesson}>{t("advantagesBlock.descThree")}</p>
          {/* <Link href={'https://student-union.modme.uz/entry/lead?utm_source=4564&section=145181'} target='_blank'>
              <button className={styles.swiperSlide__btn}>Try it</button>
            </Link> */}
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <p className={styles.swiperSlide__title}>{t("advantagesBlock.titleFour")}</p>
          <p className={styles.swiperSlide__lesson}>{t("advantagesBlock.descFour")}</p>
          {/* <Link href={'https://student-union.modme.uz/entry/lead?utm_source=4564&section=145181'} target='_blank'>
              <button className={styles.swiperSlide__btn}>Try it</button>
            </Link> */}
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <p className={styles.swiperSlide__title}>{t("advantagesBlock.titleFive")}</p>
          <p className={styles.swiperSlide__lesson}>{t("advantagesBlock.descFive")}</p>
          {/* <Link href={'https://student-union.modme.uz/entry/lead?utm_source=4564&section=145181'} target='_blank'>
              <button className={styles.swiperSlide__btn}>Try it</button>
            </Link> */}
        </SwiperSlide>

      </Swiper>
    </div>
  );
};
