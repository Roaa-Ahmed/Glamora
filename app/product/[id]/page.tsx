"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Star, ShoppingCart, Heart, Minus, Plus, ArrowLeft, Shield, Truck, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Mock product data - in real app this would come from API
const productData = {
  1: {
    id: 1,
    name: "Matte Liquid Lipstick",
    price: 24.99,
    originalPrice: 34.99,
    rating: 4.8,
    reviews: 156,
    images: ["/matte-liquid-lipstick-red.png", "/lipstick-collection-colors.png", "/lipstick-application-demo.png"],
    badge: "Best Seller",
    discount: "30%",
    category: "Makeup & Beauty",
    description:
      "Long-lasting matte liquid lipstick with intense color payoff. Formulated with nourishing ingredients for comfortable all-day wear.",
    features: [
      "16-hour long-lasting formula",
      "Highly pigmented colors",
      "Comfortable matte finish",
      "Cruelty-free and vegan",
      "Available in 12 stunning shades",
    ],
    specifications: {
      Brand: "Glamora Beauty",
      Volume: "3.5ml",
      Finish: "Matte",
      Coverage: "Full",
      "Skin Type": "All skin types",
    },
    inStock: true,
    stockCount: 45,
  },
  2: {
    id: 2,
    name: "Designer Evening Dress",
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.9,
    reviews: 87,
    images: ["/elegant-evening-dress-black.png", "/dress-detail-fabric.png", "/dress-model-wearing.png"],
    badge: "Best Seller",
    discount: "31%",
    category: "Fashion & Clothing",
    description:
      "Elegant designer evening dress perfect for special occasions. Made from premium fabric with exquisite attention to detail.",
    features: [
      "Premium quality fabric",
      "Elegant silhouette design",
      "Perfect for special occasions",
      "Available in multiple sizes",
      "Professional tailoring",
    ],
    specifications: {
      Brand: "Glamora Fashion",
      Material: "Premium Polyester Blend",
      Care: "Dry clean only",
      Fit: "Regular",
      Occasion: "Evening/Formal",
    },
    inStock: true,
    stockCount: 23,
  },
}

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const product = productData[params.id as keyof typeof productData]

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Button onClick={() => router.push("/")} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    )
  }

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, Math.min(product.stockCount, quantity + change)))
  }

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log(`Added ${quantity} of ${product.name} to cart`)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <button onClick={() => router.push("/")} className="hover:text-primary transition-colors">
            Home
          </button>
          <span>/</span>
          <button
            onClick={() =>
              router.push(`/categories/${product.category.toLowerCase().replace(" & ", "-").replace(" ", "-")}`)
            }
            className="hover:text-primary transition-colors"
          >
            {product.category}
          </button>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-2xl bg-muted">
              <img
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 transition-colors ${
                    selectedImage === index ? "border-primary" : "border-border hover:border-primary/50"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-primary text-primary-foreground">{product.badge}</Badge>
                {product.discount && <Badge variant="destructive">-{product.discount}</Badge>}
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
              <p className="text-muted-foreground">{product.category}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="font-semibold ml-2">{product.rating}</span>
              </div>
              <span className="text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-primary">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">${product.originalPrice}</span>
              )}
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-semibold">Quantity:</span>
                <div className="flex items-center border border-border rounded-lg">
                  <Button variant="ghost" size="sm" onClick={() => handleQuantityChange(-1)} disabled={quantity <= 1}>
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="px-4 py-2 font-semibold">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= product.stockCount}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <span className="text-sm text-muted-foreground">{product.stockCount} in stock</span>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="flex-1 bg-primary hover:bg-primary/90" onClick={handleAddToCart}>
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={isWishlisted ? "text-red-500 border-red-500" : ""}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`} />
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <h3 className="font-semibold">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-5 h-5 text-primary" />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Truck className="w-5 h-5 text-primary" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <RotateCcw className="w-5 h-5 text-primary" />
                <span>Easy Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="specifications" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
          </TabsList>

          <TabsContent value="specifications" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Product Specifications</h3>
                <div className="grid gap-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-border last:border-0">
                      <span className="font-medium">{key}:</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Customer Reviews</h3>
                <p className="text-muted-foreground">Reviews feature coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="shipping" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Shipping & Returns</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-medium mb-2">Shipping Information</h4>
                    <p className="text-muted-foreground">
                      Free standard shipping on orders over $50. Express shipping available.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Return Policy</h4>
                    <p className="text-muted-foreground">30-day return policy. Items must be in original condition.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  )
}
