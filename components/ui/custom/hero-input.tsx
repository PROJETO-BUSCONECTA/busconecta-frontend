import { cn } from "@/lib/utils";
import { Input } from "../input";
import { LucideIcon } from "lucide-react";

export const HeroInput = ({
  className,
  type,
  icon: Icon,
  ...props
}: React.ComponentProps<"input"> & { icon: LucideIcon }) => {
  return (
    <div className="w-full flex items-center gap-2">
      <Icon size={20} strokeWidth={1.5} className="text-primary" />

      <Input
        type={type}
        className={cn(
          "border-0 px-0 rounded-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-foreground/50",
          className,
        )}
        {...props}
      />
    </div>
  );
};
