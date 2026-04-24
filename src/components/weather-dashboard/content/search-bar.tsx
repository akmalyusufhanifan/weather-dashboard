"use client";

import { useState } from "react";
import axios from "axios";
import { type WeatherData } from "@/types/weather-data";

type Props = {
  setData: (data: WeatherData) => void;
};

export default function SearchBar({ setData }: Props) {
  const [location, setLocation] = useState("");

  const url = `${process.env.NEXT_PUBLIC_WEATHER_BASE_URL}?q=${location}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`;

  const handleSearch = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      try {
        const res = await axios.get(url);

        setData(res.data);
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
      setLocation("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyDown={handleSearch}
        placeholder="Search City"
        className="bg-[#1B1B1D] w-[500px] h-12 rounded-xl pl-4 text-lg text-[#FDFDFD]"
      />
    </div>
  );
}
