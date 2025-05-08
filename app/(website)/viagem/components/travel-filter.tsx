"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  CalendarIcon,
  MapPinIcon,
  NavigationIcon,
  SearchIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";

const formSchema = z.object({
  origin: z.string(),
  destination: z.string(),
  departureDate: z.date(),
  returnDate: z.date(),
});

export const TravelFilter = () => {
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
    <div className="w-full bg-white shadow-md rounded-2xl px-5 py-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-12 lg:flex-row lg:items-end"
        >
          <div className="w-full grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <FormField
              control={form.control}
              name="origin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">Origem</FormLabel>

                  <FormControl>
                    <div
                      className={cn("input-container flex items-center gap-2", {
                        "input-error": !!form.formState.errors.origin?.message,
                      })}
                    >
                      <MapPinIcon
                        size={20}
                        strokeWidth={1.5}
                        className="text-primary"
                      />

                      <Input
                        className="input-reset"
                        placeholder="De onde você vai sair?"
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
              name="destination"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">Destino</FormLabel>

                  <FormControl>
                    <div
                      className={cn("input-container flex items-center gap-2", {
                        "input-error":
                          !!form.formState.errors.destination?.message,
                      })}
                    >
                      <NavigationIcon
                        size={20}
                        strokeWidth={1.5}
                        className="text-primary"
                      />

                      <Input
                        className="input-reset"
                        placeholder="Para onde você vai?"
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
              name="departureDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">Ida</FormLabel>

                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="input"
                          size="input"
                          className={cn(
                            "text-left font-normal justify-start",
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

            <FormField
              control={form.control}
              name="returnDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">Volta</FormLabel>

                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="input"
                          size="input"
                          className={cn(
                            "text-left font-normal justify-start",
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
                  </Popover>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" size="lg" className="w-full lg:w-fit">
            Buscar
            <SearchIcon />
          </Button>
        </form>
      </Form>
    </div>
  );
};
