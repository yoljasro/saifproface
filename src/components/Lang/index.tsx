import React, { useState , useEffect } from 'react';
import styles from './index.module.sass';
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

export const Lang = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('ru');
    const [animateOut, setAnimateOut] = useState(false);
    const t = useTranslations();
    const router = useRouter();
    const [selectedLang, setSelectedLang] = useState(router.locale);

    useEffect(() => {
        if (selectedLang) {
            router.push(router.asPath, undefined, {
                locale: selectedLang,
            });
        }
    }, [selectedLang]);

    const handleClick = () => {
        const nextLanguage = 
            selectedLanguage === 'ru' ? 'uz' : 
            selectedLanguage === 'uz' ? 'kl' : 
            selectedLanguage === 'kl' ? 'en' : 'ru'; // Keyingi tilni aniqlash

        setAnimateOut(true); // Animatsiyani boshlash
        setTimeout(() => {
            setSelectedLanguage(nextLanguage); // Keyingi tilni hozirgi tilga o'zlashtirish
            setAnimateOut(false); // Animatsiyani tugatish
            setTimeout(() => {
                router.push(router.asPath, undefined, {
                    locale: nextLanguage,
                });
            }, 300);
        }, 300); 
    };

    return (
        <div className={styles.lang}>
            <div className={styles.lang__select} onClick={handleClick}>
                <span className={styles.lang__selected}>{selectedLanguage.toUpperCase()}</span>
                <span className={`${styles.lang__options} ${animateOut ? styles.animateOut : ''}`}>
                    <span>RU</span>
                    <span>UZ</span>
                    <span>KL</span>
                    <span>ENG</span>
                </span>
            </div>
        </div>
    );
};
