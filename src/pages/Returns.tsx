import { motion } from "framer-motion";
import { RefreshCw, Package, CreditCard, HelpCircle } from "lucide-react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Returns = () => {
  const steps = [
    {
      step: 1,
      title: "Initiate Return",
      description: "Log into your account and select the item you wish to return from your order history.",
    },
    {
      step: 2,
      title: "Print Label",
      description: "Download and print the prepaid return shipping label we send to your email.",
    },
    {
      step: 3,
      title: "Ship It Back",
      description: "Pack the item in its original packaging and drop it off at any carrier location.",
    },
    {
      step: 4,
      title: "Get Refunded",
      description: "Refund processed within 5-7 business days of receiving your return.",
    },
  ];

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
              Returns & <span className="text-gradient">Exchanges</span>
            </h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              We want you to love your purchase. If not, returns are easy.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Policy Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: RefreshCw, title: "30-Day Returns", desc: "Full refund within 30 days" },
                { icon: Package, title: "Free Return Shipping", desc: "Prepaid labels provided" },
                { icon: CreditCard, title: "Fast Refunds", desc: "Processed in 5-7 days" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card-glow p-6 text-center"
                >
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-display font-bold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* How It Works */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-bold mb-8 text-center">
                How It <span className="text-gradient">Works</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {steps.map((step, index) => (
                  <div key={step.step} className="text-center relative">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                      {step.step}
                    </div>
                    <h3 className="font-display font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-border" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Return Conditions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="card-glow p-8 mb-12"
            >
              <h3 className="font-display text-xl font-bold mb-4">Return Conditions</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  Items must be unworn, unwashed, and in original condition
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  All tags must be attached
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  Original packaging should be included
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  Sale items are final sale and cannot be returned
                </li>
              </ul>
            </motion.div>

            {/* Need Help */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center card-glow p-8"
            >
              <HelpCircle className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-display text-xl font-bold mb-2">Need Help?</h3>
              <p className="text-muted-foreground mb-4">
                Our support team is here to assist with any return questions.
              </p>
              <a href="/contact" className="btn-neon inline-block">
                Contact Support
              </a>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Returns;
