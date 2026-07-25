import { Star, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const featuredProducts = [
  {
    id: 1,
    name: "Luxury Skincare Set",
    price: 199,
    originalPrice: 249,
    rating: 4.9,
    reviews: 156,
    image: "/placeholder.svg?height=300&width=300",
    discount: "20%",
  },
  {
    id: 2,
    name: "Gaming Mechanical Keyboard",
    price: 129,
    originalPrice: 159,
    rating: 4.7,
    reviews: 289,
    image: "/placeholder.svg?height=300&width=300",
    discount: "19%",
  },
  {
    id: 3,
    name: "Designer Sunglasses",
    price: 179,
    originalPrice: 229,
    rating: 4.8,
    reviews: 134,
    image: "/placeholder.svg?height=300&width=300",
    discount: "22%",
  },
  {
    id: 4,
    name: "Yoga Mat & Accessories",
    price: 89,
    originalPrice: 119,
    rating: 4.6,
    reviews: 267,
    image: "/placeholder.svg?height=300&width=300",
    discount: "25%",
  },
  {
    id: 5,
    name: "Wireless Charging Station",
    price: 69,
    originalPrice: 89,
    rating: 4.5,
    reviews: 198,
    image: "/placeholder.svg?height=300&width=300",
    discount: "22%",
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold tracking-wider text-sm mb-2">FEATURED</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Featured Products</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border"
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
                  <Button
                    size="icon"
                    className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary hover:bg-primary/90"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </Button>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-card-foreground mb-2 text-sm text-balance">{product.name}</h3>

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
