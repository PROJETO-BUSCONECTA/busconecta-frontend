import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { XIcon } from "lucide-react";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface Model1Props {
  seatsSelected: string[];
  setSeatsSelected: Dispatch<SetStateAction<string[]>>;
}

{
  /* TODO: Depois mudar de acordo com a resposta da api com o modelo do onibus */
}
export const Model1 = ({ seatsSelected, setSeatsSelected }: Model1Props) => {
  return (
    <div className="w-fit p-5 rounded-b-2xl rounded-t-[40px] flex flex-col gap-5 border border-primary/70 xl:flex-row xl:items-end xl:rounded-l-[40px] xl:rounded-r-2xl">
      <Image
        src="/icons/wheel.svg"
        alt="Volante"
        width={35}
        height={35}
        className="object-contain object-center"
      />

      {/* TODO: Adicionar função para desabilitar caso já esteja selecionado quando consultado */}
      <ToggleGroup
        value={seatsSelected}
        onValueChange={setSeatsSelected}
        variant="outline"
        type="multiple"
        className="flex gap-8 xl:flex-col-reverse"
      >
        <div className="flex flex-col gap-1 xl:flex-row">
          <div className="flex gap-2 xl:flex-col">
            <ToggleGroupItem
              value="1"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "01"}
            </ToggleGroupItem>

            <ToggleGroupItem
              value="2"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "02"}
            </ToggleGroupItem>
          </div>

          <div className="flex gap-2 xl:flex-col">
            <ToggleGroupItem
              value="3"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "03"}
            </ToggleGroupItem>

            <ToggleGroupItem
              value="4"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "04"}
            </ToggleGroupItem>
          </div>

          <div className="flex gap-2 xl:flex-col">
            <ToggleGroupItem
              value="5"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "05"}
            </ToggleGroupItem>

            <ToggleGroupItem
              value="6"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "06"}
            </ToggleGroupItem>
          </div>

          <div className="flex gap-2 xl:flex-col">
            <ToggleGroupItem
              value="7"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "07"}
            </ToggleGroupItem>

            <ToggleGroupItem
              value="8"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "08"}
            </ToggleGroupItem>
          </div>

          <div className="flex gap-2 xl:flex-col">
            <ToggleGroupItem
              value="9"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "09"}
            </ToggleGroupItem>

            <ToggleGroupItem
              value="10"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "10"}
            </ToggleGroupItem>
          </div>

          <div className="flex gap-2 xl:flex-col">
            <ToggleGroupItem
              value="11"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "11"}
            </ToggleGroupItem>

            <ToggleGroupItem
              value="12"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "12"}
            </ToggleGroupItem>
          </div>

          <div className="flex gap-2 xl:flex-col">
            <ToggleGroupItem
              value="13"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "13"}
            </ToggleGroupItem>

            <ToggleGroupItem
              value="14"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "14"}
            </ToggleGroupItem>
          </div>

          <div className="flex gap-2 xl:flex-col">
            <ToggleGroupItem
              value="15"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "15"}
            </ToggleGroupItem>

            <ToggleGroupItem
              value="16"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "16"}
            </ToggleGroupItem>
          </div>

          <div className="flex gap-2 xl:flex-col">
            <ToggleGroupItem
              value="17"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "17"}
            </ToggleGroupItem>

            <ToggleGroupItem
              value="18"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "18"}
            </ToggleGroupItem>
          </div>

          <div className="flex gap-2 xl:flex-col">
            <ToggleGroupItem
              value="19"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "19"}
            </ToggleGroupItem>

            <ToggleGroupItem
              value="20"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "20"}
            </ToggleGroupItem>
          </div>

          <div className="flex gap-2 xl:flex-col">
            <ToggleGroupItem
              value="21"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "21"}
            </ToggleGroupItem>

            <ToggleGroupItem
              value="22"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "22"}
            </ToggleGroupItem>
          </div>

          <div className="flex gap-2 xl:flex-col">
            <ToggleGroupItem
              value="23"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "23"}
            </ToggleGroupItem>

            <ToggleGroupItem
              value="24"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "24"}
            </ToggleGroupItem>
          </div>

          <div className="flex gap-2 xl:flex-col">
            <ToggleGroupItem
              value="25"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "25"}
            </ToggleGroupItem>

            <ToggleGroupItem
              value="26"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "26"}
            </ToggleGroupItem>
          </div>
        </div>

        <div className="flex flex-col gap-1 xl:flex-row">
          <div className="flex gap-2 xl:flex-col">
            <ToggleGroupItem
              value="27"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "27"}
            </ToggleGroupItem>

            <ToggleGroupItem
              value="28"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "28"}
            </ToggleGroupItem>
          </div>

          <div className="flex gap-2 xl:flex-col">
            <ToggleGroupItem
              value="29"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "29"}
            </ToggleGroupItem>

            <ToggleGroupItem
              value="30"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "30"}
            </ToggleGroupItem>
          </div>

          <div className="flex gap-2 xl:flex-col">
            <ToggleGroupItem
              value="31"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "31"}
            </ToggleGroupItem>

            <ToggleGroupItem
              value="32"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "32"}
            </ToggleGroupItem>
          </div>

          <div className="flex gap-2 xl:flex-col">
            <div className="w-[33.53px] h-[32px] opacity-0" />

            <div className="w-[33.53px] h-[32px] opacity-0" />
          </div>

          <div className="flex gap-2 xl:flex-col">
            <div className="w-[33.53px] h-[32px] opacity-0" />

            <div className="w-[33.53px] h-[32px] opacity-0" />
          </div>

          <div className="flex gap-2 xl:flex-col">
            <ToggleGroupItem
              value="33"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "33"}
            </ToggleGroupItem>

            <ToggleGroupItem
              value="34"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "34"}
            </ToggleGroupItem>
          </div>

          <div className="flex gap-2 xl:flex-col">
            <ToggleGroupItem
              value="35"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "35"}
            </ToggleGroupItem>

            <ToggleGroupItem
              value="36"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "36"}
            </ToggleGroupItem>
          </div>

          <div className="flex gap-2 xl:flex-col">
            <ToggleGroupItem
              value="37"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "37"}
            </ToggleGroupItem>

            <ToggleGroupItem
              value="38"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "38"}
            </ToggleGroupItem>
          </div>

          <div className="flex gap-2 xl:flex-col">
            <ToggleGroupItem
              value="39"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "39"}
            </ToggleGroupItem>

            <ToggleGroupItem
              value="40"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "40"}
            </ToggleGroupItem>
          </div>

          <div className="flex gap-2 xl:flex-col">
            <ToggleGroupItem
              value="41"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "41"}
            </ToggleGroupItem>

            <ToggleGroupItem
              value="42"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "42"}
            </ToggleGroupItem>
          </div>

          <div className="flex gap-2 xl:flex-col">
            <ToggleGroupItem
              value="43"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "43"}
            </ToggleGroupItem>

            <ToggleGroupItem
              value="44"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "44"}
            </ToggleGroupItem>
          </div>

          <div className="flex gap-2 xl:flex-col">
            <ToggleGroupItem
              value="45"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "45"}
            </ToggleGroupItem>

            <ToggleGroupItem
              value="46"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "46"}
            </ToggleGroupItem>
          </div>

          <div className="flex gap-2 xl:flex-col">
            <ToggleGroupItem
              value="47"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "47"}
            </ToggleGroupItem>

            <ToggleGroupItem
              value="48"
              className="size-[30px] min-h-[30px] shrink-0"
            >
              {false ? <XIcon /> : "48"}
            </ToggleGroupItem>
          </div>
        </div>
      </ToggleGroup>
    </div>
  );
};
