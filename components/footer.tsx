import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">G</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">Glamora</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your ultimate destination for premium products across makeup, fashion, electronics, and sports. Discover
              quality and style in every purchase.
            </p>
            <div className="flex gap-3">
              <Button
                size="icon"
                variant="outline"
                className="hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Instagram className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {[
                "About Us",
                "Contact",
                "FAQ",
                "Shipping Info",
                "Returns",
                "Size Guide",
                "Track Order",
                "Gift Cards",
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Categories</h4>
            <ul className="space-y-2">
              {[
                "Makeup & Beauty",
                "Fashion & Clothing",
                "Electronics",
                "Sports & Fitness",
                "Home & Living",
                "Accessories",
                "Health & Wellness",
                "Books & Media",
              ].map((category) => (
                <li key={category}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Stay Connected</h4>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>support@glamora.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>New York, NY 10001</span>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-foreground">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <Input placeholder="Enter your email" className="flex-1 text-sm" />
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2024 Glamora. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
