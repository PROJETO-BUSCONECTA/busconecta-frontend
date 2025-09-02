"use client";

import { z } from "zod";
import { useEffect, useState } from "react";
import { EyeIcon, EyeOffIcon, LockIcon, ShieldCheckIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "@/lib/utils";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormControl, FormItem, FormMessage, FormLabel } from "@/components/ui/form";
import { useRouter, useSearchParams } from "next/navigation";
import { validateRecoverPasswordToken } from "@/actions/queries/validate-recover-password-token";
import { toast } from "sonner";
import { resetPassword } from "@/actions/mutations/auth/reset-password";

export const recoverPasswordFormSchema = z
    .object({
        newPassword: z.string().min(1, { message: "Nova senha é obrigatória" }),
        confirmNewPassword: z.string().min(1, { message: "Confirmar nova senha é obrigatória" }),
    })
    .superRefine(({ newPassword, confirmNewPassword }, ctx) => {
        if (confirmNewPassword !== newPassword) {
            ctx.addIssue({
                code: "custom",
                message: "As senha não coincidem",
                path: ["confirmNewPassword"],
            });
        }
    });

export const RecoverPasswordForm = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [passwordView, setPasswordView] = useState<"text" | "password">("password");
    const [confirmPasswordView, setConfirmPasswordView] = useState<"text" | "password">("password");

    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    const form = useForm<z.infer<typeof recoverPasswordFormSchema>>({
        resolver: zodResolver(recoverPasswordFormSchema),
        defaultValues: {
            newPassword: "",
            confirmNewPassword: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof recoverPasswordFormSchema>) => {
        try {
            setIsLoading(true);

            const res = await resetPassword({ ...values, token });

            if (!res.success) {
                toast.error(res.error);
            } else {
                toast.success("Senha alterada com sucesso!");
                router.push("/login");
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handlePasswordView = () => {
        if (passwordView === "password") {
            setPasswordView("text");

            return;
        }

        if (passwordView === "text") {
            setPasswordView("password");

            return;
        }
    };

    const handleConfirmPasswordView = () => {
        if (confirmPasswordView === "password") {
            setConfirmPasswordView("text");

            return;
        }

        if (confirmPasswordView === "text") {
            setConfirmPasswordView("password");

            return;
        }
    };

    useEffect(() => {
        const validateToken = async () => {
            try {
                const res = await validateRecoverPasswordToken(token);

                if (!res.success) {
                    toast.error(res.error);
                    router.push("/");
                }
            } catch (error) {
                console.error(error);

                toast.error("Ocorreu um erro");
                router.push("/");
            }
        };

        validateToken();
    }, [token]);

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-8">
                <div className="w-full flex flex-col gap-4">
                    <FormField
                        control={form.control}
                        name="newPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-sm font-medium">Nova Senha</FormLabel>

                                <FormControl>
                                    <div
                                        className={cn("input-container flex items-center justify-between", {
                                            "input-error": !!form.formState.errors.newPassword?.message,
                                        })}
                                    >
                                        <div className="flex items-center gap-2">
                                            <LockIcon size={20} strokeWidth={1.5} className="text-primary" />

                                            <Input
                                                disabled={isLoading}
                                                className="input-reset"
                                                type={passwordView}
                                                placeholder="Insira a sua senha"
                                                {...field}
                                            />
                                        </div>

                                        <Button
                                            type="button"
                                            size="icon"
                                            variant="input-ghost"
                                            onClick={handlePasswordView}
                                        >
                                            {passwordView === "text" ? (
                                                <EyeIcon size={20} strokeWidth={1.5} />
                                            ) : (
                                                <EyeOffIcon size={20} strokeWidth={1.5} />
                                            )}
                                        </Button>
                                    </div>
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="confirmNewPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-sm font-medium">Confirmar Senha</FormLabel>

                                <FormControl>
                                    <div
                                        className={cn("input-container flex items-center justify-between", {
                                            "input-error": !!form.formState.errors.confirmNewPassword?.message,
                                        })}
                                    >
                                        <div className="flex items-center gap-2">
                                            <ShieldCheckIcon size={20} strokeWidth={1.5} className="text-primary" />

                                            <Input
                                                disabled={isLoading}
                                                className="input-reset"
                                                type={confirmPasswordView}
                                                placeholder="Confirme a sua senha"
                                                {...field}
                                            />
                                        </div>

                                        <Button
                                            type="button"
                                            size="icon"
                                            variant="input-ghost"
                                            onClick={handleConfirmPasswordView}
                                        >
                                            {confirmPasswordView === "text" ? (
                                                <EyeIcon size={20} strokeWidth={1.5} />
                                            ) : (
                                                <EyeOffIcon size={20} strokeWidth={1.5} />
                                            )}
                                        </Button>
                                    </div>
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <Button type="submit" size="lg" className="w-full">
                    Criar senha
                </Button>
            </form>
        </Form>
    );
};
