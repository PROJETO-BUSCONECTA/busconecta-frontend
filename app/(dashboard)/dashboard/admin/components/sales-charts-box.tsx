"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", sales: 30 },
  { month: "Feb", sales: 45 },
  { month: "Mar", sales: 28 },
  { month: "Apr", sales: 60 },
  { month: "May", sales: 75 },
  { month: "Jun", sales: 50 },
  { month: "Jul", sales: 90 },
  { month: "Aug", sales: 85 },
  { month: "Sep", sales: 70 },
  { month: "Oct", sales: 65 },
  { month: "Nov", sales: 80 },
  { month: "Dec", sales: 95 },
];

// TODO: adicionar valores que virão do servidor

export const SalesChartsBox = () => {
  return (
    <div className="w-full h-fit bg-white p-6 rounded-2xl shadow-md">
      <h4 className="text-foreground text-lg font-semibold mb-5 lg:text-xl">
        Vendas
      </h4>

      <div className="w-full h-72">
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#7B54C7"
              strokeWidth={1.5}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
