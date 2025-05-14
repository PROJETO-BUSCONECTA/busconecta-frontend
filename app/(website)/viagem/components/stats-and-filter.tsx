import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon, FilterIcon } from "lucide-react";
import { TravelFilter } from "./travel-filter";

export const StatsAndFilter = () => {
  return (
    <div className="w-full flex items-center justify-between gap-6">
      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon" variant="ghost" className="lg:hidden">
              <FilterIcon size={20} strokeWidth={1.5} className="text-primary" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="p-0" align="start">
            <TravelFilter show />
          </DropdownMenuContent>
        </DropdownMenu>

        <span className="text-sm">130 Resultados</span>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2 text-sm font-medium">
          Opção
          <ChevronDownIcon size={18} strokeWidth={1.5} />
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuItem>Opção 1</DropdownMenuItem>
          <DropdownMenuItem>Opção 2</DropdownMenuItem>
          <DropdownMenuItem>Opção 3</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
