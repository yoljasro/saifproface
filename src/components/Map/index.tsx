import React, { useState, FC } from 'react';
import { YMaps, Map, Placemark, ZoomControl, FullscreenControl } from '@pbe/react-yandex-maps';
import styles from './index.module.sass';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from "next-intl";
import { useEffect } from 'react';

const mapContainerStyle = {
    width: "830px", // Kenglik
    height: "300px",
    borderRadius: "20px", // 20px radius qo'shildi
};

const center = [41.315281, 69.289192]; // Xaritadagi markaz

type Location = {
    lat: number;
    lng: number;
};

type Place = {
    location: Location;
    name: string;
    info: string;
};

type MapProps = {};

export const YandexMap: FC<MapProps> = () => {
    const t = useTranslations();
    const locale = useLocale();
    const [dynamicLocation, setDynamicLocation] = useState<any | null>(null);
    const [places, setPlaces] = useState<Place[]>([
        {
            name: "SaifProFace",
            location: { lat: 41.315281, lng: 69.289192 },
            info: "Center for maxillofacial surgery and dentistry",
        },
    ]);

    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const res = await fetch(`${API_URL}/api/location`);
                if (res.ok) {
                    const data = await res.json();
                    if (Array.isArray(data) && data.length > 0) {
                        setDynamicLocation(data[0]); // Take first one
                    }
                }
            } catch (error) {
                console.error("Error fetching location:", error);
            }
        };
        fetchLocation();
    }, [API_URL]);

    const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

    const onPlacemarkClick = (place: Place) => {
        setSelectedPlace(place);
    };

    const closeInfoBox = () => {
        setSelectedPlace(null);
    };

    return (
        <div className={styles.container}>
            <div className={styles.location} id="location">
                <div className={styles.mapContainer}>
                    <div className={styles.textBlock}>
                        <p className={styles.name}>{t("advantagesBlock.adressme")}</p>
                        <p className={styles.desc}>
                            {dynamicLocation
                                ? (dynamicLocation[`address_${locale}`] || dynamicLocation[`address_${locale === 'kl' ? 'uz_cyr' : locale}`] || dynamicLocation.address)
                                : t("advantagesBlock.adress")}
                        </p>
                        <p className={styles.text}>{t("advantagesBlock.push")}</p>
                    </div>
                    <Link className={styles.hiddenlink} href={'https://yandex.uz/maps/org/saif_proface/205203270620/?ll=69.333214%2C41.293877&z=17.02'} target='_blank'>
                        <YMaps>
                            <Map
                                className={styles.maping}
                                defaultState={{ center, zoom: 15 }}
                                style={{ ...mapContainerStyle, borderRadius: '20px', overflow: "hidden" }} // Yangi o'zgarish
                            >
                                {places.map((place, index) => (
                                    <Placemark
                                        key={index}
                                        geometry={[place.location.lat, place.location.lng]}
                                        properties={{
                                            balloonContentHeader: place.name,
                                            balloonContentBody: place.info,
                                        }}
                                        onClick={() => onPlacemarkClick(place)}
                                        options={{
                                            iconLayout: 'default#image',
                                            iconImageHref: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png', // Qizil belgi
                                            iconImageSize: [30, 30],
                                            iconImageOffset: [-15, -15],
                                        }}
                                    />
                                ))}
                                {selectedPlace && (
                                    <Placemark
                                        geometry={[selectedPlace.location.lat, selectedPlace.location.lng]}
                                        properties={{
                                            balloonContentHeader: selectedPlace.name,
                                            balloonContentBody: selectedPlace.info,
                                        }}
                                        options={{
                                            iconLayout: 'default#image',
                                            iconImageHref: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
                                            iconImageSize: [30, 30],
                                            iconImageOffset: [-15, -15],
                                        }}
                                        onClick={closeInfoBox}
                                    />
                                )}
                                <ZoomControl options={{ float: 'right' }} />
                                <FullscreenControl />
                            </Map>
                        </YMaps>
                    </Link>
                </div>
                <Image className={styles.imgback} src={'/assets/img/mapimg.png'} alt='mapimg' width={1070} height={670} />
            </div>
        </div>
    );
};

export default YandexMap;
