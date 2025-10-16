import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, ExternalLink, Download } from "lucide-react"

export default function FarmBillsPage() {
  return (
    <main>
      {/* Banner Image Section */}
      <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        <img
          src="/usda-farm-documents-and-agricultural-policy-papers.jpg"
          alt="USDA farm documents"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white drop-shadow-lg md:text-5xl lg:text-6xl text-balance">
              USDA Farm Bills & Programs
            </h1>
            <p className="mt-4 text-lg text-white/90 drop-shadow-md md:text-xl text-pretty">
              Resources and support for indigenous farmers
            </p>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
              USDA Farm Bills & Programs
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
              Understanding federal agricultural programs, funding opportunities, and resources available to indigenous
              farmers and tribal communities.
            </p>
          </div>
        </div>
      </section>

      {/* Recent Farm Bills Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground">Farm Bills History</h2>

            <div className="space-y-8">
              {/* 2025 One Big Beautiful Bill Act */}
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl">One Big Beautiful Bill (OBBB) Act - 2025</CardTitle>
                  <p className="text-sm text-muted-foreground">Signed into law July 4, 2025</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    The OBBB Act makes significant changes to existing farm subsidy programs from the 2018 Farm Bill and
                    is projected to increase federal agricultural subsidy payments by $65.5 billion over the next 10
                    years.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Provisions:</h4>
                    <ul className="list-disc space-y-2 pl-6 text-sm text-muted-foreground">
                      <li>Reauthorizes core agriculture titles through 2031</li>
                      <li>Extends key commodity support programs through the 2031 crop year</li>
                      <li>Increases coverage levels and premium rate subsidies for farmers</li>
                      <li>Enhanced support for private crop insurance companies</li>
                      <li>Expanded farm benefits and subsidy programs</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-950/20">
                    <p className="text-sm text-amber-900 dark:text-amber-100">
                      <strong>Note:</strong> The OBBB Act also includes provisions affecting nutrition programs, with
                      changes to SNAP funding becoming effective in fiscal year 2027.
                    </p>
                  </div>

                  <div className="pt-4 border-t">
                    <a
                      href="https://www.congress.gov/bill/119th-congress/house-bill/1/text"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="font-medium">Read the full text of H.R.1 - One Big Beautiful Bill Act</span>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* 2018 Farm Bill */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Agriculture Improvement Act of 2018</CardTitle>
                  <p className="text-sm text-muted-foreground">Signed December 20, 2018 | Extended through FY2025</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    The 2018 Farm Act continued nutrition policy, crop insurance, and agricultural commodity programs
                    much as they existed under the 2014 Farm Act, with some modifications and expansions.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Major Components:</h4>
                    <ul className="list-disc space-y-2 pl-6 text-sm text-muted-foreground">
                      <li>Continued major conservation programs with modifications</li>
                      <li>Expanded programs for trade, research, and energy</li>
                      <li>Enhanced support for specialty crops and organic agriculture</li>
                      <li>Strengthened local and regional food systems</li>
                      <li>Increased support for beginning, socially disadvantaged, and veteran farmers</li>
                      <li>Maintained crop insurance and commodity programs</li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t">
                    <a
                      href="https://www.congress.gov/115/plaws/publ334/PLAW-115publ334.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="font-medium">
                        Read the full text of the Agriculture Improvement Act of 2018 (PDF)
                      </span>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* 2014 Farm Bill */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Agricultural Act of 2014</CardTitle>
                  <p className="text-sm text-muted-foreground">Signed February 7, 2014 | Expired end of FY2018</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    The 2014 Farm Bill took over 21 months to enact, spanning two Congresses. It made significant
                    reforms to commodity programs and continued support for conservation and nutrition assistance.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Features:</h4>
                    <ul className="list-disc space-y-2 pl-6 text-sm text-muted-foreground">
                      <li>Reformed commodity support programs</li>
                      <li>Strengthened crop insurance provisions</li>
                      <li>Maintained conservation program funding</li>
                      <li>Continued nutrition assistance programs</li>
                      <li>Enhanced support for specialty crops and organic farming</li>
                      <li>Expanded beginning farmer and rancher programs</li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t">
                    <a
                      href="https://www.congress.gov/113/plaws/publ79/PLAW-113publ79.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="font-medium">Read the full text of the Agricultural Act of 2014 (PDF)</span>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* 2008 Farm Bill */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Food, Conservation, and Energy Act of 2008</CardTitle>
                  <p className="text-sm text-muted-foreground">Signed June 18, 2008 | Expired end of 2012</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    The 2008 Farm Bill took over a year to enact and was complicated by revenue provisions, temporary
                    extensions, and presidential vetoes. It emphasized conservation, energy, and specialty crops.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Major Initiatives:</h4>
                    <ul className="list-disc space-y-2 pl-6 text-sm text-muted-foreground">
                      <li>Expanded conservation programs and funding</li>
                      <li>Increased support for renewable energy and biofuels</li>
                      <li>Enhanced specialty crop and organic agriculture programs</li>
                      <li>Strengthened nutrition assistance programs</li>
                      <li>Maintained commodity and crop insurance programs</li>
                      <li>Extended one year in 2013 before 2014 Farm Bill passage</li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t">
                    <a
                      href="https://www.congress.gov/110/plaws/publ246/PLAW-110publ246.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="font-medium">
                        Read the full text of the Food, Conservation, and Energy Act of 2008 (PDF)
                      </span>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* 2002 Farm Bill */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Farm Security and Rural Investment Act of 2002</CardTitle>
                  <p className="text-sm text-muted-foreground">Signed May 13, 2002 | Expired October 2007</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    The 2002 Farm Bill expired for about three months before extensions were enacted during final
                    House-Senate negotiations. It increased funding for conservation and rural development programs.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Provisions:</h4>
                    <ul className="list-disc space-y-2 pl-6 text-sm text-muted-foreground">
                      <li>Increased conservation program funding</li>
                      <li>Enhanced rural development initiatives</li>
                      <li>Strengthened commodity support programs</li>
                      <li>Expanded nutrition assistance programs</li>
                      <li>Supported beginning farmer programs</li>
                      <li>Extended for about five months during negotiations</li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t">
                    <a
                      href="https://www.congress.gov/107/plaws/publ171/PLAW-107publ171.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="font-medium">
                        Read the full text of the Farm Security and Rural Investment Act of 2002 (PDF)
                      </span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-foreground">What is the Farm Bill?</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                The Farm Bill is comprehensive legislation passed approximately every five years that governs federal
                agricultural and food programs. It impacts everything from crop insurance and commodity support to
                nutrition assistance and conservation programs. For indigenous farmers, the Farm Bill includes specific
                provisions and programs designed to support tribal agriculture and food sovereignty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Programs */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
              Key Programs for Indigenous Farmers
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <div className="mt-1 rounded-lg bg-primary/10 p-2">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <span>Tribal Agriculture Programs</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Dedicated funding and technical assistance for tribal agricultural operations, including support for
                    traditional food systems and sovereignty initiatives.
                  </p>
                  <Button variant="link" className="mt-4 h-auto p-0 text-primary">
                    Learn More <ExternalLink className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <div className="mt-1 rounded-lg bg-primary/10 p-2">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <span>Conservation Programs</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Environmental Quality Incentives Program (EQIP) and Conservation Stewardship Program (CSP) provide
                    financial assistance for conservation practices.
                  </p>
                  <Button variant="link" className="mt-4 h-auto p-0 text-primary">
                    Learn More <ExternalLink className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <div className="mt-1 rounded-lg bg-primary/10 p-2">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <span>Beginning Farmer Programs</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Targeted support for new and beginning farmers, including microloans, training programs, and
                    mentorship opportunities through USDA.
                  </p>
                  <Button variant="link" className="mt-4 h-auto p-0 text-primary">
                    Learn More <ExternalLink className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <div className="mt-1 rounded-lg bg-primary/10 p-2">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <span>Value-Added Producer Grants</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Grants to help agricultural producers enter into value-added activities, from processing to
                    marketing, to increase farm income.
                  </p>
                  <Button variant="link" className="mt-4 h-auto p-0 text-primary">
                    Learn More <ExternalLink className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <div className="mt-1 rounded-lg bg-primary/10 p-2">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <span>Crop Insurance</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Federal crop insurance programs help farmers manage risk from natural disasters, weather events, and
                    market fluctuations.
                  </p>
                  <Button variant="link" className="mt-4 h-auto p-0 text-primary">
                    Learn More <ExternalLink className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <div className="mt-1 rounded-lg bg-primary/10 p-2">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <span>Local Food Systems</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Farmers Market Promotion Program and Local Food Promotion Program support direct-to-consumer
                    marketing and regional food systems.
                  </p>
                  <Button variant="link" className="mt-4 h-auto p-0 text-primary">
                    Learn More <ExternalLink className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground">Resources & Downloads</h2>
            <div className="space-y-4">
              <Card className="transition-shadow hover:shadow-md">
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-accent/10 p-3">
                      <Download className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">2024 Farm Bill Summary</h3>
                      <p className="text-sm text-muted-foreground">Comprehensive overview of current legislation</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="transition-shadow hover:shadow-md">
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-accent/10 p-3">
                      <Download className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Tribal Agriculture Guide</h3>
                      <p className="text-sm text-muted-foreground">Step-by-step guide for accessing USDA programs</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="transition-shadow hover:shadow-md">
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-accent/10 p-3">
                      <Download className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Grant Application Toolkit</h3>
                      <p className="text-sm text-muted-foreground">Templates and resources for grant applications</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Download PDF
                  </Button>
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
              Need Help Navigating USDA Programs?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90 leading-relaxed">
              Our co-op provides guidance and support for accessing federal agricultural programs. Contact us to learn
              more.
            </p>
            <Button size="lg" variant="secondary" className="mt-8">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
