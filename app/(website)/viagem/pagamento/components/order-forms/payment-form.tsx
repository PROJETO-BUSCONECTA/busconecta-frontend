import { z } from "zod";
import { Control, UseFormSetValue } from "react-hook-form";

import { formSchema } from "../order-forms";
import { Button } from "@/components/ui/button";
import {
  CalendarIcon,
  CreditCardIcon,
  HouseIcon,
  LockIcon,
  SquareChartGanttIcon,
  UserIcon,
} from "lucide-react";
import Image from "next/image";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PaymentFormProps {
  control: Control<z.infer<typeof formSchema>>;
  setValue: UseFormSetValue<z.infer<typeof formSchema>>;
  paymentMethod: "credit" | "pix";
}

export const PaymentForm = ({
  control,
  setValue,
  paymentMethod,
}: PaymentFormProps) => {
  return (
    <div className="w-full bg-white p-6 rounded-2xl shadow-md">
      <h4 className="text-foreground text-lg font-semibold mb-5">Pagamento</h4>

      <div className="w-full flex flex-col gap-5">
        <div className="w-full flex flex-wrap gap-5">
          <Button
            type="button"
            size="lg"
            variant={paymentMethod === "credit" ? "default" : "outline"}
            onClick={() => setValue("paymentMethod", "credit")}
          >
            <CreditCardIcon strokeWidth={1.5} />
            Cartão de crédito
          </Button>

          <Button
            type="button"
            size="lg"
            variant={paymentMethod === "pix" ? "default" : "outline"}
            onClick={() => setValue("paymentMethod", "pix")}
          >
            {paymentMethod === "pix" ? (
              <Image
                src="/icons/pix-selected.svg"
                alt="Pix"
                width={18}
                height={20}
                className="object-center object-contain"
              />
            ) : (
              <Image
                src="/icons/pix.svg"
                alt="Pix"
                width={18}
                height={20}
                className="object-center object-contain"
              />
            )}
            Pix
          </Button>
        </div>

        {paymentMethod === "credit" && (
          <div className="w-full flex flex-col gap-5">
            <div className="w-full grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <FormField
                control={control}
                name="cardNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="line-clamp-1">
                      Número do cartão
                    </FormLabel>

                    <FormControl>
                      <div className="relative">
                        <Input
                          className="input-container focus-visible:ring-0 !pl-11 h-11"
                          placeholder="____ ____ ____ ____"
                          {...field}
                        />

                        <CreditCardIcon
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
                name="validDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="line-clamp-1">Validade</FormLabel>

                    <FormControl>
                      <div className="relative">
                        <Input
                          className="input-container focus-visible:ring-0 !pl-11 h-11"
                          placeholder="mm/aa"
                          {...field}
                        />

                        <CalendarIcon
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
                name="cvv"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="line-clamp-1">
                      Código de segurança (CVV)
                    </FormLabel>

                    <FormControl>
                      <div className="relative">
                        <Input
                          className="input-container focus-visible:ring-0 !pl-11 h-11"
                          placeholder="3 ou 4 dígitos"
                          {...field}
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
            </div>

            <div className="w-full grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <FormField
                control={control}
                name="holderName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="line-clamp-1">
                      Nome do títular do cartão
                    </FormLabel>

                    <FormControl>
                      <div className="relative">
                        <Input
                          className="input-container focus-visible:ring-0 !pl-11 h-11"
                          placeholder="Nome que está no cartão"
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
                name="documentLinkedCard"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="line-clamp-1">
                      CPF/CNPJ vinculado ao cartão
                    </FormLabel>

                    <FormControl>
                      <div className="relative">
                        <Input
                          className="input-container focus-visible:ring-0 !pl-11 h-11"
                          placeholder="___.___.___-__"
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

              <FormField
                control={control}
                name="postalCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="line-clamp-1">
                      CEP de onde chega a fatura
                    </FormLabel>

                    <FormControl>
                      <div className="relative">
                        <Input
                          className="input-container focus-visible:ring-0 !pl-11 h-11"
                          placeholder="_____-___"
                          {...field}
                        />

                        <HouseIcon
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

            <div className="w-full grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <FormField
                control={control}
                name="installments"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="line-clamp-1">
                      Em quantas parcelas?
                    </FormLabel>

                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full input-container focus-visible:ring-0 !h-11">
                          <div className="flex items-center gap-2">
                            <CreditCardIcon
                              size={20}
                              strokeWidth={1.5}
                              className="text-primary size-5"
                            />

                            <SelectValue placeholder="Selecione a quantidade de parcelas" />
                          </div>
                        </SelectTrigger>
                      </FormControl>

                      {/* TODO: adicionar e dividir de acordo com as parcelas */}
                      <SelectContent>
                        <SelectItem value="1">1x de 2296,31</SelectItem>
                        <SelectItem value="2">2x de 1148,15</SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
