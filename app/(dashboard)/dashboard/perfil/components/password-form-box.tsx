"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Loader2Icon, LockIcon, SaveIcon, ShieldCheckIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const formSchema = z.object({
  actualPassword: z.string().min(1, "Senha atual é obrigatória"),
  newPassword: z.string().min(1, "Nova Senha é obrigatória"),
  confirmNewPassword: z.string().min(1, "Confirmação da Nova Senha é obrigatória"),
});

export const PasswordFormBox = () => {
  const [isLoading, setIsLoading] = useState(false);

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
        if (data.status !== 500) {
          toast.error("Ocorreu um erro, tente novamente mais tarde");
        } else {
          toast.error(res.message);
        }
      } else {
        toast.success(res.message);
      }
    } catch (error) {
      console.error("Ocorreu um erro ao alterar a senha: ", error);
      toast.error("Ocorreu um erro, tente novamente mais tarde");
    } finally {
      setIsLoading(false);
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
                <FormItem className="w-full">
                  <FormLabel>Senha atual</FormLabel>

                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        disabled={isLoading}
                        className="input-container focus-visible:ring-0 !pl-11 h-11"
                        placeholder="Insira a senha atual"
                      />

                      <LockIcon
                        size={20}
                        strokeWidth={1.5}
                        className="text-primary absolute left-4 top-1/2 -translate-y-1/2"
                      />
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
                <FormItem className="w-full sm:row-start-2 xl:row-start-1 xl:col-start-2">
                  <FormLabel>Nova senha</FormLabel>

                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        disabled={isLoading}
                        className="input-container focus-visible:ring-0 !pl-11 h-11"
                        placeholder="Insira a nova senha"
                      />

                      <LockIcon
                        size={20}
                        strokeWidth={1.5}
                        className="text-primary absolute left-4 top-1/2 -translate-y-1/2"
                      />
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
                <FormItem className="w-full sm:row-start-2 xl:row-start-1 xl:col-start-3">
                  <FormLabel>Confirmar nova senha</FormLabel>

                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        disabled={isLoading}
                        className="input-container focus-visible:ring-0 !pl-11 h-11"
                        placeholder="Confirme a nova senha"
                      />

                      <ShieldCheckIcon
                        size={20}
                        strokeWidth={1.5}
                        className="text-primary absolute left-4 top-1/2 -translate-y-1/2"
                      />
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
