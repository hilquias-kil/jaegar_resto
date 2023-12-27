import { Cart } from "@/components/Cart";
import { Header } from "@/components/Header";
import { ProductList } from "@/components/ProductList";
import { Tabs } from "@/components/Tabs";
import { ProductModel } from "@/model/product";
import { getProducts } from "@/services/getProducts";

export default async function Home() {
  const products: ProductModel[] = await getProducts();
  return (
    <>
      <main className="p-6 pb-0 grid grid-rows-[auto_auto_auto_1fr] h-screen">
        <Header />
        <Tabs products={products} />
        <ProductList products={products} />
      </main>
      <Cart />
    </>
  );
}
