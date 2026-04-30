"use client";

import TodayWeather from "@/components/weather-dashboard/content/today-weather";
import ForecastWeather from "./content/forecast-weather/forecast-weather";
import ChanceOfRain from "@/components/weather-dashboard/content/chance-of-rain";
import SearchBar from "@/components/weather-dashboard/content/search-bar";
import { type WeatherData } from "@/types/weather-data";
import { CiLocationOn } from "react-icons/ci";

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
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center space-x-2">
          <CiLocationOn className="text-xl text-[#FDFDFD]" />
          <h2 className="text-xl text-[#FDFDFD]">
            {data?.name}, {data?.sys.country}
          </h2>
        </div>
        <SearchBar onSearch={onSearch} />
      </div>

      <div className="flex items-center space-x-10 pt-10">
        <TodayWeather data={data} />
        <ForecastWeather daily={forecast} />
        <ForecastWeather daily={forecast} />
        <ChanceOfRain data={hourlyForecast} />
      </div>
    </div>
  );
}
