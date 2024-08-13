import { useState, FC } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import Image from "next/image";
import styles from './index.module.sass';

const mapContainerStyle = {
    width: "100%",
    height: "500px",
    marginBottom: "100px",
};

const center = {
    lat: 41.315281,
    lng: 69.289192,
};

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

export const Map: FC<MapProps> = () => {
    const [places, setPlaces] = useState<Place[]>([
        {
            name: "Student Union",
            location: { lat: 41.315281, lng: 69.289192 },
            info: "Learning center",
        },
    ]);

    const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

    const onMarkerClick = (place: Place) => {
        setSelectedPlace(place);
    };

    const closeInfoWindow = () => {
        setSelectedPlace(null);
    };

    return (
        <>
                <div className={styles.location} id="location">
                    <div>
                        {selectedPlace && (
                            <InfoWindow
                                position={selectedPlace.location}
                                onCloseClick={closeInfoWindow}
                            >
                                <div>
                                    <h2>{selectedPlace.name}</h2>
                                    <p>{selectedPlace.info}</p>
                                </div>
                            </InfoWindow>
                        )}
                    </div>
                    <div>
                        <LoadScript googleMapsApiKey="AIzaSyCBNEcEo5qilBZTygjDy59HcujlvPYS4XI">
                            <GoogleMap
                                mapContainerStyle={mapContainerStyle}
                                center={center}
                                zoom={15}
                            >
                                {places.map((place, index) => (
                                    <Marker
                                        key={index}
                                        position={place.location}
                                        label={place.name}
                                        onClick={() => onMarkerClick(place)}
                                        icon={{
                                            url: selectedPlace === place ? "http://maps.google.com/mapfiles/ms/icons/green-dot.png" : "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                                        }}
                                    />
                                ))}
                            </GoogleMap>
                        </LoadScript>
                    </div>
                    <div className={styles.location__adress}>
                        <div className={styles.location__card}>
                            <div className={styles.location__cardLine}></div>
                            <p className={styles.location__cardTitle}>АДРЕС КОМПАНИИ </p>
                            <p className={styles.location__cardDesc}> Yunusabad Akhmad Donish 4\80</p>
                        </div>

                        
                    </div>
                </div>
        </>
    );
};
