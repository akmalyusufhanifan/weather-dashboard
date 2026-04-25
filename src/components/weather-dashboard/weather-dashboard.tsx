"use client";

import { useState, useEffect } from "react";
import TodayWeather from "@/components/weather-dashboard/content/today-weather";
import ForecastWeather from "./content/forecast-weather/forecast-weather";
import ChanceOfRain from "@/components/weather-dashboard/content/chance-of-rain";
import SearchBar from "@/components/weather-dashboard/content/search-bar";
import { type WeatherData } from "@/types/weather-data";
import axios from "axios";

export default function WeatherDashboard() {
  const [data, setData] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState([]);

  const fetchAllByCoords = async (lat: number, lon: number) => {
    try {
      const [weatherRes, forecastRes] = await Promise.all([
        axios.get("https://api.openweathermap.org/data/2.5/weather", {
          params: {
            lat,
            lon,
            appid: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
            units: "metric",
          },
        }),
        axios.get("https://api.openweathermap.org/data/2.5/forecast", {
          params: {
            lat,
            lon,
            appid: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
            units: "metric",
          },
        }),
      ]);

      setData(weatherRes.data);

      const daily = forecastRes.data.list.filter((item: any) =>
        item.dt_txt.includes("12:00:00"),
      );

      setForecast(daily);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchAllByCity = async (city: string) => {
    try {
      const [weatherRes, forecastRes] = await Promise.all([
        axios.get("https://api.openweathermap.org/data/2.5/weather", {
          params: {
            q: city,
            appid: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
            units: "metric",
          },
        }),
        axios.get("https://api.openweathermap.org/data/2.5/forecast", {
          params: {
            q: city,
            appid: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
            units: "metric",
          },
        }),
      ]);

      setData(weatherRes.data);

      const daily = forecastRes.data.list.filter((item: any) =>
        item.dt_txt.includes("12:00:00"),
      );

      setForecast(daily);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      fetchAllByCity("Jakarta");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetchAllByCoords(position.coords.latitude, position.coords.longitude);
      },
      () => {
        fetchAllByCity("Jakarta");
      },
    );
  }, []);

  return (
    <div className="flex flex-col items-center">
      <SearchBar onSearch={fetchAllByCity} />

      <div className="flex items-center space-x-10 pt-10">
        <TodayWeather data={data} />
        <ForecastWeather daily={forecast} />
        <ForecastWeather daily={forecast} />

        <ChanceOfRain />
      </div>
    </div>
  );
}
