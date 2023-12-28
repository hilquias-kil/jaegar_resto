interface TextFieldProps {
  id: string;
}
export function TextField({ id }: TextFieldProps) {
  return (
    <input
      type="text"
      id={id}
      name={id}
      className="w-full border-line bg-form hover:bg-[#373A48] focus:bg-[#1F1D2B] focus:border-[#ABBBC2] border-[1px] rounded-lg p-[14px] text-sm focus:outline-none transition-colors"
    />
  );
}
