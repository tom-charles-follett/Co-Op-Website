"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, BookOpen, FileText, Users, Download } from "lucide-react"
import { useState } from "react"

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const realArticles = [
    {
      title: "Hemp Harvesting Techniques: Timing, Equipment, and Methods",
      excerpt:
        "Essential equipment including combine harvesters, sickle-bar mowers, and hand tools, with guidance on timing for CBD, seed, and fiber production.",
      source: "FloraFlex",
      url: "https://www.floraflex.com/blogs/floraflex-media/hemp-harvesting-techniques-timing-equipment-and-methods",
      date: "2024",
      category: "Harvesting",
    },
    {
      title: "How to Harvest Hemp: Complete Guide",
      excerpt:
        "Step-by-step guide on cutting stalks with sickles or mowers, timing considerations, and the challenges of harvesting for both fiber and seeds.",
      source: "wikiHow",
      url: "https://www.wikihow.com/Harvest-Hemp",
      date: "2024",
      category: "Harvesting",
    },
    {
      title: "Hemp Harvest Equipment Guide",
      excerpt:
        "Details on grain harvesting by straight combining, swathing techniques, and how newer rotary combines with draper headers work for hemp.",
      source: "National Hemp Growers Association",
      url: "https://hempgrowersofamerica.org/education/hemp-harvet-equipment/",
      date: "2024",
      category: "Equipment",
    },
    {
      title: "8 Types Hemp Equipment for Processing and Farming",
      excerpt:
        "Comprehensive overview of combines for textile hemp and specialized CBD hemp harvesters designed to preserve plant structure.",
      source: "Cannabis Tech",
      url: "https://cannabistech.com/articles/processing-and-farming-equipment-in-the-hemp-industry/",
      date: "2024",
      category: "Equipment",
    },
    {
      title: "New West Genetics: Certified Hemp Seeds for 2024-2025",
      excerpt:
        "First to breed stable US-bred hemp seed varieties that pass Seed Certification standards, offering ABOUND® Multi-Purpose and AMPLIFY® Hybrid varieties.",
      source: "New West Genetics",
      url: "https://newwestgenetics.com/",
      date: "2024-2025",
      category: "Seeds",
    },
    {
      title: "Buy Feminized Hemp Seeds - High CBD Hemp Seeds",
      excerpt:
        "U.S.-based supplier providing state-certified feminized hemp seeds with documentation, ideal for CBD cultivation.",
      source: "Fortuna Hemp",
      url: "https://fortunahemp.com/",
      date: "2024",
      category: "Seeds",
    },
    {
      title: "Hemp Seeds USA - Seed Catalog for CBD & Industrial Hemp",
      excerpt:
        "Retail seed packs for home growers and small commercial trials, with varieties optimized for different growing conditions.",
      source: "Hemp Seeds USA",
      url: "https://hempseedsusa.com/",
      date: "2024",
      category: "Seeds",
    },
    {
      title: "The Guide to Industrial Hemp Processing Equipment",
      excerpt:
        "Comprehensive guide covering advancements and innovations in hemp processing equipment for 2023 and beyond.",
      source: "Cablevey Conveyors",
      url: "https://cablevey.com/the-guide-to-industrial-hemp-processing-equipment-in-2023/",
      date: "2023",
      category: "Processing",
    },
    {
      title: "Hemp Processing Machine Manufacturers",
      excerpt:
        "Complete list of hemp processing machine manufacturers and equipment types for various stages of hemp production.",
      source: "Vista Hemp",
      url: "https://vistahemp.com/hemp-processing-machine-manufacturers/",
      date: "2024",
      category: "Processing",
    },
    {
      title: "Harvesting Hemp: The Fall Timeline and Techniques",
      excerpt:
        "Detailed timeline for fall hemp harvest, monitoring trichomes for CBD production, and identifying plant maturity signals.",
      source: "Doc's Hemp",
      url: "https://docshemp.com/blogs/news/harvesting-hemp-the-fall-timeline-and-techniques",
      date: "2024",
      category: "Harvesting",
    },
    {
      title: "Sisseton Wahpeton Oyate Hemp Economic Feasibility Study - Phase II",
      excerpt:
        "Comprehensive 2021 study covering 40-acre production-scale hemp demonstration, feral hemp collection, and breeding program for sovereign indigenous hemp seed development.",
      source: "University of Minnesota",
      url: "https://experts.umn.edu/en/projects/swo-hemp-economic-feasibility-study-phase-ii",
      date: "March 2021",
      category: "Research",
    },
    {
      title: "Turtle Mountain Band of Chippewa Indians Hemp Plan",
      excerpt:
        "Complete tribal hemp regulatory framework covering licensing, testing, sampling procedures, and compliance with federal hemp regulations.",
      source: "Turtle Mountain Band of Chippewa Indians",
      url: "https://www.ams.usda.gov/sites/default/files/media/TurtleMountainBandChippewaIndiansHempPlan.pdf",
      date: "2020",
      category: "Research",
    },
    {
      title: 'Oglala Sioux Tribe "Warriors in the Garden" Hemp Regulatory Ordinance',
      excerpt:
        "Amended tribal ordinance establishing hemp commission, licensing requirements, testing protocols, and enforcement procedures for hemp production.",
      source: "Oglala Sioux Tribe",
      url: "https://www.ams.usda.gov/sites/default/files/media/OGLALA_SIOUX_TRIBE_Hemp_Plan.pdf",
      date: "April 2020",
      category: "Research",
    },
    {
      title: "Rosebud Sioux Tribe Tribal Agricultural Hemp Code",
      excerpt:
        "Final tribal hemp code establishing hemp commission, licensing framework, inspection procedures, and regulatory compliance for the Sicangu Oyate.",
      source: "Rosebud Sioux Tribe",
      url: "https://www.ams.usda.gov/sites/default/files/media/RosebudSiouxTribeHempPlan.pdf",
      date: "April 2020",
      category: "Research",
    },
    {
      title: '"Our Relative the Hemp Plant" - Information Booklet',
      excerpt:
        "Educational booklet covering hemp's role in tribal sovereignty, climate resiliency, bioremediation, construction applications, and mechanical performance of hempcrete.",
      source: "Indigenous Hemp Farmers Cooperative & Anishinaabe Agriculture Institute",
      url: "",
      date: "2024",
      category: "Research",
    },
    {
      title: "Phytoremediation with Hemp: Scientific Review",
      excerpt:
        "Scientific articles on hemp's soil remediation capabilities, including case studies from Aroostook Band of Micmacs PFAS remediation project.",
      source: "Various Sources",
      url: "",
      date: "2018-2024",
      category: "Research",
    },
    {
      title: "Hemp-Based Construction & Hempcrete Performance Studies",
      excerpt:
        "Technical studies on hempcrete mechanical performance, thermal insulation, moisture resistance, and fire safety for sustainable tribal housing.",
      source: "Multiple Research Institutions",
      url: "",
      date: "2020-2024",
      category: "Research",
    },
    {
      title: "Lower Sioux Hemp Program & Housing Project",
      excerpt:
        "Case study on Lower Sioux Community's integration of hempcrete into sustainable housing, demonstrating tribal leadership in eco-friendly construction.",
      source: "Lower Sioux Community",
      url: "https://lowersioux.com/hemp-program-and-housing-project/",
      date: "2024",
      category: "Research",
    },
    {
      title: "Anishinaabe Agriculture Institute Hemp Initiatives",
      excerpt:
        "Overview of AAI's work with hempcrete construction, bioremediation projects, and integration of traditional ecological knowledge with modern hemp practices.",
      source: "Anishinaabe Agriculture Institute",
      url: "https://www.anishinaabeagriculture.org/",
      date: "2024",
      category: "Research",
    },
  ]

  const categories = [
    {
      name: "Hemp Harvesting",
      slug: "harvesting",
      count: realArticles.filter((a) => a.category === "Harvesting").length,
    },
    {
      name: "Seed Suppliers",
      slug: "seeds",
      count: realArticles.filter((a) => a.category === "Seeds").length,
    },
    {
      name: "Equipment & Machinery",
      slug: "equipment",
      count: realArticles.filter((a) => a.category === "Equipment").length,
    },
    {
      name: "Processing & Manufacturing",
      slug: "processing",
      count: realArticles.filter((a) => a.category === "Processing").length,
    },
    {
      name: "Research & Reports",
      slug: "research",
      count: realArticles.filter((a) => a.category === "Research").length,
    },
  ]

  const filteredArticles = selectedCategory
    ? realArticles.filter((article) => article.category.toLowerCase() === selectedCategory.toLowerCase())
    : realArticles

  const handleCategoryClick = (slug: string) => {
    const categoryMap: Record<string, string> = {
      harvesting: "Harvesting",
      seeds: "Seeds",
      equipment: "Equipment",
      processing: "Processing",
      research: "Research",
    }
    setSelectedCategory(categoryMap[slug])
    document.getElementById("articles-section")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main>
      {/* Banner Image Section */}
      <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        <img
          src="/books-and-plants-education-sustainable-farming.jpg"
          alt="Education and sustainable farming"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white drop-shadow-lg md:text-5xl lg:text-6xl text-balance">
              Resources
            </h1>
            <p className="mt-4 text-lg text-white/90 drop-shadow-md md:text-xl text-pretty">
              Resources and guidance for hemp farmers
            </p>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-foreground">
              Practical Resources for Tribal Members
            </h2>
            <p className="mb-12 text-center text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Everything you need to get started with hemp farming, from licensing to education
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
              {/* HEMP 101 Classes */}
              <Card className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    HEMP 101 Classes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    User-friendly courses covering hemp basics, cultivation techniques, and business planning for
                    beginners.
                  </p>
                  <a href="https://www.anishinaabeagriculture.org" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Explore Courses
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* How to Get Licensed */}
              <Card className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    How to Get Licensed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Step-by-step guide to obtaining hemp cultivation licenses and meeting regulatory requirements.
                  </p>
                  <a href="https://www.ams.usda.gov/rules-regulations/hemp" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      USDA Hemp Program
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Getting Started Checklist */}
              <Card className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Getting Started Checklist
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Complete checklist for new hemp farmers covering licensing, land preparation, and market planning.
                  </p>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <Download className="mr-2 h-4 w-4" />
                    Download Checklist
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* White Papers and Reports */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">Research & Reports</h3>
              <div className="space-y-4">
                {realArticles
                  .filter((article) => article.category === "Research")
                  .map((article, index) => (
                    <Card key={index} className="transition-shadow hover:shadow-md">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-card-foreground mb-2">{article.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{article.excerpt}</p>
                            <p className="text-xs text-muted-foreground italic">
                              {article.source} | {article.date}
                            </p>
                          </div>
                          {article.url && (
                            <a href={article.url} target="_blank" rel="noopener noreferrer" download>
                              <Button variant="ghost" size="sm">
                                <Download className="h-4 w-4" />
                              </Button>
                            </a>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
              Hemp Farming Resources
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
              Curated articles and guides from hemp farming experts covering seeds, equipment, harvesting techniques,
              and processing methods.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => (
                <Card
                  key={category.slug}
                  className="cursor-pointer transition-all hover:shadow-md hover:border-primary"
                  onClick={() => handleCategoryClick(category.slug)}
                >
                  <CardContent className="p-6 text-center">
                    <h3 className="mb-1 text-base font-semibold text-card-foreground">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.count} articles</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Real Articles */}
      <section id="articles-section" className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-3xl font-bold text-foreground">
                {selectedCategory ? `${selectedCategory} Articles` : "Expert Articles & Guides"}
              </h2>
              {selectedCategory && (
                <Button variant="outline" onClick={() => setSelectedCategory(null)}>
                  Show All Articles
                </Button>
              )}
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article, index) => (
                <Card key={index} className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-2 inline-block w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                      {article.category}
                    </div>
                    <CardTitle className="text-xl leading-tight">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col">
                    <p className="mb-4 flex-1 text-sm text-muted-foreground leading-relaxed">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <span className="font-medium">{article.source}</span>
                      <span>{article.date}</span>
                    </div>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                      <Button variant="default" className="w-full">
                        Read Article <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Card className="overflow-hidden border-none bg-primary">
              <CardContent className="p-8 text-center md:p-12">
                <h2 className="mb-4 text-3xl font-bold text-primary-foreground text-balance">
                  Stay Updated with Our Newsletter
                </h2>
                <p className="mb-8 text-primary-foreground/90 leading-relaxed">
                  Get the latest hemp farming resources and co-op updates delivered to your inbox monthly.
                </p>
                <form className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
                  />
                  <Button type="submit" size="lg" variant="secondary">
                    Subscribe
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
