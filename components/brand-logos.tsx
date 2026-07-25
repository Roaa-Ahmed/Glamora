export default function BrandLogos() {
  const brands = [
    { name: "GLAMORA BEAUTY", logo: "/placeholder.svg?height=60&width=120" },
    { name: "TECH GALLERY", logo: "/placeholder.svg?height=60&width=120" },
    { name: "FASHION & CO.", logo: "/placeholder.svg?height=60&width=120" },
    { name: "MODERN STORE", logo: "/placeholder.svg?height=60&width=120" },
    { name: "SPORTS ZONE", logo: "/placeholder.svg?height=60&width=120" },
    { name: "HOME GALLERY", logo: "/placeholder.svg?height=60&width=120" },
  ]

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={brand.logo || "/placeholder.svg"}
                alt={brand.name}
                className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
