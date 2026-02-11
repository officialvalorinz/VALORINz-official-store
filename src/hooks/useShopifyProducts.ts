import { useQuery } from '@tanstack/react-query';
import { fetchProducts, fetchProductByHandle, type ShopifyProduct } from '@/lib/shopify.tsx';

export function useShopifyProducts(first: number = 20, query?: string) {
  return useQuery<ShopifyProduct[]>({
    queryKey: ['shopify-products', first, query],
    queryFn: () => fetchProducts(first, query),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

export function useShopifyProduct(handle: string) {
  return useQuery({
    queryKey: ['shopify-product', handle],
    queryFn: () => fetchProductByHandle(handle),
    enabled: !!handle,
    staleTime: 5 * 60 * 1000,
  });
}
