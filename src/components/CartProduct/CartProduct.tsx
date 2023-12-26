import { Trash } from "@/components/Icons";

export function CartProduct() {
  return (
    <>
      <tr>
        <td className="pr-2 pt-6 pb-[10px]">
          <div className="flex gap-2">
            <img src="/products/image_1.png" alt="" width={45} height={45} />
            <div className="w-3/4">
              <p className="text-sm font-medium truncate">
                Spicy seasoned sea asdasd asd ada sd asd as d
              </p>
              <p className="text-xs text-[#ABBBC2] font-medium">$ 2.29</p>
            </div>
          </div>
        </td>
        <td className="px-2 pt-6 pb-[10px]">
          <input
            type="text"
            value="1"
            className="text-base font-medium w-full border-line bg-form hover:bg-[#373A48] focus:bg-[#1F1D2B] focus:border-[#ABBBC2] border-[1px] rounded-lg py-[10px]  px-[14px] focus:outline-none text-center transition-colors"
          />
        </td>
        <td className="pl-2 pt-6 pb-[10px] text-base font-medium">$ 4,58</td>
      </tr>
      <tr>
        <td colSpan={2} className="pr-2">
          <input
            type="text"
            placeholder="Order Note..."
            className="w-full border-line bg-form hover:bg-[#373A48] focus:bg-[#1F1D2B] focus:border-[#ABBBC2] border-[1px] rounded-lg p-[14px] text-sm focus:outline-none transition-colors"
          />
        </td>
        <td className="pl-2">
          <button
            type="button"
            className="border-primary border-[1px] fill-primary p-[14px] rounded-lg hover:bg-[rgba(234,124,105,0.16)] active:opacity-70 transition-all"
          >
            <Trash />
          </button>
        </td>
      </tr>
    </>
  );
}
