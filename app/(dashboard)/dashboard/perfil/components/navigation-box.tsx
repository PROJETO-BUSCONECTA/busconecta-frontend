"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOutIcon, TicketIcon, UserRoundIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

export const NavigationBox = () => {
  const pathname = usePathname();

  return (
    <div className="hidden lg:w-full lg:max-w-2xs lg:flex lg:flex-col lg:bg-white lg:rounded-2xl lg:shadow-md lg:h-fit">
      <Link
        href="/dashboard/perfil"
        className={cn(
          "w-full px-5 py-4 flex items-center justify-start gap-2 text-foreground text-lg font-medium transition-colors border-b border-muted hover:text-primary",
          pathname === "/dashboard/perfil" && "text-primary",
        )}
      >
        <UserRoundIcon className="size-6 shrink-0 text-primary" />
        Perfil
      </Link>

      <Link
        href="/dashboard/pedidos"
        className={cn(
          "w-full px-5 py-4 flex items-center justify-start gap-2 text-foreground text-lg font-medium transition-colors border-b border-muted hover:text-primary",
          pathname === "/dashboard/pedidos" && "text-primary",
        )}
      >
        <TicketIcon className="size-6 shrink-0 text-primary" />
        Pedidos
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
