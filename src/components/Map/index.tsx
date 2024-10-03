import React, { useState, FC } from 'react';
import { YMaps, Map, Placemark, ZoomControl, FullscreenControl } from '@pbe/react-yandex-maps';
import styles from './index.module.sass';
import Image from 'next/image';
import { useTranslations } from "next-intl";

const mapContainerStyle = {
    width: "830px", // Kenglik
    height: "300px",
    borderRadius: "20px", // 20px radius qo'shildi
    // margin: "0 auto", // Markazda joylashishi uchun
};

const center = [41.315281, 69.289192];

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
    const [places, setPlaces] = useState<Place[]>([
        {
            name: "Student Union",
            location: { lat: 41.315281, lng: 69.289192 },
            info: "Learning center",
        },
    ]);

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
                        <p className={styles.desc}>{t("advantagesBlock.adress")}</p>
                        <p className={styles.text}>{t("advantagesBlock.push")}</p>
                    </div>
                    <YMaps>
                        <Map
                            defaultState={{ center, zoom: 15 }}
                            style={{ ...mapContainerStyle, borderRadius: '20px', overflow : "hidden" }} // Yangi o'zgarish

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
                                        iconImageHref: selectedPlace === place ? 'http://maps.yandex.net/i/2x/blue.png' : 'http://maps.yandex.net/i/2x/red.png',
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
                                        iconImageHref: 'http://maps.yandex.net/i/2x/blue.png',
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
                </div>
                {/* <div className={styles.imageContainer}> */}
                    <Image className={styles.imgback} src={'/assets/img/mapimg.png'} alt='mapimg' width={1070} height={670}/>
                {/* </div> */}
            </div>
        </div>
    );
};

export default YandexMap;