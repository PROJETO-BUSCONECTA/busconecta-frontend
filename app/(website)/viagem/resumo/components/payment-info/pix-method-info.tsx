"use client";

import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CircleAlertIcon, CopyIcon } from "lucide-react";
import { useQRCode } from "next-qrcode";

interface PixMethdoInfoProps {
  status: "success" | "waiting";
}

export const PixMethodInfo = ({ status }: PixMethdoInfoProps) => {
  const { SVG } = useQRCode();

  return (
    <>
      {status === "waiting" && (
        <div className="w-full flex flex-col gap-5">
          <SVG text="https://github.com/bunlong/next-qrcode" />

          <Button size="lg">
            Copiar Código PIX <CopyIcon />
          </Button>

          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex flex-col gap-3">
              <div className="w-full flex items-center justify-between gap-2">
                <span className="text-sm font-medium text-foreground/70">
                  Pague até:
                </span>

                <span className="text-sm font-semibold text-foreground">
                  {format(new Date(), "Pp", { locale: ptBR })}
                </span>
              </div>

              <div className="w-full flex items-center justify-between gap-2">
                <span className="text-sm font-medium text-foreground/70">
                  Favorecido:
                </span>

                <span className="text-sm font-semibold text-foreground">
                  John Doe
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
                <span className="text-lg font-semibold text-primary">
                  Total
                </span>

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

          <div className="w-full px-3 py-2 flex gap-2.5 bg-[#FBBC05]/30 border border-[#A77D03] rounded-xl">
            <CircleAlertIcon
              strokeWidth={1.5}
              className="size-5 text-[#A77D03] shrink-0"
            />

            <div className="w-full flex flex-col gap-2">
              <span className="text-[#A77D03] text-xs font-medium">
                Pague para garantir a sua viagem
              </span>

              <span className="text-[#A77D03]/70 text-xs font-normal">
                Quando o pagamento for confirmado, você irá receber um e-mail
                com todos os detalhes da sua viagem em example@email.com
              </span>
            </div>
          </div>
        </div>
      )}

      {status === "success" && (
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-col gap-3">
            <div className="w-full flex items-center justify-between gap-2">
              <span className="text-sm font-medium text-foreground/70">
                Método de pagamento:
              </span>

              <span className="text-sm font-semibold text-foreground">PIX</span>
            </div>

            <div className="w-full flex items-center justify-between gap-2">
              <span className="text-sm font-medium text-foreground/70">
                Favorecido:
              </span>

              <span className="text-sm font-semibold text-foreground">
                John Doe
              </span>
            </div>

            <div className="w-full flex items-center justify-between gap-2">
              <span className="text-sm font-medium text-foreground/70">
                Data do pagamento:
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
      )}
    </>
  );
};
