import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Loader2, PackageOpen } from "lucide-react";
import { useShopifyProducts } from "@/hooks/useShopifyProducts";
import ShopifyProductCard from "./ShopifyProductCard";

// Fallback images for empty store
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const placeholderProducts = [
  { id: 1, name: "Anime Spirit Hoodie", price: 89.99, image: product1, category: "Hoodies" },
  { id: 2, name: "Quote Series Tee", price: 49.99, image: product2, category: "T-Shirts" },
  { id: 3, name: "Minimal Logo Crew", price: 79.99, image: product3, category: "Sweatshirts" },
  { id: 4, name: "Techwear Cargo Pants", price: 129.99, image: product4, category: "Bottoms" },
];

const FeaturedProducts = () => {
  const { data: products, isLoading, error } = useShopifyProducts(8);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12"
        >
          <div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-2">
              Featured <span className="text-gradient">Drops</span>
            </h2>
            <p className="text-muted-foreground">
              Our latest and most popular pieces
            </p>
          </div>
          <Link
            to="/collections"
            className="btn-neon-outline text-sm"
          >
            View All Products
          </Link>
        </motion.div>

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground">Failed to load products</p>
          </div>
        ) : products && products.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {products.slice(0, 8).map((product) => (
              <ShopifyProductCard key={product.node.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <PackageOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-display text-xl font-bold mb-2">No Products Yet</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Your store doesn't have any products yet. Create your first product by telling us what you'd like to sell!
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 opacity-50">
              {placeholderProducts.map((product) => (
                <div key={product.id} className="card-glow relative overflow-hidden">
                  <div className="aspect-[3/4] bg-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-muted-foreground uppercase">{product.category}</p>
                    <h3 className="font-display font-medium">{product.name}</h3>
                    <p className="text-primary font-bold">${product.price}</p>
                  </div>
                  <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
                    <span className="text-sm text-muted-foreground">Sample Product</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
