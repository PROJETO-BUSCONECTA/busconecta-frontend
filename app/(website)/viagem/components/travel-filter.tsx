import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

import { cn } from "@/lib/utils";

interface TravelFilterProps {
  show?: boolean;
}

export const TravelFilter = ({ show }: TravelFilterProps) => {
  return (
    <div
      className={cn(
        "w-72 bg-white rounded-2xl p-5 hidden shadow-md lg:flex flex-col gap-6",
        show && "flex w-full overflow-y-auto rounded-none pt-0",
      )}
    >
      <div className="w-full flex flex-col gap-4">
        <h3 className="text-xl text-primary font-medium">Hora da Saída</h3>

        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <Checkbox id="morning" className="mt-1" />

            <div className="flex flex-col gap-1">
              <Label
                htmlFor="morning"
                className="text-base font-normal text-foreground"
              >
                Manhã
              </Label>

              <span className="text-sm font-normal text-foreground/70">
                (06:00 - 11:59)
              </span>
            </div>
          </div>

          <div className="flex gap-2">
            <Checkbox id="afternoon" className="mt-1" />

            <div className="flex flex-col gap-1">
              <Label
                htmlFor="afternoon"
                className="text-base font-normal text-foreground"
              >
                Tarde
              </Label>

              <span className="text-sm font-normal text-foreground/70">
                (12:00 - 17:59)
              </span>
            </div>
          </div>

          <div className="flex gap-2">
            <Checkbox id="night" className="mt-1" />

            <div className="flex flex-col gap-1">
              <Label
                htmlFor="night"
                className="text-base font-normal text-foreground"
              >
                Noite
              </Label>

              <span className="text-sm font-normal text-foreground/70">
                (18:00 - 23:59)
              </span>
            </div>
          </div>

          <div className="flex gap-2">
            <Checkbox id="dawn" className="mt-1" />

            <div className="flex flex-col gap-1">
              <Label
                htmlFor="dawn"
                className="text-base font-normal text-foreground"
              >
                Madrugada
              </Label>

              <span className="text-sm font-normal text-foreground/70">
                (00:00 - 05:59)
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-4">
        <h3 className="text-xl text-primary font-medium">Tipo de Assento</h3>

        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <Checkbox id="conventional" className="mt-1" />

            <Label
              htmlFor="conventional"
              className="text-base font-normal text-foreground"
            >
              Convencional
            </Label>
          </div>

          <div className="flex gap-2">
            <Checkbox id="executive" className="mt-1" />

            <Label
              htmlFor="executive"
              className="text-base font-normal text-foreground"
            >
              Executivo
            </Label>
          </div>

          <div className="flex gap-2">
            <Checkbox id="semi-bed" className="mt-1" />

            <Label
              htmlFor="semi-bed"
              className="text-base font-normal text-foreground"
            >
              Semi-leito
            </Label>
          </div>

          <div className="flex gap-2">
            <Checkbox id="layer" className="mt-1" />

            <Label
              htmlFor="layer"
              className="text-base font-normal text-foreground"
            >
              Leito
            </Label>
          </div>

          <div className="flex gap-2">
            <Checkbox id="bed" className="mt-1" />

            <Label
              htmlFor="bed"
              className="text-base font-normal text-foreground"
            >
              Cama
            </Label>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-4">
        <h3 className="text-xl text-primary font-medium">Origem</h3>

        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <Checkbox id="origin-1" className="mt-1" />

            <Label
              htmlFor="origin-1"
              className="text-base font-normal text-foreground"
            >
              Rio de Janeiro, RJ - Rodov. do Rio
            </Label>
          </div>

          <div className="flex gap-2">
            <Checkbox id="origin-2" className="mt-1" />

            <Label
              htmlFor="origin-2"
              className="text-base font-normal text-foreground"
            >
              Rio de Janeiro, RJ - Campo Grande
            </Label>
          </div>

          <div className="flex gap-2">
            <Checkbox id="origin-3" className="mt-1" />

            <Label
              htmlFor="origin-3"
              className="text-base font-normal text-foreground"
            >
              Rio de Janeiro, RJ - Barra da Tijuca - Parque das Rosas
            </Label>
          </div>

          <div className="flex gap-2">
            <Checkbox id="origin-4" className="mt-1" />

            <Label
              htmlFor="origin-4"
              className="text-base font-normal text-foreground"
            >
              Rio de Janeiro, RJ - Barra da Tijuca - Shopping Uptown
            </Label>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-4">
        <h3 className="text-xl text-primary font-medium">Destino</h3>

        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <Checkbox id="destination-1" className="mt-1" />

            <Label
              htmlFor="destination-1"
              className="text-base font-normal text-foreground"
            >
              São Paulo, SP - Tiete
            </Label>
          </div>

          <div className="flex gap-2">
            <Checkbox id="destination-2" className="mt-1" />

            <Label
              htmlFor="destination-2"
              className="text-base font-normal text-foreground"
            >
              São Paulo, SP - Barra Funda
            </Label>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-4">
        <h3 className="text-xl text-primary font-medium">Companhia</h3>

        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <Checkbox id="company-1" className="mt-1" />

            <Label
              htmlFor="company-1"
              className="text-base font-normal text-foreground"
            >
              Aguia Branca
            </Label>
          </div>

          <div className="flex gap-2">
            <Checkbox id="company-2" className="mt-1" />

            <Label
              htmlFor="company-2"
              className="text-base font-normal text-foreground"
            >
              Rio Doce
            </Label>
          </div>

          <div className="flex gap-2">
            <Checkbox id="company-3" className="mt-1" />

            <Label
              htmlFor="company-3"
              className="text-base font-normal text-foreground"
            >
              Expresso Do Sul
            </Label>
          </div>

          <div className="flex gap-2">
            <Checkbox id="company-4" className="mt-1" />

            <Label
              htmlFor="company-4"
              className="text-base font-normal text-foreground"
            >
              1001
            </Label>
          </div>

          <div className="flex gap-2">
            <Checkbox id="company-5" className="mt-1" />

            <Label
              htmlFor="company-5"
              className="text-base font-normal text-foreground"
            >
              Catarinense
            </Label>
          </div>

          <div className="flex gap-2">
            <Checkbox id="company-6" className="mt-1" />

            <Label
              htmlFor="company-6"
              className="text-base font-normal text-foreground"
            >
              Águia Flex
            </Label>
          </div>

          <div className="flex gap-2">
            <Checkbox id="company-7" className="mt-1" />

            <Label
              htmlFor="company-7"
              className="text-base font-normal text-foreground"
            >
              Itapemirim
            </Label>
          </div>

          <div className="flex gap-2">
            <Checkbox id="company-8" className="mt-1" />

            <Label
              htmlFor="company-8"
              className="text-base font-normal text-foreground"
            >
              Wemobi
            </Label>
          </div>

          <div className="flex gap-2">
            <Checkbox id="company-9" className="mt-1" />

            <Label
              htmlFor="company-9"
              className="text-base font-normal text-foreground"
            >
              Expresso Adamantina
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
};
