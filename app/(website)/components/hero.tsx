import { HeroForm } from "./hero/hero-form";

export const Hero = () => {
  return (
    <section className="w-full bg-[url(/images/home/hero-mobile.png)] bg-[length:100%_100%] bg-no-repeat sm:bg-[url(/images/home/hero-tablet.png)] lg:bg-[url(/images/home/hero-desktop.png)]">
      <div className="w-full pt-[calc(116px+64px)] pb-36 px-6 flex flex-col-reverse gap-9 sm:px-16 lg:container lg:mx-auto lg:flex-row lg:justify-center">
        <div className="w-full bg-white rounded-3xl shadow-lg px-9 py-8 lg:max-w-lg">
          <div className="w-full flex flex-col gap-6">
            <h1 className="text-4xl font-semibold">Planeje sua viagem</h1>

            <HeroForm />
          </div>
        </div>

        <div className="w-full flex flex-col gap-5 lg:max-w-md">
          <h1 className="text-4xl text-white font-semibold">Conectando você ao seu destino</h1>

          <p className="text-xl text-white font-normal">
            Compre passagens de forma rápida e segura, com as melhores rotas e preços disponíveis.
          </p>
        </div>
      </div>
    </section>
  );
};
