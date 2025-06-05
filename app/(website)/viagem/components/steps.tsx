import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface StepsProps {
  step: number;
}

export const Steps = ({ step }: StepsProps) => {
  return (
    <div className="w-full mb-7">
      <div className="w-full lg:hidden">
        <div
          className={cn(
            "w-full shrink-0 border border-secondary rounded-full p-2 flex items-center gap-1.5",
            step === 0 ? "bg-secondary" : "hidden",
          )}
        >
          <div
            className={cn(
              "shrink-0 size-6 flex items-center justify-center rounded-full border border-secondary",
              step === 0 && "border-primary",
              step > 0 && "bg-secondary",
            )}
          >
            {step > 0 ? (
              <CheckIcon className="text-primary" size={16} />
            ) : (
              <span
                className={cn(
                  "text-base text-secondary text-center",
                  step === 0 && "text-primary",
                )}
              >
                1
              </span>
            )}
          </div>

          <span
            className={cn(
              "text-base font-medium text-secondary",
              step === 0 && "text-primary",
            )}
          >
            Selecionar Ida
          </span>
        </div>

        <div
          className={cn(
            "shrink-0 border border-secondary rounded-full p-2 flex items-center gap-1.5",
            step === 1 ? "bg-secondary" : "hidden",
            step > 1 && "bg-secondary",
          )}
        >
          <div
            className={cn(
              "shrink-0 size-6 flex items-center justify-center rounded-full border border-secondary",
              step === 1 && "border-primary",
            )}
          >
            {step > 1 ? (
              <CheckIcon className="text-primary" size={16} />
            ) : (
              <span
                className={cn(
                  "text-base text-secondary text-center",
                  step === 1 && "text-primary",
                )}
              >
                2
              </span>
            )}
          </div>

          <span
            className={cn(
              "text-base font-medium text-secondary",
              step === 1 && "text-primary",
            )}
          >
            Selecionar Volta
          </span>
        </div>

        <div
          className={cn(
            "shrink-0 border border-secondary rounded-full p-2 flex items-center gap-1.5",
            step === 2 ? "bg-secondary" : "hidden",
            step > 2 && "bg-secondary",
          )}
        >
          <div
            className={cn(
              "shrink-0 size-6 flex items-center justify-center rounded-full border border-secondary",
              step === 2 && "border-primary",
            )}
          >
            {step > 2 ? (
              <CheckIcon className="text-primary" size={16} />
            ) : (
              <span
                className={cn(
                  "text-base text-secondary text-center",
                  step === 2 && "text-primary",
                )}
              >
                3
              </span>
            )}
          </div>

          <span
            className={cn(
              "text-base font-medium text-secondary",
              step === 2 && "text-primary",
            )}
          >
            Pagamento
          </span>
        </div>

        <div
          className={cn(
            "shrink-0 border border-secondary rounded-full p-2 flex items-center gap-1.5",
            step === 3 ? "bg-secondary" : "hidden",
            step > 3 && "bg-secondary",
          )}
        >
          <div
            className={cn(
              "shrink-0 size-6 flex items-center justify-center rounded-full border border-secondary",
              step === 3 && "border-primary",
            )}
          >
            {step > 3 ? (
              <CheckIcon className="text-primary" size={16} />
            ) : (
              <span
                className={cn(
                  "text-base text-secondary text-center",
                  step === 3 && "text-primary",
                )}
              >
                4
              </span>
            )}
          </div>

          <span
            className={cn(
              "text-base font-medium text-secondary",
              step === 3 && "text-primary",
            )}
          >
            Resumo
          </span>
        </div>
      </div>

      <div className="w-full items-center overflow-x-hidden hidden lg:flex">
        <div
          className={cn(
            "shrink-0 border border-secondary rounded-full p-2 flex items-center gap-1.5",
            step === 0 && "bg-secondary",
          )}
        >
          <div
            className={cn(
              "shrink-0 size-6 flex items-center justify-center rounded-full border border-secondary",
              step === 0 && "border-primary",
              step > 0 && "bg-secondary",
            )}
          >
            {step > 0 ? (
              <CheckIcon className="text-primary" size={16} />
            ) : (
              <span
                className={cn(
                  "text-base text-secondary text-center",
                  step === 0 && "text-primary",
                )}
              >
                1
              </span>
            )}
          </div>

          <span
            className={cn(
              "text-base font-medium text-secondary",
              step === 0 && "text-primary",
            )}
          >
            Selecionar Ida
          </span>
        </div>

        <div className="flex-1 min-w-24 h-px bg-secondary" />

        <div
          className={cn(
            "shrink-0 border border-secondary rounded-full p-2 flex items-center gap-1.5",
            step === 1 && "bg-secondary",
          )}
        >
          <div
            className={cn(
              "shrink-0 size-6 flex items-center justify-center rounded-full border border-secondary",
              step === 1 && "border-primary",
              step > 1 && "bg-secondary",
            )}
          >
            {step > 1 ? (
              <CheckIcon className="text-primary" size={16} />
            ) : (
              <span
                className={cn(
                  "text-base text-secondary text-center",
                  step === 1 && "text-primary",
                )}
              >
                2
              </span>
            )}
          </div>

          <span
            className={cn(
              "text-base font-medium text-secondary",
              step === 1 && "text-primary",
            )}
          >
            Selecionar Volta
          </span>
        </div>

        <div className="flex-1 min-w-24 h-px bg-secondary" />

        <div
          className={cn(
            "shrink-0 border border-secondary rounded-full p-2 flex items-center gap-1.5",
            step === 2 && "bg-secondary",
          )}
        >
          <div
            className={cn(
              "shrink-0 size-6 flex items-center justify-center rounded-full border border-secondary",
              step === 2 && "border-primary",
              step > 2 && "bg-secondary",
            )}
          >
            {step > 2 ? (
              <CheckIcon className="text-primary" size={16} />
            ) : (
              <span
                className={cn(
                  "text-base text-secondary text-center",
                  step === 2 && "text-primary",
                )}
              >
                3
              </span>
            )}
          </div>

          <span
            className={cn(
              "text-base font-medium text-secondary",
              step === 2 && "text-primary",
            )}
          >
            Pagamento
          </span>
        </div>

        <div className="flex-1 min-w-24 h-px bg-secondary" />

        <div
          className={cn(
            "shrink-0 border border-secondary rounded-full p-2 flex items-center gap-1.5",
            step === 3 && "bg-secondary",
          )}
        >
          <div
            className={cn(
              "shrink-0 size-6 flex items-center justify-center rounded-full border border-secondary",
              step === 3 && "border-primary",
              step > 3 && "bg-secondary",
            )}
          >
            {step > 3 ? (
              <CheckIcon className="text-primary" size={16} />
            ) : (
              <span
                className={cn(
                  "text-base text-secondary text-center",
                  step === 3 && "text-primary",
                )}
              >
                4
              </span>
            )}
          </div>

          <span
            className={cn(
              "text-base font-medium text-secondary",
              step === 3 && "text-primary",
            )}
          >
            Resumo
          </span>
        </div>
      </div>
    </div>
  );
};
