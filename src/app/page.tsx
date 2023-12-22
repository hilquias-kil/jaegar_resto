import { Cart } from "@/components/Cart";
import { Nav } from "@/components/Nav";

export default function Home() {
  return (
    <div className="grid bg-bg grid-cols-[104px_minmax(900px,_1fr)_34%] h-screen">
      <Nav />
      <main className="p-6">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt rerum
          ratione nam quas mollitia dicta dolore! Deleniti praesentium animi
          perferendis voluptatibus minus, deserunt autem delectus, cum maiores
          quibusdam, inventore tempore.
        </p>
      </main>
      <Cart />
    </div>
  );
}
