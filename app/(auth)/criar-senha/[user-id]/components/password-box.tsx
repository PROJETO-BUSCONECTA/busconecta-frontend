import { PasswordForm } from "./password-form";

export const PasswordBox = () => {
    return (
        <section className="w-full flex-1 flex items-center justify-center -mt-[72px] px-6">
            <div className="w-full bg-white max-w-md rounded-3xl p-10 shadow-lg">
                <h2 className="text-3xl font-semibold mb-1">Crie sua senha</h2>

                <p className="text-base text-foreground/70 mb-9">Crie uma senha de acesso para sua conta.</p>

                <PasswordForm />
            </div>
        </section>
    );
};
