import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { type ShopifyProduct } from '@/lib/shopify.tsx';

export interface WishlistItem {
  product: ShopifyProduct;
  addedAt: number;
}

interface WishlistStore {
  items: WishlistItem[];
  addItem: (product: ShopifyProduct) => void;
  removeItem: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product) => {
        const { items } = get();
        if (items.some(item => item.product.node.id === product.node.id)) {
          return;
        }
        set({ items: [...items, { product, addedAt: Date.now() }] });
      },

      removeItem: (productId) => {
        const { items } = get();
        set({ items: items.filter(item => item.product.node.id !== productId) });
      },

      isInWishlist: (productId) => {
        return get().items.some(item => item.product.node.id === productId);
      },

      clearWishlist: () => set({ items: [] }),
    }),
    {
      name: 'valorin-wishlist',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
