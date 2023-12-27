import { Cart } from "@/components/Cart";
import { Header } from "@/components/Header";
import { ProductList } from "@/components/ProductList";
import { Tabs } from "@/components/Tabs";

export default function Home() {
  return (
    <>
      <main className="p-6 pb-0 grid grid-rows-[auto_auto_auto_1fr] h-screen">
        <Header />
        <Tabs />
        <ProductList />
      </main>
      <Cart />
    </>
  );
}
