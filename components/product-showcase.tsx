"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const showcaseProducts = [
  {
    id: 1,
    title: "Premium Makeup Collection",
    subtitle: "BEAUTY ESSENTIALS",
    description: "Discover our curated selection of premium cosmetics",
    image: "/luxury-makeup-collection-with-lipsticks-and-eyesha.png",
    cta: "Shop Beauty",
  },
  {
    id: 2,
    title: "Latest Fashion Trends",
    subtitle: "STYLE & FASHION",
    description: "Elevate your wardrobe with our trending pieces",
    image: "/modern-fashion-clothing-display-with-trendy-outfit.png",
    cta: "Shop Fashion",
  },
  {
    id: 3,
    title: "Smart Electronics",
    subtitle: "TECH INNOVATION",
    description: "Experience the future with our cutting-edge devices",
    image: "/modern-electronics-and-gadgets-display-with-smartp.png",
    cta: "Shop Tech",
  },
  {
    id: 4,
    title: "Sports & Fitness",
    subtitle: "ACTIVE LIFESTYLE",
    description: "Gear up for your fitness journey",
    image: "/sports-equipment-and-fitness-gear-display-with-sne.png",
    cta: "Shop Sports",
  },
]

export default function ProductShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % showcaseProducts.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % showcaseProducts.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + showcaseProducts.length) % showcaseProducts.length)
  }

  return (
    <section className="relative min-h-[70vh] sm:min-h-[75vh] overflow-hidden bg-gradient-to-br from-card to-background">
      <div className="absolute inset-0">
        {showcaseProducts.map((product, index) => (
          <div
            key={product.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 transform translate-x-0"
                : index < currentSlide
                  ? "opacity-0 transform -translate-x-full"
                  : "opacity-0 transform translate-x-full"
            }`}
          >
            <div className="container mx-auto px-3 sm:px-4 h-full flex items-center py-8 sm:py-10">
              <div className="grid gap-8 md:grid-cols-2 md:gap-10 lg:gap-12 items-center w-full">
                <div className="space-y-5 sm:space-y-6 animate-fade-in text-center md:text-left">
                  <div className="space-y-2">
                    <p className="text-primary font-semibold tracking-wider text-sm">{product.subtitle}</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                      {product.title}
                    </h2>
                    <p className="text-muted-foreground text-base sm:text-lg max-w-md mx-auto md:mx-0 text-pretty">
                      {product.description}
                    </p>
                  </div>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 text-base sm:text-lg"
                  >
                    {product.cta}
                  </Button>
                </div>
                <div className="relative mx-auto w-full max-w-xl md:mx-0">
                  <Card className="overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="w-full h-[260px] sm:h-[320px] md:h-[360px] lg:h-[400px] object-cover"
                    />
                  </Card>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm border-border hover:bg-background"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm border-border hover:bg-background"
        onClick={nextSlide}
      >
        <ChevronRight className="w-5 h-5" />
      </Button>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {showcaseProducts.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-primary scale-125" : "bg-background/50 hover:bg-background/70"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}
