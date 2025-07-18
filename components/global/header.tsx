import Link from "next/link";
import Image from "next/image";
import { CircleHelpIcon, LogIn } from "lucide-react";

import { Button } from "../ui/button";
import { HeaderNavigationBox } from "./header-navigation-box";

import { cn } from "@/lib/utils";
import { getUser } from "@/lib/get-user";

interface HeaderProps {
  wrapperClassName?: string;
  containerClassName?: string;
  boxClassName?: string;
}

export const Header = async ({ wrapperClassName, containerClassName, boxClassName }: HeaderProps) => {
  const usuario = await getUser();

  return (
    <header className={cn("w-full", wrapperClassName)}>
      <div
        className={cn(
          "fixed z-10 top-0 left-1/2 -translate-x-1/2 w-full sm:px-16 sm:pt-5 lg:container lg:mx-auto",
          containerClassName
        )}
      >
        <div
          className={cn(
            "w-full bg-primary p-6 rounded-b-[50px] shadow-lg flex items-center justify-between gap-4 sm:rounded-full",
            boxClassName
          )}
        >
          <Link href="/" className="w-fit">
            <Image
              src="/images/logo-header.png"
              alt="Busconecta"
              width={143}
              height={35}
              className="object-cover object-center"
            />
          </Link>

          <div className="flex items-center gap-6">
            <Button variant="ghost" size="icon" className="hidden sm:flex text-secondary">
              <CircleHelpIcon size={24} strokeWidth={1.5} />
            </Button>

            {!!usuario ? (
              <HeaderNavigationBox isAdmin={usuario.tipo === "ADMIN"} name={usuario.nome.split(" ")[0]} />
            ) : (
              <Button variant="header" size="lg" className="text-base" asChild>
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
