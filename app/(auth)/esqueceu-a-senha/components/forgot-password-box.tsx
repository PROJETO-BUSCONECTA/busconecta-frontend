import Link from "next/link";
import { ForgotPasswordForm } from "./forgot-password-form";

export const ForgotPasswordBox = () => {
    return (
        <section className="w-full flex-1 flex items-center justify-center -mt-[72px] px-6">
            <div className="w-full bg-white max-w-md rounded-3xl p-10 shadow-lg">
                <h2 className="text-3xl font-semibold mb-9">Esqueceu a senha?</h2>

                <ForgotPasswordForm />

                <div className="w-full h-px bg-black/10 mb-6" />

                <div className="w-full flex flex-col items-center sm:flex-row sm:justify-between">
                    <span className="text-base font-medium text-foreground/70">Lembrou da senha?</span>

                    <Link href="/login" className="text-primary text-sm font-medium hover:underline">
                        Voltar para login
                    </Link>
                </div>
            </div>
        </section>
    );
};
