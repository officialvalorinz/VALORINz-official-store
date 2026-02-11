import { useQuery } from '@tanstack/react-query';
import { fetchCollections, type ShopifyCollection } from '@/lib/shopify.tsx';

export function useShopifyCollections(first: number = 20) {
  return useQuery<ShopifyCollection[]>({
    queryKey: ['shopify-collections', first],
    queryFn: () => fetchCollections(first),
    staleTime: 5 * 60 * 1000,
  });
}

export default useShopifyCollections;
