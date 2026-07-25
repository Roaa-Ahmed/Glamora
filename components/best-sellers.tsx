import { Star, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const bestSellers = [
  {
    id: 1,
    name: "Premium Foundation Set",
    price: 89,
    originalPrice: 120,
    rating: 4.8,
    reviews: 234,
    image: "/luxury-foundation-makeup-set.png",
    discount: "25%",
    badge: "BEST SELLER",
  },
  {
    id: 2,
    name: "Wireless Bluetooth Headphones",
    price: 159,
    originalPrice: 199,
    rating: 4.9,
    reviews: 456,
    image: "/modern-wireless-headphones.png",
    discount: "20%",
    badge: "TOP RATED",
  },
  {
    id: 3,
    name: "Designer Handbag Collection",
    price: 299,
    originalPrice: 399,
    rating: 4.7,
    reviews: 189,
    image: "/elegant-designer-handbag.png",
    discount: "25%",
    badge: "LIMITED",
  },
  {
    id: 4,
    name: "Smart Fitness Watch",
    price: 249,
    originalPrice: 329,
    rating: 4.6,
    reviews: 567,
    image: "/modern-fitness-smartwatch.png",
    discount: "24%",
    badge: "NEW",
  },
  {
    id: 5,
    name: "Professional Makeup Brushes",
    price: 79,
    originalPrice: 99,
    rating: 4.9,
    reviews: 345,
    image: "/placeholder.svg?height=300&width=300",
    discount: "20%",
    badge: "POPULAR",
  },
]

export default function BestSellers() {
  return (
    <section className="py-16 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold tracking-wider text-sm mb-2">BEST SELLER</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Best Sellers</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {bestSellers.map((product) => (
            <Card
              key={product.id}
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-background border-border"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                    -{product.discount}
                  </Badge>
                  <Badge variant="secondary" className="absolute top-3 right-3 bg-accent text-accent-foreground">
                    {product.badge}
                  </Badge>
                  <Button
                    size="icon"
                    className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary hover:bg-primary/90"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </Button>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2 text-sm text-balance">{product.name}</h3>

                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-bold text-primary">${product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
