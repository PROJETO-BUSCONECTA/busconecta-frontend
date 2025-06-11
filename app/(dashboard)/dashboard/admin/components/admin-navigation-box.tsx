"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  ChartSplineIcon,
  LogOutIcon,
  Table2Icon,
  TicketIcon,
  UsersRoundIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

export const AdminNavigationBox = () => {
  const pathname = usePathname();

  return (
    <div className="hidden lg:w-full lg:max-w-2xs lg:flex lg:flex-col lg:bg-white lg:rounded-2xl lg:shadow-md lg:h-fit">
      <Link
        href="/dashboard/admin"
        className={cn(
          "w-full px-5 py-4 flex items-center justify-start gap-2 text-foreground text-lg font-medium transition-colors border-b border-muted hover:text-primary",
          pathname === "/dashboard/admin" && "text-primary",
        )}
      >
        <Table2Icon className="size-6 shrink-0 text-primary" />
        Dashboard
      </Link>

      <Link
        href="/dashboard/admin/vendas-e-reservas"
        className={cn(
          "w-full px-5 py-4 flex items-center justify-start gap-2 text-foreground text-lg font-medium transition-colors border-b border-muted hover:text-primary",
          pathname === "/dashboard/vendas-e-reservas" && "text-primary",
        )}
      >
        <TicketIcon className="size-6 shrink-0 text-primary" />
        Vendas e Reservas
      </Link>

      <Link
        href="/dashboard/admin/usuarios"
        className={cn(
          "w-full px-5 py-4 flex items-center justify-start gap-2 text-foreground text-lg font-medium transition-colors border-b border-muted hover:text-primary",
          pathname === "/dashboard/usuarios" && "text-primary",
        )}
      >
        <UsersRoundIcon className="size-6 shrink-0 text-primary" />
        Usuários
      </Link>

      <Link
        href="/dashboard/admin/relatorios"
        className={cn(
          "w-full px-5 py-4 flex items-center justify-start gap-2 text-foreground text-lg font-medium transition-colors border-b border-muted hover:text-primary",
          pathname === "/dashboard/relatorios" && "text-primary",
        )}
      >
        <ChartSplineIcon className="size-6 shrink-0 text-primary" />
        Relatórios
      </Link>

      <Button
        variant="ghost"
        className={cn(
          "w-full !px-5 !py-4 h-auto flex items-center justify-start gap-2 text-foreground text-lg font-medium transition-colors hover:text-primary",
        )}
      >
        <LogOutIcon className="size-6 shrink-0 text-primary" />
        Sair
      </Button>
    </div>
  );
};
