import { z } from "zod";
import { Control, useFieldArray } from "react-hook-form";
import {
  CalendarDaysIcon,
  FileTextIcon,
  SquareChartGanttIcon,
  UserIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { Input } from "@/components/ui/input";
import { formSchema } from "@/app/(website)/viagem/pagamento/components/payment-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { ptBR } from "date-fns/locale";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TravelersFormProps {
  control: Control<z.infer<typeof formSchema>>;
}

export const TravelersForm = ({ control }: TravelersFormProps) => {
  const { fields } = useFieldArray({ control, name: "travelers" });

  return (
    <div className="w-full bg-white p-6 rounded-2xl shadow-md">
      <h4 className="text-foreground text-lg font-semibold mb-5">
        Dados dos viajantes
      </h4>

      {/* TODO: adicionar formulário com o useFieldArray */}
      <div className="w-full flex flex-col gap-6">
        {fields.map((field, index) => (
          <div key={field.id} className="w-full flex flex-col gap-6">
            <div className="w-full flex flex-col gap-4">
              <span className="w-fit py-1 px-3 bg-transparent border border-primary rounded-full text-center text-primary text-xs font-medium">
                Viajante {index + 1}
              </span>

              <div className="w-full grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <FormField
                  control={control}
                  name={`travelers.${index}.name`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Nome completo
                      </FormLabel>

                      <FormControl>
                        <div className="relative">
                          <Input
                            className="input-container focus-visible:ring-0 !pl-11 h-11"
                            placeholder="Insira o nome completo"
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
                  control={control}
                  name={`travelers.${index}.birthDate`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Data de nascimento
                      </FormLabel>

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
                  control={control}
                  name={`travelers.${index}.documentType`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Tipo do Documento
                      </FormLabel>

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
                                className="text-primary"
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
                  control={control}
                  name={`travelers.${index}.documentNumber`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Número do Documento
                      </FormLabel>

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

            <div
              className={cn(
                "w-full h-px bg-muted",
                fields.length < 2 && "hidden",
                index === fields.length - 1 && "hidden",
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
