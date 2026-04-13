export default function NextDayWeatherCard() {
  return (
    <div className="w-[96px] h-[226px] bg-[#1B1B1D] text-[#FDFDFD] rounded-3xl flex flex-col justify-between items-center p-4">
      <h2 className="text-md border-b-2 border-gray-700 w-[96px] text-center">
        SAT
      </h2>
      <h2 className="text-3xl">🌦️</h2>
      <h2 className="text-4xl">10°</h2>
    </div>
  );
}
