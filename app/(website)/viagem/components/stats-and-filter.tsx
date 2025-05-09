import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon, FilterIcon } from "lucide-react";

export const StatsAndFilter = () => {
  return (
    <div className="w-full flex items-center justify-between gap-6">
      <div className="flex items-center gap-4">
        <Button size="icon" variant="ghost" className="lg:hidden">
          <FilterIcon size={20} strokeWidth={1.5} className="text-primary" />
        </Button>

        <span className="text-xs">130 Resultados</span>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2 text-xs font-medium">
          Opção
          <ChevronDownIcon size={18} strokeWidth={1.5} />
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuItem>Opção 1</DropdownMenuItem>
          <DropdownMenuItem>Opção 2</DropdownMenuItem>
          <DropdownMenuItem>Opção 3</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
