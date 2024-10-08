import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { useTranslations } from "next-intl";
import styles from './index.module.sass';
import Modal from '../Modal';

interface Teacher {
  src: string;
  title: string;
  description: string;
  pdf?: string;
  bgImage: string;
  biografy?: string;
  teach?: string;
  skill?: string;
  titleone?: string;
  titletwo?: string;
  titlethree?: string;
  lastyebat? : string;
}

export const Teachers: React.FC = () => {
  const t = useTranslations();
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null); // Tanlangan o'qituvchi

  const teachers: Teacher[] = [
    {
      src: '/assets/img/c1.jpg',
      title: t('aboutBlock.doctor4'),
      description: t('aboutBlock.doctortwo'),
      pdf: '/assets/docs/pdf4.pdf',
      bgImage: '/assets/img/y4.jpg',
      biografy: "Ведет прием, оказывая весь спектр хирургических услуг взрослым и детям. Основное направление челюстно-лицевая хирургия, лечении травм и переломов, удаление новообразований лица и челюсти, ортогнатическая хирургия.",
      teach: "2008 – 2013 гг. окончил с отличием Андижанский государственный медицинский институт по специальности «Лечебное дело» с присвоением квалификации «Врач общей практики». 2008 – 2013 гг. окончил магистратуру Андижанского государственного медицинского института по специальности «Челюстно-лицевая хирургия». 05.07.2018 - 30.10.2018 гг. обучаясь на курсе переподготовки стоматологов в сетевом центре переподготовки и повышения квалификации педагогических кадров при ТМА, изучил применение SWOT-анализа в преподавании хирургической стоматологии. Защитил в аттестационной комиссии дипломную работу на тему «Обоснование актуальности лазерных технологий в стоматологии». 2019 г. получил вторую квалификационную категорию Министерства здравоохранения Республики Узбекистан по специальности «Челюстно-лицевая хирургия». 2020 г. получил первую квалификационную категорию Министерства здравоохранения Республики Узбекистан по специальности «Челюстно-лицевая хирургия»..",
      skill: "2016 г. – 2021 гг. Ассистент на кафедре «Хирургическая стоматология» в Андижанском государственном медицинском институте. 2016 г. – 2021 гг. Челюстно-лицевой хирург в Андижанском областном филиале Республиканского центра скорой медицинской помощи. 2019 г. – 2023гг. Консультант в отделение ЧЛХ в клинике «Sog`lom Avlod» 2021 г. - п.н.в – Ассистент в отделении «Болезни челюстей-лицевой области и травматология» в Андижанском государственном медицинском институте. 2023 г. - 2024 гг - Заведующий отделением Челюстно-лицевой хирургии в клинике «Renessans» 2021г. - п.н.в. – Дежураный челюстно-лицевой хирург на кафедре «Взрослой челюстно-лицевой хирургии», в Ташкентском государственном стоматологическом институту. 2023 г - п.н.в. - консультант ЧЛХ в клинике «AND Hospital» 2024 - п.н.в. – Челюстно-лицевой хирург в центре стоматологии и челюстно-лицевой хирургии SAIF PROFACE",
      titleone: "Биография",
      titletwo: "Образование",
      titlethree: "Стаж работы", 
      lastyebat: "/assets/img/yebat1.jpg"

      // Add background image
    },
    {
      src: '/assets/img/c2.jpg',
      title: t('aboutBlock.doctor6'),
      description: t('aboutBlock.doctorfive'),
      bgImage: '/assets/img/y1.jpg',
      biografy: "Ведет прием, оказывая весь спектр хирургических услуг взрослым и детям. Основное направление челюстно-лицевая хирургия, лечении травм и переломов, удаление новообразований лица и челюсти, ортогнатическая хирургия.",
      teach: "2014 – 2019 гг. Астраханский Государственный Медицинский Университет по специальности «Стоматалогия» с присвоением квалификации «Стоматолог общей практики». 2023 - п.н.в. - Ташкентский Государственный Стоматологический Институт «Ординатура» по направлении «Ортодонтия»",
      skill: "2019 - 2024 гг. частная стоматологическая клиника 'ASNAN' 2024 - п.н.в. - частная стоматологическая клиника 'Advanced Dentistry'. 2024 - п.н.в. - частная стоматологическая клиника 'SAIF PROFACE'",
      titletwo: "Образование",
      titlethree: "Стаж работы",
      lastyebat: "/assets/img/yebat2.jpg"


    },
    {
      src: '/assets/img/c3.jpg',
      title: t('aboutBlock.doctor1'),
      description: t('aboutBlock.doctorone'),
      pdf: '/assets/docs/pdf1.pdf',
      bgImage: '/assets/img/y6.jpg',
      biografy: "Ведет узкоспециализированный прием, оказывая весь спектр хирургических услуг взрослым и детям.Основное направление дентальная импланталогия и лечение предраковых заболеваний слизистой оболочки полости рта с использованием СО2 лазера. Ежегодно повышает квалификацию на конференциях, мастер- классах с участием международных лекторов.",
      teach: "В 2016 году окончил стоматологический факультет и в 2019 году ординатуру по направлению челюстно- лицевая хирургия в первом Санкт - Петербургском Государственном медицинском университете имени академика Павлова.В 2018 году проходил магистерскую программу по направлению менеджмент в СПбПУ Петра Великого.",
      skill: "С 2016 по 2019 гг. работал в «Центр имплантологии доктора Зорина» Санкт-Петербург. С 2020 года по настоящее время является челюстно-Ташкентского Государственного стоматологического института. Пишет диссертационную работу на тему “Оптимизация удаления  нижней челюсти при сложных анатомических условиях” С 2020 года по настоящее время челюстно- лицевой хирург, имплантолог в клинике «abclinic.uz» С 2023 года по настоящее время стоматолог - хирург, имплантолог в клинике «KAN dental clinic». С 2024 года по настоящее время стоматолог-хирург, имплантолог в центре челюстно-лицевой хирургии и стоматологии SAIF PROFACE.",
      titleone: "Биография ",
      titletwo: "Образование",
      titlethree: "Стаж работы",
      lastyebat: "/assets/img/yebat3.jpg"

    },
    {
      src: '/assets/img/c4.jpg',
      title: t('aboutBlock.doctor3'),
      description: t('aboutBlock.doctorthree'),
      pdf: '/assets/docs/pdf3.pdf',
      bgImage: '/assets/img/y2.jpg',
      biografy: "",
      teach: "1998 – 2005 гг. окончил с отличием Андижанский государственный медицинский институт по специальности «Лечебное дело» с присвоением квалификации «Врач». 2005 – 2007 гг. проходил обучение в клинической ординатуре по специальности «Челюстно-лицевая хирургия» на кафедре косметологии, челюстно-лицевой хирургии и пластической хирургии ГОУ ДПО «Российская медицинская академия последипломного образования Росздрава» с присвоением квалификации «Челюстно-лицевой хирург». 2006 г. прошёл повышение квалификации по направлению «Микрохирургия в травматологии» с основными дисциплинами: микрохирургическая техника, реплантология и пластическая микрохирургия, - на базе ГОУ ДПО «Российская медицинская академия последипломного образования Росздрава». 2014 г. прошёл профессиональную переподготовку по направлению «Пластическая и эстетическая хирургия» на базе ГБОУ ДПО «Российская медицинская академия последипломного образования» МЗ РФ. 2018 г. прошёл курсы повышения квалификации в г. Мюнхен, Германия 2019 г. прошёл курсы повышения квалификации в г. Лондон, Великобритания",
      skill: "2002 – 2003 гг. медицинский брат нейрохирурга в отделении приёмной травматологии Андижанского филиала РНЦЭМП.2006 – 2009 гг. врач челюстно-лицевой хирург в «Арт-клиник». хирург в «Smart Clinic». 2011 г. – по настоящее время врач челюстно-лицевой хирург в отделении челюстнолицевой хирургии ФГБУ НМИЦ «ЦНИИС и ЧЛХ». 2021 г. – по настоящее время врач челюстно-лицевой хирург в ФГБУ «Клиническая больница №1» (Волынская) Управления делами президента РФ. 2022 г. – по настоящее время пластический и челюстно-лицевой хирург в «L.A Clinic». Москва 2024 г.  – по настоящее время  главный пластический и челюстно-лицевой хирург в центре челюстно-лицевой хирургии и стоматологии SAIF PROFACE.",
      titletwo: "Образование",
      titlethree: "Стаж работы",
      lastyebat: "/assets/img/yebat4.jpg"

    },
    {
      src: '/assets/img/c5.jpg',
      title: t('aboutBlock.doctor5'),
      description: t('aboutBlock.doctorfour'),
      pdf: '/assets/docs/pdf2.pdf',
      bgImage: '/assets/img/y3.jpg',
      biografy: "Ведет прием, оказывая весь спектр терапевтический и ортопедических услуг. Это лечение кариеса, восстановление сильно разрушенных зубов, композитные и керамические накладки(основное направление), Эстетика: композитные и керамические виниры, проф.гигиена, съемное протезирование, несъемное протезирование: металлокремические, циркониевые коронки(одиночные и мостовидные) ",
      teach: "С 2019 по 2024 гг. окончил Ташкентский Государственный Стоматологический Институт С 2024 по 2026 гг. окончил  ординатуру по направлению «Ортопедия» Ташкентский Государственный Стоматологический Институт ",
      skill: "C 2021 по 2023 гг. Стоматологическая клиника L-dent С 2023 по н.в. Врач терапевт в клинике «abclinic.uz» . С 2024 по настоящее время в центре челюстно-лицевой хирургии и стоматологии SAIF PROFACE",
      titleone: "Биография ",
      titletwo: "Образование",
      titlethree: "Стаж работы",
      lastyebat: "/assets/img/yebat5.jpg"

    },

    {
      src: '/assets/img/c6.jpg',
      title: t('aboutBlock.doctor2'),
      description: t('aboutBlock.doctortwo'),
      pdf: '/assets/docs/pdf5.pdf',
      bgImage: '/assets/img/y5.jpg',
      biografy: "Ведет прием, оказывая весь спектр хирургических услуг взрослым и детям. Основное направление челюстно-лицевая хирургия, лечении травм и переломов, удаление новообразований лица и челюсти, ортогнатическая хирургия.",
      teach: "2005 г. – 2012 гг. окончил Андижанский государственный медицинский институт по специальности «Лечебное дело» с присвоением квалификации «Врач общей практики».2015 г. окончил магистратуру Андижанского государственного медицинского института по специальности «Хирургия». 2015 – 2016 гг. успешно прошел курс первичной специализации по специальности «Челюстнолицевая хирургия» в ТашИУВ. 2017 г. прошел стажировку в Инди «Малоинвозивной челюстной лицевой хирургии» в клинике «ARTEMIS». 2018 г. прошел семинар в Южной Кореи «по виртуальной подготовки к ортагнатике». 2021 г. присоединился к частной стипендии по ортогнатической хирургии, активно участвуя в хирургических сессиях в Италии с командой «OrgnaticaRoma». 2023 г. принял успешное участие в семинаре на тему «Ортодонтия и ортогнатическая хирургия». 2024 г. представил проект хирургического планирования, стал продвинутым пользователем и лицом «OrtogOnBlender» в СНГ.",
      skill: "2016 – 2018 гг. ответственный челюстно-лицевой хирург в Андижанском областном филиале Республиканского центра скорой медицинской помощи. 2018 г. - 2023 гг. заведующий отделением ЧЛХ в клиники «Sog`lom Avlod» 2022 - 2024 гг. консультант ЧЛХ в клинике «Ренесанс» 2023 г - п.н.в. - Заведующий отделением ЧЛХ в клинике «AND Hospital» 2024 - п.н.в. – Челюстно-лицевой хирург в центре стоматологии и челюстно- хирургии SAIF PROFACE", 
      titleone: "Биография",
      titletwo: "Образование",
      titlethree: "Стаж работы",
      lastyebat: "/assets/img/yebat6.jpg"

    }
  ];

  const openModal = (teacher: Teacher) => {
    setSelectedTeacher(teacher);
  };

  const closeModal = () => {
    setSelectedTeacher(null);
  };

  return (
    <div className={styles.teachers} id='team'>
      <p className={styles.teachers__title}>{t("contact")}</p>
      <Swiper
  modules={[Autoplay]}
  spaceBetween={30}
  slidesPerView={5} // Default ko'rinish uchun
  loop={true}
  autoplay={{
    delay: 2000,
    disableOnInteraction: false,
  }}
  pagination={{ clickable: false }}
  navigation={false}
  breakpoints={{
    // Mobil ekranlar uchun (640px dan kichik bo'lsa)
    0: {
      slidesPerView: 2, // Telefon ekrani uchun bitta card ko'rsatiladi
      spaceBetween: 8, // Kartalar orasidagi bo'shliq
    },
    // Planshet ekranlar uchun (640px dan 1024px gacha)
    640: {
      slidesPerView: 2, // Planshet ekranida ikkita card ko'rinadi
      spaceBetween: 20,
    },
    // Katta ekranlar uchun (1024px dan katta)
    1024: {
      slidesPerView: 5, // Katta ekranlar uchun 5 card
      spaceBetween: 30,
    },
  }}
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
        <button
          className={styles.teachers__seeAll}
          onClick={() => openModal(teacher)}
        >
          Биография
        </button>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

      {selectedTeacher && <Modal onClose={closeModal} teacher={selectedTeacher} />}
    </div>
  );
};