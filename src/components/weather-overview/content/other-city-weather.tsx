"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function OtherCityWeather() {
  const [weatherData, setWeatherData] = useState<any[]>([]);

  const cities = ["jakarta", "seoul", "tokyo", "beijing"];

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const results = await Promise.all(
          cities.map((city) =>
            axios.get(
              `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`,
            ),
          ),
        );

        const data = results.map((res) => res.data);
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="flex flex-col items-center gap-y-[27px]">
      {weatherData.map((city, index) => (
        <div
          key={index}
          className="w-[297px] h-[110px] bg-[#1B1B1D] rounded-2xl flex justify-between items-center text-[#FDFDFD] px-6"
        >
          <div className="flex flex-col items-start">
            <div className="text-2xl">{city.name}</div>
            <div className="text-md text-gray-500 capitalize">
              {city.weather[0].description}
            </div>
          </div>

          <div className="flex flex-col items-end">
            <img
              src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
              alt="weather icon"
              className="w-[50px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
