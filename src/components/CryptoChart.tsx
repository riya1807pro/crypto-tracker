import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

import { Line } from 'react-chartjs-2';
import { motion } from "framer-motion";

export default function CryptoChart({ data }: { data: number[] }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-[180px] h-[80px] mx-auto bg-white dark:bg-gray-900 rounded-lg p-2"
    >
      <Line
        data={{
          labels: data.map((_, i) => `Day ${i + 1}`),
          datasets: [{
            label: 'Price',
            data,
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59,130,246,0.1)',
            pointRadius: 0,
            borderWidth: 2,
            tension: 0.4,
          }]
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { display: false },
            y: { display: false }
          }
        }}
        height={80}
        width={180}
      />
    </motion.div>
  );
}