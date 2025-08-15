import { formatPrice } from "@/lib/utils";

import { Skeleton } from "@/components/ui/skeleton";

export const InvoicingBox = () => {
    return (
        <div className="w-full h-fit bg-white p-6 rounded-2xl shadow-md 2xl:h-full 2xl:flex 2xl:items-center">
            <div className="w-fit flex flex-col gap-1">
                <span className="text-base text-foreground/50 font-medium">Faturamento</span>

                <span className="text-3xl text-primary font-semibold">{formatPrice(123400 / 100)}</span>
            </div>
        </div>
    );
};

export const InvoicingBoxLoading = () => {
    return (
        <div className="w-full h-fit bg-white p-6 rounded-2xl shadow-md 2xl:h-full 2xl:flex 2xl:items-center">
            <div className="w-fit flex flex-col gap-1">
                <span className="text-base text-foreground/50 font-medium">Faturamento</span>

                <Skeleton className="w-32 h-9" />
            </div>
        </div>
    );
};
