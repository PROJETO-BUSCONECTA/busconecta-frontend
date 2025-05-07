import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQ = () => {
  return (
    <section className="w-full px-6 pt-24 flex flex-col items-center gap-9 sm:px-16 lg:container lg:mx-auto">
      <h2 className="text-4xl font-semibold text-center">Dúvidas frequentes</h2>

      <Accordion type="single" collapsible className="w-full flex flex-col gap-5">
        <AccordionItem value="item-1" className="w-full bg-white rounded-2xl shadow-lg px-9 py-7 border-0">
          <AccordionTrigger className="text-xl font-semibold text-primary">
            Como recebo minha passagem após a compra?
          </AccordionTrigger>

          <AccordionContent className="text-base text-foreground/70 leading-relaxed">
            Após a confirmação do pagamento, você recebe sua passagem no e-mail cadastrado. Ela também fica disponível
            na sua conta BusConecta, na seção “Minhas Viagens”.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="w-full bg-white rounded-2xl shadow-lg px-9 py-7 border-0">
          <AccordionTrigger className="text-xl font-semibold text-primary">
            Posso cancelar ou remarcar minha passagem?
          </AccordionTrigger>

          <AccordionContent className="text-base text-foreground/70 leading-relaxed">
            Sim! O cancelamento ou remarcação pode ser feito conforme as regras da viação escolhida. Basta acessar sua
            conta e solicitar a alteração com até 3 horas de antecedência da viagem.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="w-full bg-white rounded-2xl shadow-lg px-9 py-7 border-0">
          <AccordionTrigger className="text-xl font-semibold text-primary">
            É obrigatório apresentar documento na hora do embarque?
          </AccordionTrigger>

          <AccordionContent className="text-base text-foreground/70 leading-relaxed">
            Sim. Para embarcar, é necessário apresentar um documento oficial com foto (como RG, CNH ou passaporte) e a
            passagem, impressa ou digital.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};
