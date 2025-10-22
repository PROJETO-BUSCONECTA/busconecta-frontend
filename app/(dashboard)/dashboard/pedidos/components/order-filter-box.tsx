"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, SearchIcon } from "lucide-react";
import { useState } from "react";

export const OrderFilterBox = () => {
  const [filterDate, setFilterDate] = useState<Date | undefined>(undefined);

  return (
    <div className="w-full bg-white p-6 rounded-2xl shadow-md">
      <div className="xl:flex xl:justify-between xl:gap-6">
        <h4 className="text-foreground text-lg font-semibold mb-5 lg:text-xl">
          Pedidos
        </h4>

        <div className="w-full flex flex-col gap-5 sm:flex-row xl:max-w-xl">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full input-container focus-visible:ring-0 bg-white h-11 justify-start text-foreground text-base font-normal hover:bg-white hover:text-foreground sm:!w-1/2",
                  !filterDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon
                  size={20}
                  strokeWidth={1.5}
                  className="text-primary"
                />

                {filterDate ? (
                  format(filterDate, "dd/MM/yyyy")
                ) : (
                  <span>Data de compra</span>
                )}
              </Button>
            </PopoverTrigger>

            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={filterDate}
                onSelect={setFilterDate}
                disabled={(date) =>
                  date > new Date() || date < new Date("1900-01-01")
                }
              />
            </PopoverContent>
          </Popover>

          <div className="w-full flex sm:w-1/2">
            <Input
              className="input-container h-11 !rounded-r-none !border-r-0"
              placeholder="Código do pedido"
            />

            <Button size="lg" className="!rounded-l-none !border-l-0 h-11">
              <SearchIcon className="size-5 shrink-0 !text-white" />
            </Button>
          </div>
        </div>
      </div>

      <TabsList className="w-full h-auto mt-6 flex flex-col gap-1 sm:flex-row">
        <TabsTrigger value="actual-travel" className="w-full h-10 min-h-10">
          Viagens Atuais
        </TabsTrigger>
        <TabsTrigger value="history-travel" className="w-full h-10 min-h-10">
          Histórico de viagens
        </TabsTrigger>
      </TabsList>
    </div>
  );
};
