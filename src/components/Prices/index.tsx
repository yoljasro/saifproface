import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import styles from './index.module.sass';
import Image from 'next/image';
import Link from 'next/link';
import { Zoom, Fade , Rotate } from "react-reveal";
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
    <div className={styles.container} id='prices'>
      <Zoom bottom cascade>
      <p className={styles.container__title}>{t("prices")}</p>
      </Zoom>
      <Swiper
        effect="coverflow"
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Adjust the delay and interaction settings as needed
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        spaceBetween={30}
        loop={true} // Enable continuous loop
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]} // Add Autoplay module here
        className={styles.swiper}
        ref={swiperRef}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <p className={styles.swiperSlide__title}>{t("coursesList.english")}</p>
          <p className={styles.swiperSlide__lesson}>35 lessons</p>
          <p className={styles.swiperSlide__hour}>57 hours</p>
          <p className={styles.swiperSlide__price}>{t("coursesList.englishPrice")}</p>
          <Link href={'https://student-union.modme.uz/entry/lead?utm_source=4564&section=145181'} target='_blank'>
          <button className={styles.swiperSlide__btn}>Try it</button>
          </Link>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <p className={styles.swiperSlide__title}>IT</p>
          <p className={styles.swiperSlide__lesson}>35 lessons</p>
          <p className={styles.swiperSlide__hour}>57 hours</p>
          <p className={styles.swiperSlide__price}>{t("coursesList.satPrice")}</p>
          <Link href={'https://student-union.modme.uz/entry/lead?utm_source=4564&section=145181'} target='_blank'>
          <button className={styles.swiperSlide__btn}>Try it</button>
          </Link>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <p className={styles.swiperSlide__title}>{t("coursesList.korean")}</p>
          <p className={styles.swiperSlide__lesson}>35 lessons</p>
          <p className={styles.swiperSlide__hour}>57 hours</p>
          <p className={styles.swiperSlide__price}>{t("coursesList.coreanPrice")}</p>
          <Link href={'https://student-union.modme.uz/entry/lead?utm_source=4564&section=145181'} target='_blank'>
          <button className={styles.swiperSlide__btn}>Try it</button>
          </Link>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <p className={styles.swiperSlide__title}>{t("coursesList.russian")}</p>
          <p className={styles.swiperSlide__lesson}>35 lessons</p>
          <p className={styles.swiperSlide__hour}>57 hours</p>
          <p className={styles.swiperSlide__price}>{t("coursesList.russianPrice")}</p>
          <Link href={'https://student-union.modme.uz/entry/lead?utm_source=4564&section=145181'} target='_blank'>
          <button className={styles.swiperSlide__btn}>Try it</button>
          </Link>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <p className={styles.swiperSlide__title}>{t("coursesList.sat")}</p>
          <p className={styles.swiperSlide__lesson}>35 lessons</p>
          <p className={styles.swiperSlide__hour}>57 hours</p>
          <p className={styles.swiperSlide__price}>{t("coursesList.satPrice")}</p>
          <Link href={'https://student-union.modme.uz/entry/lead?utm_source=4564&section=145181'} target='_blank'>
          <button className={styles.swiperSlide__btn}>Try it</button>
          </Link>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <p className={styles.swiperSlide__title}>{t("coursesList.biology")}</p>
          <p className={styles.swiperSlide__lesson}>35 lessons</p>
          <p className={styles.swiperSlide__hour}>57 hours</p>
          <p className={styles.swiperSlide__price}>{t("coursesList.chinesePrice")}</p>
          <Link href={'https://student-union.modme.uz/entry/lead?utm_source=4564&section=145181'} target='_blank'>
          <button className={styles.swiperSlide__btn}>Try it</button>
          </Link>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <p className={styles.swiperSlide__title}>{t("coursesList.chemistry")}</p>
          <p className={styles.swiperSlide__lesson}>35 lessons</p>
          <p className={styles.swiperSlide__hour}>57 hours</p>
          <p className={styles.swiperSlide__price}>{t("coursesList.englishPrice")}</p>
          <Link href={'https://student-union.modme.uz/entry/lead?utm_source=4564&section=145181'} target='_blank'>
          <button className={styles.swiperSlide__btn}>Try it</button>
          </Link>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <p className={styles.swiperSlide__title}>{t("coursesList.nursing")}</p>
          <p className={styles.swiperSlide__lesson}>35 lessons</p>
          <p className={styles.swiperSlide__hour}>57 hours</p>
          <p className={styles.swiperSlide__price}>{t("coursesList.coreanPrice")}</p>
          <Link href={'https://student-union.modme.uz/entry/lead?utm_source=4564&section=145181'} target='_blank'>
          <button className={styles.swiperSlide__btn}>Try it</button>
          </Link>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <p className={styles.swiperSlide__title}>{t("coursesList.german")}</p>
          <p className={styles.swiperSlide__lesson}>35 lessons</p>
          <p className={styles.swiperSlide__hour}>57 hours</p>
          <p className={styles.swiperSlide__price}>{t("coursesList.russianPrice")}</p>
          <Link href={'https://student-union.modme.uz/entry/lead?utm_source=4564&section=145181'} target='_blank'>
          <button className={styles.swiperSlide__btn}>Try it</button>
          </Link>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <p className={styles.swiperSlide__title}>{t("coursesList.mathematic")}</p>
          <p className={styles.swiperSlide__lesson}>35 lessons</p>
          <p className={styles.swiperSlide__hour}>57 hours</p>
          <p className={styles.swiperSlide__price}>{t("coursesList.coreanPrice")}</p>
          <Link href={'https://student-union.modme.uz/entry/lead?utm_source=4564&section=145181'} target='_blank'>
          <button className={styles.swiperSlide__btn}>Try it</button>
          </Link>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <p className={styles.swiperSlide__title}>{t("coursesList.design")}</p>
          <p className={styles.swiperSlide__lesson}>35 lessons</p>
          <p className={styles.swiperSlide__hour}>57 hours</p>
          <p className={styles.swiperSlide__price}>{t("coursesList.satPrice")}</p>
          <Link href={'https://student-union.modme.uz/entry/lead?utm_source=4564&section=145181'} target='_blank'>
          <button className={styles.swiperSlide__btn}>Try it</button>
          </Link>
        </SwiperSlide>
      </Swiper>
      <div className={styles.container__boy}>
        <Image className={styles.container__image} src={'/assets/img/priceimage.png'} alt='image' width={306} height={321} />
      </div>
    </div>
  );
};
