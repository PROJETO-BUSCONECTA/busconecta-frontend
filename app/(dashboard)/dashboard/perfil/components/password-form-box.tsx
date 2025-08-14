"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { EyeIcon, EyeOffIcon, Loader2Icon, LockIcon, SaveIcon, ShieldCheckIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const formSchema = z.object({
    actualPassword: z.string().min(1, "Senha atual é obrigatória"),
    newPassword: z.string().min(1, "Nova Senha é obrigatória"),
    confirmNewPassword: z.string().min(1, "Confirmação da Nova Senha é obrigatória"),
});

export const PasswordFormBox = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [actualPasswordView, setActualPasswordView] = useState<"text" | "password">("password");
    const [newPasswordView, setNewPasswordView] = useState<"text" | "password">("password");
    const [confirmNewPasswordView, setConfirmNewPasswordView] = useState<"text" | "password">("password");

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            actualPassword: "",
            newPassword: "",
            confirmNewPassword: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsLoading(true);

        try {
            const data = await fetch("/api/user/password/update", {
                method: "PUT",
                body: JSON.stringify(values),
            });

            const res = await data.json();

            if (!data.ok) {
                console.log(data.status);

                if (data.status === 403) {
                    toast.error(res.message);
                } else {
                    toast.error("Ocorreu um erro, tente novamente mais tarde");
                }
            } else {
                toast.success(res.message);
                form.reset();
            }
        } catch (error) {
            console.error("Ocorreu um erro ao alterar a senha: ", error);
            toast.error("Ocorreu um erro, tente novamente mais tarde");
        } finally {
            setIsLoading(false);
        }
    };

    const handleActualPasswordView = () => {
        if (actualPasswordView === "password") {
            setActualPasswordView("text");

            return;
        }

        if (actualPasswordView === "text") {
            setActualPasswordView("password");

            return;
        }
    };

    const handleNewPasswordView = () => {
        if (newPasswordView === "password") {
            setNewPasswordView("text");

            return;
        }

        if (newPasswordView === "text") {
            setNewPasswordView("password");

            return;
        }
    };

    const handleConfirmNewPasswordView = () => {
        if (confirmNewPasswordView === "password") {
            setConfirmNewPasswordView("text");

            return;
        }

        if (confirmNewPasswordView === "text") {
            setConfirmNewPasswordView("password");

            return;
        }
    };

    return (
        <div className="w-full bg-white p-6 rounded-2xl shadow-md">
            <h4 className="text-foreground text-lg font-semibold mb-5 lg:text-xl">Alterar a senha</h4>

            <Form {...form}>
                <form className="w-full flex flex-col gap-8 sm:items-end" onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                        <FormField
                            control={form.control}
                            name="actualPassword"
                            render={({ field }) => (
                                <FormItem className="w-full h-fit">
                                    <FormLabel>Senha atual</FormLabel>

                                    <FormControl>
                                        <div
                                            className={cn("input-container flex items-center justify-between", {
                                                "input-error": !!form.formState.errors.actualPassword?.message,
                                            })}
                                        >
                                            <div className="flex items-center gap-2">
                                                <LockIcon size={20} strokeWidth={1.5} className="text-primary" />

                                                <Input
                                                    disabled={isLoading}
                                                    className="input-reset"
                                                    type={actualPasswordView}
                                                    placeholder="Insira a senha atual"
                                                    {...field}
                                                />
                                            </div>

                                            <Button
                                                type="button"
                                                size="icon"
                                                variant="input-ghost"
                                                onClick={handleActualPasswordView}
                                            >
                                                {actualPasswordView === "text" ? (
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
                            name="newPassword"
                            render={({ field }) => (
                                <FormItem className="w-full h-fit sm:row-start-2 xl:row-start-1 xl:col-start-2">
                                    <FormLabel className="h-fit">Nova senha</FormLabel>

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
                                                    type={newPasswordView}
                                                    placeholder="Insira a nova senha"
                                                    {...field}
                                                />
                                            </div>

                                            <Button
                                                type="button"
                                                size="icon"
                                                variant="input-ghost"
                                                onClick={handleNewPasswordView}
                                            >
                                                {newPasswordView === "text" ? (
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
                                <FormItem className="w-full h-fit sm:row-start-2 xl:row-start-1 xl:col-start-3">
                                    <FormLabel className="h-fit">Confirmar nova senha</FormLabel>

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
                                                    type={confirmNewPasswordView}
                                                    placeholder="Confirme a nova senha"
                                                    {...field}
                                                />
                                            </div>

                                            <Button
                                                type="button"
                                                size="icon"
                                                variant="input-ghost"
                                                onClick={handleConfirmNewPasswordView}
                                            >
                                                {confirmNewPasswordView === "text" ? (
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

                    <Button disabled={isLoading} type="submit" size="lg" className="w-full sm:w-44">
                        Salvar{" "}
                        {isLoading ? (
                            <Loader2Icon className="!text-white size-5 animate-spin" />
                        ) : (
                            <SaveIcon className="!text-white size-5" />
                        )}
                    </Button>
                </form>
            </Form>
        </div>
    );
};
