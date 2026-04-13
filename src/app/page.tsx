import TodayWeatherCard from "@/components/today-weather-card";
import NextDayWeatherCard from "@/components/next-day-weather-card";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* row 1 */}
      <div>
        {/* next 7 days */}
        <div className="carousel carousel-center w-[257px] h-[226px] gap-x-8">
          <div className="carousel-item">
            <TodayWeatherCard />
          </div>
          <div className="carousel-item">
            <NextDayWeatherCard />
          </div>
          <div className="carousel-item">
            <NextDayWeatherCard />
          </div>
          <div className="carousel-item">
            <NextDayWeatherCard />
          </div>
          <div className="carousel-item">
            <NextDayWeatherCard />
          </div>
          <div className="carousel-item">
            <NextDayWeatherCard />
          </div>
          <div className="carousel-item">
            <NextDayWeatherCard />
          </div>
        </div>

        {/* chance of rain */}
        <div></div>
      </div>

      {/* row 2 */}
      <div></div>
    </div>
  );
}
