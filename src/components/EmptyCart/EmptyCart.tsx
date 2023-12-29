export function EmptyCart() {
  return (
    <tr>
      <td colSpan={3} className="text-center py-6">
        <p className="text-[28px] font-semibold">Your cart is empty</p>
        <p className="">
          Add items to create <br /> an order
        </p>
      </td>
    </tr>
  );
}
