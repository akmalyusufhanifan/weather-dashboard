"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement);

type Props = {
  data: any[];
};

export default function ChanceOfRain({ data }: Props) {
  const labels = data.map((item) => item.dt_txt.split(" ")[1].slice(0, 5));
  const values = data.map((item) => Math.round(item.pop * 100));

  return (
    <div className="w-[297px] h-[226px]">
      <Bar
        data={{
          labels,
          datasets: [
            {
              data: values,
              backgroundColor: "rgba(186, 212, 235, 1)",
              barPercentage: 0.2,
              borderRadius: 5,
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          animation: {
            duration: 1200,
            easing: "easeInOutQuart",
          },
          animations: {
            y: {
              delay: (ctx) => ctx.dataIndex * 80,
              from: 200,
            },
          },
          scales: {
            x: {
              ticks: {
                color: "rgba(253, 253, 253, 1)",
              },
            },
            y: {
              min: 0,
              max: 100,
              ticks: {
                stepSize: 25,
                callback: (value) => `${value}%`,
                color: "rgba(253, 253, 253, 1)",
              },

              grid: {
                drawTicks: false,
                color: "rgba(255,255,255,0.2)",
                lineWidth: 0.6,
              },
            },
          },
        }}
      />
    </div>
  );
}
