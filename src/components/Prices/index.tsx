import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './index.module.sass';
import { useTranslations } from "next-intl";

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
      text: "Хочу поделиться своим опытом, для тех, кто долго не может решиться на циркониевые зубы. Я делала себе цирконий 10 лет назад в этой клинике, была приятно удивлена на контроле, встретив, тех же мастеров и персонал. Качество материалов и работы превзошли мои ожидания! За все это время ношения циркония ни разу не возникало проблем, делала чистку 2 раза в год. Однозначно рекомендую!",
      contentTitle: t("advantagesBlock.titleFour"),
      contentDesc: t("advantagesBlock.descFour"),
      backgroundImage: '/assets/img/j3.jpg'
    },

    {
      name: "Закиров Шохрух",
      date: "14.09.2024",
      text: "Случайно нашел в интернете клинику Saif Proface и выбрал её, т.к очень быстро прислали план работы и её стоимость. Очень рад, что здесь работают очень отзывчивые и профессиональные люди. В целом благодарен Мансуру Анваровичу за его профессионализм.",
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
    // Add other reviews as necessary
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [reviews.length]);

  const review = reviews[currentIndex];

  return (
    <div className={styles.container} id='advantage'>
   
      
      <motion.div
        className={styles.container__content}
        style={{ backgroundImage: `url(${review.backgroundImage})` }}
        initial={{ opacity: 0, x: 100 }} // Start from right
        animate={{ opacity: 1, x: 0 }} // Animate to center
        exit={{ opacity: 0, x: -100 }} // Exit to left
        transition={{ duration: 0.5 }}
      >
           <div className={styles.container__static}>
        {/* These elements won't be affected by animation */}
        <p className={styles.title}>{t("advantagesBlock.title")}</p>
      </div>
        <motion.div
          key={currentIndex} // Key added for proper animation
          initial={{ opacity: 0, x: 100 }} // Start from right
          animate={{ opacity: 1, x: 0 }} // Animate to center
          exit={{ opacity: 0, x: -100 }} // Exit to left
          transition={{ duration: 0.5 }}
        >
          {/* Only animated content */}
          <p className={styles.container__name}>{review.contentTitle}</p>
          <p className={styles.container__desc}>{review.contentDesc}</p>
        </motion.div>
      </motion.div>

      <div className={styles.container__review}>
        <div className={styles.container__static}>
          {/* Static title won't change */}
          <p className={styles.container__revtitle}>{t("advantagesBlock.person")}</p>
        </div>
        <motion.div
          key={currentIndex} // Key added for proper animation
          initial={{ opacity: 0, x: 100 }} // Start from right
          animate={{ opacity: 1, x: 0 }} // Animate to center
          exit={{ opacity: 0, x: -100 }} // Exit to left
          transition={{ duration: 0.5 }}
        >
          {/* Animated person review details */}
          <p className={styles.container__person}>{review.name}</p>
          <p className={styles.container__date}>{review.date}</p>
          <p className={styles.container__text}>{review.text}</p>
        </motion.div>
      </div>
    </div>
  );
};
