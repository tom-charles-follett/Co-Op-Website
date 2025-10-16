"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
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
    }
    setSelectedCategory(categoryMap[slug])
    // Scroll to articles section
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
              Hemp Farming Resources
            </h1>
            <p className="mt-4 text-lg text-white/90 drop-shadow-md md:text-xl text-pretty">
              Expert guides and articles from industry professionals
            </p>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
              Hemp Farming Resources
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
              Curated articles and guides from hemp farming experts covering seeds, equipment, harvesting techniques,
              and processing methods.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-foreground">Browse by Topic</h2>
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
