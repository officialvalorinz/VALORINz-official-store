import { motion } from "framer-motion";
import { Heart, ShoppingBag, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  isNew,
  isSale,
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-glow relative overflow-hidden">
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
          {isNew && (
            <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
              NEW
            </span>
          )}
          {isSale && (
            <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
              SALE
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className={`absolute top-3 right-3 z-10 p-2 rounded-full transition-all ${
            isWishlisted
              ? "bg-accent text-accent-foreground"
              : "bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground"
          }`}
        >
          <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />
        </button>

        {/* Image */}
        <Link to={`/product/${id}`} className="block product-image-zoom">
          <div className="aspect-[3/4] bg-muted">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        </Link>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          className="absolute bottom-4 left-4 right-4 flex gap-2"
        >
          <button className="flex-1 btn-neon py-2 text-sm flex items-center justify-center gap-2">
            <ShoppingBag size={16} />
            Add to Cart
          </button>
          <Link
            to={`/product/${id}`}
            className="p-2 bg-background/80 text-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <Eye size={18} />
          </Link>
        </motion.div>
      </div>

      {/* Info */}
      <div className="mt-4 space-y-1">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">
          {category}
        </p>
        <Link to={`/product/${id}`}>
          <h3 className="font-display font-medium text-foreground hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-primary font-bold">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="text-muted-foreground line-through text-sm">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
