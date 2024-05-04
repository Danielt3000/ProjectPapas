import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import potato from "../Maps/assets/potato.png";
import store from "../Maps/assets/store.png";

function Maps({ array, larg, heith, view }) {
  const myVariable = import.meta.env.VITE_MY_VARIABLE;

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: myVariable,
  });

  const containerStyle = {
    width: larg,
    height: heith,
  };

  const center = {
    lat: array.latitud,
    lng: array.long,
  };

  const locations = [
    { lat: 18.49063609877442, lng: -95.52747096073551 },
    { lat: 19.382886847764475, lng: -99.16079329576833 },
    { lat: 29.915364430907488, lng: -110.2377166885907 },
    { lat: 30.749143724538158, lng: -115.4779929526867 },
    { lat: 25.211244978109104, lng: -107.4743092992712 },
  ];

  const singleMarker = {
    lat: 25.710003567445728,
    lng: -100.2858830518688,
  };

  return isLoaded ? (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        options={{
          mapTypeControl: false,
          fullscreenControl: false,
          streetView: false,
          navigationControl: false,
        }}
        center={center}
        zoom={view}
      >
        <Marker position={singleMarker} icon={store} />

        {locations.map((location, index) => (
          <Marker key={index} position={location} icon={potato} />
        ))}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default React.memo(Maps);
