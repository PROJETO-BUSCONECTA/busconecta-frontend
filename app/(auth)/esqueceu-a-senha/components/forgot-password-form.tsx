"use client";

import { z } from "zod";
import { MailIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "@/lib/utils";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { forgotPassword } from "@/actions/mutations/auth/forgot-password";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const forgotPasswordSchema = z.object({
    recoveryEmail: z
        .string()
        .email({ message: "E-mail inválido" })
        .min(1, { message: "E-mail de recuperação é obrigatório" }),
});

export const ForgotPasswordForm = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const router = useRouter();

    const form = useForm<z.infer<typeof forgotPasswordSchema>>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            recoveryEmail: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof forgotPasswordSchema>) => {
        try {
            setIsLoading(true);

            const res = await forgotPassword(values);

            if (!res.success) {
                toast.error(res.error);
            } else {
                router.push("/esqueceu-a-senha/sucesso");
            }
        } catch (error) {
            console.error(error);

            toast.error("Ocorreu um erro");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-8 mb-6">
                <div className="w-full flex flex-col gap-4">
                    <FormField
                        control={form.control}
                        name="recoveryEmail"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-sm font-medium">E-mail de recuperação</FormLabel>

                                <FormControl>
                                    <div
                                        className={cn("input-container flex items-center gap-2", {
                                            "input-error": !!form.formState.errors.recoveryEmail?.message,
                                        })}
                                    >
                                        <MailIcon size={20} strokeWidth={1.5} className="text-primary" />

                                        <Input
                                            disabled={isLoading}
                                            className="input-reset"
                                            placeholder="Insira o seu e-mail"
                                            {...field}
                                        />
                                    </div>
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <Button disabled={isLoading} type="submit" size="lg" className="w-full">
                    Enviar
                </Button>
            </form>
        </Form>
    );
};
