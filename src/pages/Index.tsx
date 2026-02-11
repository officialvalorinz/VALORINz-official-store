import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import FeaturedProducts from "@/components/FeaturedProducts";
import CollectionShowcase from "@/components/CollectionShowcase";
import ReviewSection from "@/components/ReviewSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <main>
        <HeroSection />
        <TrustBadges />
        <FeaturedProducts />
        <CollectionShowcase />
        <ReviewSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
