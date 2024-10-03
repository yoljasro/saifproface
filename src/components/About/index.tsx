import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Add AnimatePresence for exit animations
import Image from 'next/image';
import styles from './index.module.sass';
import { useTranslations } from 'next-intl';

export const About = () => {
  const t = useTranslations();

  const cardOneImages = ['/assets/img/cel.jpg', '/assets/img/cel2.jpg', '/assets/img/cel3.jpg', '/assets/img/cel4.jpg'];
  const cardTwoImages = ['/assets/img/zub.jpg', '/assets/img/zub2.jpg', '/assets/img/zub3.jpg', '/assets/img/zub4.jpg'];
  const cardThreeImages = ['/assets/img/ff.jpg', '/assets/img/ff2.jpg', '/assets/img/ff3.jpg', '/assets/img/ff2.jpg'];

  const [currentImageIndex1, setCurrentImageIndex1] = useState(0);
  const [currentImageIndex2, setCurrentImageIndex2] = useState(0);
  const [currentImageIndex3, setCurrentImageIndex3] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex1((prevIndex) => (prevIndex + 1) % cardOneImages.length);
      setCurrentImageIndex2((prevIndex) => (prevIndex + 1) % cardTwoImages.length);
      setCurrentImageIndex3((prevIndex) => (prevIndex + 1) % cardThreeImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const imageVariants = {
    enter: {
      x: 300, // Hozirgi rasm ekrandan o'ng tomonda kiradi
      opacity: 0,
      scale: 1,
    },
    center: {
      x: 0, // Rasm markazda qoladi
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: 'linear',
      },
    },
    exit: {
      x: -300, // Ketayotgan rasm ekrandan chap tomonga chiqadi
      opacity: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: 'linear',
      },
    },
  };

  return (
    <div className={styles.about} id="ourservices">
      <div className={styles.about__container}>
        <p className={styles.about__title}>{t('servicesBlock.title')}</p>
        <div className={styles.about__cards}>
          {/* Card 1 */}
          <div className={styles.about__card}>
            <div className={styles.about__cardContent}>
              <p className={styles.about__desc}>{t('servicesBlock.first')}</p>
              <ul className={styles.about__list}>
                <li>{t('servicesBlock.descOne')}</li>
                <li>{t('servicesBlock.correction')}</li>
                <li>{t('servicesBlock.hirurgy')}</li>
                <li>{t('servicesBlock.face')}</li>
              </ul>
            </div>
            <div className={styles.about__imageContainer}>
              <AnimatePresence initial={false}>
                <motion.div
                  key={currentImageIndex1}
                  initial="enter"
                  animate="center"
                  // exit="exit"
                  variants={imageVariants}
                  className={styles.about__carouselImage}
                >
                  <Image
                    src={cardOneImages[currentImageIndex1]}
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
              <p className={styles.about__desc}>{t('servicesBlock.titleTwo')}</p>
              <ul className={styles.about__listtwo}>
                <li>{t('servicesBlock.descTwo')}</li>
                <li>{t('servicesBlock.second')}</li>
                <li>{t('servicesBlock.three')}</li>
                <li>{t('servicesBlock.four')}</li>
                <li>{t('servicesBlock.five')}</li>
                <li>{t('servicesBlock.six')}</li>
              </ul>
            </div>
            <div className={styles.about__imageContainer}>
              <AnimatePresence initial={false}>
                <motion.div
                  key={currentImageIndex2}
                  initial="enter"
                  animate="center"
                  // exit="exit"
                  variants={imageVariants}
                  className={styles.about__carouselImage}
                >
                  <Image
                    src={cardTwoImages[currentImageIndex2]}
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
              <p className={styles.about__desc}>{t('servicesBlock.titleThree')}</p>
              <ul className={styles.about__listthree}>
                <li>{t('servicesBlock.descThree')}</li>
                <li>{t('servicesBlock.seven')}</li>
                <li>{t('servicesBlock.eight')}</li>
              </ul>
            </div>
            <div className={styles.about__imageContainer}>
              <AnimatePresence initial={false}>
                <motion.div
                  key={currentImageIndex3}
                  initial="enter"
                  animate="center"
                  // exit="exit"
                  variants={imageVariants}
                  className={styles.about__carouselImage}
                >
                  <Image
                    src={cardThreeImages[currentImageIndex3]}
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
