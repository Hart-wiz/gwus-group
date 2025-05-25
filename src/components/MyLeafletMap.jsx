import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MyLeafletMap() {
  return (
    <div>
      <MapContainer
        center={[5.10658, 7.36667]}
        zoom={13}
        className="z-0 h-[400px] w-[100%]"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[5.10658, 7.36667]}>
          <Popup>Aba, Nigeria</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
