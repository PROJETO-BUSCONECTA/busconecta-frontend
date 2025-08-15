import { formatPrice } from "@/lib/utils";

import { Skeleton } from "@/components/ui/skeleton";

export const SalesValuesBox = () => {
    return (
        <div className="w-full bg-white p-6 rounded-2xl shadow-md grid grid-cols-1 items-end gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3">
            <div className="w-full flex flex-col gap-1">
                <span className="text-base text-foreground/50 font-medium">Comissão paga à Busconecta</span>

                <span className="text-3xl text-primary font-semibold">{formatPrice(123400 / 100)}</span>
            </div>

            <div className="w-full flex flex-col gap-1">
                <span className="text-base text-foreground/50 font-medium">Total de Bilhetes Vendidos</span>

                <span className="text-3xl text-primary font-semibold">1230</span>
            </div>

            <div className="w-full flex flex-col gap-1">
                <span className="text-base text-foreground/50 font-medium">Cancelamentos</span>

                <span className="text-3xl text-primary font-semibold">0</span>
            </div>
        </div>
    );
};

export const SalesValuesBoxLoading = () => {
    return (
        <div className="w-full bg-white p-6 rounded-2xl shadow-md grid grid-cols-1 items-end gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3">
            <div className="w-full flex flex-col gap-1">
                <span className="text-base text-foreground/50 font-medium">Comissão paga à Busconecta</span>

                <Skeleton className="w-40 h-9" />
            </div>

            <div className="w-full flex flex-col gap-1">
                <span className="text-base text-foreground/50 font-medium">Total de Bilhetes Vendidos</span>

                <Skeleton className="w-10 h-9" />
            </div>

            <div className="w-full flex flex-col gap-1">
                <span className="text-base text-foreground/50 font-medium">Cancelamentos</span>

                <Skeleton className="w-6 h-9" />
            </div>
        </div>
    );
};
