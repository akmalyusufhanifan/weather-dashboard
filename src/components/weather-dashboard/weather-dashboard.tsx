"use client";

import { useState, useEffect } from "react";
import TodayWeather from "@/components/weather-dashboard/content/today-weather";
// import NextDayWeather from "./content/next-day-weather/next-day-weather";
import ChanceOfRain from "@/components/weather-dashboard/content/chance-of-rain";
import SearchBar from "@/components/weather-dashboard/content/search-bar";
import { type WeatherData } from "@/types/weather-data";
import axios from "axios";

export default function WeatherDashboard() {
  const [data, setData] = useState<WeatherData | null>(null);

  useEffect(() => {
    if (data) return;

    if (!navigator.geolocation) {
      console.error("Geolocation tidak didukung");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          const res = await axios.get(
            "https://api.openweathermap.org/data/2.5/weather",
            {
              params: {
                lat: latitude,
                lon: longitude,
                appid: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
                units: "metric",
              },
            },
          );

          setData(res.data);
        } catch (err) {
          console.error(err);
        }
      },
      async () => {
        try {
          const res = await axios.get(
            "https://api.openweathermap.org/data/2.5/weather",
            {
              params: {
                q: "Jakarta",
                appid: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
                units: "metric",
              },
            },
          );

          setData(res.data);
        } catch (err) {
          console.error(err);
        }
      },
    );
  }, [data]);

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
