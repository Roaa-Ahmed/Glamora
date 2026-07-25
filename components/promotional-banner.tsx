import { Button } from "@/components/ui/button"

export default function PromotionalBanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-card to-accent relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-primary font-semibold tracking-wider text-sm mb-4">HURRY! LIMITED TIME OFFER</p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Unique Collections
            <br />
            <span className="text-primary">Made with Care</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto text-pretty">
            Discover our exclusive range of premium products crafted with attention to detail and designed to elevate
            your lifestyle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              Discover Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 bg-transparent"
            >
              View Collection
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
