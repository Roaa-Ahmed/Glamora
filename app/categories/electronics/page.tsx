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
    title: "Latest Tech Gadgets",
    subtitle: "CUTTING EDGE",
    description: "Discover the newest technology and electronic devices",
    image: "/modern-electronics-gadgets-technology-devices.png",
  },
  {
    id: 2,
    title: "Smart Home Solutions",
    subtitle: "CONNECTED LIVING",
    description: "Transform your home with smart technology",
    image: "/smart-home-devices-technology.png",
  },
  {
    id: 3,
    title: "Gaming Equipment",
    subtitle: "GAMING ZONE",
    description: "Professional gaming gear for ultimate performance",
    image: "/gaming-equipment-setup-rgb.png",
  },
]

const bestSellers = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 129.99,
    originalPrice: 179.99,
    rating: 4.8,
    image: "/wireless-bluetooth-headphones-black.png",
    category: "electronics",
  },
  {
    id: 2,
    name: "4K Smart TV 55 inch",
    price: 599.99,
    originalPrice: 799.99,
    rating: 4.7,
    image: "/4k-smart-tv-55-inch-display.png",
    category: "electronics",
  },
  {
    id: 3,
    name: "Gaming Mechanical Keyboard",
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.9,
    image: "/gaming-mechanical-keyboard-rgb.png",
    category: "electronics",
  },
  {
    id: 4,
    name: "Smartphone Pro Max",
    price: 899.99,
    originalPrice: 1199.99,
    rating: 4.6,
    image: "/smartphone-pro-max-latest.png",
    category: "electronics",
  },
  {
    id: 5,
    name: "Wireless Charging Pad",
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.5,
    image: "/wireless-charging-pad-fast.png",
    category: "electronics",
  },
  {
    id: 6,
    name: "Laptop Gaming Pro",
    price: 1299.99,
    originalPrice: 1699.99,
    rating: 4.8,
    image: "/laptop-gaming-pro-performance.png",
    category: "electronics",
  },
]

const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 129.99,
    originalPrice: 179.99,
    rating: 4.8,
    reviews: 245,
    image: "/wireless-bluetooth-headphones-black.png",
    badge: "Best Seller",
    discount: "28%",
  },
  {
    id: 2,
    name: "4K Smart TV 55 inch",
    price: 599.99,
    originalPrice: 799.99,
    rating: 4.7,
    reviews: 156,
    image: "/4k-smart-tv-55-inch-display.png",
    badge: "Popular",
    discount: "25%",
  },
  {
    id: 3,
    name: "Gaming Mechanical Keyboard",
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.9,
    reviews: 189,
    image: "/gaming-mechanical-keyboard-rgb.png",
    badge: "Gaming",
    discount: "31%",
  },
  {
    id: 4,
    name: "Smartphone Pro Max",
    price: 899.99,
    originalPrice: 1199.99,
    rating: 4.6,
    reviews: 334,
    image: "/smartphone-pro-max-latest.png",
    badge: "Flagship",
    discount: "25%",
  },
  {
    id: 5,
    name: "Wireless Charging Pad",
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.5,
    reviews: 123,
    image: "/wireless-charging-pad-fast.png",
    badge: "Convenient",
    discount: "33%",
  },
  {
    id: 6,
    name: "Laptop Gaming Pro",
    price: 1299.99,
    originalPrice: 1699.99,
    rating: 4.8,
    reviews: 87,
    image: "/laptop-gaming-pro-performance.png",
    badge: "High Performance",
    discount: "24%",
  },
]

export default function ElectronicsPage() {
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
      <section className="relative h-[60vh] overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-950/20 dark:to-cyan-950/20">
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
      <AnimatedBestSellers products={bestSellers} title="Best Sellers in Electronics" />

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Electronics & Technology</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore cutting-edge electronics and the latest technology gadgets
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
