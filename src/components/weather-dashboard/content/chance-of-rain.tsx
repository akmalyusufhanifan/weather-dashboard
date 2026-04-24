"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement);

export default function ChanceOfRain() {
  return (
    <div className="w-[297px] h-[226px]">
      <Bar
        data={{
          labels: ["10AM", "11AM", "12AM", "01PM", "02PM", "03PM"],
          datasets: [
            {
              data: [60, 55, 80, 40, 70, 35],
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
            duration: 1500,
            easing: "easeOutQuart",
          },
          animations: {
            y: {
              from: 99,
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
              max: 99,
              ticks: {
                stepSize: 33,
                callback: (value) => {
                  if (value === 33) return "Heavy";
                  if (value === 66) return "Sunny";
                  if (value === 99) return "Rainy";
                  return "";
                },
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
