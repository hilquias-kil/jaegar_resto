import { Cart } from "@/components/Cart";
import { Header } from "@/components/Header";
import { Tabs } from "@/components/Tabs";

export default function Home() {
  return (
    <>
      <main className="p-6">
        <Header />
        <Tabs />
      </main>
      <Cart />
    </>
  );
}
