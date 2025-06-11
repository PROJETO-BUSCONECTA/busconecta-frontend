import Image from "next/image";
import { addDays, format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const TravelResume = () => {
  return (
    <div className="w-full bg-white p-6 rounded-2xl shadow-md sm:max-w-sm">
      <h4 className="text-foreground text-lg font-semibold mb-5 lg:text-xl">
        Resumo da viagem
      </h4>

      <div className="w-full flex flex-col gap-6">
        <div className="w-full flex flex-col gap-3">
          <div className="w-fit px-3 py-1.5 border border-primary rounded-full flex items-center gap-2">
            <span className="text-xs text-primary font-semibold">Ida</span>

            <div className="h-4 w-px bg-muted" />

            <span className="text-xs text-foreground font-medium">
              {format(new Date(), "EEEE, dd 'de' MMMM", { locale: ptBR })}
            </span>
          </div>

          <div className="w-full flex items-center justify-around">
            <Image
              src="/images/logo-placeholder.svg"
              alt="Logo da companhia"
              width={121}
              height={21}
              className="object-center object-contain"
            />

            <div className="h-7 w-px bg-muted" />

            <span className="text-xs text-foreground font-semibold">
              Convencional
            </span>
          </div>

          <div className="w-full flex gap-2">
            <div className="w-fit shrink-0 flex flex-col gap-[17px]">
              <span className="text-sm text-foreground font-medium">19:50</span>

              <span className="text-[10px] text-foreground/70">9h30m</span>

              <span className="text-sm text-foreground font-medium">19:50</span>
            </div>

            <div className="mt-0.5 flex flex-col items-center">
              <div className="size-[14px] bg-white rounded-full border border-primary" />

              <div className="h-[55px] w-px bg-primary" />

              <div className="size-[14px] bg-primary rounded-full border border-primary" />
            </div>

            <div className="w-full flex flex-col gap-4">
              <div className="w-full flex flex-col">
                <span className="text-sm text-foreground font-medium line-clamp-1">
                  Rio de Janeiro, RJ - Rodov. do Rio
                </span>

                <span className="h-8 block text-xs text-foreground/70 font-medium line-clamp-2">
                  Av Francisco Bicalho - 1 - Santo Cristo - Rio de Janeiro - RJ
                </span>
              </div>

              <div className="w-full flex flex-col">
                <span className="text-sm text-foreground font-medium line-clamp-1">
                  São Paulo, SP - Tiete
                </span>

                <span className="h-8 block text-xs text-foreground/70 font-medium line-clamp-2">
                  Av Cruzeiro do Sul - 1800 - Santana - Tiete - SP - 02031-000
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* TODO: verificar se tem a possibilidade de viagens de só ida e ajustar de forma dinamica */}
        {true && (
          <>
            <div className="w-full h-px bg-muted" />

            <div className="w-full flex flex-col gap-3">
              <div className="w-fit px-3 py-1.5 border border-primary rounded-full flex items-center gap-2">
                <span className="text-xs text-primary font-semibold">
                  Volta
                </span>

                <div className="h-4 w-px bg-muted" />

                <span className="text-xs text-foreground font-medium">
                  {format(addDays(new Date(), 30), "EEEE, dd 'de' MMMM", {
                    locale: ptBR,
                  })}
                </span>
              </div>

              <div className="w-full flex items-center justify-around">
                <Image
                  src="/images/logo-placeholder.svg"
                  alt="Logo da companhia"
                  width={121}
                  height={21}
                  className="object-center object-contain"
                />

                <div className="h-7 w-px bg-muted" />

                <span className="text-xs text-foreground font-semibold">
                  Convencional
                </span>
              </div>

              <div className="w-full flex gap-2">
                <div className="w-fit shrink-0 flex flex-col gap-[17px]">
                  <span className="text-sm text-foreground font-medium">
                    19:50
                  </span>

                  <span className="text-[10px] text-foreground/70">9h30m</span>

                  <span className="text-sm text-foreground font-medium">
                    19:50
                  </span>
                </div>

                <div className="mt-0.5 flex flex-col items-center">
                  <div className="size-[14px] bg-white rounded-full border border-primary" />

                  <div className="h-[55px] w-px bg-primary" />

                  <div className="size-[14px] bg-primary rounded-full border border-primary" />
                </div>

                <div className="w-full flex flex-col gap-4">
                  <div className="w-full flex flex-col">
                    <span className="text-sm text-foreground font-medium line-clamp-1">
                      São Paulo, SP - Tiete
                    </span>

                    <span className="h-8 block text-xs text-foreground/70 font-medium line-clamp-2">
                      Av Cruzeiro do Sul - 1800 - Santana - Tiete - SP -
                      02031-000
                    </span>
                  </div>

                  <div className="w-full flex flex-col">
                    <span className="text-sm text-foreground font-medium line-clamp-1">
                      Rio de Janeiro, RJ - Rodov. do Rio
                    </span>

                    <span className="h-8 block text-xs text-foreground/70 font-medium line-clamp-2">
                      Av Francisco Bicalho - 1 - Santo Cristo - Rio de Janeiro -
                      RJ
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
