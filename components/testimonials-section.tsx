import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Great For Quick Shopping",
    review:
      "Absolutely loved my Glamora experience! Beautiful products, unique designs, and high-quality. It's a perfect addition to my daily routine.",
    rating: 5,
    date: "18 Jan, 2024",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Ideal For Premium Quality",
    review:
      "That's a fantastic experience! It highlights the quality, uniqueness, and satisfaction with the product. If you need help crafting more reviews or any other content, feel free to ask!",
    rating: 5,
    date: "20 Feb, 2024",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "Quick And Easy Shopping",
    review:
      "Thank you! I'm glad you liked the experience. If you need assistance with anything else—whether it's more reviews, taglines, or anything creative, I'm here to help!",
    rating: 5,
    date: "28 Jan, 2024",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold tracking-wider text-sm mb-2">TESTIMONIALS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">What Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <h3 className="font-semibold text-card-foreground mb-3 text-balance">{testimonial.title}</h3>

                <p className="text-muted-foreground mb-6 text-sm leading-relaxed text-pretty">{testimonial.review}</p>

                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-card-foreground text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.date}</p>
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
