import { Plus } from "@/components/Icons";

interface ProductProps {
  image: string;
  title: string;
  price: number;
  addToOrder: () => void;
}

export function Product({ image, title, price, addToOrder }: ProductProps) {
  return (
    <div className="bg-secondary rounded-2xl flex flex-col items-center mt-9 p-6">
      <img
        src={image}
        alt={title}
        width={150}
        height={150}
        className="mt-[-60px] mb-2"
      />
      <p className="text-sm font-medium mb-2 text-center">{title}</p>
      <p className="text-sm font-normal-">{price}</p>
      <button
        type="button"
        className="text-primary font-semibold p-2 flex items-center gap-3"
        onClick={addToOrder}
      >
        <Plus />
        <span>Add to order</span>
      </button>
    </div>
  );
}
