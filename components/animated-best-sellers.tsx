"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  rating: number
  image: string
  category: string
}

interface AnimatedBestSellersProps {
  products: Product[]
  title?: string
}

export default function AnimatedBestSellers({ products, title = "Best Sellers" }: AnimatedBestSellersProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [products.length])

  return (
    <section className="py-12 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-primary font-semibold tracking-wider text-sm mb-2">TRENDING NOW</p>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">{title}</h3>
        </div>

        {/* Animated circular products */}
        <div className="relative h-32 mb-8 overflow-hidden">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 120}px)` }}
          >
            {[...products, ...products].map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="flex-shrink-0 w-24 h-24 mx-6 relative group cursor-pointer"
              >
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  ${product.price}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured product cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border"
            >
              <CardContent className="p-4">
                <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-muted">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h4>

                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-1">({product.rating})</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-foreground">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                      )}
                    </div>
                  </div>

                  <Button
                    size="sm"
                    className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
