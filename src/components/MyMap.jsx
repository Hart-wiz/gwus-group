// components/MyMap.jsx
import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 6.5244, // Example: Lagos latitude
  lng: 3.3792, // Example: Lagos longitude
};

const MyMap = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAgSD9PPBfGXDI0KnCpGH8bVNmDuL64YV0">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {/* You can add <Marker /> or other components here */}
      </GoogleMap>
    </LoadScript>
  );
};

export default MyMap;
