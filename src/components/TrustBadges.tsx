import { Truck, Shield, RefreshCw, CreditCard } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over $100",
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "100% encrypted checkout",
    },
    {
      icon: RefreshCw,
      title: "Easy Returns",
      description: "30-day return policy",
    },
    {
      icon: CreditCard,
      title: "Buy Now, Pay Later",
      description: "Flexible payment options",
    },
  ];

  return (
    <section className="py-12 border-y border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left"
            >
              <div className="p-3 bg-primary/10 rounded-xl">
                <badge.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground text-sm">
                  {badge.title}
                </h4>
                <p className="text-muted-foreground text-xs">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
