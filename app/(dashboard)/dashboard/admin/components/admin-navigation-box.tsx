"use client";

import Link from "next/link";
import { toast } from "sonner";
import { usePathname } from "next/navigation";
import { ChartSplineIcon, LogOutIcon, Table2Icon, TicketIcon, UsersRoundIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

export const AdminNavigationBox = () => {
  const pathname = usePathname();

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
      });

      if (res.redirected) {
        window.location.href = res.url;
      }
    } catch (error) {
      console.error("Ocorreu um erro ao sair da conta: ", error);

      toast.error("Ocorreu um erro, tente novamente mais tarde");
    }
  };

  return (
    <div className="hidden lg:w-full lg:max-w-2xs lg:flex lg:flex-col lg:bg-white lg:rounded-2xl lg:shadow-md lg:h-fit">
      <Link
        href="/dashboard/admin"
        className={cn(
          "w-full px-5 py-4 flex items-center justify-start gap-2 text-foreground text-lg font-medium transition-colors border-b border-muted hover:text-primary",
          pathname === "/dashboard/admin" && "text-primary"
        )}
      >
        <Table2Icon className="size-6 shrink-0 text-primary" />
        Dashboard
      </Link>

      <Link
        href="/dashboard/admin/vendas-e-reservas"
        className={cn(
          "w-full px-5 py-4 flex items-center justify-start gap-2 text-foreground text-lg font-medium transition-colors border-b border-muted hover:text-primary",
          pathname === "/dashboard/admin/vendas-e-reservas" && "text-primary"
        )}
      >
        <TicketIcon className="size-6 shrink-0 text-primary" />
        Vendas e Reservas
      </Link>

      <Link
        href="/dashboard/admin/usuarios"
        className={cn(
          "w-full px-5 py-4 flex items-center justify-start gap-2 text-foreground text-lg font-medium transition-colors border-b border-muted hover:text-primary",
          pathname.includes("/dashboard/admin/usuarios") && "text-primary"
        )}
      >
        <UsersRoundIcon className="size-6 shrink-0 text-primary" />
        Usuários
      </Link>

      <Link
        href="/dashboard/admin/relatorios"
        className={cn(
          "w-full px-5 py-4 flex items-center justify-start gap-2 text-foreground text-lg font-medium transition-colors border-b border-muted hover:text-primary",
          pathname === "/dashboard/admin/relatorios" && "text-primary"
        )}
      >
        <ChartSplineIcon className="size-6 shrink-0 text-primary" />
        Relatórios
      </Link>

      <Button
        onClick={handleLogout}
        variant="ghost"
        className={cn(
          "w-full !px-5 !py-4 h-auto flex items-center justify-start gap-2 text-foreground text-lg font-medium transition-colors hover:text-primary"
        )}
      >
        <LogOutIcon className="size-6 shrink-0 text-primary" />
        Sair
      </Button>
    </div>
  );
};
