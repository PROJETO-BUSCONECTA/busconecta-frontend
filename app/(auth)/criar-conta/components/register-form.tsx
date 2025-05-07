"use client";

import { z } from "zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LockIcon, MailIcon, ShieldCheckIcon, UserIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { cn } from "@/lib/utils";

const formSchema = z
  .object({
    name: z.string().trim().min(1, { message: "Nome é obrigatório" }),
    email: z
      .string()
      .trim()
      .email({ message: "E-mail inválido" })
      .min(1, { message: "E-mail é obrigatório" }),
    password: z.string().min(1, { message: "Senha é obrigatória" }),
    passwordConfirm: z
      .string()
      .min(1, { message: "Confirmar Senha é obrigatório" }),
    check: z.boolean({ invalid_type_error: "Valor inválido" }),
  })
  .superRefine(({ password, passwordConfirm }, ctx) => {
    if (passwordConfirm !== password) {
      ctx.addIssue({
        code: "custom",
        message: "As senhas não coincidem",
        path: ["passwordConfirm"],
      });
    }
  });

export const RegisterForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      check: false,
    },
  });

  const check = form.watch("check");

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-7 mb-6"
      >
        <div className="w-full flex flex-col gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium">
                  Nome completo
                </FormLabel>

                <FormControl>
                  <div
                    className={cn("input-container flex items-center gap-2", {
                      "input-error": !!form.formState.errors.name?.message,
                    })}
                  >
                    <UserIcon
                      size={20}
                      strokeWidth={1.5}
                      className="text-primary"
                    />

                    <Input
                      className="input-reset"
                      placeholder="Insira o seu nome completo"
                      {...field}
                    />
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium">E-mail</FormLabel>

                <FormControl>
                  <div
                    className={cn("input-container flex items-center gap-2", {
                      "input-error": !!form.formState.errors.email?.message,
                    })}
                  >
                    <MailIcon
                      size={20}
                      strokeWidth={1.5}
                      className="text-primary"
                    />

                    <Input
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
                    <LockIcon
                      size={20}
                      strokeWidth={1.5}
                      className="text-primary"
                    />

                    <Input
                      className="input-reset"
                      placeholder="Insira a sua senha"
                      {...field}
                    />
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="passwordConfirm"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium">
                  Confirmar Senha
                </FormLabel>

                <FormControl>
                  <div
                    className={cn("input-container flex items-center gap-2", {
                      "input-error":
                        !!form.formState.errors.passwordConfirm?.message,
                    })}
                  >
                    <ShieldCheckIcon
                      size={20}
                      strokeWidth={1.5}
                      className="text-primary"
                    />

                    <Input
                      className="input-reset"
                      placeholder="Confirme a sua senha"
                      {...field}
                    />
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="check"
            render={({ field }) => (
              <FormItem className="flex gap-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>

                <FormLabel className="text-sm block">
                  Ao criar uma conta, você concorda com nossos{" "}
                  <Link
                    href="/termos-de-uso"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-primary hover:underline"
                  >
                    Termos de Uso
                  </Link>{" "}
                  e nossa{" "}
                  <Link
                    href="/politica-de-privacidade"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-primary hover:underline"
                  >
                    Política de Privacidade
                  </Link>
                </FormLabel>
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" size="lg" disabled={!check}>
          Cadastrar
        </Button>
      </form>
    </Form>
  );
};
