import { motion } from "framer-motion";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-image.jpg";

const About = () => {
  const stats = [
    { value: "50K+", label: "Happy Customers" },
    { value: "200+", label: "Unique Designs" },
    { value: "30+", label: "Countries Shipped" },
    { value: "4.8", label: "Average Rating" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="About VALORIN"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="font-display text-4xl lg:text-6xl font-bold mb-6">
                Our <span className="text-gradient">Story</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Born from a love of anime culture and street fashion, VALORIN represents the intersection of bold self-expression and premium quality.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
                  More Than Just <span className="text-gradient">Clothing</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We started VALORIN in 2020 with a simple mission: create streetwear that lets people wear their passions. As lifelong anime fans and fashion enthusiasts, we saw a gap in the market for truly premium anime-inspired clothing.
                  </p>
                  <p>
                    Every piece we create tells a story. Whether it's an iconic quote from your favorite anime, a minimalist aesthetic design, or bold typography that makes a statement - our clothes are designed to spark conversations and connections.
                  </p>
                  <p>
                    We obsess over quality. From the heavyweight cotton we source to the precision of our prints, every detail matters. When you wear VALORIN, you're wearing art that's built to last.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl overflow-hidden card-glow">
                  <img
                    src={heroImage}
                    alt="VALORIN Story"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 glass p-4 rounded-xl border border-border">
                  <p className="text-neon font-display text-2xl font-bold">Est. 2020</p>
                  <p className="text-sm text-muted-foreground">Tokyo Inspired</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-4xl lg:text-5xl font-display font-bold text-gradient mb-2">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl lg:text-4xl font-bold text-center mb-12"
            >
              What We <span className="text-gradient">Stand For</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Quality First",
                  description:
                    "Premium materials, meticulous construction. Every piece is made to be worn and loved for years.",
                },
                {
                  title: "Bold Expression",
                  description:
                    "Fashion should be personal. Our designs help you express your unique story and passions.",
                },
                {
                  title: "Community Driven",
                  description:
                    "We're built by fans, for fans. Your feedback shapes what we create next.",
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-glow p-8 text-center"
                >
                  <h3 className="font-display text-xl font-bold mb-4 text-neon">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
