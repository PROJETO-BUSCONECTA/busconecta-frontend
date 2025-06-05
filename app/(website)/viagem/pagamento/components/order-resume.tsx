import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { formatPrice } from "@/lib/utils";
import { TicketIcon } from "lucide-react";

export const OrderResume = () => {
  return (
    <div className="w-full bg-white p-6 rounded-2xl shadow-md sm:max-w-sm">
      <h4 className="text-foreground text-lg font-semibold mb-5">
        Resumo do pedido
      </h4>

      <div className="w-full flex flex-col gap-5">
        <div className="flex">
          <div className="w-full h-12 relative">
            <TicketIcon
              size={24}
              className="text-primary absolute top-1/2 -translate-y-1/2 left-5"
            />

            <Input
              className="pl-14 w-full h-full rounded-l-full border border-foreground/20 border-r-0 shadow-none focus-visible:ring-0"
              placeholder="Insira o seu cupom"
            />
          </div>

          <Button size="lg" className="rounded-l-none">
            Aplicar
          </Button>
        </div>

        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-col gap-2">
            {/* TODO: Adicionado de forma dinamica */}
            <div className="w-full flex items-center justify-between">
              <div className="w-fit flex items-center gap-2">
                <span className="text-foreground/70 text-sm">
                  1 {false ? "assentos" : "assento"}
                </span>

                {true && (
                  <span className="px-2 py-1 border border-primary rounded-full text-xs text-primary">
                    Oferta
                  </span>
                )}
              </div>

              <span className="text-sm text-foreground/70 font-medium">
                {formatPrice(14899 / 100)}
              </span>
            </div>

            <div className="w-full flex items-center justify-between">
              <div className="w-fit flex items-center gap-2">
                <span className="text-foreground/70 text-sm">
                  3 {true ? "assentos" : "assento"}
                </span>

                {false && (
                  <span className="px-2 py-1 border border-primary rounded-full text-xs text-primary">
                    Oferta
                  </span>
                )}
              </div>

              <span className="text-sm text-foreground/70 font-medium">
                {formatPrice(44429 / 100)}
              </span>
            </div>
          </div>

          <div className="w-full h-px bg-muted" />

          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-1">
              <span className="text-foreground text-base font-medium">
                Total
              </span>

              <span className="text-foreground/50 text-xs">
                (Taxas inclusas)
              </span>
            </div>

            <span className="text-foreground text-base font-semibold">
              {formatPrice(68820 / 100)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
