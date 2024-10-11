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
  teachtwo? : string;
  titlethree?: string;
  lastyebat? : string;
  teachthree? : string;
  teachfourth? : string;
  teachfive? : string;
  teachsix? : string;
  skilltwo?: string;
  skillthree?: string;
  skillfourth?: string;
  skillfive?: string;
  skillsix? : string;
  skillseven? : string;
  skilleight? : string;
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
      teach: "2008 – 2013 гг. окончил с отличием Андижанский государственный медицинский институт по специальности «Лечебное дело» с присвоением квалификации «Врач общей практики» . .",
      teachtwo: "2013 – 2015 гг. окончил магистратуру Андижанского государственного медицинского института по специальности «Челюстно-лицевая хирургия». ",
      teachthree: "2018 г. - обучаясь на курсе переподготовки стоматологов в сетевом центре переподготовки и повышения квалификации педагогических кадров при ТМА, изучил применение SWOT-анализа в преподавании хирургической стоматологии. Защитил в аттестационной комиссии дипломную работу на тему «Обоснование актуальности лазерных технологий в стоматологии»",
      teachfourth : "2019 г. получил вторую квалификационную категорию Министерства здравоохранения Республики Узбекистан по специальности «Челюстно-лицевая хирургия».",
      teachfive: "2020 г. Получил первую квалификационную категорию Министерства здравохранения РУз по специальности «Челюстно-лицевая хирургия»",
      skill: "2016 – 2021 гг. Ассистент на кафедре «Хирургическая стоматология» в Андижанском государственном медицинском институте.  ",
      skilltwo: "2016 – 2021 гг. Челюстно-лицевой хирург в Андижанском областном филиале Республиканского центра скорой медицинской помощи.",
      skillthree : "2019 – 2023гг. Консультант в отделение ЧЛХ в клинике «Sog`lom Avlod» ", 
      skillsix: "2023 - 2024 гг - Заведующий отделением Челюстно-лицевой хирургии в клинике «Renessans» ",
      skillfourth : "2021 г. - п.н.в – Ассистент в отделении «Болезни челюстей-лицевой области и травматология» в Андижанском государственном медицинском институте.",
      skillseven: "2023 г - п.н.в. - консультант ЧЛХ в клинике «AND Hospital»",
      skillfive : "2021 г. - п.н.в. – Дежураный челюстно-лицевой хирург на кафедре «Взрослой челюстно-лицевой хирургии», в Ташкентском государственном стоматологическом институту.",
      skilleight:  "2024 - п.н.в. – Челюстно-лицевой хирург в центре челюстно-лицевой хирургии и стоматологии SAIF PROFACE",
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
      biografy: "Ведет прием, оказывая весь спектр ортодонтических услуг взрослым и детям. Основное направление лечение и помощь в рещение проблем с суставами, нормализация формы и размеров зубных рядов, коррекция роста и развития апикальных базисов челюстей, челюстных костей, нормализация окклюзии и создание оптимального динамического соотношения приводящих и отводящих мыщц. Лечение с брекетами, элайнерами и аппаратами.",
      teach: "2014 – 2019 гг. Астраханский Государственный Медицинский Университет по специальности «Стоматалогия» с присвоением квалификации «Стоматолог общей практики». ",
      teachtwo: "2023 - 2025гг. - Ташкентский Государственный Стоматологический Институт «Ординатура» по направлении «Ортодонтия»",
      skill: "2019 - 2024 гг. частная стоматологическая клиника 'ASNAN'",
      skillfourth:  "2024 - п.н.в. - частная стоматологическая клиника 'Advanced Dentistry' ",
      skilltwo: "2024 - п.н.в. - врач ортодонт в центре челюстно-лицевой хирургии и стоматологии SAIF PROFACE",
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
      teach: "В 2016 году окончил стоматологический факультет и в 2019 году ординатуру по направлению челюстно- лицевая хирургия в первом Санкт - Петербургском Государственном медицинском университете имени академика Павлова.",
      teachtwo: "В 2018 году проходил магистерскую программу по направлению менеджмент в СПбПУ Петра Великого.",
      skill: "2016 - 2019 гг. работал в «Центр имплантологии доктора Зорина» Санкт-Петербург.  ",
      skilltwo: "2020 - 2024 гг. работал ассистентом кафедры челюстно-лицевой хирургии Ташкентского Государственного стоматологического института. Пишет диссертационную работу на тему “Оптимизация удаления  нижней челюсти при сложных анатомических условиях” ",
      skillthree : "2020 - 2024 гг. челюстно- лицевой хирург, имплантолог в клинике «abclinic.uz»",
      skillfourth: "2023 года по настоящее время стоматолог - хирург, имплантолог в клинике «KAN dental clinic».",
      skillfive:  "2024 года по настоящее время стоматолог-хирург, имплантолог в центре челюстно-лицевой хирургии и стоматологии SAIF PROFACE.",
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
      teach: "1998 – 2005 гг. окончил с отличием Андижанский государственный медицинский институт по специальности «Лечебное дело» с присвоением квалификации «Врач».",
      teachtwo: "2005 – 2007 гг. проходил обучение в клинической ординатуре по специальности «Челюстно-лицевая хирургия» на кафедре косметологии, челюстно-лицевой хирургии и пластической хирургии ГОУ ДПО «Российская медицинская академия последипломного образования Росздрава» с присвоением квалификации «Челюстно-лицевой хирург».",
      teachthree  : "2006 г. прошёл повышение квалификации по направлению «Микрохирургия в травматологии» с основными дисциплинами: микрохирургическая техника, реплантология и пластическая микрохирургия, - на базе ГОУ ДПО «Российская медицинская академия последипломного образования Росздрава».",
      teachfourth : "2014 г. прошёл профессиональную переподготовку по направлению «Пластическая и эстетическая хирургия» на базе ГБОУ ДПО «Российская медицинская академия последипломного образования» МЗ РФ.",
      teachfive : "2018 г. прошёл курсы повышения квалификации в г. Мюнхен, Германия 2019 г. прошёл курсы повышения квалификации в г. Лондон, Великобритания",
      skill: "2002 – 2003 гг. медицинский брат нейрохирурга в отделении приёмной травматологии Андижанского филиала РНЦЭМП.",
      skilltwo: "2006 – 2009 гг. врач челюстно-лицевой хирург в «Арт-клиник». хирург в «Smart Clinic».",
      skillthree : "2011 г. – по настоящее время врач челюстно-лицевой хирург в отделении челюстнолицевой хирургии ФГБУ НМИЦ «ЦНИИС и ЧЛХ».",
      skillfourth : "2021 г. – по настоящее время врач челюстно-лицевой хирург в ФГБУ «Клиническая больница №1» (Волынская) Управления делами президента РФ.",
      skillfive : "2022 г. – по настоящее время пластический и челюстно-лицевой хирург в «L.A Clinic». Москва 2024 г. ",
      skillsix : "2024 г. – по настоящее время  Главный пластический и челюстно-лицевой хирург в центре челюстно-лицевой хирургии и стоматологии SAIF PROFACE.",
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
      teach: " 2019 - 2024 гг. окончил Ташкентский Государственный Стоматологический Институт ",
      teachtwo: "2024 - 2026 гг. окончил  ординатуру по направлению «Ортопедия» Ташкентский Государственный Стоматологический Институт ",
      skill: " 2021 - по настоящее время Стоматологическая клиника L-dent  Врач терапевт.",
      skilltwo: "2023 - 2024 гг. Врач терапевт в клинике «abclinic.uz» .",
      skillthree : "2024 - по настоящее время врач терапевт-ортопед в центре челюстно-лицевой хирургии и стоматологии SAIF PROFACE",
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
      teach: "2005 – 2012 гг. окончил Андижанский государственный медицинский институт по специальности «Лечебное дело» с присвоением квалификации «Врач общей практики». ",
      teachtwo: "2015 г. окончил магистратуру Андижанского государственного медицинского института по специальности «Хирургия».",
      teachthree : "2017 г. прошел стажировку в Инди «Малоинвозивной челюстной лицевой хирургии» в клинике «ARTEMIS».",
      teachfourth : "2018 г. прошел семинар в Южной Кореи «по виртуальной подготовки к ортагнатике».",
      teachfive: "2021 г. присоединился к частной стипендии по ортогнатической хирургии, активно участвуя в хирургических сессиях в Италии с командой «OrgnaticaRoma».",
      teachsix: "2024 г. представил проект хирургического планирования, стал продвинутым пользователем и лицом «OrtogOnBlender» в СНГ.",
      skill: "2016 – 2018 гг. ответственный челюстно-лицевой хирург в Андижанском областном филиале Республиканского центра скорой медицинской помощи.", 
      skilltwo: "2018 - 2023 гг. заведующий отделением ЧЛХ в клиники «Sog`lom Avlod»",
      skillthree : "2022 - 2024 гг. консультант ЧЛХ в клинике «Ренесанс»",
      skillfourth : "2023  - п.н.в. - Заведующий отделением ЧЛХ в клинике «AND Hospital»",
      skillfive: "2024 - п.н.в. – Челюстно-лицевой хирург в центре челюстно- хирургии и стоматологии SAIF PROFACE",
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