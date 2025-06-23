"use client";

import { Edit2Icon, MoreHorizontalIcon, Trash2Icon } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

export type Users = {
  id: string;
  name: string;
  email: string;
  accountType: string;
  company: string;
  channel: string;
};

interface UserActionsProps {
  user: Users;
}

export function UserActions({ user }: UserActionsProps) {
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/dashboard/admin/usuarios/editar/${user.id}`);
  };

  return (
    <DropdownMenuItem onClick={handleEdit} className="text-foreground font-medium">
      <Edit2Icon className="text-primary" /> Editar
    </DropdownMenuItem>
  );
}

export const columns: ColumnDef<Users>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "email",
    header: "E-mail",
  },
  {
    accessorKey: "accountType",
    header: "Tipo da conta",
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
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="size-8 p-0">
              <span className="sr-only">Abrir menu</span>
              <MoreHorizontalIcon className="size-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <UserActions user={user} />

            <DropdownMenuItem className="text-foreground font-medium">
              <Trash2Icon className="text-destructive" /> Excluir
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
