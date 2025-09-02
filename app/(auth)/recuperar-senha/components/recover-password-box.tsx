import { Suspense } from "react";
import { RecoverPasswordForm } from "./recover-password-form";

export const RecoverPasswordBox = () => {
    return (
        <section className="w-full flex-1 flex items-center justify-center -mt-[72px] px-6">
            <div className="w-full bg-white max-w-md rounded-3xl p-10 shadow-lg">
                <h2 className="text-3xl font-semibold mb-1">Recupere sua senha</h2>

                <p className="text-base text-foreground/70 mb-9">
                    Crie uma nova senha para acessar sua conta com segurança.
                </p>

                {/* TODO: adicionar skeleton */}
                <Suspense>
                    <RecoverPasswordForm />
                </Suspense>
            </div>
        </section>
    );
};
