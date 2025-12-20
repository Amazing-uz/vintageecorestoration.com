import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#EFE7D8]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#EFE7D8]/95 backdrop-blur-sm border-b border-[#3F4A3C]/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-serif text-[#1C2430] tracking-tight">VintageEcoRestoration</div>
            <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider text-[#3F4A3C]">
              <a href="#work-zones" className="hover:text-[#7A3E2D] transition-colors">
                Work Zones
              </a>
              <a href="#products" className="hover:text-[#7A3E2D] transition-colors">
                Gear
              </a>
              <a href="#ergonomics" className="hover:text-[#7A3E2D] transition-colors">
                Ergonomics
              </a>
              <a href="#sustainability" className="hover:text-[#7A3E2D] transition-colors">
                Sustainability
              </a>
            </div>
            <Button className="bg-[#7A3E2D] text-[#EFE7D8] hover:bg-[#7A3E2D]/90">Build My Kit</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-[#4ECBC4]/10 text-[#4ECBC4] border-[#4ECBC4]/20">Old Soul. New Posture.</Badge>
              <h1 className="text-6xl md:text-7xl font-serif text-[#1C2430] mb-6 leading-tight text-balance">
                Ergonomics for Those Without an Office.
              </h1>
              <p className="text-xl text-[#3F4A3C] mb-8 leading-relaxed text-pretty">
                Sustainable, travel-ready ergonomic solutions designed for digital nomads and modern travelers.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-[#7A3E2D] text-[#EFE7D8] hover:bg-[#7A3E2D]/90">
                  🧭 Explore Nomad Gear
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#3F4A3C] text-[#3F4A3C] hover:bg-[#3F4A3C] hover:text-[#EFE7D8] bg-transparent"
                >
                  🪑 Fix Your Travel Posture
                </Button>
              </div>
            </div>
            <div className="relative h-[500px]">
              <img
                src="/vintage-ergonomic-laptop-stand-setup-in-old-train-.jpg"
                alt="Nomad's desk setup"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Work Zones Navigation */}
      <section id="work-zones" className="py-20 px-6 bg-gradient-to-b from-[#EFE7D8] to-[#3F4A3C]/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-serif text-[#1C2430] mb-12 text-center">Work Well. Anywhere. For Years.</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                icon: "✈️",
                title: "Work on the Road",
                color: "#7A3E2D",
                image: "/work-on-road.jpg",
              },
              {
                icon: "🏨",
                title: "Hotel Desk Fixes",
                color: "#3F4A3C",
                image: "/hotel-desk.jpg",
              },
              {
                icon: "☕",
                title: "Café Setup",
                color: "#C2A25D",
                image: "/cafe-setup.jpg",
              },
              {
                icon: "🏕",
                title: "Outdoor Workspaces",
                color: "#4ECBC4",
                image: "/outdoor-workspace.jpg",
              },
              {
                icon: "🎒",
                title: "Carry & Support",
                color: "#1C2430",
                image: "/carry-support.jpg",
              },
            ].map((zone) => (
              <Card
                key={zone.title}
                className="overflow-hidden text-center hover:shadow-xl transition-all cursor-pointer border-2 hover:border-[#C2A25D] bg-white group"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={zone.image || "/placeholder.svg"}
                    alt={zone.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg text-[#1C2430]">{zone.title}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Presentation */}
      <section id="products" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-serif text-[#1C2430] mb-4 text-center">Tools of the Traveling Mind</h2>
          <p className="text-center text-[#3F4A3C] mb-12 max-w-2xl mx-auto">
            Each piece is crafted with intention—designed to last years, not months.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Nomad Laptop Stand",
                material: "Canvas & Aluminum",
                weight: "280g",
                price: "$89",
                image: "/nomad-laptop-stand.jpg",
              },
              {
                name: "Travel Wrist Rest",
                material: "Leather & Memory Foam",
                weight: "120g",
                price: "$45",
                image: "/travel-wrist-rest.jpg",
              },
              {
                name: "Portable Back Support",
                material: "Wool & Steel Frame",
                weight: "450g",
                price: "$124",
                image: "/portable-back-support.jpg",
              },
            ].map((product) => (
              <Card
                key={product.name}
                className="overflow-hidden hover:shadow-2xl transition-all group border-[#3F4A3C]/10"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-[#C2A25D] text-[#1C2430]">♻️ Sustainable</Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif text-[#1C2430] mb-2">{product.name}</h3>
                  <p className="text-sm text-[#3F4A3C] mb-4">
                    {product.material} · {product.weight}
                  </p>
                  <div className="flex items-center justify-between">
                    
                    <Button className="bg-[#7A3E2D] text-[#EFE7D8] hover:bg-[#7A3E2D]/90">Add to Kit</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Body Map / Ergonomics */}
      <section id="ergonomics" className="py-20 px-6 bg-gradient-to-b from-[#3F4A3C]/5 to-[#EFE7D8]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-serif text-[#1C2430] mb-12 text-center">
            The Body Map—Common Nomad Pain Points
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[600px]">
              <img
                src="/anatomical-diagram-of-human-posture-showing-spine-.jpg"
                alt="Body posture diagram"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="space-y-6">
              {[
                {
                  area: "Spine",
                  problem: "Hunched shoulders from low surfaces",
                  solution: "Laptop stands raise your screen to eye level",
                },
                {
                  area: "Neck",
                  problem: "Forward head posture from looking down",
                  solution: "Proper ergonomic angle prevents strain",
                },
                {
                  area: "Wrists",
                  problem: "Repetitive strain from hard surfaces",
                  solution: "Cushioned supports distribute pressure",
                },
                {
                  area: "Lower Back",
                  problem: "Poor chair support while traveling",
                  solution: "Portable lumbar support maintains curve",
                },
              ].map((item) => (
                <Card key={item.area} className="p-6 border-l-4 border-[#C2A25D] bg-white">
                  <h3 className="font-serif text-xl text-[#1C2430] mb-2">{item.area}</h3>
                  <p className="text-[#7A3E2D] mb-2">⚠️ {item.problem}</p>
                  <p className="text-[#3F4A3C]">✓ {item.solution}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Philosophy */}
      <section id="sustainability" className="py-20 px-6 bg-[#3F4A3C] text-[#EFE7D8]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-serif mb-6">Restore the Body, Not Waste</h2>
          <p className="text-xl mb-12 leading-relaxed italic max-w-2xl mx-auto">
            "True ergonomics respects both the human body and the planet."
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: "🛠", label: "Durable Over Disposable" },
              { icon: "♻️", label: "Repairable Gear" },
              { icon: "🌿", label: "Natural Materials" },
              { icon: "⏳", label: "Built to Last Years" },
            ].map((principle) => (
              <div key={principle.label} className="text-center">
                <div className="text-5xl mb-3">{principle.icon}</div>
                <p className="text-[#EFE7D8]/90">{principle.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nomad Kits */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#EFE7D8] to-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-serif text-[#1C2430] mb-12 text-center">Curated Nomad Kits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "The Backpack Worker",
                items: ["Laptop Stand", "Wrist Rest", "Travel Mouse Pad"],
                weight: "680g",
                saved: "4.2kg waste avoided",
              },
              {
                name: "The Long-Haul Traveler",
                items: ["Full Back Support", "Laptop Stand", "Wrist Rest", "Eye Level Toolkit"],
                weight: "1.1kg",
                saved: "8.7kg waste avoided",
              },
              {
                name: "The Café Nomad",
                items: ["Portable Stand", "Cushioned Wrist Rest"],
                weight: "400g",
                saved: "2.8kg waste avoided",
              },
              {
                name: "The Minimalist Remote Pro",
                items: ["Ultra-Light Stand", "Compact Support"],
                weight: "320g",
                saved: "3.1kg waste avoided",
              },
            ].map((kit) => (
              <Card key={kit.name} className="p-8 hover:shadow-2xl transition-all border-2 hover:border-[#C2A25D]">
                <h3 className="text-2xl font-serif text-[#1C2430] mb-4">{kit.name}</h3>
                <ul className="space-y-2 mb-6">
                  {kit.items.map((item) => (
                    <li key={item} className="text-[#3F4A3C] flex items-center gap-2">
                      <span className="text-[#C2A25D]">✓</span> {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between text-sm text-[#3F4A3C] mb-4">
                  <span>Total weight: {kit.weight}</span>
                  <Badge className="bg-[#4ECBC4]/10 text-[#4ECBC4] border-[#4ECBC4]/20">{kit.saved}</Badge>
                </div>
                <Button className="w-full bg-[#7A3E2D] text-[#EFE7D8] hover:bg-[#7A3E2D]/90">Get This Kit</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#3F4A3C] via-[#7A3E2D] to-[#C2A25D] text-[#EFE7D8]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-serif mb-4">Your Body Travels With You.</h2>
          <p className="text-2xl mb-8 italic">Treat It With Respect.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-[#EFE7D8] text-[#1C2430] hover:bg-[#EFE7D8]/90">
              🪑 Build My Ergonomic Kit
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#EFE7D8] text-[#EFE7D8] hover:bg-[#EFE7D8] hover:text-[#1C2430] bg-transparent"
            >
              🌱 See Sustainable Materials
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#1C2430] text-[#EFE7D8]/70">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-5 gap-8 mb-8">
            <div>
              <h4 className="font-serif text-[#EFE7D8] mb-4 uppercase tracking-wider text-sm">Nomad Solutions</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-[#C2A25D] transition-colors">
                    Work Zones
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C2A25D] transition-colors">
                    Product Catalog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C2A25D] transition-colors">
                    Custom Kits
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-[#EFE7D8] mb-4 uppercase tracking-wider text-sm">Ergonomic Knowledge</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-[#C2A25D] transition-colors">
                    Body Map Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C2A25D] transition-colors">
                    Travel Posture Tips
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C2A25D] transition-colors">
                    Setup Guides
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-[#EFE7D8] mb-4 uppercase tracking-wider text-sm">Sustainability</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-[#C2A25D] transition-colors">
                    Materials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C2A25D] transition-colors">
                    Manufacturing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C2A25D] transition-colors">
                    Impact Report
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-[#EFE7D8] mb-4 uppercase tracking-wider text-sm">Repairs & Care</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-[#C2A25D] transition-colors">
                    Repair Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C2A25D] transition-colors">
                    Care Instructions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C2A25D] transition-colors">
                    Warranty
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-[#EFE7D8] mb-4 uppercase tracking-wider text-sm">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-[#C2A25D] transition-colors">
                    The Atelier
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C2A25D] transition-colors">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C2A25D] transition-colors">
                    Partnerships
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#EFE7D8]/10 pt-8 text-center">
            <p className="text-sm">VintageEcoRestoration.com — timeless comfort for modern nomads.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
