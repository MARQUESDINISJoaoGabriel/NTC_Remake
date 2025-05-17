"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ntcBlue";

    const variants = {
      default: "bg-ntcBlue text-white hover:bg-blue-700",
      outline: "border border-ntcBlue text-ntcBlue bg-transparent hover:bg-blue-50",
      ghost: "bg-transparent hover:bg-blue-100 text-ntcBlue",
      link: "underline text-ntcBlue hover:text-blue-600",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
