import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './index.module.sass';
import { useTranslations, useLocale } from "next-intl";
import Image from 'next/image';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

export const Prices: React.FC = () => {
  const t = useTranslations();
  const locale = useLocale();
  const [isHovered, setIsHovered] = useState({ left: false, right: false });
  const [isMobile, setIsMobile] = useState(false);

  interface Advantage {
    _id: string;
    title: string;
    description: string;
    image: string;
    phoneImage?: string;
    [key: string]: any;
  }

  interface Review {
    _id: string;
    name: string;
    date: string;
    text_uz: string;
    text_ru: string;
    text_en: string;
    text_uz_cyr: string;
    [key: string]: any;
  }
  const [advantages, setAdvantages] = useState<Advantage[]>([
    { _id: '1', title: t("advantagesBlock.titleOne"), description: t("advantagesBlock.descOne"), image: '/assets/img/visoko.jpg', phoneImage: "/assets/img/visokophone.jpg" },
    { _id: '2', title: t("advantagesBlock.titleTwo"), description: t("advantagesBlock.descTwo"), image: '/assets/img/j1.jpg', phoneImage: "/assets/img/j1phone.jpg" },
    { _id: '3', title: t("advantagesBlock.titleThree"), description: t("advantagesBlock.descThree"), image: '/assets/img/j2.jpg', phoneImage: "/assets/img/j2phone.jpg" },
    { _id: '4', title: t("advantagesBlock.titleFour"), description: t("advantagesBlock.descFour"), image: '/assets/img/j3.jpg', phoneImage: "/assets/img/j3phone.jpg" },
    { _id: '5', title: t("advantagesBlock.titleFive"), description: t("advantagesBlock.descFive"), image: '/assets/img/uyut.jpg', phoneImage: "/assets/img/uyutphone.jpg" },
    { _id: '6', title: t("advantagesBlock.guarant"), description: t("advantagesBlock.guarantDesc"), image: '/assets/img/j4.jpg', phoneImage: "/assets/img/j4phone.jpg" },
    { _id: '7', title: t("advantagesBlock.conver"), description: t("advantagesBlock.converDesc"), image: '/assets/img/j5.jpg', phoneImage: "/assets/img/j5phone.jpg" },
  ]);
  const [reviews, setReviews] = useState<Review[]>([
    { _id: 'r1', name: "Вероника Ли", date: "24.09.2024", text_uz: "Saif ProFace - kl... (demo)", text_ru: "Saif ProFace - клиника с превосходным персоналом и врачами . В клинике уютно и чисто .Хочу выразить огромную благодарность хирургу Мансуру Анваровичу, который провел несколько сложных удалений зубов мудрости , не смотря на то что удаления были сложными.", text_en: "Saif ProFace - clinic...", text_uz_cyr: "Saif ProFace..." },
    { _id: 'r2', name: "Лащёнов Руслан", date: "12.09.2024", text_uz: "Tishlar...", text_ru: "Зубы коренные замучали, пришёл прооперировали удалили всё, спасибо большое!", text_en: "Teeth...", text_uz_cyr: "Тишлар..." },
  ]);
  const [contentIndex, setContentIndex] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  useEffect(() => {
    const fetchAdvantages = async () => {
      try {
        const res = await fetch(`${API_URL}/api/advantages`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) setAdvantages(data);
        }
      } catch (error) {
        console.error("Error fetching advantages:", error);
      }
    };
    const fetchReviews = async () => {
      try {
        const res = await fetch(`${API_URL}/api/reviews`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) setReviews(data);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchAdvantages();
    fetchReviews();
  }, [API_URL]);

  // Ekran o'lchamini kuzatish
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 769);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Avtomatik o'zgarishlar uchun useEffect
  useEffect(() => {
    if (reviews.length === 0) return;
    const interval = setInterval(() => {
      setReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  useEffect(() => {
    if (advantages.length === 0) return;
    const interval = setInterval(() => {
      setContentIndex((prevIndex) => (prevIndex + 1) % advantages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [advantages.length]);

  // Next va Prev tugmalari
  const handleNext = () => {
    if (advantages.length === 0) return;
    setContentIndex((prevIndex) => (prevIndex + 1) % advantages.length);
  };

  const handlePrev = () => {
    if (advantages.length === 0) return;
    setContentIndex((prevIndex) => (prevIndex - 1 + advantages.length) % advantages.length);
  };

  const currentAdvantage = advantages[contentIndex] || advantages[0];
  const currentReview = reviews[reviewIndex] || reviews[0];

  if (!currentAdvantage) return null; // Defensive, should not happen now

  const fixPath = (path: string) => {
    if (!path) return "";
    if (path.startsWith('http') || path.startsWith('/assets/')) return path;
    return `${API_URL}${path.startsWith('/') ? '' : '/'}${path}`;
  };

  // Mobil va katta ekran uchun mos fon rasmni tanlaymiz
  const backgroundImg = isMobile ? fixPath(currentAdvantage.phoneImage || currentAdvantage.image) : fixPath(currentAdvantage.image);

  return (
    <div className={styles.container} id='advantage'>
      <motion.div
        className={styles.container__content}
        style={{ backgroundImage: `url(${backgroundImg})` }}
        initial={{ opacity: 0.5, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0.4, x: -100 }}
        transition={{ duration: 0.2 }}
      >
        <div className={styles.sliderControls}>
          <Image
            src={isHovered.left ? '/assets/img/1-1.svg' : '/assets/img/1.svg'}
            alt="arrow"
            width={45}
            height={45}
            className={styles.leftButton}
            onClick={handlePrev}
            onMouseEnter={() => setIsHovered({ ...isHovered, left: true })}
            onMouseLeave={() => setIsHovered({ ...isHovered, left: false })}
          />

          <Image
            src={isHovered.right ? '/assets/img/2-1.svg' : '/assets/img/2.svg'}
            alt="arrow"
            width={45}
            height={45}
            className={styles.rightButton}
            onClick={handleNext}
            onMouseEnter={() => setIsHovered({ ...isHovered, right: true })}
            onMouseLeave={() => setIsHovered({ ...isHovered, right: false })}
          />
        </div>

        <div className={styles.container__static}>
          <p className={styles.title}>{t("advantagesBlock.title")}</p>
        </div>

        <motion.div
          key={contentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <p className={styles.container__name}>
            {currentAdvantage[`title_${locale}`] || currentAdvantage[`title_${locale === 'kl' ? 'uz_cyr' : locale}`] || currentAdvantage.title}
          </p>
          <p className={styles.container__desc}>
            {currentAdvantage[`description_${locale}`] || currentAdvantage[`description_${locale === 'kl' ? 'uz_cyr' : locale}`] || currentAdvantage.description}
          </p>
        </motion.div>
      </motion.div>

      <div className={styles.container__review}>
        <div className={styles.container__static}>
          <p className={styles.container__revtitle}>{t("advantagesBlock.person")}</p>
        </div>
        {currentReview && (
          <motion.div
            key={reviewIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <p className={styles.container__person}>{currentReview.name}</p>
            <p className={styles.container__date}>{currentReview.date}</p>
            <p className={styles.container__text}>
              {currentReview[`text_${locale}`] || currentReview[`text_${locale === 'kl' ? 'uz_cyr' : locale}`] || currentReview.text}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};