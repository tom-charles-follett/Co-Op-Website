import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingBasket, Wrench, GraduationCap, Users, Tractor, Leaf } from "lucide-react"

export default function ProductsServicesPage() {
  return (
    <main>
      {/* Banner Image Section */}
      <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        <img
          src="/high-res-fresh-organic-produce-farmers-market.jpg"
          alt="Fresh organic produce"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white drop-shadow-lg md:text-5xl lg:text-6xl text-balance">
              Co-op Products & Services
            </h1>
            <p className="mt-4 text-lg text-white/90 drop-shadow-md md:text-xl text-pretty">
              Supporting our community through sustainable agriculture
            </p>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
              Co-op Products & Services
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
              Discover the collective offerings from our indigenous farming community, from fresh produce to consulting
              services and shared resources.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground">Our Products</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-video bg-muted" />
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-primary" />
                    Fresh Produce
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Seasonal vegetables, fruits, and herbs grown using traditional and sustainable farming methods.
                    Available through our CSA program and farmers markets.
                  </p>
                  <Button className="mt-4 w-full">Learn More</Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-video bg-muted" />
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingBasket className="h-5 w-5 text-primary" />
                    Heritage Seeds
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Preserved indigenous seed varieties passed down through generations. Support biodiversity and food
                    sovereignty with our heirloom seeds.
                  </p>
                  <Button className="mt-4 w-full">Learn More</Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-video bg-muted" />
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-primary" />
                    Value-Added Products
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Jams, preserves, dried herbs, and other processed goods made from our harvest. Supporting local food
                    systems and traditional recipes.
                  </p>
                  <Button className="mt-4 w-full">Learn More</Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-video bg-muted" />
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingBasket className="h-5 w-5 text-primary" />
                    Medicinal Plants
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Traditional medicinal plants and herbs cultivated with respect for indigenous knowledge and healing
                    practices.
                  </p>
                  <Button className="mt-4 w-full">Learn More</Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-video bg-muted" />
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-primary" />
                    Native Plants
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Indigenous plant species for restoration projects, landscaping, and ecosystem regeneration. Grown
                    from local seed sources.
                  </p>
                  <Button className="mt-4 w-full">Learn More</Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-video bg-muted" />
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingBasket className="h-5 w-5 text-primary" />
                    Craft & Fiber
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Natural fibers, dyes, and materials for traditional crafts. Supporting indigenous artisans and
                    cultural preservation.
                  </p>
                  <Button className="mt-4 w-full">Learn More</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground">Our Services</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <div className="mt-1 rounded-lg bg-primary/10 p-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl">Education & Training</h3>
                      <p className="mt-2 text-sm font-normal text-muted-foreground leading-relaxed">
                        Workshops and training programs on sustainable farming, traditional agricultural practices,
                        phyto-remediation, and regenerative agriculture techniques.
                      </p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Sustainable farming workshops</li>
                    <li>• Traditional knowledge sharing</li>
                    <li>• Soil health and composting</li>
                    <li>• Water management techniques</li>
                  </ul>
                  <Button variant="outline" className="mt-4 bg-transparent">
                    View Schedule
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <div className="mt-1 rounded-lg bg-primary/10 p-2">
                      <Wrench className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl">Consulting Services</h3>
                      <p className="mt-2 text-sm font-normal text-muted-foreground leading-relaxed">
                        Expert guidance on farm planning, sustainable practices, grant applications, and transitioning
                        to regenerative agriculture methods.
                      </p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Farm business planning</li>
                    <li>• Grant writing assistance</li>
                    <li>• Soil testing and analysis</li>
                    <li>• Crop rotation planning</li>
                  </ul>
                  <Button variant="outline" className="mt-4 bg-transparent">
                    Request Consultation
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <div className="mt-1 rounded-lg bg-primary/10 p-2">
                      <Tractor className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl">Equipment Sharing</h3>
                      <p className="mt-2 text-sm font-normal text-muted-foreground leading-relaxed">
                        Access to shared farming equipment and tools through our co-op network. Reducing costs and
                        increasing efficiency for all members.
                      </p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Tractors and tillers</li>
                    <li>• Irrigation equipment</li>
                    <li>• Harvesting tools</li>
                    <li>• Processing equipment</li>
                  </ul>
                  <Button variant="outline" className="mt-4 bg-transparent">
                    View Equipment
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <div className="mt-1 rounded-lg bg-primary/10 p-2">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl">Labor & Support Network</h3>
                      <p className="mt-2 text-sm font-normal text-muted-foreground leading-relaxed">
                        Connect with skilled agricultural workers and volunteers. Coordinate labor sharing during peak
                        seasons and support each other's operations.
                      </p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Seasonal labor coordination</li>
                    <li>• Volunteer opportunities</li>
                    <li>• Skill-sharing network</li>
                    <li>• Emergency farm support</li>
                  </ul>
                  <Button variant="outline" className="mt-4 bg-transparent">
                    Join Network
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Suppliers Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-foreground">Trusted Suppliers & Partners</h2>
            <p className="mb-12 text-center text-muted-foreground leading-relaxed">
              We work with ethical suppliers who share our commitment to sustainable agriculture and indigenous
              communities.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <h3 className="mb-2 font-semibold text-card-foreground">Seed Suppliers</h3>
                  <p className="text-sm text-muted-foreground">Heritage and organic seed sources</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <h3 className="mb-2 font-semibold text-card-foreground">Equipment Dealers</h3>
                  <p className="text-sm text-muted-foreground">Sustainable farming equipment</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <h3 className="mb-2 font-semibold text-card-foreground">Processing Facilities</h3>
                  <p className="text-sm text-muted-foreground">Local food processing partners</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
              Interested in Our Products or Services?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90 leading-relaxed">
              Contact us to learn more about purchasing our products, accessing our services, or becoming a co-op
              member.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary">
                Contact Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
              >
                Become a Member
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
