import { Trash } from "@/components/Icons";
import { formatCurrency } from "@/utils/formatCurrency";

interface CartProductProps {
  name: string;
  price: number;
  qty: number;
  note: string;
  image: string;
  changeQty: (value: string) => void;
  changeNote: (value: string) => void;
  removeProduct: () => void;
}

export function CartProduct({
  name,
  price,
  qty,
  note,
  image,
  changeQty,
  changeNote,
  removeProduct,
}: CartProductProps) {
  return (
    <>
      <tr>
        <td className="pr-2 pt-6 pb-[10px]">
          <div className="flex gap-2">
            <img src={image} alt={name} width={45} height={45} />
            <div className="w-3/4">
              <p className="text-sm font-medium truncate">{name}</p>
              <p className="text-xs text-[#ABBBC2] font-medium">
                {formatCurrency(price)}
              </p>
            </div>
          </div>
        </td>
        <td className="px-2 pt-6 pb-[10px] w-16">
          <input
            type="text"
            value={qty}
            onChange={(event) => changeQty(event.target.value)}
            className="text-base font-medium w-full border-line bg-form hover:bg-[#373A48] focus:bg-[#1F1D2B] focus:border-[#ABBBC2] border-[1px] rounded-lg py-[10px]  px-[14px] focus:outline-none text-center transition-colors"
          />
        </td>
        <td className="pl-2 pt-6 pb-[10px] text-base font-medium w-14">
          {formatCurrency(price * qty)}
        </td>
      </tr>
      <tr>
        <td colSpan={2} className="pr-2">
          <input
            type="text"
            value={note}
            placeholder="Order Note..."
            onChange={(event) => changeNote(event.target.value)}
            className="w-full border-line bg-form hover:bg-[#373A48] focus:bg-[#1F1D2B] focus:border-[#ABBBC2] border-[1px] rounded-lg p-[14px] text-sm focus:outline-none transition-colors"
          />
        </td>
        <td className="pl-2">
          <button
            type="button"
            className="border-primary border-[1px] fill-primary p-[14px] rounded-lg hover:bg-[rgba(234,124,105,0.16)] active:opacity-70 transition-all"
            onClick={removeProduct}
          >
            <Trash />
          </button>
        </td>
      </tr>
    </>
  );
}
