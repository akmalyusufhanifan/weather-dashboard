import WeatherDashboard from "@/components/weather-dashboard/weather-dashboard";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111015] flex flex-col items-center pt-8">
      {/* row 1 */}
      <WeatherDashboard />

      {/* row 2 */}
      <div></div>
    </div>
  );
}
