import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export const TravelItem = () => {
  return (
    <div className="w-full rounded-3xl shadow-lg overflow-hidden group">
      <div className="w-full h-80 relative">
        <Image
          src="/images/home/travel-example.png"
          alt="Viagem"
          fill
          className="object-cover object-center"
        />

        <Button
          size="lg"
          variant="secondary"
          className="absolute left-4 bottom-4 opacity-0 group-hover:opacity-100"
        >
          Conferir oferta
          <ArrowRightIcon />
        </Button>
      </div>

      <div className="w-full flex">
        <div className="bg-white flex-1 flex items-center justify-center">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <div className="size-4 border border-primary rounded-full" />

              <span className="text-sm font-medium text-primary">
                São Paulo, SP - Tiete
              </span>
            </div>

            <div className="w-px h-5 bg-primary ml-[7px]" />

            <div className="flex items-center gap-2">
              <div className="size-4 border border-primary rounded-full p-px">
                <div className="size-full bg-primary rounded-full" />
              </div>

              <span className="text-sm font-medium text-primary">
                São Paulo, SP - Tiete
              </span>
            </div>
          </div>
        </div>

        <div className="bg-primary w-28 flex flex-col items-center py-4">
          <span className="text-white text-sm">a partir de</span>

          <div className="flex">
            <span className="text-xs text-white font-medium mt-4">R$</span>
            <span className="text-3xl text-white font-semibold">199</span>
            <span className="text-sm text-white font-medium">,99</span>
          </div>
        </div>
      </div>
    </div>
  );
};
