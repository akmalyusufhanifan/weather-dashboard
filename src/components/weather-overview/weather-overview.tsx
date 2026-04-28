import WeatherDetail from "./content/weather-detail";
import Maps from "./content/maps";
import OtherCityWeather from "./content/other-city-weather";

export default function WeatherOverview() {
  return (
    <div className="flex items-center gap-x-10">
      <WeatherDetail />
      <Maps />
      <OtherCityWeather />
    </div>
  );
}
