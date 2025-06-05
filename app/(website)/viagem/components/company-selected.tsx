"use client";

import { useEffect, useState } from "react";
import { XIcon } from "lucide-react";

import { Model1 } from "./bus-models/model-1";
import { TravelsSelectedView } from "./travels-selected-view";

interface CompanySelectedProps {
  price: number;
}

export const CompanySelected = ({ price }: CompanySelectedProps) => {
  const [seatsSelected, setSeatsSelected] = useState<string[]>([]);

  useEffect(() => {
    console.log({ seatsSelected });
  }, [seatsSelected]);

  const removeSeat = (seatToRemove: string) => {
    const seatsUpdated = seatsSelected.filter((seat) => seat !== seatToRemove);

    setSeatsSelected(seatsUpdated);
  };

  return (
    <div className="w-full flex flex-col gap-6 xl:flex-row">
      <div className="w-full flex flex-col items-center gap-5 shrink-0 xl:w-fit">
        {/* TODO: Depois mudar de acordo com a resposta da api com o modelo do onibus */}
        <Model1
          seatsSelected={seatsSelected}
          setSeatsSelected={setSeatsSelected}
        />

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

            <span className="text-sm text-foreground font-medium">Ocupado</span>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-4">
        <h4 className="text-foreground text-lg font-medium">Seus assentos</h4>

        {/* TODO: Adicionar função para apresentar assentos quando forem selecionado */}
        {seatsSelected.length > 0 ? (
          <TravelsSelectedView
            seatsSelected={seatsSelected}
            removeSeat={removeSeat}
            price={price}
          />
        ) : (
          <span className="text-foreground/70 text-sm font-medium">
            Clique nos assentos que deseja
          </span>
        )}
      </div>
    </div>
  );
};
