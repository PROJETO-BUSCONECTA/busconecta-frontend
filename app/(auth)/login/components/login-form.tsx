"use client";

import { z } from "zod";
import { Suspense, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon, Loader2Icon, LockIcon, MailIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";

const formSchema = z.object({
  email: z.string().trim().email({ message: "E-mail inválido" }).min(1, { message: "E-mail é obrigatório" }),
  password: z.string().min(1, { message: "Senha é obrigatória" }),
});

export const LoginForm = () => {
  return (
    <Suspense>
      <LoginFormSuspense />
    </Suspense>
  );
};

const LoginFormSuspense = () => {
  const [passwordView, setPasswordView] = useState("password");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirectUrl");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok) {
        if (res.status !== 401) {
          toast.error("Ocorreu um erro, tente novamente mais tarde");
        } else {
          toast.error(data.message);
        }
      } else {
        if (redirectUrl) {
          router.push(redirectUrl);
        } else {
          router.push(data.userType === "ADMIN" ? "/dashboard/admin" : "/dashboard/perfil");
        }
      }
    } catch (error) {
      console.error("Ocorreu um erro ao logar: ", error);
      toast.error("Ocorreu um erro, tente novamente mais tarde");
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

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-7 mb-6">
        <div className="w-full flex flex-col gap-4">
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
                    <MailIcon size={20} strokeWidth={1.5} className="text-primary" />

                    <Input className="input-reset" placeholder="Insira o seu e-mail" {...field} />
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
                    className={cn("input-container flex items-center justify-between", {
                      "input-error": !!form.formState.errors.password?.message,
                    })}
                  >
                    <div className="flex items-center gap-2">
                      <LockIcon size={20} strokeWidth={1.5} className="text-primary" />

                      <Input className="input-reset" type={passwordView} placeholder="Insira a sua senha" {...field} />
                    </div>

                    <Button type="button" size="icon" variant="input-ghost" onClick={handlePasswordView}>
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
        </div>

        <Button type="submit" size="lg" disabled={isLoading}>
          Entrar
          {isLoading && <Loader2Icon className="size-5 animate-spin !text-white" />}
        </Button>
      </form>
    </Form>
  );
};
