import { Cart } from "@/components/Cart";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <main className="p-6">
        <Header />
      </main>
      <Cart />
    </>
  );
}
