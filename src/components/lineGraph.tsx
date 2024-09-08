import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineGraphProps {
  data: { date: string; cases: number }[];
}

const LineGraph: React.FC<LineGraphProps> = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.date),
    datasets: [
      {
        label: "Cases",
        data: data.map((item) => item.cases),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default LineGraph;
