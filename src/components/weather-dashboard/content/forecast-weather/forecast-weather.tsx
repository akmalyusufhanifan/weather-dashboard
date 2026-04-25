type Props = {
  daily: any[];
};

import ForecastWeatherCard from "./forecast-weather-card";

export default function ForecastWeather({ daily }: Props) {
  if (!daily || daily.length === 0) return null;

  const nextDays = daily.slice(1, 4);

  return (
    <div className="flex space-x-10">
      {nextDays.map((item, index) => {
        const date = new Date(item.dt_txt);

        const day = date.toLocaleDateString("en-US", {
          weekday: "short",
        });

        const icon = item.weather[0].icon;
        const temp = Math.round(item.main.temp);

        return (
          <ForecastWeatherCard
            key={index}
            day={day}
            icon={
              <img
                src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                alt="weather icon"
                className="w-16 h-16"
              />
            }
            temp={`${temp}°`}
          />
        );
      })}
    </div>
  );
}
