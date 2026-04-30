import { PiWindThin } from "react-icons/pi";
import { PiSunHorizonThin } from "react-icons/pi";
import { CiCloudOn } from "react-icons/ci";
import { PiEyeglassesThin } from "react-icons/pi";

type Props = {
  data: any;
};

export default function WeatherDetail({ data }: Props) {
  if (!data) return null;

  const windSpeed = data.wind?.speed;
  const humidity = data.main?.humidity;
  const visibility = data.visibility
    ? (data.visibility / 1000).toFixed(1)
    : null;

  const formatTime = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const sunrise = data.sys?.sunrise ? formatTime(data.sys.sunrise) : "-";
  const sunset = data.sys?.sunset ? formatTime(data.sys.sunset) : "-";

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-x-10 gap-y-[30px]">
      <div className="w-[290px] h-[245px] bg-[#1B1B1D] rounded-2xl flex flex-col justify-between items-center text-[#FDFDFD] py-6">
        <h2 className="text-lg self-start px-4">Wind Speed</h2>
        <PiWindThin className="text-9xl text-[#BBD7EC]" />
        <h2 className="text-lg">
          <span className="font-bold">{windSpeed ?? "-"}</span> m/s
        </h2>
      </div>

      <div className="w-[290px] h-[245px] bg-[#1B1B1D] rounded-2xl flex flex-col justify-between items-center text-[#FDFDFD] py-6">
        <h2 className="text-lg self-start px-4">Sunrise - Sunset</h2>
        <PiSunHorizonThin className="text-9xl text-[#BBD7EC]" />
        <div className="flex justify-center items-center space-x-8">
          <h2 className="text-lg">{sunrise}</h2>
          <h2 className="text-lg">|</h2>
          <h2 className="text-lg">{sunset}</h2>
        </div>
      </div>

      <div className="w-[290px] h-[245px] bg-[#1B1B1D] rounded-2xl flex flex-col justify-between items-center text-[#FDFDFD] py-6">
        <h2 className="text-lg self-start px-4">Humidity</h2>
        <CiCloudOn className="text-9xl text-[#BBD7EC]" />
        <h2 className="text-lg">
          <span className="font-bold">{humidity ?? "-"}</span>%
        </h2>
      </div>

      <div className="w-[290px] h-[245px] bg-[#1B1B1D] rounded-2xl flex flex-col justify-between items-center text-[#FDFDFD] py-6">
        <h2 className="text-lg self-start px-4">Visibility</h2>
        <PiEyeglassesThin className="text-9xl text-[#BBD7EC]" />
        <h2 className="text-lg">
          <span className="font-bold">{visibility ?? "-"}</span> Km
        </h2>
      </div>
    </div>
  );
}
