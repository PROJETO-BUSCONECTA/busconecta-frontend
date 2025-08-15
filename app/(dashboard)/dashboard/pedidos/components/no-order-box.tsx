import { TicketXIcon } from "lucide-react";

export const NoOrderBox = () => {
    return (
        <div className="w-full bg-white p-6 rounded-2xl shadow-md flex flex-col items-center justify-center">
            <TicketXIcon size={48} strokeWidth={1.5} color="#c3c2c5" />

            <span className="text-lg font-semibold text-muted-foreground">Sem pedidos</span>
        </div>
    );
};
