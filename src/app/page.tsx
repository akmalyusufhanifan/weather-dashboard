"use client";

import { useState, useEffect } from "react";
import WeatherDashboard from "@/components/weather-dashboard/weather-dashboard";
import WeatherOverview from "@/components/weather-overview/weather-overview";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [coords, setCoords] = useState<[number, number]>([106.8456, -6.2088]); // default location = jakarta

  const fetchAllByCoords = async (lat: number, lon: number) => {
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
    setCoords([lon, lat]);

    const daily = forecastRes.data.list.filter((i: any) =>
      i.dt_txt.includes("12:00:00"),
    );
    setForecast(daily);

    const today = new Date().toISOString().split("T")[0];
    const todayForecast = forecastRes.data.list.filter((i: any) =>
      i.dt_txt.includes(today),
    );
    setHourlyForecast(todayForecast);
  };

  const fetchAllByCity = async (city: string) => {
    try {
      const weatherRes = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            q: city,
            appid: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
            units: "metric",
          },
        },
      );

      const coord = weatherRes.data?.coord;

      if (!coord || coord.lat == null || coord.lon == null) {
        console.error("Invalid coord data:", weatherRes.data);
        return;
      }

      await fetchAllByCoords(coord.lat, coord.lon);
    } catch (error) {
      console.error("City not found or API error:", error);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => fetchAllByCoords(pos.coords.latitude, pos.coords.longitude),
      () => fetchAllByCity("Jakarta"),
    );
  }, []);

  return (
    <div className="min-h-screen bg-[#111015] flex flex-col items-center gap-y-12 pt-8 pb-8">
      {/* row 1 */}
      <WeatherDashboard
        data={data}
        forecast={forecast}
        hourlyForecast={hourlyForecast}
        onSearch={fetchAllByCity}
      />

      {/* row 2 */}
      <WeatherOverview coords={coords} />
    </div>
  );
}
