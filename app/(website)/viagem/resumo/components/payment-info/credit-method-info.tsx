import { formatPrice } from "@/lib/utils";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const CreditMethodInfo = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex flex-col gap-3">
        <div className="w-full flex items-center justify-between gap-2">
          <span className="text-sm font-medium text-foreground/70">
            Método de pagamento:
          </span>

          <span className="text-sm font-semibold text-foreground">
            Cartão de crédito
          </span>
        </div>

        <div className="w-full flex items-center justify-between gap-2">
          <span className="text-sm font-medium text-foreground/70">
            Cartão:
          </span>

          <span className="text-sm font-semibold text-foreground">
            **** **** **** 1234
          </span>
        </div>

        <div className="w-full flex items-center justify-between gap-2">
          <span className="text-sm font-medium text-foreground/70">
            Títular:
          </span>

          <span className="text-sm font-semibold text-foreground">
            John Doe
          </span>
        </div>

        <div className="w-full flex items-center justify-between gap-2">
          {/* TODO: muda de acordo com o tipo de documento escolhido */}
          <span className="text-sm font-medium text-foreground/70">CPF:</span>

          <span className="text-sm font-semibold text-foreground">
            123.123.123-12
          </span>
        </div>

        <div className="w-full flex items-center justify-between gap-2">
          <span className="text-sm font-medium text-foreground/70">
            Data do pagamento
          </span>

          <span className="text-sm font-semibold text-foreground">
            {format(new Date(), "Pp", { locale: ptBR })}
          </span>
        </div>
      </div>

      <div className="w-full h-px bg-muted" />

      <div className="w-full flex flex-col gap-5">
        <div className="w-full flex flex-col gap-3">
          <div className="w-full flex items-center justify-between gap-2">
            {/* TODO: dinamico de acordo com a quantidade de assentos selecionados */}
            <span className="text-sm font-medium text-foreground/70">
              2 Assentos - Ida:
            </span>

            <span className="text-sm font-semibold text-foreground">
              {formatPrice(12300 / 100)}
            </span>
          </div>

          <div className="w-full flex items-center justify-between gap-2">
            {/* TODO: dinamico de acordo com a quantidade de assentos selecionados */}
            <span className="text-sm font-medium text-foreground/70">
              2 Assentos - Volta:
            </span>

            <span className="text-sm font-semibold text-foreground">
              {formatPrice(12300 / 100)}
            </span>
          </div>

          <div className="w-full flex items-center justify-between gap-2">
            <span className="text-sm font-medium text-foreground/70">
              Taxa de serviço:
            </span>

            <span className="text-sm font-semibold text-foreground">
              {formatPrice(12300 / 100)}
            </span>
          </div>
        </div>

        <div className="w-full flex items-center justify-between gap-2">
          <span className="text-lg font-semibold text-primary">Total</span>

          <div className="flex flex-col items-center">
            <span className="text-lg font-semibold text-primary">
              {formatPrice(12300 / 100)}
            </span>

            {/* TODO: aparece de forma dinamica caso o usuário tenha parcelado */}
            <span className="text-xs font-semibold text-primary/70">
              2x de {formatPrice(1299 / 100)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
