import { create } from "zustand";

interface State {
  category: string;
  search: string;
  setCategory: (category: string) => void;
  setSearch: (search: string) => void;
}

export const useStore = create<State>()((set) => ({
  category: "",
  search: "",
  setCategory: (category) => set(() => ({ category })),
  setSearch: (search) => set(() => ({ search })),
}));
