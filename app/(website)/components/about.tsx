import Image from "next/image";

export const About = () => {
  return (
    <section className="w-full bg-[url(/images/home/about-bg.png)] bg-[250px_0px] bg-contain bg-no-repeat lg:bg-[600px_0px] xl:bg-[900px_0px] 2xl:bg-[1100px_0px]">
      <div className="w-full px-6 pt-24 flex flex-col-reverse gap-12 sm:px-16 lg:container lg:mx-auto lg:flex-row lg:items-center">
        <div className="w-full flex flex-col gap-5">
          <div className="w-full flex flex-col gap-5 sm:flex-row">
            <div className="bg-white rounded-2xl shadow-md w-full flex flex-col gap-4 items-center justify-center py-12 px-10">
              <div className="size-24 rounded-full bg-primary/30 flex items-center justify-center">
                <Image src="/icons/group.svg" alt="Grupo" width={64} height={64} />
              </div>

              <div className="flex flex-col items-center">
                <span className="text-3xl font-semibold text-primary text-center">100.000+</span>

                <span className="text-2xl font-semibold text-foreground text-center">Clientes Satisfeitos</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md w-full flex flex-col gap-4 items-center justify-center py-12 px-10">
              <div className="size-24 rounded-full bg-secondary/30 flex items-center justify-center">
                <Image src="/icons/ticket.svg" alt="Grupo" width={64} height={64} />
              </div>

              <div className="flex flex-col items-center">
                <span className="text-3xl font-semibold text-primary text-center">Ofertas diárias</span>

                <span className="text-2xl font-semibold text-foreground text-center">Com até 50% de desconto</span>
              </div>
            </div>
          </div>

          <div className="bg-primary rounded-2xl shadow-md w-full flex flex-col gap-4 items-center justify-center py-12 px-10">
            <div className="size-24 rounded-full bg-white/30 flex items-center justify-center">
              <Image src="/icons/globe.svg" alt="Grupo" width={64} height={64} />
            </div>

            <div className="flex flex-col items-center">
              <span className="text-5xl font-semibold text-secondary text-center">20.000+</span>

              <span className="text-4xl font-semibold text-white text-center">Destinos Disponíveis</span>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-5">
          <h2 className="text-4xl font-semibold max-w-md leading-tight">A sua viagem começa com a BusConecta</h2>

          <p className="text-xl font-medium text-foreground/70 leading-relaxed">
            Com mais de 100 mil clientes conectados ao seu destino, a BusConecta nasceu para simplificar sua experiência
            com passagens rodoviárias. Oferecemos ofertas diárias, descontos exclusivos e acesso a mais de 20 mil
            destinos pelo Brasil. Viajar ficou mais fácil, acessível e inteligente.
          </p>
        </div>
      </div>
    </section>
  );
};
