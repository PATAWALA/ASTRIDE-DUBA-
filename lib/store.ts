"use client";

import { create } from "zustand";
import { PRODUCTS, Product } from "./products";

export type CartItem = {
  productId: string;
  name: string;
  priceEUR: number;
  priceUSD: number;
  priceXOF: number;
  image: string;
  size: string;
  color: string;
  qty: number;
};

type Store = {
  items: CartItem[];
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (args: {
    product: Product;
    size: string;
    color: string;
  }) => void;
  removeItem: (index: number) => void;
  updateQty: (index: number, qty: number) => void;
  clear: () => void;
  subtotalEUR: () => number;
  subtotalUSD: () => number;
  subtotalXOF: () => number;
};

export const useStore = create<Store>((set, get) => ({
  items: [],
  isCartOpen: false,
  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),
  addItem: ({ product, size, color }) => {
    const items = [...get().items];
    const key = `${product.id}-${size}-${color}`;
    const existing = items.findIndex(
      (i) => `${i.productId}-${i.size}-${i.color}` === key
    );
    if (existing >= 0) {
      items[existing].qty += 1;
    } else {
      items.push({
        productId: product.id,
        name: product.name,
        priceEUR: product.priceEUR,
        priceUSD: product.priceUSD,
        priceXOF: product.priceXOF,
        image: product.image,
        size,
        color,
        qty: 1,
      });
    }
    set({ items, isCartOpen: true });
  },
  removeItem: (index) => {
    const items = [...get().items];
    items.splice(index, 1);
    set({ items });
  },
  updateQty: (index, qty) => {
    const items = [...get().items];
    if (qty <= 0) items.splice(index, 1);
    else items[index].qty = qty;
    set({ items });
  },
  clear: () => set({ items: [] }),
  subtotalEUR: () =>
    get().items.reduce((s, i) => s + i.priceEUR * i.qty, 0),
  subtotalUSD: () =>
    get().items.reduce((s, i) => s + i.priceUSD * i.qty, 0),
  subtotalXOF: () =>
    get().items.reduce((s, i) => s + i.priceXOF * i.qty, 0),
}));

export { PRODUCTS };