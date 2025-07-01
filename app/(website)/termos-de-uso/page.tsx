import { Footer } from "@/components/global/footer";
import { Header } from "@/components/global/header";

const TermsPage = () => {
  return (
    <div className="w-full">
      <Header />

      <div className="w-full bg-[url(/images/home/about-bg.png)] bg-[250px_0px] bg-contain bg-no-repeat lg:bg-[600px_0px] xl:bg-[900px_0px] 2xl:bg-[1100px_0px]">
        <div className="w-full px-6 flex flex-col gap-12 mt-32 sm:mt-48 sm:px-16 lg:container lg:mx-auto">
          <div className="w-full flex flex-col gap-6">
            <h1 className="text-2xl font-semibold text-center lg:text-4xl lg:text-left">Termos e Condições</h1>

            <div className="w-full flex flex-col gap-4">
              <p className="text-base text-foreground/70 leading-relaxed sm:text-lg">
                Ao acessar ao site Busconecta, concorda em cumprir estes termos de serviço, todas as leis e regulamentos
                aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não
                concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos
                neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center lg:text-4xl lg:text-left">Uso de Licença</h2>

            <div className="w-full flex flex-col gap-4">
              <p className="text-base text-foreground/70 leading-relaxed sm:text-lg">
                É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no
                site Busconecta , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de
                uma licença, não uma transferência de título e, sob esta licença, você não pode:
              </p>

              <ol className="w-full flex flex-col gap-1 list-decimal pl-6">
                <li className="text-base text-foreground/70 leading-relaxed sm:text-lg">
                  modificar ou copiar os materiais;
                </li>

                <li className="text-base text-foreground/70 leading-relaxed sm:text-lg">
                  usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não
                  comercial);
                </li>

                <li className="text-base text-foreground/70 leading-relaxed sm:text-lg">
                  tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Busconecta;
                </li>

                <li className="text-base text-foreground/70 leading-relaxed sm:text-lg">
                  remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou
                </li>

                <li className="text-base text-foreground/70 leading-relaxed sm:text-lg">
                  transferir os materiais para outra pessoa ou &apos;espelhe&apos; os materiais em qualquer outro
                  servidor.
                </li>
              </ol>

              <p className="text-base text-foreground/70 leading-relaxed sm:text-lg">
                Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser
                rescindida por Busconecta a qualquer momento. Ao encerrar a visualização desses materiais ou após o
                término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato
                eletrônico ou impresso.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center lg:text-4xl lg:text-left">Isenção de responsabilidade</h2>

            <div className="w-full flex flex-col gap-4">
              <ol className="w-full flex flex-col gap-1 list-decimal pl-6">
                <li className="text-base text-foreground/70 leading-relaxed sm:text-lg">
                  Os materiais no site da Busconecta são fornecidos &apos;como estão&apos;. Busconecta não oferece
                  garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias,
                  incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim
                  específico ou não violação de propriedade intelectual ou outra violação de direitos.
                </li>

                <li className="text-base text-foreground/70 leading-relaxed sm:text-lg">
                  Além disso, o Busconecta não garante ou faz qualquer representação relativa à precisão, aos resultados
                  prováveis ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses
                  materiais ou em sites vinculados a este site.
                </li>
              </ol>
            </div>
          </div>

          <div className="w-full flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center lg:text-4xl lg:text-left">Limitações</h2>

            <div className="w-full flex flex-col gap-4">
              <p className="text-base text-foreground/70 leading-relaxed sm:text-lg">
                Em nenhum caso o Busconecta ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem
                limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou
                da incapacidade de usar os materiais em Busconecta, mesmo que Busconecta ou um representante autorizado
                da Busconecta tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como
                algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade
                por danos consequentes ou incidentais, essas limitações podem não se aplicar a você.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center lg:text-4xl lg:text-left">Links</h2>

            <div className="w-full flex flex-col gap-4">
              <p className="text-base text-foreground/70 leading-relaxed sm:text-lg">
                O Busconecta não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de
                nenhum site vinculado. A inclusão de qualquer link não implica endosso por Busconecta do site. O uso de
                qualquer site vinculado é por conta e risco do usuário.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-6">
            <h3 className="text-xl font-semibold text-center lg:text-2xl lg:text-left">Modificações</h3>

            <div className="w-full flex flex-col gap-4">
              <p className="text-base text-foreground/70 leading-relaxed sm:text-lg">
                O Busconecta pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar
                este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-6">
            <h3 className="text-xl font-semibold text-center lg:text-2xl lg:text-left">Lei aplicável</h3>

            <div className="w-full flex flex-col gap-4">
              <p className="text-base text-foreground/70 leading-relaxed sm:text-lg">
                Estes termos e condições são regidos e interpretados de acordo com as leis do Busconecta e você se
                submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsPage;
