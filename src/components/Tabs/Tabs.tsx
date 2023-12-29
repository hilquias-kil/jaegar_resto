"use client";

import { ProductModel } from "@/model/product";
import { useStore } from "@/store/useStore";
import { useEffect } from "react";

interface TabProps {
  children: string;
  active?: boolean;
  onClick: () => void;
}

const tabVariants = {
  active: "text-primary after:bg-primary",
  default: "text-white after:bg-transparent",
};

const Tab = ({ children, active, onClick }: TabProps) => {
  return (
    <li>
      <button
        className={`text-sm font-semibold hover:text-primary pb-3 block relative transition-colors after:content-[''] after:transition-colors after:block after:absolute  after:w-1/2 after:h-[3px] after:bottom-0 ${
          active ? tabVariants.active : tabVariants.default
        }`}
        onClick={onClick}
      >
        {children}
      </button>
    </li>
  );
};

export const Tabs = ({ products }: { products: ProductModel[] }) => {
  const categories: string[] = [];
  products.forEach((it) => {
    if (!categories.includes(it.category)) {
      categories.push(it.category);
    }
  });

  const category = useStore((state) => state.category);
  const setCategory = useStore((state) => state.setCategory);

  useEffect(() => {
    setCategory(categories[0]);
  }, []);

  return (
    <ul className="flex gap-8 border-b-line border-b-[1px] mb-6">
      {categories.map((item) => (
        <Tab
          key={item}
          active={item === category}
          onClick={() => setCategory(item)}
        >
          {item}
        </Tab>
      ))}
    </ul>
  );
};
