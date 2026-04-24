// import NextDayWeatherCard from "./next-day-weather-card";

// export default function NextDayWeather({ data }: any) {
//   if (!data || !data.list) return null;

//   // ambil data jam 12 siang tiap hari (biar representatif)
//   const dailyData = data.list.filter((item: any) =>
//     item.dt_txt.includes("12:00:00"),
//   );

//   // ambil 6 hari ke depan (skip hari ini)
//   const nextDays = dailyData.slice(1, 7);

//   return (
//     <div className="flex gap-4">
//       {nextDays.map((item: any, index: number) => {
//         const date = new Date(item.dt * 1000);

//         const dayName = date.toLocaleDateString("en-US", {
//           weekday: "short",
//         });

//         const temp = Math.round(item.main.temp);

//         const iconCode = item.weather[0].icon;
//         const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

//         return (
//           <NextDayWeatherCard
//             key={index}
//             day={dayName}
//             icon={<img src={iconUrl} alt="weather icon" />}
//             temp={`${temp}°`}
//           />
//         );
//       })}
//     </div>
//   );
// }
