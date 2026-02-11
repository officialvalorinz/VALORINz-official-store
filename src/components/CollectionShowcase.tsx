import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Loader2 } from "lucide-react";
import { useShopifyCollections } from "@/hooks/useShopifyCollections";

const CollectionShowcase = () => {
  const { data: collections, isLoading } = useShopifyCollections(12);
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
            Shop by <span className="text-gradient">Collection</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Explore our curated collections designed for the modern streetwear enthusiast
          </p>
        </motion.div>

        {isLoading ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="w-6 h-6 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {collections?.map((c, index) => (
              <motion.div
                key={c.node.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <Link
                  to={`/collections?collection=${encodeURIComponent(c.node.handle)}`}
                  className="group block relative overflow-hidden rounded-2xl card-glow"
                >
                  <div className="aspect-square">
                    <img
                      src={c.node.image?.url || '/placeholder.svg'}
                      alt={c.node.image?.altText || c.node.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-2">
                      {c.node.title}
                    </h3>
                    {c.node.description && (
                      <p className="text-muted-foreground mb-4">{c.node.description}</p>
                    )}
                    <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all">
                      Shop Now <ArrowRight size={18} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CollectionShowcase;
