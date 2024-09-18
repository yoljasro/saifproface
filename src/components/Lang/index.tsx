import React, { useState, useEffect } from 'react';
import styles from './index.module.sass';
import { useRouter } from "next/router";

export const Lang = () => {
    const router = useRouter();
    const [selectedLanguage, setSelectedLanguage] = useState(router.locale);

    const handleLanguageChange = (event) => {
        const newLang = event.target.value;
        setSelectedLanguage(newLang);
        router.push(router.asPath, undefined, {
            locale: newLang,
        });
    };

    return (
        <div className={styles.lang}>
            <select 
                className={styles.customSelect} 
                value={selectedLanguage} 
                onChange={handleLanguageChange}
            >
                <option value="ru">RU</option>
                <option value="uz">UZ</option>
                <option value="kl">УЗБ </option>
                <option value="en">ENG</option>
            </select>
        </div>
    );
};
