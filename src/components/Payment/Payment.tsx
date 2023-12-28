"use client";

import { Back, Plus } from "@/components/Icons";
import { CartProduct } from "@/components/CartProduct";
import { useStore } from "@/store/useStore";
import { formatCurrency } from "@/utils/formatCurrency";

export function Payment() {
  const cart = useStore((state) => state.cart);
  const changeProductQty = useStore((state) => state.changeProductQty);
  const changeProductNote = useStore((state) => state.changeProductNote);
  const removeProduct = useStore((state) => state.removeProduct);
  const totalCart = useStore((state) => state.totalCart);

  return (
    <div className="absolute inset-0 bg-[rgba(0,0,0,0.70)] flex justify-end">
      <div className="w-[68%] h-full bg-secondary rounded-l-xl grid grid-cols-2">
        <div className="p-6 border-r-line border-r-[1px] grid grid-rows-[auto_auto_1fr_auto]">
          <button className="mb-4">
            <Back />
          </button>
          <div className="flex justify-between items-center border-b-line border-b-[1px] pb-6">
            <div>
              <h3 className="text-white text-[28px] font-semibold leading-[39.20px] mb-[6px]">
                Your order
              </h3>
              <p className="text-[#ABBBC2] text-base font-medium leading-snug">
                Order ID #34562
              </p>
            </div>
            <button className="p-3.5 bg-primary hover:bg-[#FE907D] active:opacity-70 rounded-lg text-sm font-semibold leading-tight  shadow-[0px_8px_24px_0px_rgba(234,124,105,0.32)] transition-all">
              <Plus color="#FFFFFF" />
            </button>
          </div>
          <div className="overflow-y-auto">
            <table className="w-full table-fixed">
              <tbody>
                {cart.map((it) => (
                  <CartProduct
                    key={it.id}
                    name={it.name}
                    image={it.image}
                    price={it.price}
                    note={it.note}
                    qty={it.qty}
                    changeNote={(note) => changeProductNote(it.id, note)}
                    changeQty={(qty) => changeProductQty(it.id, parseInt(qty))}
                    removeProduct={() => removeProduct(it.id)}
                  />
                ))}
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
            <p className="flex justify-between">
              <span className="text-[#ABBBC2] text-sm font-normal leading-tight">
                Sub total
              </span>
              <span className="text-right text-white text-base font-medium  leading-snug">
                {formatCurrency(totalCart())}
              </span>
            </p>
          </div>
        </div>
        <div className="p-6 ">
          <div className="border-b-line border-b-[1px] pb-6 mt-10 mb-6">
            <h3 className="text-white text-[28px] font-semibold leading-[39.20px] mb-[6px]">
              Payment
            </h3>
            <p className="text-[#ABBBC2] text-base font-medium leading-snug">
              3 payment method available
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold leading-7">Payment Method</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
