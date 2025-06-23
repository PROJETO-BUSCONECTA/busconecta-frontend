import { columns } from "./report-table/columns";
import { DataTable } from "./report-table/data-table";

const dataExample = [
  {
    id: "0",
    sales: 1200,
    invoicing: 350000,
    cancellations: 50,
    ticketsSold: 1150,
    income: 300000,
    commission: 50000,
  },
  {
    id: "1",
    sales: 980,
    invoicing: 280000,
    cancellations: 30,
    ticketsSold: 950,
    income: 240000,
    commission: 40000,
  },
  {
    id: "2",
    sales: 1500,
    invoicing: 420000,
    cancellations: 70,
    ticketsSold: 1430,
    income: 360000,
    commission: 60000,
  },
  {
    id: "3",
    sales: 800,
    invoicing: 210000,
    cancellations: 20,
    ticketsSold: 780,
    income: 180000,
    commission: 30000,
  },
  {
    id: "4",
    sales: 1100,
    invoicing: 330000,
    cancellations: 40,
    ticketsSold: 1060,
    income: 280000,
    commission: 50000,
  },
];

export const ReportTableBox = () => {
  return (
    <>
      <DataTable columns={columns} data={dataExample} />
    </>
  );
};
