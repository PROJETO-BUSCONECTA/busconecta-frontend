"use client";

import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FileTextIcon, Loader2Icon, MailIcon, PhoneIcon, SaveIcon, SquareChartGanttIcon, UserIcon } from "lucide-react";

import { User } from "@/types/user";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { updateUser } from "@/actions/mutations/user/update-user";
import { Skeleton } from "@/components/ui/skeleton";

export const updateProfileFormSchema = z.object({
    id: z.string().min(1, "ID é obrigatório"),
    name: z.string().min(1, "Nome é obrigatório"),
    email: z.string().min(1, "E-mail é obrigatório").email("E-mail inválido"),
    tel: z.string().min(1, "Telefone é obrigatório").max(15, "Telefone inválido"),
    documentType: z.enum(["CPF", "Passaporte"], {
        message: "Tipo de documento inválido",
    }),
    documentNumber: z.string().min(1, "Número do documento é obrigatório"),
});

interface Props {
    userData: User | undefined;
}

export const ProfileForm = ({ userData }: Props) => {
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<z.infer<typeof updateProfileFormSchema>>({
        resolver: zodResolver(updateProfileFormSchema),
        defaultValues: {
            id: userData?.id ?? "",
            name: userData?.nome ?? "",
            email: userData?.email ?? "",
            tel: userData?.telefone ?? "",
            documentType: userData?.tipoDocumento ?? undefined,
            documentNumber: userData?.documento ?? "",
        },
    });

    const onSubmit = async (values: z.infer<typeof updateProfileFormSchema>) => {
        setIsLoading(true);

        try {
            const data = await updateUser(values);

            if (!data.success) {
                toast.error(data.error);
            } else {
                toast.success("Dados atualizados com sucesso!");
            }
        } catch (error) {
            console.error("Ocorreu um erro ao alterar os dados do usuário: ", error);

            toast.error("Ocorreu um erro, tente novamente mais tarde!");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-8 sm:items-end">
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
                                                {...field}
                                                disabled={isLoading}
                                                className="input-container focus-visible:ring-0 !pl-11 h-11"
                                                placeholder="Insira seu nome completo"
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
                                                {...field}
                                                disabled
                                                className="input-container focus-visible:ring-0 !pl-11 h-11"
                                                placeholder="Insira seu e-mail"
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
                                                {...field}
                                                disabled={isLoading}
                                                className="input-container focus-visible:ring-0 !pl-11 h-11"
                                                placeholder="Insira seu telefone"
                                                maxLength={11}
                                                onChange={(e) => {
                                                    // Formatar para receber apenas números
                                                    const formattedValue = e.target.value.replace(/\D/g, "");
                                                    field.onChange(formattedValue);
                                                }}
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
                                        disabled={isLoading}
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
                                                {...field}
                                                disabled={isLoading}
                                                className="input-container focus-visible:ring-0 !pl-11 h-11"
                                                placeholder="Insira o número do documento"
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

                <Button disabled={isLoading} type="submit" size="lg" className="w-full sm:w-44">
                    Salvar
                    {isLoading ? (
                        <Loader2Icon className="size-5 animate-spin !text-white" />
                    ) : (
                        <SaveIcon className="!text-white size-5" />
                    )}
                </Button>
            </form>
        </Form>
    );
};

export const ProfileFormLoading = () => {
    return (
        <div className="w-full flex flex-col gap-8 sm:items-end">
            <div className="w-full flex flex-col gap-4">
                <div className="w-full flex flex-col gap-4 sm:flex-row">
                    <div className="w-full flex flex-col gap-1">
                        <Skeleton className="h-[14px] w-20 rounded-full" />

                        <Skeleton className="h-11 w-full rounded-full" />
                    </div>

                    <div className="w-full flex flex-col gap-1">
                        <Skeleton className="h-[14px] w-20 rounded-full" />

                        <Skeleton className="h-11 w-full rounded-full" />
                    </div>
                </div>

                <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-[1fr_215px_1fr]">
                    <div className="w-full flex flex-col gap-1">
                        <Skeleton className="h-[14px] w-20 rounded-full" />

                        <Skeleton className="h-11 w-full rounded-full" />
                    </div>

                    <div className="w-full flex flex-col gap-1">
                        <Skeleton className="h-[14px] w-20 rounded-full" />

                        <Skeleton className="h-11 w-full rounded-full" />
                    </div>

                    <div className="w-full flex flex-col gap-1">
                        <Skeleton className="h-[14px] w-20 rounded-full" />

                        <Skeleton className="h-11 w-full rounded-full" />
                    </div>
                </div>
            </div>

            <Button disabled size="lg" className="w-full sm:w-44">
                Salvar
            </Button>
        </div>
    );
};
