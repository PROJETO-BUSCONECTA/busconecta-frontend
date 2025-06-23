"use client";

import { useRouter } from "next/navigation";
import { ColumnDef } from "@tanstack/react-table";
import { Dispatch, SetStateAction, useState } from "react";
import { Edit2Icon, MoreHorizontalIcon, Trash2Icon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

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
  closeDropdown?: () => void;
}

interface UserDeleteConfirmationModalProps {
  user: Users;
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
}

export const UserActions = ({ user }: UserActionsProps) => {
  const [opened, setOpened] = useState(false);

  return (
    <AlertDialog open={opened}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="size-8 p-0">
            <span className="sr-only">Abrir menu</span>
            <MoreHorizontalIcon className="size-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <UserEditButton user={user} />

          <AlertDialogTrigger onClick={() => setOpened(true)}>
            <DropdownMenuItem>
              <Trash2Icon className="text-destructive" /> Excluir
            </DropdownMenuItem>
          </AlertDialogTrigger>
        </DropdownMenuContent>
      </DropdownMenu>

      <UserDeleteConfirmationModal
        user={user}
        opened={opened}
        setOpened={setOpened}
      />
    </AlertDialog>
  );
};

export const UserEditButton = ({ user, closeDropdown }: UserActionsProps) => {
  const router = useRouter();

  const handleEdit = () => {
    closeDropdown?.();
    router.push(`/dashboard/admin/usuarios/editar/${user.id}`);
  };

  return (
    <DropdownMenuItem
      onClick={handleEdit}
      className="text-foreground font-medium"
    >
      <Edit2Icon className="text-primary" /> Editar
    </DropdownMenuItem>
  );
};

export const UserDeleteConfirmationModal = ({
  user,
  opened,
  setOpened,
}: UserDeleteConfirmationModalProps) => {
  const handleCancel = () => {
    setOpened(false);
  };

  const handleDelete = () => {
    setOpened(false);
  };

  return (
    <AlertDialogContent onEscapeKeyDown={() => setOpened(false)}>
      <AlertDialogHeader>
        <AlertDialogTitle>
          Tem certeza que deseja excluir este usuário?
        </AlertDialogTitle>

        <AlertDialogDescription>
          Essa ação é irreversível e todos os dados vinculados a este usuário
          serão permanentemente removidos do sistema.
        </AlertDialogDescription>
      </AlertDialogHeader>

      <AlertDialogFooter>
        <AlertDialogCancel onClick={handleCancel}>Cancelar</AlertDialogCancel>

        <AlertDialogAction onClick={handleDelete}>Excluir</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
};

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

      return <UserActions user={user} />;
    },
  },
];
