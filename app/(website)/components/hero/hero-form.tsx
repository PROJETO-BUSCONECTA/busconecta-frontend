"use client";

import { z } from "zod";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowUpDownIcon,
  CalendarIcon,
  MapPinIcon,
  NavigationIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { HeroInput } from "@/components/ui/custom/hero-input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { cn } from "@/lib/utils";

const formSchema = z.object({
  origin: z.string(),
  destination: z.string(),
  departureDate: z.date(),
  returnDate: z.date(),
});

export const HeroForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      origin: "",
      destination: "",
      departureDate: undefined,
      returnDate: undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-9"
      >
        <div className="w-full flex flex-col gap-4">
          <div className="w-full border border-border rounded-2xl">
            <FormField
              control={form.control}
              name="origin"
              render={({ field }) => (
                <FormItem className="px-3.5 pb-3 pt-2 group">
                  <FormLabel className="text-foreground/50 font-regular text-sm transition group-focus-within:text-primary">
                    Origem
                  </FormLabel>

                  <FormControl>
                    <HeroInput
                      placeholder="De onde você vai sair?"
                      icon={MapPinIcon}
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="w-full relative">
              <div className="w-full bg-border h-px" />

              <Button
                type="button"
                size="icon"
                className="absolute top-1/2 right-10 -translate-y-1/2"
              >
                <ArrowUpDownIcon size={20} strokeWidth={1.5} color="white" />
              </Button>
            </div>

            <FormField
              control={form.control}
              name="destination"
              render={({ field }) => (
                <FormItem className="px-3.5 pb-3 pt-2 group">
                  <FormLabel className="text-foreground/50 font-regular text-sm transition group-focus-within:text-primary">
                    Destino
                  </FormLabel>

                  <FormControl>
                    <HeroInput
                      placeholder="Para onde você vai?"
                      icon={NavigationIcon}
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full border border-border rounded-2xl flex flex-col gap-2 sm:flex-row">
            <FormField
              control={form.control}
              name="departureDate"
              render={({ field }) => (
                <FormItem className="w-1/2 px-3.5 pb-3 pt-2 group">
                  <FormLabel className="text-foreground/50 font-regular text-sm transition group-focus-within:text-primary">
                    Ida
                  </FormLabel>

                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full !p-0 text-left font-normal justify-start bg-transparent border-0 rounded-none shadow-none",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          <CalendarIcon
                            size={20}
                            strokeWidth={1.5}
                            className="text-primary"
                          />

                          {field.value ? (
                            format(field.value, "dd/MM/yyyy")
                          ) : (
                            <span>__/__/____</span>
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
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="w-full h-px bg-border sm:w-px sm:h-auto" />

            <FormField
              control={form.control}
              name="returnDate"
              render={({ field }) => (
                <FormItem className="w-1/2 px-3.5 pb-3 pt-2 group">
                  <FormLabel className="text-foreground/50 font-regular text-sm transition group-focus-within:text-primary">
                    Volta
                  </FormLabel>

                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full !p-0 text-left font-normal justify-start bg-transparent border-0 rounded-none shadow-none",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          <CalendarIcon
                            size={20}
                            strokeWidth={1.5}
                            className="text-primary"
                          />

                          {field.value ? (
                            format(field.value, "dd/MM/yyyy")
                          ) : (
                            <span>__/__/____</span>
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
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button size="lg" className="text-lg">
          Buscar
        </Button>
      </form>
    </Form>
  );
};
