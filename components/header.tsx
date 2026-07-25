"use client"

import { useState } from "react"
import { Search, ShoppingCart, User, Heart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-card/80 backdrop-blur-md border-b border-border/50 sticky top-0 z-50 shadow-lg">
      <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-2 px-4 text-center text-sm font-medium">
        <span>✨ Free shipping on orders over $50 • 30-day returns • New arrivals daily!</span>
      </div>

      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-fit">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground font-bold text-xl">G</span>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Glamora
            </h1>
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            <a
              href="#"
              className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
            >
              Home
            </a>
            <div className="relative group">
              <a
                href="#"
                className="text-foreground hover:text-primary transition-all duration-300 flex items-center gap-1 font-medium hover:scale-105"
              >
                Shop
                <span className="text-xs transition-transform group-hover:rotate-180">▼</span>
              </a>
            </div>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
            >
              Categories
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
            >
              Products
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
            >
              Top Deals
            </a>
          </nav>

          <div className="hidden md:flex items-center flex-1 max-w-lg mx-6">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search for makeup, fashion, electronics..."
                className="pl-12 pr-4 py-3 bg-muted/30 border-border/50 rounded-xl focus:bg-card focus:border-primary/50 transition-all duration-300"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex hover:bg-primary/10 hover:text-primary transition-all duration-300 rounded-xl"
            >
              <User className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:bg-primary/10 hover:text-primary transition-all duration-300 rounded-xl"
            >
              <Heart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-secondary to-accent text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg">
                2
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:bg-primary/10 hover:text-primary transition-all duration-300 rounded-xl"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-primary to-secondary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg">
                3
              </span>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden hover:bg-primary/10 hover:text-primary transition-all duration-300 rounded-xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border/50 pt-4 bg-card/50 rounded-xl backdrop-blur-sm">
            <div className="flex flex-col gap-4 p-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input placeholder="Search products..." className="pl-12 bg-muted/30 border-border/50 rounded-xl" />
              </div>
              <nav className="flex flex-col gap-3">
                <a
                  href="#"
                  className="text-foreground hover:text-primary transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-primary/10"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-foreground hover:text-primary transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-primary/10"
                >
                  Shop
                </a>
                <a
                  href="#"
                  className="text-foreground hover:text-primary transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-primary/10"
                >
                  Categories
                </a>
                <a
                  href="#"
                  className="text-foreground hover:text-primary transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-primary/10"
                >
                  Products
                </a>
                <a
                  href="#"
                  className="text-foreground hover:text-primary transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-primary/10"
                >
                  Top Deals
                </a>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
