import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Asosiy CSS
import 'swiper/css/navigation'; // Navigatsiya kerak bo'lsa
import 'swiper/css/pagination'; // Pagination kerak bo'lsa
import 'swiper/css/autoplay'; // Autoplay CSS
import { Autoplay, Pagination, Navigation } from 'swiper/modules'; // Autoplay, Pagination, Navigation modullari
import Image from 'next/image';
import { useTranslations } from "next-intl";
import styles from './index.module.sass';

export const Teachers = () => {
  const t = useTranslations();

  const teachers = [
    {
      src: '/assets/img/c1.jpg',
      title: t('aboutBlock.doctor4'),
      description: t('aboutBlock.doctortwo')
    },
    {
      src: '/assets/img/c2.jpg',
      title: t('aboutBlock.doctor6'),
      description: t('aboutBlock.doctorfive')
    },
    {
      src: '/assets/img/c3.jpg',
      title: t('aboutBlock.doctor1'),
      description: t('aboutBlock.doctorone')
    },
    {
      src: '/assets/img/c4.jpg',
      title: t('aboutBlock.doctor3'),
      description: t('aboutBlock.doctorthree')
    },
    {
      src: '/assets/img/c5.jpg',
      title: t('aboutBlock.doctor5'),
      description: t('aboutBlock.doctorfour')
    },
    {
      src: '/assets/img/c6.jpg',
      title: t('aboutBlock.doctor2'),
      description: t('aboutBlock.doctortwo')
    }
  ];

  return (
    <div className={styles.teachers} id='team'>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]} // Modullarni qo'shish
        spaceBetween={30} // Slayderlar orasida 30px masofa
        slidesPerView={5} // Har safar 5 slayd ko'rsatiladi
        loop={true} // Cheksiz aylanish
        autoplay={{
          delay: 2000, // 2 sekund avtomatik aylanish
          disableOnInteraction: false, // Foydalanuvchi bilan aloqa to'xtagandan keyin davom etadi
        }}
        pagination={{ clickable: true }} // Kliklanuvchi nuqtalar
        navigation={true} // Chap va o'ng tugmalar
      >
        {teachers.map((teacher, index) => (
          <SwiperSlide key={index} className={styles.teachers__slide}>
            <Image
              className={styles.teachers__image}
              src={teacher.src}
              alt={`teacher-${index + 1}`}
              width={400}
              height={560}
              layout="responsive"
              objectFit="cover"
            />
            <div className={styles.teachers__info}>
              <h3 className={styles.teachers__name}>{teacher.title}</h3>
              <p className={styles.teachers__desc}>{teacher.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
