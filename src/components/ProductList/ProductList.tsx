"use client";

import { Product } from "@/components/Product";

const products = [
  {
    id: 1,
    image: "/products/image_1.png",
    price: 2.29,
    name: "Spicy seasoned seafood noodles",
  },
  {
    id: 2,
    image: "/products/image_2.png",
    price: 2.69,
    name: "Salted Pasta with mushroom sauce",
  },
  {
    id: 3,
    image: "/products/image_3.png",
    price: 2.99,
    name: "Beef dumpling in hot and sour soup",
  },
  {
    id: 4,
    image: "/products/image_4.png",
    price: 3.29,
    name: "Healthy noodle with spinach leaf",
  },
  {
    id: 5,
    image: "/products/image_5.png",
    price: 3.49,
    name: "Hot spicy fried rice with omelet",
  },
];

export function ProductList() {
  return (
    <>
      <h2 className="text-[28px] font-semibold mb-6">Choose Dishes</h2>
      <div className="grid grid-cols-3 gap-7">
        {products.map((product) => (
          <Product
            key={product.id}
            image={product.image}
            price={product.price}
            title={product.name}
            addToOrder={() => {}}
          />
        ))}
      </div>
    </>
  );
}
