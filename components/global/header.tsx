import Image from "next/image";
import { CircleHelpIcon, LogIn } from "lucide-react";

import { Button } from "../ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full sm:px-16 sm:pt-5 lg:container lg:mx-auto">
      <div className="w-full bg-primary p-6 rounded-b-[50px] flex items-center justify-between gap-4 sm:rounded-full">
        <div className="relative w-[143px] h-[35px]">
          <Image
            src="/images/logo.png"
            alt="Busconecta"
            fill
            className="object-contain object-left"
          />
        </div>

        <div className="flex items-center gap-6">
          <Button
            variant="ghost"
            size="lg"
            className="hidden sm:block text-secondary"
          >
            <CircleHelpIcon size={24} strokeWidth={1.5} />
          </Button>

          <Button variant="header" size="lg" className="text-xl">
            <span>Entrar</span>

            <LogIn size={24} strokeWidth={1.5} />
          </Button>
        </div>
      </div>
    </header>
  );
};
