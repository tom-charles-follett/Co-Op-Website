"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sprout, Leaf, Factory, Droplets, Wheat, Hammer, Shield, Bug, Cloud } from "lucide-react"

export default function HomePage() {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <main>
      {/* Banner Image Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img
          src="/industrial-hemp-bud-close-up-natural-lighting.jpg"
          alt="Industrial hemp"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20" />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance drop-shadow-lg">
              The New Green Revolution
            </h1>
            <p className="text-lg md:text-xl text-white/95 leading-relaxed text-pretty drop-shadow-md">
              Discover why industrial hemp is revolutionizing sustainable agriculture
            </p>
          </div>
        </div>
      </section>

      {/* Hero Section - Updated to focus on hemp benefits */}
      <section className="relative overflow-hidden bg-primary py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl text-balance">
              Hemp as a Path Forward
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/90 leading-relaxed text-pretty">
              Industrial hemp represents a sustainable path toward agricultural resilience and environmental
              restoration. As one of the most versatile crops on Earth, hemp offers farmers a profitable route to
              regenerative agriculture while addressing climate challenges. Fast-growing, disease-resistant, and capable
              of healing contaminated soil, hemp is transforming industries from construction to nutrition—all while
              restoring our planet and building resilient communities.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/signup" onClick={handleLinkClick}>
                <Button size="lg" variant="secondary">
                  Join the Co-op
                </Button>
              </Link>
              <Link href="/who-we-are" onClick={handleLinkClick}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hemp Properties Grid - New section highlighting hemp's key properties */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
              Hemp's Remarkable Properties
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">Nature's most versatile crop</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-none shadow-sm">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Sprout className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-card-foreground">Rapid Growth</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Hemp grows to maturity in just 90-120 days, allowing multiple harvests per year. It reaches heights of
                  15 feet, producing more biomass per acre than most crops.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-card-foreground">Disease Resistant</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Naturally robust against pests and diseases, hemp requires minimal pesticides or herbicides, making it
                  ideal for organic and sustainable farming practices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-card-foreground">Carbon Sequestration</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Hemp absorbs more CO2 per hectare than most crops and forests, capturing 1.63 tons of carbon per ton
                  of hemp grown. It's one of nature's most effective carbon sinks.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Droplets className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-card-foreground">Phyto-remediation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Hemp actively cleans contaminated soil by absorbing heavy metals and toxins. It's been used to restore
                  land affected by industrial pollution and radiation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-card-foreground">Natural Weed Suppression</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Hemp is allelopathic to weeds, naturally suppressing their growth through biochemical compounds. Its
                  dense canopy and rapid growth further crowd out unwanted plants.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Bug className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-card-foreground">Reduces Pest Pressure</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Hemp naturally reduces pest pressure in agricultural systems, making it an excellent rotation crop
                  that helps break pest cycles and improves overall farm health.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Factory className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-card-foreground">Industrial Materials</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Hemp fiber creates durable textiles, biodegradable plastics, and hempcrete—a sustainable building
                  material stronger and lighter than concrete.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Wheat className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-card-foreground">Nutritional Powerhouse</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Hemp seeds contain all nine essential amino acids, omega-3 and omega-6 fatty acids, and are rich in
                  protein, fiber, and minerals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Hammer className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-card-foreground">Versatile Applications</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  From paper and rope to biofuel and cosmetics, hemp has over 25,000 known uses. Every part of the plant
                  can be utilized with zero waste.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Join Section - New section encouraging farmers to join */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-accent md:text-4xl text-balance">Start Your Hemp Farming Journey</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
              Whether you're an experienced farmer looking to diversify or new to agriculture, industrial hemp offers
              incredible opportunities. Our co-op provides the support, resources, and community you need to succeed.
              From navigating regulations and accessing funding to connecting with suppliers and markets, we're here to
              help you every step of the way.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/signup" onClick={handleLinkClick}>
                <Button size="lg">Join the Co-op Today</Button>
              </Link>
              <Link href="/funding-aid" onClick={handleLinkClick}>
                <Button size="lg" variant="outline">
                  Explore Funding Options
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section - Updated cards to focus on hemp-related resources */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Resources for Hemp Farmers</h2>
            <p className="mt-4 text-lg text-muted-foreground">Everything you need to get started</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Phyto-remediation */}
            <Card className="overflow-hidden">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src="/regenerative-agriculture-healthy-soil-with-plants-.jpg"
                  alt="Phyto-remediation"
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-2 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  EDUCATION
                </div>
                <h3 className="mb-2 text-xl font-bold text-card-foreground">Phyto-remediation Guide</h3>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                  Learn how hemp can heal contaminated soil and restore degraded land through natural processes.
                </p>
                <Link
                  href="/blog/phyto-remediation"
                  className="text-sm font-semibold text-primary hover:underline"
                  onClick={handleLinkClick}
                >
                  Read More →
                </Link>
              </CardContent>
            </Card>

            {/* Suppliers */}
            <Card className="overflow-hidden">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src="/usda-farm-documents-and-agricultural-policy-papers.jpg"
                  alt="Suppliers"
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-2 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  RESOURCES
                </div>
                <h3 className="mb-2 text-xl font-bold text-card-foreground">Seeds & Equipment</h3>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                  Connect with trusted suppliers for hemp seeds, farming equipment, and processing machinery.
                </p>
                <Link
                  href="/blog/suppliers"
                  className="text-sm font-semibold text-primary hover:underline"
                  onClick={handleLinkClick}
                >
                  Find Suppliers →
                </Link>
              </CardContent>
            </Card>

            {/* Funding */}
            <Card className="overflow-hidden">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src="/funding-financial-assistance-grants-agriculture.jpg"
                  alt="Funding"
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-2 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  FUNDING
                </div>
                <h3 className="mb-2 text-xl font-bold text-card-foreground">Grants & Loans</h3>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                  Discover federal programs, grants, and financing options available for hemp farmers.
                </p>
                <Link
                  href="/funding-aid"
                  className="text-sm font-semibold text-primary hover:underline"
                  onClick={handleLinkClick}
                >
                  Explore Funding →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Updated to focus on joining for hemp farming support */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
              Ready to Start Growing Hemp?
            </h2>
            <p className="mt-4 text-primary-foreground/90 leading-relaxed">
              Join our co-op and gain access to expert guidance, funding resources, supplier networks, and a supportive
              community of hemp farmers. Together, we're building a sustainable future.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/signup" onClick={handleLinkClick}>
                <Button type="button" size="lg" variant="secondary" className="sm:w-auto">
                  Join the Co-op
                </Button>
              </Link>
              <Link href="/meetings" onClick={handleLinkClick}>
                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
                >
                  Attend a Meeting
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
