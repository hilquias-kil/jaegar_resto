import { Plus } from "@/components/Icons";
import { formatCurrency } from "@/utils/formatCurrency";

interface ProductProps {
  image: string;
  title: string;
  price: number;
  addToOrder: () => void;
}

export function Product({ image, title, price, addToOrder }: ProductProps) {
  return (
    <div className="group bg-secondary hover:bg-[#232131] rounded-2xl flex flex-col items-center mt-9 p-6">
      <img
        src={image}
        alt={title}
        width={150}
        height={150}
        className="mt-[-60px] mb-2 group-hover:scale-110 group-hover:rotate-12 transition-transform"
      />
      <p className="text-sm font-medium mb-2 text-center">{title}</p>
      <p className="text-sm font-normal mb-2">{formatCurrency(price)}</p>
      <button
        type="button"
        className="text-primary font-semibold py-1 px-2 flex items-center gap-3 hover:bg-[rgba(234,124,105,0.16)] rounded-lg transition-colors"
        onClick={addToOrder}
      >
        <Plus />
        <span>Add to order</span>
      </button>
    </div>
  );
}
