import Link from "next/link";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { RegisterForm } from "./register-form";
import { Button } from "@/components/ui/button";

export const RegisterBox = () => {
  return (
    <section className="w-full flex items-center justify-center -mt-[72px] px-6">
      <div className="w-full bg-white max-w-md rounded-3xl p-10 shadow-lg">
        <h2 className="text-3xl font-semibold mb-1">Crie sua conta</h2>

        <p className="text-base text-foreground/70 mb-9">
          Cadastre-se em poucos segundos e viaje com mais praticidade.
        </p>

        <div className="w-full flex flex-col gap-4 mb-6">
          <Button size="lg" variant="outline">
            <FcGoogle size={24} />

            <span className="hidden sm:block text-base">
              Continuar com o Google
            </span>
          </Button>

          <Button size="lg" variant="outline">
            <FaApple size={24} color="#000000" />

            <span className="hidden sm:block text-base">
              Continuar com a Apple
            </span>
          </Button>
        </div>

        <div className="w-full flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-foreground/30" />

          <span className="text-sm font-medium text-foreground/30">
            Ou então
          </span>

          <div className="flex-1 h-px bg-foreground/30" />
        </div>

        <RegisterForm />

        <div className="w-full flex items-center justify-between gap-4">
          <span className="text-base font-medium text-foreground/70">
            Já possui uma conta?
          </span>

          <Link
            href="/login"
            className="text-primary text-sm font-medium hover:underline"
          >
            Acesse sua conta
          </Link>
        </div>
      </div>
    </section>
  );
};
