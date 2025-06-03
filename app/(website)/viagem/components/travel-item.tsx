"use client";

import Image from "next/image";
import { useState } from "react";
import { XIcon } from "lucide-react";

import { Model1 } from "./bus-models/model-1";
import { Button } from "@/components/ui/button";

import { formatPrice } from "@/lib/utils";

interface TravelItemProps {
  imageSrc: string;
  startTime: string;
  endTime: string;
  duration: string;
  origin: string;
  destination: string;
  seatType: string;
  price: number;
}

export const TravelItem = ({
  imageSrc,
  startTime,
  endTime,
  duration,
  origin,
  destination,
  seatType,
  price,
}: TravelItemProps) => {
  const [selected, setSelected] = useState("id");

  const selectCompany = () => {
    setSelected("123");
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-md p-6 flex flex-col gap-6">
      <div className="w-full flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="w-full flex items-center justify-around">
          <div className="w-[139px] h-[25px] relative">
            <Image
              src={imageSrc}
              alt="Logo da companhia"
              fill
              className="object-contain object-center"
            />
          </div>

          <div className="h-10 w-px bg-foreground/25" />

          <div className="flex flex-col items-center">
            <span className="text-base font-bold text-foreground">
              {startTime} - {endTime}
            </span>

            <span className="text-xs font-normal text-foreground/70">
              {duration}
            </span>
          </div>
        </div>

        <div className="w-full flex flex-col items-center">
          <span className="text-sm font-normal text-foreground/70">
            {origin}
          </span>

          <span className="text-sm font-normal text-foreground/70">
            {destination}
          </span>
        </div>

        <span className="text-sm font-normal text-foreground/70 mx-auto sm:mx-0 sm:text-nowrap">
          {seatType}
        </span>
      </div>

      <div className="w-full flex flex-col items-center gap-4 sm:flex-row justify-between sm:gap-6">
        <span className="text-3xl font-semibold text-foreground">
          {formatPrice(price / 100)}
        </span>

        <div className="hidden sm:block flex-1 h-px bg-foreground/35" />

        <Button onClick={selectCompany} size="lg" className="w-full sm:w-fit">
          Selecionar
        </Button>
      </div>

      <div className="w-full flex flex-col gap-6">
        <div className="w-full flex flex-col items-center gap-5">
          {/* TODO: Depois mudar de acordo com a resposta da api com o modelo do onibus */}
          <Model1 />

          <div className="w-full flex flex-wrap items-center justify-between gap-4 sm:flex-nowrap sm:justify-center sm:gap-12">
            <div className="flex items-center gap-2">
              <div className="size-4 rounded-[4px] border border-primary/70 bg-transparent" />

              <span className="text-sm text-foreground font-medium">Livre</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="size-4 rounded-[4px] border border-primary bg-primary" />

              <span className="text-sm text-foreground font-medium">
                Selecionado
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="size-4 rounded-[4px] border border-primary bg-[#C8B9E4] flex items-center justify-center">
                <XIcon color="#7B54C7" />
              </div>

              <span className="text-sm text-foreground font-medium">
                Ocupado
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
