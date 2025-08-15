"use client";

import { useState } from "react";
import { format } from "date-fns";
import { BadgeDollarSignIcon, BuildingIcon, CalendarRangeIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Skeleton } from "@/components/ui/skeleton";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const DashboardFilterBox = () => {
    const [periodDate, setPeriodDate] = useState<Date | undefined>(undefined);

    return (
        <div className="w-full bg-white p-6 rounded-2xl shadow-md">
            <h4 className="text-foreground text-lg font-semibold mb-5 lg:text-xl">Dashboard</h4>

            <div className="w-full flex flex-col gap-5 sm:items-end xl:grid xl:grid-cols-4">
                <div className="w-full flex flex-col gap-5 sm:grid sm:grid-cols-3 xl:col-span-3">
                    <div className="w-full flex flex-col gap-1">
                        <Label className="text-sm font-medium text-foreground leading-normal">Período</Label>

                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    className={cn(
                                        "w-full input-container focus-visible:ring-0 bg-white h-11 justify-start text-foreground text-base font-normal hover:bg-white hover:text-foreground overflow-hidden",
                                        !periodDate && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarRangeIcon size={20} strokeWidth={1.5} className="text-primary" />

                                    {periodDate ? format(periodDate, "dd/MM/yyyy") : <span>Data de compra</span>}
                                </Button>
                            </PopoverTrigger>

                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={periodDate}
                                    onSelect={setPeriodDate}
                                    disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                    <div className="w-full flex flex-col gap-1">
                        <Label className="text-sm font-medium text-foreground leading-normal">Empresa</Label>

                        <Select>
                            <SelectTrigger className="w-full input-container focus-visible:ring-0 !h-11">
                                <div className="w-[calc(100%-8px)] flex items-center gap-2 overflow-hidden">
                                    <BuildingIcon size={20} strokeWidth={1.5} className="text-primary size-5" />
                                    <SelectValue placeholder="Selecione a empresa" className="line-clamp-1" />
                                </div>
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="empresa 1">empresa 1</SelectItem>
                                <SelectItem value="empresa 2">empresa 2</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="w-full flex flex-col gap-1">
                        <Label className="text-sm font-medium text-foreground leading-normal">Canal</Label>

                        <Select>
                            <SelectTrigger className="w-full input-container focus-visible:ring-0 !h-11">
                                <div className="w-[calc(100%-8px)] flex items-center gap-2 overflow-hidden">
                                    <BadgeDollarSignIcon size={20} strokeWidth={1.5} className="text-primary size-5" />
                                    <SelectValue placeholder="Selecione o canal" />
                                </div>
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="todos">Todos</SelectItem>
                                <SelectItem value="balcão">Balcão</SelectItem>
                                <SelectItem value="online">Online</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <Button size="lg" className="w-full sm:w-44 xl:w-full">
                    Aplicar filtro
                </Button>
            </div>
        </div>
    );
};

export const DashboardFilterBoxLoading = () => {
    return (
        <div className="w-full bg-white p-6 rounded-2xl shadow-md">
            <h4 className="text-foreground text-lg font-semibold mb-5 lg:text-xl">Dashboard</h4>

            <div className="w-full flex flex-col gap-5 sm:items-end xl:grid xl:grid-cols-4">
                <div className="w-full flex flex-col gap-5 sm:grid sm:grid-cols-3 xl:col-span-3">
                    <div className="w-full flex flex-col gap-1">
                        <Label className="text-sm font-medium text-foreground leading-normal">Período</Label>

                        <Skeleton className="w-full h-11 rounded-full" />
                    </div>

                    <div className="w-full flex flex-col gap-1">
                        <Label className="text-sm font-medium text-foreground leading-normal">Empresa</Label>

                        <Skeleton className="w-full h-11 rounded-full" />
                    </div>

                    <div className="w-full flex flex-col gap-1">
                        <Label className="text-sm font-medium text-foreground leading-normal">Canal</Label>

                        <Skeleton className="w-full h-11 rounded-full" />
                    </div>
                </div>

                <Button size="lg" className="w-full sm:w-44 xl:w-full">
                    Aplicar filtro
                </Button>
            </div>
        </div>
    );
};
