"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, ShoppingCart, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedBestSellers from "@/components/animated-best-sellers"

const showcaseProducts = [
  {
    id: 1,
    title: "Premium Lipstick Collection",
    subtitle: "LUXURY BEAUTY",
    description: "Discover our exclusive range of long-lasting lipsticks",
    image: "/makeup-cosmetics-beauty-products-colorful.png",
  },
  {
    id: 2,
    title: "Professional Makeup Brushes",
    subtitle: "BEAUTY TOOLS",
    description: "Professional-grade brushes for flawless application",
    image: "/professional-makeup-brushes-set.png",
  },
  {
    id: 3,
    title: "Skincare Essentials",
    subtitle: "GLOWING SKIN",
    description: "Complete skincare routine for radiant skin",
    image: "/skincare-serum-moisturizer.png",
  },
]

const bestSellers = [
  {
    id: 1,
    name: "Matte Liquid Lipstick",
    price: 24.99,
    originalPrice: 34.99,
    rating: 4.8,
    image: "/matte-liquid-lipstick-red.png",
    category: "makeup",
  },
  {
    id: 2,
    name: "Eyeshadow Palette Pro",
    price: 45.99,
    originalPrice: 65.99,
    rating: 4.9,
    image: "/eyeshadow-palette-colorful.png",
    category: "makeup",
  },
  {
    id: 3,
    name: "Foundation Perfect Match",
    price: 32.99,
    originalPrice: 42.99,
    rating: 4.7,
    image: "/foundation-bottle-makeup.png",
    category: "makeup",
  },
  {
    id: 4,
    name: "Mascara Volume Max",
    price: 18.99,
    originalPrice: 28.99,
    rating: 4.6,
    image: "/mascara-tube-black.png",
    category: "makeup",
  },
  {
    id: 5,
    name: "Blush Powder Natural",
    price: 22.99,
    originalPrice: 29.99,
    rating: 4.8,
    image: "/blush-powder-compact-pink.png",
    category: "makeup",
  },
  {
    id: 6,
    name: "Professional Brush Set",
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.9,
    image: "/professional-makeup-brushes-set.png",
    category: "makeup",
  },
]

const products = [
  {
    id: 1,
    name: "Matte Liquid Lipstick",
    price: 24.99,
    originalPrice: 34.99,
    rating: 4.8,
    reviews: 156,
    image: "/matte-liquid-lipstick-red.png",
    badge: "Best Seller",
    discount: "30%",
  },
  {
    id: 2,
    name: "Eyeshadow Palette Pro",
    price: 45.99,
    originalPrice: 65.99,
    rating: 4.9,
    reviews: 203,
    image: "/eyeshadow-palette-colorful.png",
    badge: "New",
    discount: "30%",
  },
  {
    id: 3,
    name: "Foundation Perfect Match",
    price: 32.99,
    originalPrice: 42.99,
    rating: 4.7,
    reviews: 89,
    image: "/foundation-bottle-makeup.png",
    badge: "Popular",
    discount: "23%",
  },
  {
    id: 4,
    name: "Mascara Volume Max",
    price: 18.99,
    originalPrice: 28.99,
    rating: 4.6,
    reviews: 134,
    image: "/mascara-tube-black.png",
    badge: "Sale",
    discount: "34%",
  },
  {
    id: 5,
    name: "Blush Powder Natural",
    price: 22.99,
    originalPrice: 29.99,
    rating: 4.8,
    reviews: 78,
    image: "/blush-powder-compact-pink.png",
    badge: "Trending",
    discount: "23%",
  },
  {
    id: 6,
    name: "Concealer Full Coverage",
    price: 26.99,
    originalPrice: 36.99,
    rating: 4.7,
    reviews: 112,
    image: "/concealer-tube-makeup.png",
    badge: "Editor's Choice",
    discount: "27%",
  },
]

export default function MakeupBeautyPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % showcaseProducts.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % showcaseProducts.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + showcaseProducts.length) % showcaseProducts.length)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Digital Display Showcase */}
      <section className="relative h-[60vh] overflow-hidden bg-gradient-to-br from-pink-50 to-rose-100 dark:from-pink-950/20 dark:to-rose-950/20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

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
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                <div className="space-y-6 z-10 relative">
                  <div className="space-y-2">
                    <p className="text-primary font-semibold tracking-wider text-sm">{product.subtitle}</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
                      {product.title}
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-md text-pretty">{product.description}</p>
                  </div>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
                  >
                    Shop Now
                  </Button>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-3xl" />
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="relative w-full h-[350px] object-cover rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
          onClick={prevSlide}
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
          onClick={nextSlide}
        >
          <ChevronRight className="w-5 h-5" />
        </Button>

        {/* Indicators */}
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

      {/* Animated Best Sellers */}
      <AnimatedBestSellers products={bestSellers} title="Best Sellers in Makeup & Beauty" />

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Makeup & Beauty Products</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover our premium collection of makeup and beauty products for every occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">{product.badge}</Badge>
                  )}
                  {product.discount && (
                    <Badge variant="destructive" className="absolute top-3 right-3">
                      -{product.discount}
                    </Badge>
                  )}
                  <Button
                    size="icon"
                    variant="outline"
                    className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 backdrop-blur-sm"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>

                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-balance">{product.name}</h3>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews})</span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-primary">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                      )}
                    </div>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
