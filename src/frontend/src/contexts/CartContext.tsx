import type React from "react";
import { createContext, useCallback, useContext, useState } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
  category: string;
  image?: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, "qty">) => void;
  removeFromCart: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  total: number;
  count: number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  wishlist: string[];
  toggleWishlist: (id: string) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("agro-cart") || "[]");
    } catch {
      return [];
    }
  });
  const [isOpen, setIsOpen] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("agro-wishlist") || "[]");
    } catch {
      return [];
    }
  });

  const persist = (updated: CartItem[]) => {
    setItems(updated);
    localStorage.setItem("agro-cart", JSON.stringify(updated));
  };

  const addToCart = useCallback((item: Omit<CartItem, "qty">) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      const updated = existing
        ? prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i))
        : [...prev, { ...item, qty: 1 }];
      localStorage.setItem("agro-cart", JSON.stringify(updated));
      return updated;
    });
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setItems((prev) => {
      const updated = prev.filter((i) => i.id !== id);
      localStorage.setItem("agro-cart", JSON.stringify(updated));
      return updated;
    });
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: removeFromCart is stable
  const updateQty = useCallback(
    (id: string, qty: number) => {
      if (qty <= 0) {
        removeFromCart(id);
        return;
      }
      setItems((prev) => {
        const updated = prev.map((i) => (i.id === id ? { ...i, qty } : i));
        localStorage.setItem("agro-cart", JSON.stringify(updated));
        return updated;
      });
    },
    [removeFromCart],
  );

  // biome-ignore lint/correctness/useExhaustiveDependencies: persist is stable
  const clearCart = useCallback(() => {
    persist([]);
  }, []);

  const toggleWishlist = useCallback((id: string) => {
    setWishlist((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((i) => i !== id)
        : [...prev, id];
      localStorage.setItem("agro-wishlist", JSON.stringify(updated));
      return updated;
    });
  }, []);

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const count = items.reduce((sum, i) => sum + i.qty, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        total,
        count,
        isOpen,
        setIsOpen,
        wishlist,
        toggleWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
