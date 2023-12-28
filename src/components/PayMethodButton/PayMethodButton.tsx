import { Checkmark } from "@/components/Icons";
import { type ReactElement } from "react";

interface PayMethodButtonProps {
  children: ReactElement;
  label: string;
  active?: boolean;
}
export function PayMethodButton({
  children,
  label,
  active,
}: PayMethodButtonProps) {
  return (
    <button
      className={`${
        active
          ? "bg-bg fill-white border-white"
          : "bg-secondary fill-icon border-line"
      } hover:bg-bg  border-[1px]  py-[10px] px-4 rounded-lg flex flex-col items-center justify-between w-[104px] relative`}
    >
      {children}
      <span className={`${active ? "text-white " : "text-icon "}text-sm`}>
        {label}
      </span>
      {active && (
        <div className="absolute right-2 top-2">
          <Checkmark />
        </div>
      )}
    </button>
  );
}
