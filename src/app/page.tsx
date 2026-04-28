import WeatherDashboard from "@/components/weather-dashboard/weather-dashboard";
import WeatherOverview from "@/components/weather-overview/weather-overview";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111015] flex flex-col items-center gap-y-12 pt-8 pb-8">
      {/* row 1 */}
      <WeatherDashboard />

      {/* row 2 */}
      <WeatherOverview />
    </div>
  );
}
