type Props = {
  day: string;
  icon: React.ReactNode;
  temp: string;
};

export default function ForecastWeatherCard({ day, icon, temp }: Props) {
  return (
    <div className="w-[96px] h-[226px] bg-[#1B1B1D] text-[#FDFDFD] rounded-3xl flex flex-col justify-between items-center p-4">
      <h2 className="text-[16px] border-b-2 border-gray-700 w-full text-center pb-2">
        {day}
      </h2>
      <div>{icon}</div>
      <h2 className="text-[32px]">{temp}</h2>
    </div>
  );
}
