import Link from "next/link";
import Image from "next/image";
import { CircleHelpIcon, LogIn } from "lucide-react";

import { Button } from "../ui/button";

import { cn } from "@/lib/utils";
import { HeaderNavigationBox } from "./header-navigation-box";

interface HeaderProps {
  wrapperClassName?: string;
  containerClassName?: string;
  boxClassName?: string;
}

export const Header = ({
  wrapperClassName,
  containerClassName,
  boxClassName,
}: HeaderProps) => {
  return (
    <header className={cn("w-full", wrapperClassName)}>
      <div
        className={cn(
          "fixed z-10 top-0 left-1/2 -translate-x-1/2 w-full sm:px-16 sm:pt-5 lg:container lg:mx-auto",
          containerClassName,
        )}
      >
        <div
          className={cn(
            "w-full bg-primary p-6 rounded-b-[50px] shadow-lg flex items-center justify-between gap-4 sm:rounded-full",
            boxClassName,
          )}
        >
          <div className="relative w-[143px] h-[35px]">
            <Image
              src="/images/logo.svg"
              alt="Busconecta"
              fill
              className="object-contain object-left"
            />
          </div>

          <div className="flex items-center gap-6">
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex text-secondary"
            >
              <CircleHelpIcon size={24} strokeWidth={1.5} />
            </Button>

            {/* TODO: adicionar variavel para verificar se usuário está logado e se é admin */}
            {true ? (
              <HeaderNavigationBox isAdmin />
            ) : (
              <Button variant="header" size="lg" className="text-xl" asChild>
                <Link href="/login">
                  <span>Entrar</span>

                  <LogIn size={24} strokeWidth={1.5} />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
