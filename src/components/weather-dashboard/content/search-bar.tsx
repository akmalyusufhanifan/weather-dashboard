"use client";

import { useState } from "react";

type Props = {
  onSearch: (city: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  const [location, setLocation] = useState("");

  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && location.trim()) {
      onSearch(location);
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
