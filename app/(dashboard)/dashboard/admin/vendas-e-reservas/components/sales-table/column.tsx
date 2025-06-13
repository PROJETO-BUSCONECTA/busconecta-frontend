"use client";

import { formatPrice } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";

export type Sales = {
  id: string;
  ticketNumber: string;
  passenger: string;
  company: string;
  channel: string;
  cost: number;
  commission: number;
};

export const columns: ColumnDef<Sales>[] = [
  {
    accessorKey: "ticketNumber",
    header: "N° do Bilhete",
  },
  {
    accessorKey: "passenger",
    header: "Passageiro",
  },
  {
    accessorKey: "company",
    header: "Empresa",
  },
  {
    accessorKey: "channel",
    header: "Canal",
  },
  {
    accessorKey: "cost",
    header: "Valor",
    cell: ({ row }) => {
      const formattedValue = formatPrice(
        (row.getValue("cost") as number) / 100,
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
