import { motion } from "framer-motion";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="font-display text-4xl lg:text-5xl font-bold mb-4">
              Terms of <span className="text-gradient">Service</span>
            </h1>
            <p className="text-muted-foreground mb-8">Last updated: January 2026</p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">
                  1. Agreement to Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using VALORIN's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">
                  2. Products and Pricing
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  All products are subject to availability. Prices are displayed in USD and may change without notice. We reserve the right to limit quantities and refuse orders at our discretion.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">
                  3. Orders and Payment
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By placing an order, you confirm that all information provided is accurate. We accept major credit cards and other payment methods displayed at checkout. Orders are subject to verification and acceptance.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">
                  4. Shipping and Delivery
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Shipping times are estimates and not guaranteed. VALORIN is not responsible for delays caused by carriers, customs, or other circumstances beyond our control. Risk of loss transfers to you upon delivery.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">
                  5. Returns and Refunds
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Returns are accepted within 30 days of delivery for unworn, unwashed items in original packaging. Refunds are processed within 5-7 business days of receiving the return. See our Returns page for full details.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">
                  6. Intellectual Property
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on this website, including designs, logos, images, and text, is the property of VALORIN and protected by copyright law. Unauthorized use is prohibited.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">
                  7. Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  VALORIN shall not be liable for any indirect, incidental, or consequential damages arising from your use of our products or services. Our liability is limited to the purchase price of the products.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">
                  8. Contact
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Questions about these Terms should be directed to legal@valorin.com.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
