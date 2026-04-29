"use client";

import WeatherDetail from "./content/weather-detail";
import CityMap from "./content/city-map";
import OtherCityWeather from "./content/other-city-weather";

type Props = {
  coords: [number, number];
};

export default function WeatherOverview({ coords }: Props) {
  return (
    <div className="flex items-center gap-x-10">
      <WeatherDetail />
      {coords && !isNaN(coords[0]) && !isNaN(coords[1]) && (
        <CityMap coords={coords} />
      )}
      <OtherCityWeather />
    </div>
  );
}
