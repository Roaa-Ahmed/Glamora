"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation"

const categories = [
  {
    name: "Makeup & Beauty",
    icon: "/makeup-brush-and-lipstick-icon.png",
    productCount: "150+ Products",
    backgroundImage: "/makeup-cosmetics-beauty-products-colorful.png",
    link: "/categories/makeup-beauty",
    description: "Discover premium cosmetics and beauty essentials",
  },
  {
    name: "Fashion & Clothing",
    icon: "/fashion-dress-and-shirt-icon.png",
    productCount: "300+ Products",
    backgroundImage: "/fashion-clothing-trendy-outfits-stylish.png",
    link: "/categories/fashion-clothing",
    description: "Trendy fashion for every style and occasion",
  },
  {
    name: "Electronics",
    icon: "/smartphone-and-laptop-icon.png",
    productCount: "200+ Products",
    backgroundImage: "/modern-electronics-gadgets-technology-devices.png",
    link: "/categories/electronics",
    description: "Latest tech gadgets and electronic devices",
  },
]

export default function CategorySection() {
  const router = useRouter()

  const handleCategoryClick = (link: string) => {
    router.push(link)
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold tracking-wider text-sm mb-2">OUR STORE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Shop by Categories</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <Card
              key={index}
              onClick={() => handleCategoryClick(category.link)}
              className="group cursor-pointer hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-card border-border overflow-hidden relative h-72"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${category.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <CardContent className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary/80 transition-colors">
                    <img
                      src={category.icon || "/placeholder.svg"}
                      alt={category.name}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>
                <h3 className="font-bold text-white text-xl mb-2 text-balance">{category.name}</h3>
                <p className="text-white/80 text-sm mb-2">{category.description}</p>
                <p className="text-xs text-white/60">{category.productCount}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
