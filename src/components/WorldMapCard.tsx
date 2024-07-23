// WorldMapCard.tsx

import React, { useState } from "react";
import worldMap from "@assets/icons/world.svg";

interface Location {
  name: string;
  x: string;
  y: string;
}

const locations: Location[] = [
  { name: "Detroit", x: "28%", y: "27%", current: false },
  { name: "Santiago", x: "30.25%", y: "82.25%", current: false },
  { name: "Frankfurt", x: "51.5%", y: "22%", current: false },
  { name: "Medellin", x: "28.25%", y: "54.75%", current: false },
  { name: "Thessaloniki", x: "55.25%", y: "28.75%", current: false },
  { name: "Sofia", x: "55.75%", y: "26.5%", current: false },
  { name: "Boston", x: "31.5%", y: "27%", current: false },
  { name: "Bristol", x: "48.75%", y: "20.75%", current: false },
  { name: "Lisbon", x: "47%", y: "29%", current: false },
  { name: "Austin", x: "22.75%", y: "34.75%", current: false },
  { name: "Houston", x: "23.5%", y: "36%", current: false },
  { name: "New York City", x: "30.5%", y: "28%", current: false },
  { name: "Copenhagen", x: "52.5%", y: "18%", current: false },
  { name: "San Francisco", x: "17.25%", y: "29.5%", current: false },
  { name: "Shanghai", x: "82.60%", y: "35.5%", current: false },
  { name: "Málaga", x: "49%", y: "30%", current: false },
  { name: "Miami", x: "27.25%", y: "38.5%", current: false },
  { name: "Berlin", x: "52.5%", y: "20%", current: true },
];

const WorldMapCard: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState<Location | null>(null);

  return (
    <div>
      <h3 className="text-xl font-normal tracking-tight text-primary dark:text-white lg:text-2xl mb-6">
        I've worked remotely from...
      </h3>
      <div className="relative w-full">
        <img src={worldMap.src} alt="World Map" className="w-full h-auto" />
        {locations.map((location, index) => (
          <div
            key={index}
            className={`absolute  rounded-full transform -translate-x-1/2 -translate-y-1/2 cursor-pointer ${
              location.current
                ? "animate-pulse w-3 h-3 shadow-[0_0_8px_#B084FC] bg-violet-600"
                : "bg-violet-400 w-2 h-2"
            }`}
            style={{ left: location.x, top: location.y }}
            onMouseEnter={() => setActiveLocation(location)}
            onMouseLeave={() => setActiveLocation(null)}
          />
        ))}
        {activeLocation && (
          <div className="absolute bottom-0 left-0 text-white dark:text-zinc-400 rounded shadow">
            {activeLocation.name}
          </div>
        )}
      </div>
    </div>
  );
};

export default WorldMapCard;
