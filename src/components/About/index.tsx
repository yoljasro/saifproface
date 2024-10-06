import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from './index.module.sass';
import { useTranslations } from 'next-intl';

export const About = () => {
  const t = useTranslations();

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) { // Phone screen threshold
        setImagesOne(cardOneImagesPhone);
        setImagesTwo(cardTwoImagesPhone);
        setImagesThree(cardThreeImagesPhone);
      } else {
        setImagesOne(cardOneImages);
        setImagesTwo(cardTwoImages);
        setImagesThree(cardThreeImages);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
                  variants={imageVariants}
                  className={styles.about__carouselImage}
                >
                  <Image
                    src={imagesOne[currentImageIndex1]}
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
                  variants={imageVariants}
                  className={styles.about__carouselImage}
                >
                  <Image
                    src={imagesTwo[currentImageIndex2]}
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
                  variants={imageVariants}
                  className={styles.about__carouselImage}
                >
                  <Image
                    src={imagesThree[currentImageIndex3]}
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
