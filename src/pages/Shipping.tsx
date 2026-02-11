import { motion } from "framer-motion";
import { Truck, Clock, Globe, Package } from "lucide-react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Shipping = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="font-display text-4xl lg:text-5xl font-bold mb-4">
              Shipping <span className="text-gradient">Information</span>
            </h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              Everything you need to know about getting your order delivered.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Shipping Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  icon: Truck,
                  title: "Standard Shipping",
                  price: "FREE over $100",
                  time: "5-7 Business Days",
                  description: "Free on orders over $100, otherwise $7.99",
                },
                {
                  icon: Clock,
                  title: "Express Shipping",
                  price: "$14.99",
                  time: "2-3 Business Days",
                  description: "Faster delivery for urgent orders",
                },
              ].map((option, index) => (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card-glow p-6"
                >
                  <option.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-display text-xl font-bold mb-2">{option.title}</h3>
                  <p className="text-primary font-bold mb-1">{option.price}</p>
                  <p className="text-muted-foreground text-sm mb-2">{option.time}</p>
                  <p className="text-muted-foreground text-sm">{option.description}</p>
                </motion.div>
              ))}
            </div>

            {/* International */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card-glow p-8 mb-12"
            >
              <div className="flex items-start gap-4">
                <Globe className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-display text-xl font-bold mb-2">International Shipping</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We ship to over 30 countries worldwide. International shipping costs are calculated at checkout based on your location and order weight. Delivery typically takes 10-14 business days.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Please note: International orders may be subject to customs duties and taxes, which are the responsibility of the recipient.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Tracking */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="card-glow p-8"
            >
              <div className="flex items-start gap-4">
                <Package className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-display text-xl font-bold mb-2">Order Tracking</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Once your order ships, you'll receive an email with your tracking number. You can track your package through your account dashboard or by clicking the link in your shipping confirmation email.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shipping;
