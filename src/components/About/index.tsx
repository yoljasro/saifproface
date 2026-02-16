import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from './index.module.sass';
import { useTranslations, useLocale } from 'next-intl';

export const About = () => {
  const t = useTranslations();
  const locale = useLocale();

  // Image arrays for desktop and phone
  const cardOneImages = ['/assets/img/cel.jpg', '/assets/img/cel2.jpg', '/assets/img/cel3.jpg', '/assets/img/cel4.jpg'];
  const cardTwoImages = ['/assets/img/zub.jpg', '/assets/img/zub2.jpg', '/assets/img/zub3.jpg', '/assets/img/zub4.jpg'];
  const cardThreeImages = ['/assets/img/ff.jpg', '/assets/img/ff2.jpg', '/assets/img/ff3.jpg', '/assets/img/ff2.jpg'];

  const cardOneImagesPhone = ['/assets/img/celphone.jpg', '/assets/img/cel2phone.jpg', '/assets/img/cel3phone.jpg', '/assets/img/cel4phone.jpg'];
  const cardTwoImagesPhone = ['/assets/img/zubphone.jpg', '/assets/img/zub2phone.jpg', '/assets/img/zub3phone.jpg', '/assets/img/zub4phone.jpg'];
  const cardThreeImagesPhone = ['/assets/img/ffphone.jpg', '/assets/img/ff2phone.jpg', '/assets/img/ff3phone.jpg', '/assets/img/ff2phone.jpg'];

  const [currentImageIndex1, setCurrentImageIndex1] = useState(0);
  const [currentImageIndex2, setCurrentImageIndex2] = useState(0);
  const [currentImageIndex3, setCurrentImageIndex3] = useState(0);

  const [imagesOne, setImagesOne] = useState(cardOneImages);
  const [imagesTwo, setImagesTwo] = useState(cardTwoImages);
  const [imagesThree, setImagesThree] = useState(cardThreeImages);

  const [dynamicServices, setDynamicServices] = useState<any[]>([]);
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch(`${API_URL}/api/news`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data)) {
            setDynamicServices(data);
          }
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, [API_URL]);

  // 🧩 Resize effect — dependencies qo‘shildi
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImagesOne(cardOneImagesPhone);
        setImagesTwo(cardTwoImagesPhone);
        setImagesThree(cardThreeImagesPhone);
      } else {
        setImagesOne(cardOneImages);
        setImagesTwo(cardTwoImages);
        setImagesThree(cardThreeImages);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [
    cardOneImages,
    cardTwoImages,
    cardThreeImages,
    cardOneImagesPhone,
    cardTwoImagesPhone,
    cardThreeImagesPhone,
  ]);

  // 🧩 Interval effect (rasmlarni almashish)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex1((prevIndex) => (prevIndex + 1) % imagesOne.length);
      setCurrentImageIndex2((prevIndex) => (prevIndex + 1) % imagesTwo.length);
      setCurrentImageIndex3((prevIndex) => (prevIndex + 1) % imagesThree.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [imagesOne, imagesTwo, imagesThree]);

  const imageVariants = {
    enter: {
      x: 300,
      opacity: 0,
      scale: 1,
    },
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: 'linear',
      },
    },
    exit: {
      x: -300,
      opacity: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: 'linear',
      },
    },
  };

  const getCardData = (index: number, defaultTitle: string, defaultDescKeyOrList: string | string[]) => {
    const service = dynamicServices[index];
    if (service) {
      return {
        title: service[`title_${locale}`] || service[`title_${locale === 'kl' ? 'uz_cyr' : locale}`] || service.title,
        description: service[`description_${locale}`] || service[`description_${locale === 'kl' ? 'uz_cyr' : locale}`] || service.description,
        isDynamic: true,
        image: service.image
      };
    }
    return {
      title: t(defaultTitle),
      description: Array.isArray(defaultDescKeyOrList)
        ? defaultDescKeyOrList.map(key => t(key))
        : t(defaultDescKeyOrList),
      isDynamic: false,
      image: null
    };
  };

  const getCardImages = (index: number, defaultImages: string[]) => {
    const service = dynamicServices[index];
    if (service && service.image) {
      const path = service.image;
      if (path.startsWith('/assets/')) return [path];
      return [`${API_URL}${path.startsWith('/') ? '' : '/'}${path}`];
    }
    return defaultImages;
  };

  const card1 = getCardData(0, 'servicesBlock.first', ['servicesBlock.descOne', 'servicesBlock.correction', 'servicesBlock.hirurgy', 'servicesBlock.face']);
  const card2 = getCardData(1, 'servicesBlock.titleTwo', ['servicesBlock.descTwo', 'servicesBlock.second', 'servicesBlock.three', 'servicesBlock.four', 'servicesBlock.five', 'servicesBlock.six']);
  const card3 = getCardData(2, 'servicesBlock.titleThree', ['servicesBlock.descThree', 'servicesBlock.seven', 'servicesBlock.eight']);

  const images1 = getCardImages(0, imagesOne);
  const images2 = getCardImages(1, imagesTwo);
  const images3 = getCardImages(2, imagesThree);

  return (
    <div className={styles.about} id="ourservices">
      <div className={styles.about__container}>
        <p className={styles.about__title}>{t('servicesBlock.title')}</p>
        <div className={styles.about__cards}>
          {/* Card 1 */}
          <div className={styles.about__card}>
            <div className={styles.about__cardContent}>
              <p className={styles.about__desc}>{card1.title}</p>
              {card1.isDynamic ? (
                <div className={styles.about__dynamicText} dangerouslySetInnerHTML={{ __html: card1.description as string }} />
              ) : (
                <ul className={styles.about__list}>
                  {(card1.description as string[]).map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              )}
            </div>
            <div className={styles.about__imageContainer}>
              <AnimatePresence initial={false}>
                <motion.div
                  key={currentImageIndex1}
                  initial="enter"
                  animate="center"
                  variants={imageVariants}
                  className={styles.about__carouselImage}
                >
                  <Image
                    src={images1[currentImageIndex1 % images1.length]}
                    alt="cardone"
                    width={260}
                    height={310}
                    className={styles.about__cardImage}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Card 2 */}
          <div className={styles.about__card}>
            <div className={styles.about__cardContent}>
              <p className={styles.about__desc}>{card2.title}</p>
              {card2.isDynamic ? (
                <div className={styles.about__dynamicText} dangerouslySetInnerHTML={{ __html: card2.description as string }} />
              ) : (
                <ul className={styles.about__listtwo}>
                  {(card2.description as string[]).map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              )}
            </div>
            <div className={styles.about__imageContainer}>
              <AnimatePresence initial={false}>
                <motion.div
                  key={currentImageIndex2}
                  initial="enter"
                  animate="center"
                  variants={imageVariants}
                  className={styles.about__carouselImage}
                >
                  <Image
                    src={images2[currentImageIndex2 % images2.length]}
                    alt="cardtwo"
                    width={260}
                    height={310}
                    className={styles.about__cardImage}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Card 3 */}
          <div className={styles.about__card}>
            <div className={styles.about__cardContent}>
              <p className={styles.about__desc}>{card3.title}</p>
              {card3.isDynamic ? (
                <div className={styles.about__dynamicText} dangerouslySetInnerHTML={{ __html: card3.description as string }} />
              ) : (
                <ul className={styles.about__listthree}>
                  {(card3.description as string[]).map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              )}
            </div>
            <div className={styles.about__imageContainer}>
              <AnimatePresence initial={false}>
                <motion.div
                  key={currentImageIndex3}
                  initial="enter"
                  animate="center"
                  variants={imageVariants}
                  className={styles.about__carouselImage}
                >
                  <Image
                    src={images3[currentImageIndex3 % images3.length]}
                    alt="cardthree"
                    width={260}
                    height={310}
                    className={styles.about__cardImage}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
