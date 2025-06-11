import { z } from "zod";
import { Control } from "react-hook-form";
import { MailIcon, PhoneIcon } from "lucide-react";

import { formSchema } from "../order-forms";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface ContactFormProps {
  control: Control<z.infer<typeof formSchema>>;
}

export const ContactForm = ({ control }: ContactFormProps) => {
  return (
    <div className="w-full bg-white p-6 rounded-2xl shadow-md">
      <h4 className="text-foreground text-lg font-semibold mb-5 lg:text-xl">
        Para qual e-mail devemos enviar as passagens?
      </h4>

      <div className="w-full flex flex-col gap-5">
        <div className="w-full flex flex-col gap-5 sm:flex-row">
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>

                <FormControl>
                  <div className="relative">
                    <Input
                      className="input-container focus-visible:ring-0 !pl-11 h-11"
                      placeholder="Insira o seu e-mail"
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

          <FormField
            control={control}
            name="tel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone</FormLabel>

                <FormControl>
                  <div className="relative">
                    <Input
                      className="input-container focus-visible:ring-0 !pl-11 h-11"
                      placeholder="Insira o seu telefone"
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
        </div>

        <FormField
          control={control}
          name="notification"
          render={({ field }) => (
            <FormItem>
              <div className="w-full flex gap-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="mt-0.5"
                  />
                </FormControl>

                <FormLabel className="text-sm font-normal">
                  Receber ofertas e novidades
                </FormLabel>
              </div>

              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};
