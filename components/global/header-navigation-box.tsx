"use client";

import {
  ChevronDownIcon,
  LogOutIcon,
  MenuIcon,
  TicketIcon,
  UserRoundIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const HeaderNavigationBox = () => {
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="header" size="lg" className="flex items-center gap-2">
          <span className="hidden sm:block">Olá, John</span>

          <ChevronDownIcon
            strokeWidth={1.5}
            className="hidden size-6 shrink-0 sm:block"
          />

          <MenuIcon strokeWidth={1.5} className="size-6 shrink-0 sm:hidden" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="p-0 rounded-2xl min-w-52" align="end">
        <DropdownMenuItem className="focus:bg-white px-5 py-4 border-b border-muted">
          <Link
            href="/dashboard/perfil"
            className={cn(
              "w-full flex items-center justify-start gap-2 text-foreground text-lg font-medium transition-colors hover:text-primary",
              pathname === "/dashboard/perfil" && "text-primary",
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
              pathname === "/dashboard/pedidos" && "text-primary",
            )}
          >
            <TicketIcon className="size-6 shrink-0 text-primary" />
            Pedidos
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem className="focus:bg-white px-5 py-4">
          <Button
            variant="ghost"
            className={cn(
              "w-full !p-0 flex items-center justify-start gap-2 text-foreground text-lg font-medium transition-colors hover:text-primary",
            )}
          >
            <LogOutIcon className="size-6 shrink-0 text-primary" />
            Sair
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
