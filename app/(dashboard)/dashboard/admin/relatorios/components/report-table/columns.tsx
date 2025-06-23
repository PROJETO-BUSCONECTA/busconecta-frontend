"use client";

import { ColumnDef } from "@tanstack/react-table";

import { formatPrice } from "@/lib/utils";

export type Reports = {
  id: string;
  sales: number;
  invoicing: number;
  cancellations: number;
  ticketsSold: number;
  income: number;
  commission: number;
};

export const columns: ColumnDef<Reports>[] = [
  {
    accessorKey: "sales",
    header: "Vendas Totais",
    cell: ({ row }) => {
      const formattedValue = formatPrice(
        (row.getValue("sales") as number) / 100,
      );

      return <span>{formattedValue}</span>;
    },
  },
  {
    accessorKey: "invoicing",
    header: "Faturamento",
    cell: ({ row }) => {
      const formattedValue = formatPrice(
        (row.getValue("invoicing") as number) / 100,
      );

      return <span>{formattedValue}</span>;
    },
  },
  {
    accessorKey: "cancellations",
    header: "Cancelamentos",
  },
  {
    accessorKey: "ticketsSold",
    header: "Bilhetes Vendidos",
  },
  {
    accessorKey: "income",
    header: "Receita",
    cell: ({ row }) => {
      const formattedValue = formatPrice(
        (row.getValue("income") as number) / 100,
      );

      return <span>{formattedValue}</span>;
    },
  },
  {
    accessorKey: "commission",
    header: "Comissão",
    cell: ({ row }) => {
      const formattedValue = formatPrice(
        (row.getValue("commission") as number) / 100,
      );

      return <span>{formattedValue}</span>;
    },
  },
];
