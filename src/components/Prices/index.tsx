import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './index.module.sass';
import { useTranslations } from "next-intl";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

export const Prices: React.FC = () => {
  const t = useTranslations();

  const reviews = [
    {
      name: "Масычева Валерия",
      date: "03.09.2024",
      text: "Клиника порадовала высоким уровнем сервиса и опытом врачей, до этого я боялась стоматологов, но теперь это в прошлом, спасибо вам Саиф Профейс.",
      contentTitle: t("advantagesBlock.titleFive"),
      contentDesc: t("advantagesBlock.descFive"),
      backgroundImage: '/assets/img/uyut.jpg'
    },
    {
      name: "Лащёнов Руслан",
      date: "12.09.2024",
      text: "Зубы коренные замучали, пришёл прооперировали удалили всё, спасибо большое!",
      contentTitle: t("advantagesBlock.titleOne"),
      contentDesc: t("advantagesBlock.descOne"),
      backgroundImage: '/assets/img/visoko.jpg'
    },
    {
      name: "Юнусова Сабина",
      date: "08.09.2024",
      text: "Спасибо клинике Saif Proface, после родов ухудшились все зубы. Вылечили, объяснили что делать дальше, вы большие молодцы!!!!",
      contentTitle: t("advantagesBlock.titleTwo"),
      contentDesc: t("advantagesBlock.descTwo"),
      backgroundImage: '/assets/img/j1.jpg'
    },
    {
      name: "Умарова Камола",
      date: "16.09.2024",
      text: "Здравствуйте хочу поделиться с вами своими впечатлениями. Я давно не улыбалась из за отсутствия зубов в этой клинике поставили мне 10 имплантов и керамические зубы, хочу поблагодарить весь коллектив, они вернули мне мою замечательную улыбку. Спасибо всем от всей души.",
      contentTitle: t("advantagesBlock.titleThree"),
      contentDesc: t("advantagesBlock.descThree"),
      backgroundImage: '/assets/img/j2.jpg'
    },

    {
      name: "Файзиева Рано",
      date: "19.09.2024",
      text: "Хочу поделиться своим опытом, для тех, кто долго не может решиться на циркониевые зубы. Я делала себе цирконий 10 лет назад в этой клинике, была приятно удивлена на контроле, встретив, тех же мастеров и персонал.",
      contentTitle: t("advantagesBlock.titleFour"),
      contentDesc: t("advantagesBlock.descFour"),
      backgroundImage: '/assets/img/j3.jpg'
    },

    {
      name: "Закиров Шохрух",
      date: "14.09.2024",
      text: "Случайно нашел в интернете клинику Saif Proface и выбрал её, т.к очень быстро прислали план работы и её стоимость. Очень рад, что здесь работают очень отзывчивые и профессиональные люди.",
      contentTitle: t("advantagesBlock.guarant"),
      contentDesc: t("advantagesBlock.guarantDesc"),
      backgroundImage: '/assets/img/j4.jpg'
    },

    {
      name: "Хасанов Анвар",
      date: "21.09.2024",
      text: "Мне всё понравилось. Я отмечаю значительное улучшение после лечения. Врачи в очень хорошие, обходительные. Они всегда позвонят, предупредят о визите. Спасибо Saif Proface за организацию лечения!",
      contentTitle: t("advantagesBlock.conver"),
      contentDesc: t("advantagesBlock.converDesc"),
      backgroundImage: '/assets/img/j5.jpg'
    },
  ];
  const [contentIndex, setContentIndex] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);

  // Auto change for reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [reviews.length]);

  // Auto change for content
  useEffect(() => {
    const interval = setInterval(() => {
      setContentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [reviews.length]);

  // Handle content change when buttons are clicked
  const handleNext = () => {
    setContentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setContentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const review = reviews[reviewIndex];
  const content = reviews[contentIndex];

  return (
    <div className={styles.container} id='advantage'>

      <motion.div
        className={styles.container__content}
        style={{ backgroundImage: `url(${content.backgroundImage})` }}
        initial={{ opacity: 0, x: 100 }} // Start from right
        animate={{ opacity: 1, x: 0 }} // Animate to center
        exit={{ opacity: 0, x: -100 }} // Exit to left
        transition={{ duration: 0.5 }}
      >
        <div className={styles.sliderControls}>
        <FaArrowAltCircleRight className={styles.leftButton} onClick={handlePrev} />

          <FaArrowAltCircleLeft className={styles.rightButton} onClick={handleNext}/>
          
        </div>
        <div className={styles.container__static}>
          <p className={styles.title}>{t("advantagesBlock.title")}</p>
        </div>
        <motion.div
          key={contentIndex} // Use contentIndex for animating content
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <p className={styles.container__name}>{content.contentTitle}</p>
          <p className={styles.container__desc}>{content.contentDesc}</p>
        </motion.div>
      </motion.div>

      <div className={styles.container__review}>
        <div className={styles.container__static}>
          <p className={styles.container__revtitle}>{t("advantagesBlock.person")}</p>
        </div>
        <motion.div
          key={reviewIndex} // Use reviewIndex for animating review
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <p className={styles.container__person}>{review.name}</p>
          <p className={styles.container__date}>{review.date}</p>
          <p className={styles.container__text}>{review.text}</p>
        </motion.div>
      </div>
    </div>
  );
};