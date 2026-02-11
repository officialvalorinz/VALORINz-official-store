import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Yuki T.",
    rating: 5,
    text: "Absolutely love the quality! The anime print is so crisp and the fabric is super comfortable. Will definitely buy more.",
    date: "2 days ago",
    verified: true,
  },
  {
    id: 2,
    name: "Marcus R.",
    rating: 5,
    text: "Finally found a brand that gets anime streetwear right. The hoodie fits perfectly oversized and the design is fire 🔥",
    date: "1 week ago",
    verified: true,
  },
  {
    id: 3,
    name: "Sarah L.",
    rating: 4,
    text: "Great quality and fast shipping! The neon accent on the shirt looks amazing under lights. Definitely recommend.",
    date: "2 weeks ago",
    verified: true,
  },
];

const ReviewSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
            What Our <span className="text-gradient">Customers</span> Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="fill-primary text-primary" />
            ))}
          </div>
          <p className="text-muted-foreground">Based on 2,847 reviews</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-glow p-6 space-y-4"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < review.rating
                        ? "fill-primary text-primary"
                        : "text-muted"
                    }
                  />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">{review.name}</p>
                  {review.verified && (
                    <p className="text-xs text-primary">✓ Verified Purchase</p>
                  )}
                </div>
                <span className="text-xs text-muted-foreground">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
