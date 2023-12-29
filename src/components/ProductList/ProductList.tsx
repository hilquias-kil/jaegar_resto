"use client";

import { Product } from "@/components/Product";
import { type ProductModel } from "@/model/product";
import { useStore } from "@/store/useStore";

export function ProductList({ products }: { products: ProductModel[] }) {
  const category = useStore((state) => state.category);
  const search = useStore((state) => state.search);
  const addToCart = useStore((state) => state.addToCart);

  return (
    <>
      <h2 className="text-[28px] font-semibold mb-4">Choose Dishes {search}</h2>
      <div className="grid grid-cols-3 content-start gap-7 overflow-y-auto py-2">
        {products
          .filter((product) => product.category === category)
          .filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((product) => (
            <Product
              key={product.id}
              image={product.image}
              price={product.price}
              title={product.name}
              addToOrder={() => addToCart(product)}
            />
          ))}
      </div>
    </>
  );
}
