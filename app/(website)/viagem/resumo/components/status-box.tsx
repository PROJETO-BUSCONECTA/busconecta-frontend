import { CheckIcon, Loader2 } from "lucide-react";

interface StatusBoxProps {
  status: "waiting" | "success";
}

export const StatusBox = ({ status }: StatusBoxProps) => {
  return (
    <div className="w-full bg-white p-6 rounded-2xl shadow-md flex flex-col gap-5 sm:flex-row sm:justify-between lg:flex-col xl:flex-row">
      <h4 className="text-foreground text-lg font-semibold">
        Status do pagamento
      </h4>

      {status === "success" && (
        <div className="w-fit flex items-center gap-2">
          <span className="text-lg font-semibold text-green-600">Pago</span>

          <CheckIcon strokeWidth={1.5} className="size-6 text-green-600" />
        </div>
      )}

      {status === "waiting" && (
        <div className="w-fit flex items-center gap-2">
          <span className="text-lg font-semibold text-foreground/70">
            Aguardando pagamento
          </span>

          <Loader2
            strokeWidth={1.5}
            className="animate-spin size-6 text-foreground/70"
          />
        </div>
      )}
    </div>
  );
};
