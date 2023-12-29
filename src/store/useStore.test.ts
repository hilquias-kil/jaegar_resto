import { describe, it, expect, beforeEach } from "vitest";
import { act } from "@testing-library/react";
import { renderHook } from "@testing-library/react";

import { useStore } from "./useStore"; // Update with the actual path
import { ProductModel } from "@/model/product";

const mockProduct: ProductModel = {
  id: 1,
  name: "Phone",
  price: 299,
  image: "phone.jpg",
  category: "Appetizer",
};

describe("useStore", () => {
  it("should set category", () => {
    const { result } = renderHook(() => useStore());
    act(() => {
      result.current.setCategory("Appetizer");
    });

    expect(result.current.category).toBe("Appetizer");
  });

  it("should set search", () => {
    const { result } = renderHook(() => useStore());
    act(() => {
      result.current.setSearch("phone");
    });
    expect(result.current.search).toBe("phone");
  });

  it("should add to cart", () => {
    const { result } = renderHook(() => useStore());

    act(() => {
      result.current.addToCart(mockProduct);
    });
    expect(result.current.cart.length).toBe(1);
  });

  it("should change product quantity", () => {
    const { result } = renderHook(() => useStore());
    act(() => {
      result.current.addToCart(mockProduct);
      result.current.changeProductQty(mockProduct.id, 3);
    });
    expect(result.current.cart[0].qty).toBe(3);
  });

  it("should change product note", () => {
    const { result } = renderHook(() => useStore());
    act(() => {
      result.current.addToCart(mockProduct);
      result.current.changeProductNote(mockProduct.id, "New Note");
    });
    console.log(result.current);
    expect(result.current.cart[0].note).toBe("New Note");
  });

  it("should remove a product", () => {
    const { result } = renderHook(() => useStore());
    act(() => {
      result.current.addToCart(mockProduct);
      result.current.removeProduct(1);
    });
    expect(result.current.cart.length).toBe(0);
  });

  it("should toggle payment", () => {
    const { result } = renderHook(() => useStore());
    act(() => {
      result.current.togglePayment();
    });
    expect(result.current.openPayment).toBe(true);
  });

  it("should calculate total cart amount", () => {
    const product1 = { ...mockProduct, id: 1 };
    const product2 = { ...mockProduct, id: 2 };
    const { result } = renderHook(() => useStore());
    act(() => {
      result.current.addToCart(product1);
      result.current.addToCart(product2);
      result.current.changeProductQty(product1.id, 2); // 2 phones
    });
    expect(result.current.totalCart()).toBe(mockProduct.price * 3);
  });
});
