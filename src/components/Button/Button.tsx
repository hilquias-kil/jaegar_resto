import { type ReactElement } from "react";

interface ButtonProps {
  children: string | ReactElement;
  type?: "button" | "submit";
  onClick?: () => void;
  variant?: "contained" | "outlined";
  full?: boolean;
}

const variants = {
  contained:
    "bg-primary hover:bg-[#FE907D] shadow-[0px_8px_24px_0px_rgba(234,124,105,0.32)] fill-white",
  outlined:
    "text-primary hover:bg-[rgba(234,124,105,0.16)] border-primary border-[1px] bg-transparent fill-primary",
};

export function Button({
  children,
  type = "button",
  onClick,
  variant = "contained",
  full = true,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick ? onClick : () => {}}
      className={`${variants[variant]} ${
        full ? "w-full" : ""
      } p-3.5 active:opacity-70 rounded-lg text-sm font-semibold leading-tight transition-all`}
    >
      {children}
    </button>
  );
}
