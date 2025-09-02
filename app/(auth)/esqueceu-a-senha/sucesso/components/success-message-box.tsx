import { Button } from "@/components/ui/button";
import Link from "next/link";

export const SuccessMessageBox = () => {
    return (
        <section className="w-full flex-1 flex justify-center -mt-[72px] px-6">
            <div className="w-full h-fit bg-white max-w-md rounded-3xl p-10 shadow-lg">
                <h2 className="text-3xl font-semibold mb-1">E-mail Enviado!</h2>

                <p className="text-base text-foreground/70 mb-9">
                    Verifique seu e-mail! Enviamos as instruções para redefinir sua senha.
                </p>

                <Button size="lg" className="w-full" asChild>
                    <Link href="/">Voltar</Link>
                </Button>
            </div>
        </section>
    );
};
