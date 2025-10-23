import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Leaf, Building2, FileText, Shirt, Recycle, UtensilsCrossed, TreePine } from "lucide-react"
import Link from "next/link"

export default function AboutHempPage() {
  const hempApplications = [
    {
      title: "Hemp & Climate Resiliency",
      description:
        "Hemp is one of nature's most effective carbon-capturing crops, absorbing 8-22 tons of CO2 per hectare annually—more efficient than forests. Its deep root system improves soil structure, prevents erosion, and enhances water retention. Hemp cultivation requires minimal pesticides and herbicides while enriching the soil with organic matter. Research shows hemp's mycorrhizal associations boost nutrient uptake and stress tolerance, making it ideal for regenerative agriculture systems that combat climate change.",
      icon: Leaf,
      link: "https://www.rodaleinstitute.org/science/articles/hemp-research/",
    },
    {
      title: "Hemp in Bioremediation",
      description:
        "Hemp's extensive root system and remarkable ability to absorb heavy metals make it a powerful tool for cleaning contaminated soil and water. Studies demonstrate hemp effectively removes cadmium, lead, nickel, zinc, copper, and arsenic from polluted sites. This process, called phytoremediation, allows hemp to restore ecosystems damaged by industrial pollution while producing biomass that can be converted into bioenergy or other value-added products. Indigenous communities are using hemp to heal lands affected by mining and industrial contamination.",
      icon: TreePine,
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10742251/",
    },
    {
      title: "Hempcrete & Construction",
      description:
        "Hempcrete is a revolutionary carbon-negative building material made from hemp hurds, lime, and water. It provides superior thermal and acoustic insulation while being breathable, mold-resistant, and non-toxic. Hempcrete walls regulate humidity naturally and can last for centuries. The material sequesters carbon throughout its lifetime, making buildings climate-positive. Indigenous communities like the Lower Sioux are pioneering hempcrete construction for sustainable, culturally-appropriate housing that honors traditional building practices while embracing modern sustainability.",
      icon: Building2,
      link: "https://www.hempitecture.com/hempcrete/",
    },
    {
      title: "Hemp and Paper Products",
      description:
        "Hemp produces 4-10 times more paper per acre than trees over a 20-year cycle and grows 60 times faster. Hemp paper requires fewer chemicals, less water, and less energy to manufacture than wood pulp paper. Its long, strong cellulose fibers create durable paper that resists yellowing and can be recycled up to seven times—more than double traditional paper. Hemp paper has been used for centuries, including for the Declaration of Independence, and offers a sustainable solution to deforestation.",
      icon: FileText,
      link: "https://www.hemp.guide/does-hemp-make-more-paper-than-trees",
    },
    {
      title: "Hemp in Textiles",
      description:
        "Hemp fabric is 4 times more durable and 8 times more stretchy than cotton while using 95% less water during cultivation. Hemp grows without synthetic pesticides or herbicides and can be cultivated on the same land for 14 years without depleting soil. The fabric is naturally antimicrobial, UV-resistant, and biodegrades within 6-12 months. Hemp textiles have been used for thousands of years, and modern processing techniques create soft, breathable fabrics perfect for clothing, home goods, and technical applications.",
      icon: Shirt,
      link: "https://szoneierfabrics.com/hemp-fabric-the-ultimate-eco-friendly-choice-for-sustainable-textiles",
    },
    {
      title: "Hemp and Bioplastics",
      description:
        "Hemp bioplastics offer a biodegradable alternative to petroleum-based plastics, breaking down naturally within 2-12 months without toxic residues. Hemp-based plastics are mechanically strong, lightweight, and suitable for packaging, automotive parts, and consumer goods. Hemp cultivation for bioplastics acts as a carbon sink, and production requires less energy and emits fewer greenhouse gases than conventional plastics. As plastic pollution threatens ecosystems worldwide, hemp bioplastics provide a sustainable solution that doesn't compromise performance.",
      icon: Recycle,
      link: "https://taoclimate.com/hemp-bioplastics-a-sustainable-solution-for-a-greener-future/",
    },
    {
      title: "Hemp Foods",
      description:
        "Hemp seeds are a nutritional powerhouse containing all nine essential amino acids, making them a complete protein source. They're rich in omega-3 and omega-6 fatty acids in an optimal 2:1 or 3:1 ratio, plus vitamins E, D, A, and magnesium. Hemp seeds support heart health, aid digestion with high fiber content, and provide anti-inflammatory benefits. They can be eaten raw, pressed into oil, or processed into milk, protein powder, and cheese alternatives. The FDA recognizes hemp seeds as 'generally recognized as safe' (GRAS) for human consumption.",
      icon: UtensilsCrossed,
      link: "https://www.webmd.com/diet/health-benefits-hemp-seeds",
    },
  ]

  return (
    <main>
      {/* Banner Image Section */}
      <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        <img
          src="/industrial-hemp-bud-close-up-natural-lighting.jpg"
          alt="Industrial hemp"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white drop-shadow-lg md:text-5xl lg:text-6xl text-balance">
              About Hemp
            </h1>
            <p className="mt-4 text-lg text-white/90 drop-shadow-md md:text-xl text-pretty">
              Discover the versatile plant transforming sustainable agriculture
            </p>
          </div>
        </div>
      </section>

      {/* What is Hemp Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-foreground">What is Hemp?</h2>
            <Card className="mb-8">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Hemp is a variety of the Cannabis sativa plant species that is grown specifically for industrial and
                  agricultural uses. Unlike marijuana, hemp contains minimal THC (less than 0.3%) and has been
                  cultivated for thousands of years for fiber, seeds, and oil.
                </p>
                <div className="flex justify-center">
                  <Link
                    href="https://www.patagonia.com/stories/misunderstood/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="gap-2">
                      Watch: Misunderstood (Patagonia Film)
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hemp vs Marijuana Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-foreground">Hemp vs. Marijuana</h2>
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">Industrial Hemp</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• THC content: Less than 0.3%</li>
                      <li>• Grown for: Fiber, seeds, oil, CBD</li>
                      <li>• Plant structure: Tall and fibrous</li>
                      <li>• Legal status: Federally legal (2018 Farm Bill)</li>
                      <li>• Uses: Construction, textiles, food, biofuel</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-accent">Marijuana</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• THC content: 5-30%+</li>
                      <li>• Grown for: Psychoactive compounds</li>
                      <li>• Plant structure: Short and bushy</li>
                      <li>• Legal status: Varies by state</li>
                      <li>• Uses: Medical and recreational</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits of Hemp Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-foreground">Benefits of Hemp</h2>
            <p className="mb-12 text-center text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Hemp offers environmental, economic, and cultural benefits for indigenous communities and sustainable
              agriculture
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Environmental</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Sequesters carbon from atmosphere</li>
                    <li>• Improves soil health and structure</li>
                    <li>• Requires minimal pesticides</li>
                    <li>• Phytoremediates contaminated soil</li>
                    <li>• Reduces water usage vs. cotton</li>
                    <li>• Biodegradable and renewable</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Economic</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Multiple revenue streams per crop</li>
                    <li>• Growing market demand</li>
                    <li>• Value-added product opportunities</li>
                    <li>• Job creation in rural areas</li>
                    <li>• Supports local economies</li>
                    <li>• Federal farm bill support</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Cultural</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Revives traditional agriculture</li>
                    <li>• Supports tribal sovereignty</li>
                    <li>• Preserves indigenous knowledge</li>
                    <li>• Strengthens community bonds</li>
                    <li>• Promotes food sovereignty</li>
                    <li>• Cultural healing and restoration</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Link href="/hemp-benefits-booklet.pdf" download="Hemp-Benefits-Booklet.pdf">
                <Button variant="outline" className="gap-2 bg-transparent">
                  Download Benefits of Hemp Booklet
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hemp Applications Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-foreground">Hemp Applications</h2>
            <p className="mb-12 text-center text-lg text-muted-foreground leading-relaxed">
              Explore the diverse uses of hemp across industries
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hempApplications.map((app, index) => {
                const Icon = app.icon
                return (
                  <Card key={index} className="transition-shadow hover:shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="rounded-lg bg-primary/10 p-2">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-lg">{app.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{app.description}</p>
                      <Link
                        href={app.link}
                        className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                      >
                        Learn More
                        <ExternalLink className="h-3 w-3" />
                      </Link>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
              Ready to Start Growing Hemp?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90 leading-relaxed">
              Join our co-op to access resources, training, and support for hemp cultivation
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/signup">
                <Button size="lg" variant="secondary">
                  Join the Co-op
                </Button>
              </Link>
              <Link href="/blog">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                >
                  Browse Resources
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
