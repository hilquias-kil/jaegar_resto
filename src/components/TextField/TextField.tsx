import { forwardRef } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const TextField = forwardRef<HTMLInputElement, InputProps>(
  function Input(props, ref) {
    const { ...otherProps } = props;
    return (
      <input
        {...otherProps}
        ref={ref}
        className="w-full border-line bg-form hover:bg-[#373A48] focus:bg-[#1F1D2B] focus:border-[#ABBBC2] border-[1px] rounded-lg p-[14px] text-sm focus:outline-none transition-colors"
      />
    );
  }
);
