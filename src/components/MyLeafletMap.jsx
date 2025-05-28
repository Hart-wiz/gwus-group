import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MyLeafletMap() {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <MapContainer
          center={[25.251655, 51.478717]}
          zoom={13}
          className="z-0 h-[200px] w-[100%]"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[25.251655, 51.478717]}>
            <Popup>Doha, Qatar.</Popup>
          </Marker>
        </MapContainer>
        <p>
          International office: <b>Salwa Road, Doha, Qatar.</b>{" "}
        </p>
      </div>
      <div>
        <MapContainer
          center={[5.5249, 7.4946]}
          zoom={13}
          className="z-0 h-[200px] w-[100%]"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[5.5249, 7.4946]}>
            <Popup>umuahia, Nigeria</Popup>
          </Marker>
        </MapContainer>
        <p>
          Nigerian Office: <b>Ubakala rd, Umuahia, Nigeria</b>
        </p>
      </div>
    </div>
  );
}
