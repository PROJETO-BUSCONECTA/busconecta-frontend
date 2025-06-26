"use client";

import {
  ChartSplineIcon,
  ChevronDownIcon,
  LogOutIcon,
  MenuIcon,
  Table2Icon,
  TicketIcon,
  UserRoundIcon,
  UsersRoundIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface HeaderNavigationBoxProps {
  isAdmin: boolean;
  name: string;
}

export const HeaderNavigationBox = ({ isAdmin, name }: HeaderNavigationBoxProps) => {
  const pathname = usePathname();

  const handleLogout = async () => {
    const res = await fetch("/api/auth/logout", {
      method: "POST",
    });

    if (res.redirected) {
      window.location.href = res.url;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="header" size="lg" className="flex items-center gap-2">
          <span className="hidden sm:block sm:text-base">Olá, {name}</span>

          <ChevronDownIcon strokeWidth={1.5} className="hidden size-6 shrink-0 sm:block" />

          <MenuIcon strokeWidth={1.5} className="size-6 shrink-0 sm:hidden" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="p-0 rounded-2xl min-w-52" align="end">
        {isAdmin ? (
          <>
            <DropdownMenuItem className="focus:bg-white px-5 py-4 border-b border-muted">
              <Link
                href="/dashboard/admin"
                className={cn(
                  "w-full flex items-center justify-start gap-2 text-foreground text-lg font-medium transition-colors hover:text-primary",
                  pathname === "/dashboard/admin" && "text-primary"
                )}
              >
                <Table2Icon className="size-6 shrink-0 text-primary" />
                Dashboard
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem className="focus:bg-white px-5 py-4 border-b border-muted">
              <Link
                href="/dashboard/admin/vendas-e-reservas"
                className={cn(
                  "w-full flex items-center justify-start gap-2 text-foreground text-lg font-medium transition-colors hover:text-primary",
                  pathname === "/dashboard/admin/vendas-e-reservas" && "text-primary"
                )}
              >
                <TicketIcon className="size-6 shrink-0 text-primary" />
                Vendas e Reservas
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem className="focus:bg-white px-5 py-4 border-b border-muted">
              <Link
                href="/dashboard/admin/usuarios"
                className={cn(
                  "w-full flex items-center justify-start gap-2 text-foreground text-lg font-medium transition-colors hover:text-primary",
                  pathname === "/dashboard/admin/usuarios" && "text-primary"
                )}
              >
                <UsersRoundIcon className="size-6 shrink-0 text-primary" />
                Usuários
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem className="focus:bg-white px-5 py-4 border-b border-muted">
              <Link
                href="/dashboard/admin/relatorios"
                className={cn(
                  "w-full flex items-center justify-start gap-2 text-foreground text-lg font-medium transition-colors hover:text-primary",
                  pathname === "/dashboard/admin/relatorios" && "text-primary"
                )}
              >
                <ChartSplineIcon className="size-6 shrink-0 text-primary" />
                Relatórios
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem className="focus:bg-white px-5 py-4">
              <Button
                onClick={handleLogout}
                variant="ghost"
                className={cn(
                  "w-full !p-0 flex items-center justify-start gap-2 text-foreground text-lg font-medium transition-colors hover:text-primary"
                )}
              >
                <LogOutIcon className="size-6 shrink-0 text-primary" />
                Sair
              </Button>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem className="focus:bg-white px-5 py-4 border-b border-muted">
              <Link
                href="/dashboard/perfil"
                className={cn(
                  "w-full flex items-center justify-start gap-2 text-foreground text-lg font-medium transition-colors hover:text-primary",
                  pathname === "/dashboard/perfil" && "text-primary"
                )}
              >
                <UserRoundIcon className="size-6 shrink-0 text-primary" />
                Perfil
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem className="focus:bg-white px-5 py-4 border-b border-muted">
              <Link
                href="/dashboard/pedidos"
                className={cn(
                  "w-full flex items-center justify-start gap-2 text-foreground text-lg font-medium transition-colors hover:text-primary",
                  pathname === "/dashboard/pedidos" && "text-primary"
                )}
              >
                <TicketIcon className="size-6 shrink-0 text-primary" />
                Pedidos
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem className="focus:bg-white px-5 py-4">
              <Button
                onClick={handleLogout}
                variant="ghost"
                className={cn(
                  "w-full !p-0 flex items-center justify-start gap-2 text-foreground text-lg font-medium transition-colors hover:text-primary"
                )}
              >
                <LogOutIcon className="size-6 shrink-0 text-primary" />
                Sair
              </Button>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
