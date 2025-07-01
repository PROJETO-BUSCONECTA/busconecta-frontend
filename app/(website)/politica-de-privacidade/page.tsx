import { Footer } from "@/components/global/footer";
import { Header } from "@/components/global/header";

const PrivacyPolicyPage = () => {
  return (
    <div className="w-full">
      <Header />

      <div className="w-full bg-[url(/images/home/about-bg.png)] bg-[250px_0px] bg-contain bg-no-repeat lg:bg-[600px_0px] xl:bg-[900px_0px] 2xl:bg-[1100px_0px]">
        <div className="w-full px-6 flex flex-col gap-12 mt-32 sm:mt-48 sm:px-16 lg:container lg:mx-auto">
          <div className="w-full flex flex-col gap-6">
            <h1 className="text-2xl font-semibold text-center lg:text-4xl">Política de Privacidade</h1>

            <div className="w-full flex flex-col gap-4">
              <p className="text-base text-foreground/70 leading-relaxed sm:text-lg">
                A sua privacidade é importante para nós. É política do Busconecta respeita a sua privacidade em relação
                a qualquer informação sua que possamos coletar no site Busconecta, e outros sites que possuímos e
                operamos.
              </p>

              <p className="text-base text-foreground/70 leading-relaxed sm:text-lg">
                Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço.
                Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que
                estamos coletando e como será usado.
              </p>

              <p className="text-base text-foreground/70 leading-relaxed sm:text-lg">
                Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando
                armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem
                como acesso, divulgação, cópia, uso ou modificação não autorizados.
              </p>

              <p className="text-base text-foreground/70 leading-relaxed sm:text-lg">
                Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando
                exigido por lei.
              </p>

              <p className="text-base text-foreground/70 leading-relaxed sm:text-lg">
                O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não
                temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas
                respectivas políticas de privacidade.
              </p>

              <p className="text-base text-foreground/70 leading-relaxed sm:text-lg">
                Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não
                possamos fornecer alguns dos serviços desejados.
              </p>

              <p className="text-base text-foreground/70 leading-relaxed sm:text-lg">
                O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de
                privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário
                e informações pessoais, entre em contato conosco.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-6">
            <h1 className="text-2xl font-semibold text-center lg:text-4xl">Compromisso do Usuário</h1>

            <div className="w-full flex flex-col gap-4">
              <p className="text-base text-foreground/70 leading-relaxed sm:text-lg">
                O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Busconecta oferece no
                site e com caráter enunciativo, mas não limitativo:
              </p>

              <p className="text-base text-foreground/70 leading-relaxed sm:text-lg">
                A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;
              </p>

              <p className="text-base text-foreground/70 leading-relaxed sm:text-lg">
                B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, jogos de sorte ou azar, qualquer
                tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;
              </p>

              <p className="text-base text-foreground/70 leading-relaxed sm:text-lg">
                C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Busconecta, de seus
                fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas
                de hardware ou software que sejam capazes de causar danos anteriormente mencionados.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-6">
            <h1 className="text-2xl font-semibold text-center lg:text-4xl">Mais informações</h1>

            <div className="w-full flex flex-col gap-4">
              <p className="text-base text-foreground/70 leading-relaxed sm:text-lg">
                Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem
                certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos
                recursos que você usa em nosso site.
              </p>

              <p className="text-base text-foreground/70 leading-relaxed sm:text-lg">
                Esta política é efetiva a partir de 1 de Julho de 2025, às 14:29.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
