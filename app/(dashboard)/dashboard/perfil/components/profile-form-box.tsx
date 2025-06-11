"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FileTextIcon,
  MailIcon,
  PhoneIcon,
  SaveIcon,
  SquareChartGanttIcon,
  UserIcon,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

export const formSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().min(1, "E-mail é obrigatório").email("E-mail inválido"),
  tel: z.string().min(1, "Telefone é obrigatório").max(15, "Telefone inválido"),
  documentType: z.enum(["CPF", "Passaporte"], {
    message: "Tipo de documento inválido",
  }),
  documentNumber: z.string().min(1, "Número do documento é obrigatório"),
});

export const ProfileFormBox = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      tel: "",
      documentType: undefined,
      documentNumber: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };

  return (
    <div className="w-full bg-white p-6 rounded-2xl shadow-md">
      <h4 className="text-foreground text-lg font-semibold mb-5 lg:text-xl">
        Dados do perfil
      </h4>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-8 sm:items-end"
        >
          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex flex-col gap-4 sm:flex-row">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Nome completo</FormLabel>

                    <FormControl>
                      <div className="relative">
                        <Input
                          className="input-container focus-visible:ring-0 !pl-11 h-11"
                          placeholder="Insira seu nome completo"
                          {...field}
                        />

                        <UserIcon
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
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>E-mail</FormLabel>

                    <FormControl>
                      <div className="relative">
                        <Input
                          className="input-container focus-visible:ring-0 !pl-11 h-11"
                          placeholder="Insira seu e-mail"
                          {...field}
                        />

                        <MailIcon
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

            <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-[1fr_215px_1fr]">
              <FormField
                control={form.control}
                name="tel"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Telefone</FormLabel>

                    <FormControl>
                      <div className="relative">
                        <Input
                          className="input-container focus-visible:ring-0 !pl-11 h-11"
                          placeholder="Insira seu telefone"
                          {...field}
                        />

                        <PhoneIcon
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
                name="documentType"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Tipo do documento</FormLabel>

                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full input-container focus-visible:ring-0 !h-11">
                          <div className="flex items-center gap-2">
                            <FileTextIcon
                              size={20}
                              strokeWidth={1.5}
                              className="text-primary size-5"
                            />
                            <SelectValue placeholder="Selecione o tipo" />
                          </div>
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent>
                        <SelectItem value="CPF">CPF</SelectItem>
                        <SelectItem value="Passaporte">Passaporte</SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="documentNumber"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Número do documento</FormLabel>

                    <FormControl>
                      <div className="relative">
                        <Input
                          className="input-container focus-visible:ring-0 !pl-11 h-11"
                          placeholder="Insira o número do documento"
                          {...field}
                        />

                        <SquareChartGanttIcon
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
          </div>

          <Button type="submit" size="lg" className="w-full sm:w-44">
            Salvar <SaveIcon className="!text-white size-5" />
          </Button>
        </form>
      </Form>
    </div>
  );
};
