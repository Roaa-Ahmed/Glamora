import Header from "@/components/header"
import ProductShowcase from "@/components/product-showcase"
import CategorySection from "@/components/category-section"
import FeaturedProducts from "@/components/featured-products"
import PromotionalBanner from "@/components/promotional-banner"
import PromotionalCards from "@/components/promotional-cards"
import NewsletterSection from "@/components/newsletter-section"
import TestimonialsSection from "@/components/testimonials-section"
import BrandLogos from "@/components/brand-logos"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ProductShowcase />
        <CategorySection />
        <PromotionalBanner />
        <FeaturedProducts />
        <PromotionalCards />
        <BrandLogos />
        <NewsletterSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
