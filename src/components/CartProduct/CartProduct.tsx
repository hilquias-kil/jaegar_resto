import { Trash } from "@/components/Icons";
import { formatCurrency } from "@/utils/formatCurrency";
import { Button } from "../Button";
import { TextField } from "../TextField";
import Image from "next/image";

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
            <Image src={image} alt={name} width={45} height={45} />
            <div className="w-3/4">
              <p className="text-sm font-medium truncate">{name}</p>
              <p className="text-xs text-[#ABBBC2] font-medium">
                {formatCurrency(price)}
              </p>
            </div>
          </div>
        </td>
        <td className="px-2 pt-6 pb-[10px] w-16">
          <TextField
            type="text"
            value={qty}
            onChange={(event) => changeQty(event.target.value)}
            style={{ textAlign: "center" }}
          />
        </td>
        <td className="pl-2 pt-6 pb-[10px] text-base font-medium w-14">
          {formatCurrency(price * qty)}
        </td>
      </tr>
      <tr>
        <td colSpan={2} className="pr-2">
          <TextField
            type="text"
            value={note}
            placeholder="Order Note..."
            onChange={(event) => changeNote(event.target.value)}
          />
        </td>
        <td className="pl-2">
          <Button full={false} variant="outlined" onClick={removeProduct}>
            <Trash />
          </Button>
        </td>
      </tr>
    </>
  );
}
