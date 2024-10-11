import React from 'react';
import Image from 'next/image';
import styles from './index.module.sass';

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

interface ModalProps {
  onClose: () => void;
  teacher: Teacher;
}

const Modal: React.FC<ModalProps> = ({ onClose, teacher }) => {
  return (
    <div className={styles.modal} onClick={onClose} >
      <div className={styles.modalContent} tabIndex={0} style={{ backgroundImage: `url(${teacher.bgImage})` }}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <div className={styles.info}>
          <Image className={styles.lastyebat} src={teacher.lastyebat} alt={teacher.title} width={350} height={400}/>
        <p className={styles.title}>{teacher.title}</p>
        <p className={styles.desc}>{teacher.description}</p>
        <p className={styles.biografy}>{teacher.titleone} </p>
        <p className={styles.bio}>{teacher.biografy}</p>
        <p className={styles.biografytwo}>{teacher.titletwo}</p>
        <p className={styles.biotwo}>{teacher.teach}</p>
        <p className={styles.biotwo}>{teacher.teachtwo}</p>
        <p className={styles.biotwo}>{teacher.teachthree}</p>
        <p className={styles.biotwo}>{teacher.teachfourth}</p>
        <p className={styles.biotwo}>{teacher.teachfive}</p>
        <p className={styles.biotwo}>{teacher.teachsix}</p>
        <p className={styles.biografythree}>{teacher.titlethree}</p>
        <p className={styles.biothree}>{teacher.skill}</p>
        <p className={styles.biothree}>{teacher.skilltwo}</p>
        <p className={styles.biothree}>{teacher.skillthree}</p>
        <p className={styles.biothree}>{teacher.skillfourth}</p>
        <p className={styles.biothree}>{teacher.skillfive}</p>
        <p className={styles.biothree}>{teacher.skillsix}</p>
        <p className={styles.biothree}>{teacher.skillseven}</p>
        <p className={styles.biothree}>{teacher.skilleight}</p>
        </div>
      
      </div>
    </div>
  );
};

export default Modal;
