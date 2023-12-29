import { ProductModel } from "@/model/product";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ProductCart {
  id: ProductModel["id"];
  name: ProductModel["name"];
  price: ProductModel["price"];
  image: ProductModel["image"];
  note: string;
  qty: number;
}

interface State {
  category: string;
  search: string;
  cart: ProductCart[];
  openPayment: boolean;
  totalCart: () => number;
  setCategory: (category: string) => void;
  setSearch: (search: string) => void;
  addToCart: (product: ProductModel) => void;
  changeProductQty: (id: number, qty: number) => void;
  changeProductNote: (id: number, note: string) => void;
  removeProduct: (id: number) => void;
  togglePayment: () => void;
}

export const useStore = create<State>()(
  persist(
    (set, get) => ({
      category: "",
      search: "",
      cart: [],
      openPayment: false,
      totalCart: () =>
        get().cart.reduce(
          (accumulator, currentValue) =>
            accumulator + currentValue.price * currentValue.qty,
          0
        ),
      setCategory: (category) => set(() => ({ category })),
      setSearch: (search) => set(() => ({ search })),
      addToCart: (product) =>
        set((state) => {
          if (state.cart.find((item) => item.id === product.id)) {
            return {
              cart: state.cart.map((item) => {
                if (item.id === product.id) {
                  return {
                    ...item,
                    qty: item.qty + 1,
                  };
                }
                return item;
              }),
            };
          } else {
            return {
              cart: [
                ...state.cart,
                {
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: product.image,
                  note: "",
                  qty: 1,
                },
              ],
            };
          }
        }),
      changeProductQty: (id, qty) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, qty: qty } : item
          ),
        })),
      changeProductNote: (id, note) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, note: note } : item
          ),
        })),
      removeProduct: (id) =>
        set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
      togglePayment: () =>
        set((state) => ({ openPayment: !state.openPayment })),
    }),
    { name: "store" }
  )
);
