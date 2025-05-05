import { HeroForm } from "./hero/hero-form";

export const Hero = () => {
  return (
    <section className="bg-[url(/images/home/hero-mobile.png)] bg-[100%_100%] bg-no-repeat pt-[calc(116px+64px)] pb-36">
      <div className="w-full px-6 flex flex-col-reverse gap-9">
        <div className="w-full bg-white rounded-3xl shadow-lg px-9 py-8">
          <div className="w-full flex flex-col gap-6">
            <h1 className="text-4xl font-semibold">Planeje sua viagem</h1>

            <HeroForm />
          </div>
        </div>

        <div className="w-full flex flex-col gap-5">
          <h1 className="text-4xl text-white font-semibold">
            Conectando você ao seu destino
          </h1>

          <p className="text-xl text-white font-normal">
            Compre passagens de forma rápida e segura, com as melhores rotas e
            preços disponíveis.
          </p>
        </div>
      </div>
    </section>
  );
};
