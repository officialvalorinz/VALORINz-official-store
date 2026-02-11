import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";

const faqs = [
  {
    category: "Ordering",
    questions: [
      {
        q: "How do I place an order?",
        a: "Simply browse our collections, select your size, and add items to your cart. Proceed to checkout, enter your shipping details, and complete payment. You'll receive an order confirmation email instantly.",
      },
      {
        q: "Can I modify or cancel my order?",
        a: "We process orders quickly, so modifications are only possible within 1 hour of placing your order. Contact our support team immediately at support@valorin.com if you need changes.",
      },
      {
        q: "Do you offer gift cards?",
        a: "Yes! Digital gift cards are available in $25, $50, $100, and $200 denominations. They're delivered via email and never expire.",
      },
    ],
  },
  {
    category: "Shipping",
    questions: [
      {
        q: "How long does shipping take?",
        a: "Standard shipping takes 5-7 business days within the US. Express shipping (2-3 days) is available at checkout. International orders typically take 10-14 business days.",
      },
      {
        q: "Is shipping free?",
        a: "Yes! We offer free standard shipping on all orders over $100. Orders under $100 have a flat $7.99 shipping fee.",
      },
      {
        q: "Do you ship internationally?",
        a: "We ship to over 30 countries worldwide. International shipping costs and delivery times vary by location and are calculated at checkout.",
      },
    ],
  },
  {
    category: "Returns & Exchanges",
    questions: [
      {
        q: "What's your return policy?",
        a: "We offer hassle-free returns within 30 days of delivery. Items must be unworn, unwashed, and in original packaging with tags attached.",
      },
      {
        q: "How do I initiate a return?",
        a: "Log into your account, go to Order History, and select 'Return Item'. You'll receive a prepaid shipping label via email. Drop off at any carrier location.",
      },
      {
        q: "Can I exchange for a different size?",
        a: "Yes! Exchanges are free. Follow the same return process and indicate your preferred size. We'll ship the exchange as soon as we receive your return.",
      },
    ],
  },
  {
    category: "Product & Care",
    questions: [
      {
        q: "How do I care for my VALORIN items?",
        a: "Machine wash cold with like colors, inside out. Tumble dry low or hang dry. Do not bleach or iron directly on prints. Following these guidelines ensures your pieces last.",
      },
      {
        q: "What sizes do you offer?",
        a: "We offer sizes XS through XXL in most styles. Check our size guide on each product page for detailed measurements. Our hoodies feature an oversized fit.",
      },
      {
        q: "Are your products true to size?",
        a: "Our t-shirts are true to size with a relaxed fit. Hoodies and sweatshirts are designed oversized - we recommend your regular size for the intended fit, or size down for a more fitted look.",
      },
    ],
  },
];

const FAQ = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.map((category) => ({
    ...category,
    questions: category.questions.filter(
      (q) =>
        q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.a.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.questions.length > 0);

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
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-muted-foreground max-w-md mx-auto mb-8">
              Find answers to common questions about orders, shipping, and more.
            </p>
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions..."
                className="pl-12 bg-muted border-border focus:border-primary"
              />
            </div>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-8">
            {filteredFaqs.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <h2 className="font-display text-xl font-bold mb-4 text-primary">
                  {category.category}
                </h2>
                <div className="space-y-2">
                  {category.questions.map((item, index) => {
                    const itemId = `${category.category}-${index}`;
                    const isOpen = openItem === itemId;
                    return (
                      <div
                        key={index}
                        className="card-glow overflow-hidden"
                      >
                        <button
                          onClick={() => setOpenItem(isOpen ? null : itemId)}
                          className="w-full flex justify-between items-center p-4 text-left hover:bg-muted/50 transition-colors"
                        >
                          <span className="font-medium pr-4">{item.q}</span>
                          <ChevronDown
                            size={18}
                            className={`flex-shrink-0 transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <p className="px-4 pb-4 text-muted-foreground leading-relaxed">
                                {item.a}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}

            {filteredFaqs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No questions match your search.</p>
              </div>
            )}
          </div>

          {/* Still Have Questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto mt-16 text-center card-glow p-8"
          >
            <h3 className="font-display text-2xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <a href="/contact" className="btn-neon inline-block">
              Contact Support
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
