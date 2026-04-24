"use client";

import { useState } from "react";
import axios from "axios";
import { type WeatherData } from "@/types/weather-data";

export default function WeatherCard() {
  const [data, setData] = useState<WeatherData | null>(null);
  const [location, setLocation] = useState("");

  const url = `${process.env.NEXT_PUBLIC_WEATHER_BASE_URL}?q=${location}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`;

  const searchLocation = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      axios.get(url).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="h-screen bg-[url('/background.webp')] bg-cover bg-center relative py-8 px-8 overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="h-full relative z-10 flex flex-col justify-between items-center">
        {/* search bar */}
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder="Enter Location"
          type="text"
          className="bg-white/20 w-[250px] h-12 rounded-full border border-white pl-4 text-lg text-white"
        />

        {/* main content */}
        <div className="w-full flex flex-col items-start gap-y-2">
          <h2 className="text-xl tracking-wide">{data?.name}</h2>
          <div className="w-full flex justify-between items-center">
            <h1 className="text-8xl">{data?.main.temp.toFixed()}°C</h1>
            <h2 className="text-xl rotate-270">{data?.weather[0].main}</h2>
          </div>
        </div>

        {/* description */}
        <div className="bg-white/15 w-full h-22 rounded-3xl shadow-xs flex justify-between items-center px-6">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold tracking-wide">
              {data?.main.feels_like.toFixed()}°C
            </h2>
            <h3 className="text-xl">Feels Like</h3>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold tracking-wide">
              {data?.main.humidity}%
            </h2>
            <h3 className="text-xl">Humidity</h3>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold tracking-wide">
              {data?.wind.speed.toFixed()}MPH
            </h2>
            <h3 className="text-xl">Wind Speed</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
