import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function NewsletterSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-card to-accent">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto overflow-hidden shadow-2xl bg-background border-border">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 items-center">
              <div className="relative overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Newsletter signup"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12">
                <div className="text-center">
                  <p className="text-primary font-semibold tracking-wider text-sm mb-2">HANDMADE ART</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
                    Get The Special Gift in
                    <br />
                    Your Side Pocket
                  </h3>
                  <p className="text-muted-foreground mb-6 text-pretty">
                    Subscribe to our newsletter and get exclusive offers, new product updates, and special discounts
                    delivered to your inbox.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input placeholder="Your email address" className="flex-1 bg-muted/50 border-border" />
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6">Subscribe</Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
