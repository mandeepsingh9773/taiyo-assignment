import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

interface Country {
  country: string;
  countryInfo: { lat: number; long: number };
  active: number;
  recovered: number;
  deaths: number;
}

interface WorldMapProps {
  countries: Country[];
}

const WorldMap: React.FC<WorldMapProps> = ({ countries }) => {
  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {countries.map((country) => (
        <Marker
          key={country.country}
          position={[country.countryInfo.lat, country.countryInfo.long]}
        >
          <Popup>
            <div>
              <h3>{country.country}</h3>
              <p>Active cases: {country.active}</p>
              <p>Recovered: {country.recovered}</p>
              <p>Deaths: {country.deaths}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default WorldMap;
