"use client";

import TodayWeather from "@/components/weather-dashboard/content/today-weather";
import ForecastWeather from "./content/forecast-weather/forecast-weather";
import ChanceOfRain from "@/components/weather-dashboard/content/chance-of-rain";
import SearchBar from "@/components/weather-dashboard/content/search-bar";
import { type WeatherData } from "@/types/weather-data";

type Props = {
  data: WeatherData | null;
  forecast: WeatherData[];
  hourlyForecast: WeatherData[];
  onSearch: (city: string) => void;
};

export default function WeatherDashboard({
  data,
  forecast,
  hourlyForecast,
  onSearch,
}: Props) {
  return (
    <div className="flex flex-col items-center">
      <SearchBar onSearch={onSearch} />

      <div className="flex items-center space-x-10 pt-10">
        <TodayWeather data={data} />
        <ForecastWeather daily={forecast} />
        <ForecastWeather daily={forecast} />
        <ChanceOfRain data={hourlyForecast} />
      </div>
    </div>
  );
}
