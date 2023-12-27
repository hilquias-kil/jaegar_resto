import { CartProduct } from "@/components/CartProduct";

function EmptyCart() {
  return (
    <tr>
      <td colSpan={3} className="text-center py-6">
        <p className="text-[28px] font-semibold">Your cart is empty</p>
        <p className="">
          Add items to create <br /> an order
        </p>
      </td>
    </tr>
  );
}

export function Cart() {
  return (
    <aside className="bg-secondary rounded-l-lg p-6 flex flex-col">
      <h3 className="text-xl font-semibold mb-10">Order #34562</h3>
      <div className="grow">
        <table className="w-full table-fixed">
          <thead>
            <tr>
              <th className="text-left border-b-line border-b-[1px] pb-6 pr-2">
                Item
              </th>
              <th className="text-left border-b-line border-b-[1px] pb-6 w-16 px-2">
                Qty
              </th>
              <th className="text-left border-b-line border-b-[1px] pb-6 w-14 pl-2">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <CartProduct />
            <CartProduct />
            <CartProduct />
          </tbody>
        </table>
      </div>
      <div className="pt-6 border-t-line border-t-[1px]">
        <p className="flex justify-between mb-4">
          <span className="text-[#ABBBC2] text-sm font-normal leading-tight">
            Discount
          </span>
          <span className="text-right text-white text-base font-medium  leading-snug">
            $0
          </span>
        </p>
        <p className="flex justify-between mb-11">
          <span className="text-[#ABBBC2] text-sm font-normal leading-tight">
            Sub total
          </span>
          <span className="text-right text-white text-base font-medium  leading-snug">
            $0
          </span>
        </p>
        <button
          type="button"
          className="p-3.5 bg-primary hover:bg-[#FE907D] active:opacity-70 rounded-lg text-sm font-semibold leading-tight  shadow-[0px_8px_24px_0px_rgba(234,124,105,0.32)] w-full transition-all"
        >
          Continue to Payment
        </button>
      </div>
    </aside>
  );
}
