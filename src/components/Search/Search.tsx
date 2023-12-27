"use client";

import { useStore } from "@/store/useStore";
import { ChangeEvent } from "react";

export function Search() {
  const setSearch = useStore((state) => state.setSearch);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  return (
    <input
      type="text"
      className="bg-[url('/search.svg')] bg-no-repeat bg-[14px_center] border-line bg-form hover:bg-[#373A48] focus:bg-[#1F1D2B] focus:border-[#ABBBC2] border-2 rounded-lg p-[14px] pl-10 box-content w-[164px] text-sm focus:outline-none"
      placeholder="Search for food, coffe, etc.."
      onChange={handleSearch}
    />
  );
}
