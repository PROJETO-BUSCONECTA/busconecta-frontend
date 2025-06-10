import Image from "next/image";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

// TODO: adicionar os dados dinamicamente do backend
export const OriginTravelBox = () => {
  return (
    <div className="w-full bg-white p-6 rounded-2xl shadow-md">
      <div className="w-full flex items-center justify-between gap-2 mb-5">
        <h4 className="text-lg font-semibold text-foreground">Viagem Ida</h4>

        <span className="text-lg font-semibold text-primary capitalize text-right">
          {format(new Date(), "EEEE, d 'de' MMMM", { locale: ptBR })}
        </span>
      </div>

      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex flex-col gap-4 sm:hidden lg:flex xl:hidden">
          <div className="w-full flex items-center justify-around">
            <Image
              src="/images/logo-placeholder.svg"
              alt="Logo da companhia"
              width={121}
              height={21}
              className="object-center object-contain"
            />

            <div className="h-10 w-px bg-muted" />

            <div className="w-fit flex flex-col items-center">
              <span className="text-base font-bold text-foreground">
                00:05 - 06:35
              </span>

              <span className="text-xs font-normal text-foreground/30">
                6h 30min
              </span>
            </div>
          </div>

          <div className="w-full flex flex-col items-center">
            <span className="text-sm text-foreground/70 text-center">
              São Paulo, SP - Tiete
            </span>

            <span className="text-sm text-foreground/70 text-center">
              Rio de Janeiro, RJ - Rodov. do Rio
            </span>
          </div>

          <span className="text-sm text-foreground/70 text-center">
            Semileito
          </span>
        </div>

        <div className="hidden sm:flex sm:items-center sm:justify-around sm:gap-4 lg:hidden xl:flex">
          <Image
            src="/images/logo-placeholder.svg"
            alt="Logo da companhia"
            width={121}
            height={21}
            className="object-center object-contain"
          />

          <div className="h-10 w-px bg-muted" />

          <div className="w-fit flex flex-col items-center shrink-0">
            <span className="text-base font-bold text-foreground">
              00:05 - 06:35
            </span>

            <span className="text-xs font-normal text-foreground/30">
              6h 30min
            </span>
          </div>

          <div className="h-10 w-px bg-muted" />

          <div className="w-fit flex flex-col items-center">
            <span className="text-sm text-foreground/70 text-center">
              São Paulo, SP - Tiete
            </span>

            <span className="text-sm text-foreground/70 text-center">
              Rio de Janeiro, RJ - Rodov. do Rio
            </span>
          </div>

          <div className="h-10 w-px bg-muted" />

          <span className="text-sm text-foreground/70 text-center">
            Semileito
          </span>
        </div>

        <div className="w-full h-px bg-muted" />

        <div className="w-full flex flex-col gap-5">
          {/* TODO: adicionado dinamicamente de acordo com os assentos reservados */}
          <div className="w-full flex justify-between gap-4">
            <div className="size-8 rounded-md bg-primary flex items-center justify-center shrink-0">
              <span className="text-secondary text-sm font-medium">06</span>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4">
              <div className="w-fit flex flex-col">
                <span className="text-sm font-medium text-foreground/70">
                  Nome
                </span>

                <span className="text-base font-semibold text-foreground">
                  John Doe
                </span>
              </div>

              <div className="w-fit flex flex-col">
                <span className="text-sm font-medium text-foreground/70">
                  Tipo do documento
                </span>

                <span className="text-base font-semibold text-foreground">
                  CPF
                </span>
              </div>

              <div className="w-fit flex flex-col">
                <span className="text-sm font-medium text-foreground/70">
                  N° documento
                </span>

                <span className="text-base font-semibold text-foreground">
                  123.123.123-12
                </span>
              </div>

              <div className="w-fit flex flex-col">
                <span className="text-sm font-medium text-foreground/70">
                  Código Pedido
                </span>

                <span className="text-base font-semibold text-foreground">
                  ALKJDFLA123
                </span>
              </div>
            </div>
          </div>

          {/* TODO: adicionado dinamicamente de acordo com os assentos reservados */}
          <div className="w-full flex justify-between gap-4">
            <div className="size-8 rounded-md bg-primary flex items-center justify-center shrink-0">
              <span className="text-secondary text-sm font-medium">05</span>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4">
              <div className="w-fit flex flex-col">
                <span className="text-sm font-medium text-foreground/70">
                  Nome
                </span>

                <span className="text-base font-semibold text-foreground">
                  John Doe
                </span>
              </div>

              <div className="w-fit flex flex-col">
                <span className="text-sm font-medium text-foreground/70">
                  Tipo do documento
                </span>

                <span className="text-base font-semibold text-foreground">
                  CPF
                </span>
              </div>

              <div className="w-fit flex flex-col">
                <span className="text-sm font-medium text-foreground/70">
                  N° documento
                </span>

                <span className="text-base font-semibold text-foreground">
                  123.123.123-12
                </span>
              </div>

              <div className="w-fit flex flex-col">
                <span className="text-sm font-medium text-foreground/70">
                  Código Pedido
                </span>

                <span className="text-base font-semibold text-foreground">
                  ALKJDFLA123
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
