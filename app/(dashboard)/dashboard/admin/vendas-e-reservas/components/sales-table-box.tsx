import { columns } from "./sales-table/column";
import { DataTable } from "./sales-table/data-table";

const dataTest = [
  {
    id: "1",
    ticketNumber: "1234567890",
    passenger: "João Silva",
    company: "LATAM",
    channel: "Agência Online",
    cost: 120050,
    commission: 1000,
  },
  {
    id: "2",
    ticketNumber: "2345678901",
    passenger: "Maria Oliveira",
    company: "GOL",
    channel: "Loja Física",
    cost: 98030,
    commission: 850,
  },
  {
    id: "3",
    ticketNumber: "3456789012",
    passenger: "Carlos Souza",
    company: "Azul",
    channel: "Site Próprio",
    cost: 150000,
    commission: 12000,
  },
  {
    id: "4",
    ticketNumber: "4567890123",
    passenger: "Fernanda Lima",
    company: "LATAM",
    channel: "Agência Online",
    cost: 110075,
    commission: 9500,
  },
  {
    id: "5",
    ticketNumber: "5678901234",
    passenger: "Bruno Alves",
    company: "GOL",
    channel: "Call Center",
    cost: 87020,
    commission: 8000,
  },
];

export const SalesTableBox = () => {
  return (
    <div>
      <DataTable columns={columns} data={dataTest} />
    </div>
  );
};
