"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormControl, FormLabel, FormMessage } from "@/components/ui/form";
import { LockIcon, ShieldCheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z
  .object({
    password: z.string().min(1, "Senha é obrigatória"),
    confirmPassword: z.string().min(1, "Confirmação da Senha é obrigatória"),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "As senhas não coincidem, corrija pra prosseguir",
        path: ["confirmPassword"],
      });
    }
  });

export const PasswordForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-8">
        <div className="w-full flex flex-col gap-4">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium">Senha</FormLabel>

                <FormControl>
                  <div
                    className={cn("input-container flex items-center gap-2", {
                      "input-error": !!form.formState.errors.password?.message,
                    })}
                  >
                    <LockIcon size={20} strokeWidth={1.5} className="text-primary" />

                    <Input className="input-reset" placeholder="Insira a senha que deseja criar" {...field} />
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium">Confirmar senha</FormLabel>

                <FormControl>
                  <div
                    className={cn("input-container flex items-center gap-2", {
                      "input-error": !!form.formState.errors.confirmPassword?.message,
                    })}
                  >
                    <ShieldCheckIcon size={20} strokeWidth={1.5} className="text-primary" />

                    <Input className="input-reset" placeholder="Confirme a sua senha" {...field} />
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
