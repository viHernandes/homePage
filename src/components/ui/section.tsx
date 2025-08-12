import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: "default" | "hero" | "muted";
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "py-16 md:py-24",
          {
            "bg-background": variant === "default",
            "bg-gradient-hero relative overflow-hidden": variant === "hero",
            "bg-muted/30": variant === "muted",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Section.displayName = "Section";

export { Section };