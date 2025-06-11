import { format } from "date-fns";
import { ChevronRightIcon } from "lucide-react";

// TODO: ao clicar na box, redirecionar para a pagina de resumo com as informações
export const OrderBox = () => {
  return (
    <div className="w-full bg-white p-6 rounded-2xl shadow-md flex items-center gap-12">
      <div className="w-full grid grid-cols-1 gap-5 sm:grid-rows-2 sm:items-center xl:grid-rows-1 xl:grid-cols-4">
        <div className="w-fit flex flex-col sm:row-start-1 sm:row-end-2">
          <span className="text-xs text-foreground/50 font-medium">
            Código de Pedido
          </span>

          <span className="text-xl text-primary font-medium line-clamp-1">
            DASFLJ1234
          </span>
        </div>

        <div className="w-fit flex flex-col sm:row-start-2 sm:row-end-3 xl:row-start-1 xl:row-end-2">
          <span className="text-xs text-foreground/50 font-medium">Viagem</span>

          <span className="text-base text-foreground font-medium line-clamp-1">
            São Paulo, SP - Tiete
          </span>

          <span className="text-base text-foreground font-medium line-clamp-1">
            Rio de Janeiro, RJ - Rodov. do Rio
          </span>
        </div>

        <div className="w-fit flex flex-col sm:row-start-2 sm:row-end-3 xl:row-start-1 xl:row-end-2">
          <span className="text-xs text-foreground/50 font-medium">
            Data da compra
          </span>

          <span className="text-base text-foreground font-medium line-clamp-1">
            {format(new Date(), "dd/MM/yyyy")}
          </span>
        </div>

        <div className="w-fit flex flex-col sm:row-start-2 sm:row-end-3 xl:row-start-1 xl:row-end-2">
          <span className="text-xs text-foreground/50 font-medium">Status</span>

          <span className="text-base text-foreground font-medium line-clamp-1">
            Cancelado
          </span>
        </div>
      </div>

      <ChevronRightIcon
        strokeWidth={1.5}
        className="size-10 shrink-0 text-primary"
      />
    </div>
  );
};
