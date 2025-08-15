"use client";

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

import { Skeleton } from "@/components/ui/skeleton";

const data = [
    { name: "Jan", sales: 30 },
    { name: "Feb", sales: 45 },
    { name: "Mar", sales: 28 },
    { name: "Apr", sales: 60 },
    { name: "May", sales: 75 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28CFF"];

// TODO: adicionar valores que virão do servidor

export const ChannelSalesChartsBox = () => {
    return (
        <div className="w-full h-fit bg-white p-6 rounded-2xl shadow-md max-w-lg">
            <h4 className="text-foreground text-lg font-semibold mb-5 lg:text-xl">Vendas por canal</h4>

            <div className="w-full h-72">
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="sales"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            fill="#8884d8"
                            label
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend verticalAlign="bottom" height={36} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export const ChannelSalesChartsBoxLoading = () => {
    return (
        <div className="w-full h-fit bg-white p-6 rounded-2xl shadow-md max-w-lg">
            <h4 className="text-foreground text-lg font-semibold mb-5 lg:text-xl">Vendas por canal</h4>

            <Skeleton className="w-full h-72" />
        </div>
    );
};
