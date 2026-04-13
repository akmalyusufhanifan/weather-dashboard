export default function TodayWeatherCard() {
  return (
    <div className="w-[257px] h-[226px] bg-[#BBD7EC] flex flex-col justify-between items-center rounded-3xl text-black">
      {/* header */}
      <div className="w-full flex justify-between items-center bg-[#AECADF] rounded-t-3xl p-4">
        <h2 className="text-md font-semibold">Friday</h2>
        <h2 className="text-md font-semibold">11.45 AM</h2>
      </div>

      {/* main content */}
      <div className="w-full flex justify-between items-center px-4">
        <h2 className="text-4xl font-semibold">16°C</h2>
        <h2 className="text-4xl">☀️</h2>
      </div>

      {/* description */}
      <div className="w-full grid grid-cols-2 gap-y-1 px-4 pb-4">
        <h3 className="text-sm">
          Feels Like <span className="font-bold">18°C</span>
        </h3>

        <h3 className="text-sm">
          Wind Speed <span className="font-bold">6</span>
        </h3>

        <h3 className="text-sm">
          Humidity <span className="font-bold">51%</span>
        </h3>

        <h3 className="text-sm">
          Sunrise <span className="font-bold">05:30 AM</span>
        </h3>

        <h3 className="text-sm">
          Pressure <span className="font-bold">100MB</span>
        </h3>

        <h3 className="text-sm">
          Sunset <span className="font-bold">06:45 PM</span>
        </h3>
      </div>
    </div>
  );
}
