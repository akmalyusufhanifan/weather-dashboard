"use client";

import { type WeatherData } from "@/types/weather-data";
import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  data: WeatherData | null;
};

export default function TodayWeatherCard({ data }: Props) {
  if (!data) return null;

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatDay = (date: Date) => {
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  const formatClock = (date: Date) => {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatTime = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="w-[257px] h-[226px] bg-[#BBD7EC] flex flex-col justify-between items-center rounded-3xl text-black">
      {/* header */}
      <div className="w-full flex justify-between items-center bg-[#AECADF] rounded-t-3xl p-4">
        <h2 className="text-[16px] font-semibold">{formatDay(currentTime)}</h2>
        <h2 className="text-[16px] font-semibold">
          {formatClock(currentTime)}
        </h2>
      </div>

      {/* main content */}
      <div className="w-full flex justify-between items-center px-4">
        <h2 className="text-4xl font-semibold">{data.main.temp}°C</h2>
        <Image
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt={data.weather[0].description}
          width={90}
          height={90}
          priority
        />
      </div>

      {/* description */}
      <div className="w-full grid grid-cols-2 gap-y-1 px-4 pb-4">
        <h3 className="text-[12px]">
          Feels Like <span className="font-bold">{data.main.feels_like}°C</span>
        </h3>

        <h3 className="text-[12px]">
          Wind Speed{" "}
          <span className="font-bold">{data.wind.speed.toFixed(1)} m/s</span>
        </h3>

        <h3 className="text-[12px]">
          Humidity <span className="font-bold">{data.main.humidity}%</span>
        </h3>

        <h3 className="text-[12px]">
          Sunrise{" "}
          <span className="font-bold">{formatTime(data.sys.sunrise)}</span>
        </h3>

        <h3 className="text-[12px]">
          Pressure <span className="font-bold">{data.main.pressure} hPa</span>
        </h3>

        <h3 className="text-[12px]">
          Sunset{" "}
          <span className="font-bold">{formatTime(data.sys.sunset)}</span>
        </h3>
      </div>
    </div>
  );
}
