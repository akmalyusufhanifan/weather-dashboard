import TodayWeatherCard from "@/components/today-weather-card";
import NextDayWeatherCard from "@/components/next-day-weather-card";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111015] flex flex-col items-center">
      {/* row 1 */}
      <div className="flex flex-col items-center gap-y-8">
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
      </div>

      {/* row 2 */}
      <div></div>
    </div>
  );
}
