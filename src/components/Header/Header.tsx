import { Search } from "@/components/Search";

export const Header = () => (
  <header className="flex justify-between items-center mb-6">
    <div>
      <h1 className="text-[28px] font-semibold">Jaegar Resto</h1>
      <p>Tuesday 2 Feb, 2021</p>
    </div>

    <Search />
  </header>
);
