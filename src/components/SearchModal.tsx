import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useShopifyProducts } from "@/hooks/useShopifyProducts";
import { useDebounce } from "@/hooks/useDebounce";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 300);
  
  const { data: products, isLoading } = useShopifyProducts(
    20,
    debouncedQuery ? `title:*${debouncedQuery}*` : undefined
  );

  const filteredProducts = debouncedQuery
    ? products?.filter(p => 
        p.node.title.toLowerCase().includes(debouncedQuery.toLowerCase())
      )
    : [];

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  const handleProductClick = () => {
    setQuery("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
  <DialogContent hideClose={!!query} className="sm:max-w-2xl p-0 gap-0 overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
          <Search className="w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border-0 focus-visible:ring-0 text-lg placeholder:text-muted-foreground"
            autoFocus
          />
          {query && (
            <button
              onClick={() => {
                setQuery("");
                onClose();
              }}
              className="p-1 hover:bg-muted rounded-full transition-colors"
            >
              <X size={18} className="text-muted-foreground" />
            </button>
          )}
        </div>

        <div className="max-h-[60vh] overflow-y-auto">
          {isLoading && debouncedQuery && (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-6 h-6 animate-spin text-primary" />
            </div>
          )}

          {!isLoading && debouncedQuery && filteredProducts?.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              No products found for "{debouncedQuery}"
            </div>
          )}

          {!debouncedQuery && (
            <div className="text-center py-12 text-muted-foreground">
              Start typing to search products...
            </div>
          )}

          <AnimatePresence mode="wait">
            {filteredProducts && filteredProducts.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="divide-y divide-border"
              >
                {filteredProducts.map((product) => {
                  const image = product.node.images.edges[0]?.node;
                  const price = product.node.priceRange.minVariantPrice;

                  return (
                    <Link
                      key={product.node.id}
                      to={`/product/${product.node.handle}`}
                      onClick={handleProductClick}
                      className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors"
                    >
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                        {image ? (
                          <img
                            src={image.url}
                            alt={image.altText || product.node.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs">
                            No image
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-foreground truncate">
                          {product.node.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {product.node.productType || "Product"}
                        </p>
                      </div>
                      <p className="text-primary font-semibold">
                        ${parseFloat(price.amount).toFixed(2)}
                      </p>
                    </Link>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;
