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
  teachtwo?: string;
  titlethree?: string;
  lastyebat?: string;
  teachthree?: string;
  teachfourth?: string;
  teachfive?: string;
  teachsix?: string;
  skilltwo?: string;
  skillthree?: string;
  skillfourth?: string;
  skillfive?: string;
  skillsix?: string;
  skillseven?: string;
  skilleight?: string;
}

interface ModalProps {
  onClose: () => void;
  teacher: Teacher;
}

const Modal: React.FC<ModalProps> = ({ onClose, teacher }) => {
  return (
    <div className={styles.modal} onClick={onClose} >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>X</button>

        {/* Left Side: Composite Image (Background + Doctor) */}
        <div className={styles.imageSection} style={{ backgroundImage: `url(${teacher.bgImage})` }}>
        </div>

        {/* Right Side: Text Info */}
        <div className={styles.info}>
          {/* Mobile only image */}
          {teacher.lastyebat && <Image className={styles.lastyebat} src={teacher.lastyebat} alt={teacher.title} width={350} height={400} />}

          <h2 className={styles.title}>{teacher.title}</h2>
          <p className={styles.desc}>{teacher.description}</p>

          <div className={styles.scrollableContent}>
            {teacher.biografy && (
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>{teacher.titleone}</h3>
                <p className={styles.sectionText}>{teacher.biografy}</p>
              </div>
            )}

            {teacher.teach && (
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>{teacher.titletwo}</h3>
                <div className={styles.sectionText}>{teacher.teach}</div>
              </div>
            )}

            {teacher.skill && (
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>{teacher.titlethree}</h3>
                <div className={styles.sectionText}>{teacher.skill}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
