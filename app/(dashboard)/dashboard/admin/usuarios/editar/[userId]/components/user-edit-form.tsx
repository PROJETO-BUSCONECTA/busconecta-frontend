"use client";

import { z } from "zod";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  BadgeDollarSignIcon,
  BuildingIcon,
  CalendarDaysIcon,
  ChevronLeftIcon,
  MailIcon,
  SaveIcon,
  UserIcon,
  UserRoundCogIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(1, "Nome completo é obrigatório"),
  email: z.string().min(1, "E-mail é obrigatório").email("E-mail inválido"),
  accountType: z.enum(["Administrador", "Usuário"], {
    message: "Tipo da conta inválido",
  }),
  birthDate: z.coerce.date({ message: "Data inválida" }),
  company: z.string().min(1, "Empresa associada é obrigatória"),
  channel: z.enum(["Balcão", "Online"]),
});

export const UserEditForm = () => {
  const router = useRouter();

  // TODO: adicionar informações depois da request com os dados do usuário
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      accountType: "Usuário",
      birthDate: undefined,
      company: "",
      channel: "Balcão",
    },
  });

  const handleBack = () => {
    router.push("/dashboard/admin/usuarios");
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };

  return (
    <div className="w-full bg-white p-6 rounded-2xl shadow-md">
      <h4 className="text-foreground text-lg font-semibold mb-5 lg:text-xl">
        Edite o usuário
      </h4>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-9"
        >
          <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-3">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome completo</FormLabel>

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
                        placeholder="Insira o nome do usuário"
                        {...field}
                      />
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>

                  <FormControl>
                    <div
                      className={cn("input-container flex items-center gap-2", {
                        "input-error": !!form.formState.errors.name?.message,
                      })}
                    >
                      <MailIcon
                        size={20}
                        strokeWidth={1.5}
                        className="text-primary"
                      />

                      <Input
                        className="input-reset"
                        placeholder="Insira o e-mail"
                        {...field}
                      />
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="birthDate"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Data de nascimento</FormLabel>

                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          type="button"
                          variant="outline"
                          className={cn(
                            "input-container focus-visible:ring-0 bg-white h-11 justify-start text-foreground text-base font-normal hover:bg-white hover:text-foreground",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          <CalendarDaysIcon
                            strokeWidth={1.5}
                            className="size-5 text-primary"
                          />
                          {field.value ? (
                            format(field.value, "PPP", { locale: ptBR })
                          ) : (
                            <span className="text-base text-muted-foreground font-normal">
                              Selecione a data
                            </span>
                          )}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>

                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        captionLayout="dropdown"
                      />
                    </PopoverContent>
                  </Popover>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="accountType"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo do usuário</FormLabel>

                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full input-container focus-visible:ring-0 !h-11">
                        <div className="flex items-center gap-2">
                          <UserRoundCogIcon
                            size={20}
                            strokeWidth={1.5}
                            className="text-primary size-5"
                          />
                          <SelectValue placeholder="Selecione o tipo" />
                        </div>
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent>
                      <SelectItem value="Administrador">
                        Administrador
                      </SelectItem>
                      <SelectItem value="Usuário">Usuário</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="company"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Empresa associada</FormLabel>

                  <FormControl>
                    <div
                      className={cn("input-container flex items-center gap-2", {
                        "input-error": !!form.formState.errors.name?.message,
                      })}
                    >
                      <BuildingIcon
                        size={20}
                        strokeWidth={1.5}
                        className="text-primary"
                      />

                      <Input
                        className="input-reset"
                        placeholder="Insira o nome da empresa"
                        {...field}
                      />
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="channel"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Canal de atuação</FormLabel>

                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full input-container focus-visible:ring-0 !h-11">
                        <div className="flex items-center gap-2">
                          <BadgeDollarSignIcon
                            size={20}
                            strokeWidth={1.5}
                            className="text-primary size-5"
                          />
                          <SelectValue placeholder="Selecione o canal" />
                        </div>
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent>
                      <SelectItem value="Balcão">Balcão</SelectItem>
                      <SelectItem value="Online">Online</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full flex flex-col gap-5 sm:flex-row-reverse">
            <Button type="submit" size="lg" className="w-full sm:w-44">
              Salvar <SaveIcon className="size-5 !text-white" />
            </Button>

            <Button
              onClick={handleBack}
              type="button"
              size="lg"
              variant="outline"
              className="w-full sm:w-44"
            >
              <ChevronLeftIcon className="size-5" /> Voltar
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
