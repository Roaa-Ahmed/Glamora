import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function PromotionalCards() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* First promotional card */}
          <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-accent to-card border-border">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 h-full">
                <div className="p-8 flex flex-col justify-center">
                  <p className="text-primary font-semibold tracking-wider text-sm mb-2">SAVE MORE, SHOP NOW!</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
                    Premium Quality,
                    <br />
                    Made With Love
                  </h3>
                  <p className="text-muted-foreground mb-6 text-pretty">
                    Handcrafted with care, made with love, for you and your loved ones
                  </p>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-fit">Discover Now</Button>
                </div>
                <div className="relative overflow-hidden">
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="Handcrafted products"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Second promotional card */}
          <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-accent border-border">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 h-full">
                <div className="p-8 flex flex-col justify-center">
                  <p className="text-primary font-semibold tracking-wider text-sm mb-2">LIMITED TIME OFFER</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
                    Perfect Gift
                    <br />
                    Ideas for Friends
                  </h3>
                  <p className="text-muted-foreground mb-6 text-pretty">
                    "Unique handmade, perfect for friends you love"
                  </p>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-fit">Discover Now</Button>
                </div>
                <div className="relative overflow-hidden">
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="Gift ideas"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
