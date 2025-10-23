import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ExternalLink,
  MapPin,
  Video,
  BookOpen,
  Leaf,
  Building,
  FileText,
  Shirt,
  Recycle,
  UtensilsCrossed,
} from "lucide-react"
import Link from "next/link"

export default function ProductsServicesPage() {
  return (
    <main>
      {/* Banner Image Section */}
      <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        <img
          src="/high-res-fresh-organic-produce-farmers-market.jpg"
          alt="Indigenous hemp farming community"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white drop-shadow-lg md:text-5xl lg:text-6xl text-balance">
              Our Community & Hemp Knowledge
            </h1>
            <p className="mt-4 text-lg text-white/90 drop-shadow-md md:text-xl text-pretty">
              Connecting indigenous hemp initiatives and sharing knowledge
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-foreground">Who We Are</h2>
            <p className="mb-12 text-center text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              A network of indigenous communities, organizations, and initiatives working together to revitalize hemp
              farming and traditional practices.
            </p>

            {/* Community Voices */}
            <div className="mb-16">
              <h3 className="mb-8 text-2xl font-semibold text-foreground flex items-center gap-2">
                <MapPin className="h-6 w-6 text-primary" />
                Community Voices
              </h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">Anishinaabe Agriculture Institute</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Leading indigenous agricultural education and hemp cultivation research.
                    </p>
                    <Link href="https://www.anishinaabeagriculture.org" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="w-full bg-transparent">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">Lower Sioux Housing & Hempcrete</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Pioneering sustainable housing with hemp-based building materials.
                    </p>
                    <Link href="https://www.greenbuffalo.org" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="w-full bg-transparent">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Green Buffalo
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">Diné Weavers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Integrating hemp fiber into traditional Navajo weaving practices.
                    </p>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Learn More
                    </Button>
                  </CardContent>
                </Card>

                <Card className="transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">Prairie Band Potawatomi</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Developing tribal hemp programs for economic development.
                    </p>
                    <Link href="https://prairiebandag.com" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="w-full bg-transparent">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">Cheyenne River Sioux Tribe</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Establishing hemp cultivation for sustainability and economic development.
                    </p>
                    <Link href="https://www.cheyenneriversioux.com" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="w-full bg-transparent">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">Macoche Pine Ridge</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Hemp farming initiative on Pine Ridge Reservation.
                    </p>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Learn More
                    </Button>
                  </CardContent>
                </Card>

                <Card className="transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">Mi'kmaq Bioremediation Project</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Using hemp for environmental cleanup and soil restoration.
                    </p>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Learn More
                    </Button>
                  </CardContent>
                </Card>

                <Card className="transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">Indigenous Habitat Institute</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Promoting indigenous-led conservation and hemp cultivation.
                    </p>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Learn More
                    </Button>
                  </CardContent>
                </Card>

                <Card className="transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">Turtle Mountain Chippewa Hemp</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Tribal hemp program focused on economic and environmental benefits.
                    </p>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Video Interviews Section */}
            <div className="mb-16 rounded-lg bg-muted p-8">
              <h3 className="mb-4 text-2xl font-semibold text-foreground flex items-center gap-2">
                <Video className="h-6 w-6 text-primary" />
                Video Interviews & Stories
              </h3>
              <p className="text-muted-foreground mb-6">
                Coming soon: Personal stories and interviews from indigenous hemp farmers and community leaders sharing
                their experiences and knowledge.
              </p>
              <Button variant="outline">Stay Tuned for Updates</Button>
            </div>

            {/* Interactive Map Placeholder */}
            <div className="rounded-lg border-2 border-dashed border-muted-foreground/30 p-12 text-center">
              <MapPin className="mx-auto h-12 w-12 text-muted-foreground/50 mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Interactive Tribal Hemp Map</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Coming soon: An interactive map showing tribes with active hemp initiatives, clickable links to their
                plans, and member logos. Each location will feature video interviews and stories from the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Hemp Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-foreground">About Hemp</h2>
            <p className="mb-12 text-center text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Understanding hemp's properties, benefits, and applications for sustainable agriculture and industry.
            </p>

            {/* What is Hemp */}
            <div className="mb-12">
              <Card className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-muted flex items-center justify-center p-8">
                    <Leaf className="h-24 w-24 text-primary" />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-2xl font-semibold mb-4">What is Hemp?</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Hemp is a versatile, fast-growing plant that has been cultivated for thousands of years. It's a
                      variety of Cannabis sativa specifically grown for industrial and agricultural purposes, containing
                      minimal THC.
                    </p>
                    <Link
                      href="https://www.patagonia.com/stories/misunderstood/video-85775.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full md:w-auto">
                        <Video className="mr-2 h-4 w-4" />
                        Watch: Patagonia's "Misunderstood" Film
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>

            {/* Hemp vs Marijuana */}
            <div className="mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Hemp vs. Marijuana</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="rounded-lg bg-primary/5 p-6">
                      <h4 className="font-semibold text-lg mb-3 text-primary">Hemp</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Contains less than 0.3% THC</li>
                        <li>• Grown for industrial and agricultural use</li>
                        <li>• Tall, fibrous stalks</li>
                        <li>• Legal under federal law</li>
                        <li>• Used for textiles, construction, food, and more</li>
                      </ul>
                    </div>
                    <div className="rounded-lg bg-muted p-6">
                      <h4 className="font-semibold text-lg mb-3">Marijuana</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Contains higher THC levels (3-30%)</li>
                        <li>• Grown for medicinal or recreational use</li>
                        <li>• Shorter, bushier plants</li>
                        <li>• Regulated differently by state</li>
                        <li>• Cultivated for flowers and resin</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Benefits of Hemp */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-center">Benefits of Hemp</h3>
              <div className="grid gap-6 md:grid-cols-3 mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Leaf className="h-5 w-5 text-primary" />
                      Environmental
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Carbon sequestration</li>
                      <li>• Soil regeneration</li>
                      <li>• Minimal water needs</li>
                      <li>• No pesticides required</li>
                      <li>• Biodegradable products</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Building className="h-5 w-5 text-primary" />
                      Economic
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Diverse revenue streams</li>
                      <li>• Growing market demand</li>
                      <li>• Job creation</li>
                      <li>• Rural development</li>
                      <li>• Value-added products</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <MapPin className="h-5 w-5 text-primary" />
                      Cultural
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Traditional knowledge revival</li>
                      <li>• Community resilience</li>
                      <li>• Cultural preservation</li>
                      <li>• Indigenous leadership</li>
                      <li>• Sustainable practices</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="text-center">
                <Button variant="outline" size="lg">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Download Benefits of Hemp Booklet
                </Button>
              </div>
            </div>

            {/* Hemp Applications */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">Hemp Applications</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Leaf className="h-5 w-5 text-primary" />
                      Climate Resiliency
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Hemp sequesters carbon and improves soil health, making it a powerful tool for climate change
                      mitigation and agricultural sustainability.
                    </p>
                  </CardContent>
                </Card>

                <Card className="transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Recycle className="h-5 w-5 text-primary" />
                      Bioremediation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Hemp naturally removes toxins and heavy metals from contaminated soil through phytoremediation,
                      helping restore damaged ecosystems.
                    </p>
                  </CardContent>
                </Card>

                <Card className="transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building className="h-5 w-5 text-primary" />
                      Hempcrete & Construction
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Hemp-based building materials like hempcrete and hemp rebar offer sustainable, carbon-negative
                      alternatives to traditional construction materials.
                    </p>
                  </CardContent>
                </Card>

                <Card className="transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      Paper Products
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Hemp paper is more sustainable than wood pulp, requiring less processing and producing higher
                      quality, longer-lasting paper products.
                    </p>
                  </CardContent>
                </Card>

                <Card className="transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shirt className="h-5 w-5 text-primary" />
                      Textiles
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Hemp fiber creates durable, breathable fabrics that soften with use and require less water and
                      chemicals than cotton production.
                    </p>
                  </CardContent>
                </Card>

                <Card className="transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Recycle className="h-5 w-5 text-primary" />
                      Bioplastics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Hemp-based bioplastics offer biodegradable alternatives to petroleum plastics, reducing
                      environmental pollution and fossil fuel dependence.
                    </p>
                  </CardContent>
                </Card>

                <Card className="transition-shadow hover:shadow-lg md:col-span-2 lg:col-span-1">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <UtensilsCrossed className="h-5 w-5 text-primary" />
                      Hemp Foods
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Hemp seeds are nutritional powerhouses rich in protein, omega fatty acids, and minerals,
                      beneficial for both human and animal consumption.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
              Join Our Hemp Community
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90 leading-relaxed">
              Connect with indigenous hemp farmers, access resources, and be part of the movement to revitalize
              sustainable hemp agriculture.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/signup">
                <Button size="lg" variant="secondary">
                  Become a Member
                </Button>
              </Link>
              <Link href="/blog">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                >
                  Explore Resources
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
