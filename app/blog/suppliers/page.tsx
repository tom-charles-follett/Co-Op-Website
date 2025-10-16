"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock, ExternalLink } from "lucide-react"

export default function SuppliersPage() {
  const suppliers = [
    {
      name: "Native Seeds/SEARCH",
      category: "Seeds",
      description: "Non-profit organization conserving traditional crops of the Southwest and northern Mexico.",
      specialty: "Heritage indigenous varieties",
    },
    {
      name: "Seed Savers Exchange",
      category: "Seeds",
      description: "Community-based organization preserving heirloom and open-pollinated seeds.",
      specialty: "Heirloom vegetables and flowers",
    },
    {
      name: "Johnny's Selected Seeds",
      category: "Seeds",
      description: "Employee-owned company offering high-quality seeds and growing supplies.",
      specialty: "Organic and conventional seeds",
    },
    {
      name: "BCS America",
      category: "Equipment",
      description: "Walk-behind tractors and attachments for small-scale farming.",
      specialty: "Two-wheel tractors",
    },
    {
      name: "Earth Tools",
      category: "Equipment",
      description: "Specializing in walk-behind tractors and sustainable farming equipment.",
      specialty: "Small-scale equipment",
    },
    {
      name: "Peaceful Valley",
      category: "Supplies",
      description: "Organic farming and gardening supplies, including tools and amendments.",
      specialty: "Organic inputs",
    },
  ]

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <main>
      {/* Breadcrumb */}
      <section className="border-b border-border py-4">
        <div className="container mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary"
            onClick={handleLinkClick}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Resources
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
              Suppliers
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
              Trusted Seed & Equipment Suppliers
            </h1>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>February 28, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>6 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Finding reliable suppliers who understand the needs of indigenous farmers and support sustainable
                agriculture is essential. This guide highlights trusted sources for seeds, equipment, and farming
                supplies that align with our co-op's values.
              </p>

              <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Choosing the Right Suppliers</h2>
              <p className="text-muted-foreground leading-relaxed">
                When selecting suppliers, consider factors beyond price. Look for companies that prioritize seed
                sovereignty, offer heritage varieties, support small-scale farmers, and demonstrate environmental
                responsibility. Building relationships with ethical suppliers strengthens the entire sustainable
                agriculture movement.
              </p>

              <h2 className="mt-8 mb-6 text-2xl font-bold text-foreground">Recommended Suppliers</h2>

              <div className="space-y-4 not-prose">
                {suppliers.map((supplier, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                        <div className="flex-1">
                          <div className="mb-2 flex items-center gap-2">
                            <h3 className="text-lg font-semibold text-card-foreground">{supplier.name}</h3>
                            <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
                              {supplier.category}
                            </span>
                          </div>
                          <p className="mb-2 text-sm text-muted-foreground">{supplier.description}</p>
                          <p className="text-xs text-muted-foreground">
                            <span className="font-semibold">Specialty:</span> {supplier.specialty}
                          </p>
                        </div>
                        <Button variant="outline" size="sm" className="md:mt-0 bg-transparent">
                          Visit Site <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2 className="mt-12 mb-4 text-2xl font-bold text-foreground">Seed Sovereignty</h2>
              <p className="text-muted-foreground leading-relaxed">
                Seed sovereignty is the right of farmers to save, breed, and exchange seeds. Supporting suppliers who
                offer open-pollinated and heirloom varieties helps preserve genetic diversity and maintains our
                independence from corporate seed systems. Many indigenous communities are working to recover and
                preserve traditional crop varieties that have been grown for generations.
              </p>

              <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Equipment Considerations</h2>
              <p className="text-muted-foreground leading-relaxed">
                For small-scale and sustainable farming, appropriate-scale equipment is crucial. Walk-behind tractors,
                hand tools, and simple machinery often work better than large industrial equipment. Look for durable,
                repairable equipment that can be maintained locally. Our co-op's equipment sharing program can help you
                try different tools before making significant investments.
              </p>

              <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Building Supplier Relationships</h2>
              <p className="text-muted-foreground leading-relaxed">
                Developing strong relationships with suppliers can lead to better service, bulk discounts, and access to
                specialized products. Consider coordinating orders with other co-op members to increase buying power.
                Many suppliers offer educational resources, technical support, and trial programs that can benefit your
                farming operation.
              </p>

              <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Co-op Bulk Ordering</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our co-op coordinates bulk orders several times per year to help members save money and reduce shipping
                costs. Contact us to learn about upcoming group orders and how to participate. We also maintain a shared
                catalog of recommended suppliers and products based on member experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
