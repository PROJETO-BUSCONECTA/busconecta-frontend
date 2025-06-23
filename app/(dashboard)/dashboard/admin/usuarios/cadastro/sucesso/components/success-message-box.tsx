import { CircleCheckBigIcon, CopyIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const SuccessMessageBox = () => {
  return (
    <div className="w-full bg-white p-6 rounded-2xl shadow-md flex flex-col items-center gap-9">
      <div className="w-full flex flex-col items-center gap-5 sm:max-w-lg">
        <div className="w-full flex flex-col items-center gap-4">
          <CircleCheckBigIcon strokeWidth={1.2} className="size-24 text-primary" />

          <h1 className="text-3xl font-semibold text-center text-primary max-w-xs">Usuário Cadastrado com Sucesso!</h1>
        </div>

        <p className="text-base text-center text-foreground/70">
          Será enviado um link para o e-mail do usuário para que ele possa criar a senha da conta. Se preferir, você
          também pode copiar o link abaixo e enviá-lo diretamente para o usuário.
        </p>
      </div>

      {/* TODO: gerar link para criar senha */}
      <div className="w-full flex group sm:max-w-sm">
        <Input
          className="input-container !ring-0 !ring-offset-0 h-11 !rounded-r-none !border-r-0 group-focus-within:!border-primary"
          placeholder="Link para criar senha"
        />

        <Button
          size="lg"
          variant="ghost"
          className="!rounded-l-none border border-foreground/20 !border-l-0 h-11 group-focus-within:!border-primary"
        >
          <CopyIcon className="size-5 shrink-0 !text-primary" />
        </Button>
      </div>

      <Button size="lg" variant="outline" className="w-full sm:w-44">
        Volta
      </Button>
    </div>
  );
};
