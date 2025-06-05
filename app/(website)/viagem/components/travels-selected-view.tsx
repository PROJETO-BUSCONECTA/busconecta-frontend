import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { formatPrice } from "@/lib/utils";
import { XIcon } from "lucide-react";

interface TravelsSelectedViewProps {
  seatsSelected: string[];
  price: number;
  removeSeat: (seatToRemove: string) => void;
}

export const TravelsSelectedView = ({
  seatsSelected,
  price,
  removeSeat,
}: TravelsSelectedViewProps) => {
  const totalPrice = price * seatsSelected.length;

  return (
    <div className="w-full flex flex-col gap-4">
      <ScrollArea className="w-full max-h-[140px] h-full">
        <div className="w-full flex flex-col gap-2">
          {seatsSelected.map((seat, index) => (
            <div
              key={`seat-${index}`}
              className="w-full flex items-center gap-2"
            >
              <div className="shrink-0 w-fit flex items-center gap-2">
                <div className="size-4 rounded-[4px] bg-primary" />

                <span className="text-foreground text-sm font-medium">
                  Assento {seat}
                </span>
              </div>

              <div className="w-full h-px bg-muted" />

              <div className="shrink-0 w-fit flex items-center gap-2">
                <span className="text-foreground/70 text-xs font-medium">
                  {formatPrice(price / 100)}
                </span>

                <Button
                  onClick={() => removeSeat(seat)}
                  variant="ghost"
                  size="icon"
                >
                  <XIcon className="text-destructive" strokeWidth={1.5} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="w-full h-px bg-muted" />

      <div className="w-full flex items-center justify-between">
        <span className="text-foreground text-sm font-medium">
          {seatsSelected.length} assentos
        </span>

        <span className="text-foreground text-sm font-semibold">
          {formatPrice(totalPrice / 100)}
        </span>
      </div>

      <Button size="lg">Continuar reserva</Button>
    </div>
  );
};
