"use client";

import { useState } from "react";
import TodayWeather from "@/components/weather-dashboard/content/today-weather";
// import NextDayWeather from "./content/next-day-weather/next-day-weather";
import ChanceOfRain from "@/components/weather-dashboard/content/chance-of-rain";
import SearchBar from "@/components/weather-dashboard/content/search-bar";
import { type WeatherData } from "@/types/weather-data";

export default function WeatherDashboard() {
  const [data, setData] = useState<WeatherData | null>(null);

  return (
    <div className="flex flex-col items-center">
      <SearchBar setData={setData} />

      <div className="flex items-center space-x-10 pt-10">
        <TodayWeather data={data} />
        {/* <NextDayWeather daily={data} /> */}

        <ChanceOfRain />
      </div>
    </div>
  );
}
