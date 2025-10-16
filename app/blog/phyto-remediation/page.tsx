"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock } from "lucide-react"

export default function PhytoRemediationPage() {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <main>
      {/* Banner Image Section */}
      <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        <img
          src="/plants-cleaning-soil-phytoremediation-environmental-restoration.jpg"
          alt="Phytoremediation - Plants healing contaminated soil"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl font-bold text-white drop-shadow-lg md:text-5xl lg:text-6xl text-balance">
            Phyto-remediation
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90 drop-shadow-md md:text-xl text-pretty">
            Healing Soil Through Plants
          </p>
        </div>
      </section>

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
              Phyto-remediation
            </div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              Understanding Phyto-remediation: Healing Soil Through Plants
            </h2>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>March 1, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>8 min read</span>
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
              <div className="aspect-video mb-8 rounded-lg bg-muted" />

              <p className="text-lg text-muted-foreground leading-relaxed">
                Phyto-remediation is an ancient practice that indigenous communities have used for generations to heal
                contaminated soil and restore ecosystem balance. This natural, plant-based approach to environmental
                cleanup offers a sustainable alternative to conventional remediation methods.
              </p>

              <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">What is Phyto-remediation?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Phyto-remediation uses plants to remove, stabilize, or break down contaminants in soil, water, and air.
                Different plants have evolved unique abilities to absorb heavy metals, break down organic pollutants, or
                stabilize contaminated soil. This process not only cleans the environment but also restores soil health
                and biodiversity.
              </p>

              <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Types of Phyto-remediation</h2>

              <h3 className="mt-6 mb-3 text-xl font-semibold text-foreground">Phytoextraction</h3>
              <p className="text-muted-foreground leading-relaxed">
                Plants absorb contaminants through their roots and accumulate them in their shoots and leaves. These
                plants are then harvested and properly disposed of, removing the contaminants from the soil. Sunflowers,
                Indian mustard, and certain ferns are excellent phytoextractors.
              </p>

              <h3 className="mt-6 mb-3 text-xl font-semibold text-foreground">Phytostabilization</h3>
              <p className="text-muted-foreground leading-relaxed">
                Plants immobilize contaminants in the soil, preventing them from spreading to groundwater or being taken
                up by other organisms. This method is particularly useful for heavy metals and helps restore vegetation
                to contaminated sites.
              </p>

              <h3 className="mt-6 mb-3 text-xl font-semibold text-foreground">Phytodegradation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Plants break down organic contaminants through metabolic processes. This is effective for petroleum
                products, pesticides, and other organic pollutants. Willows, poplars, and grasses are commonly used for
                this purpose.
              </p>

              <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Indigenous Knowledge and Practice</h2>
              <p className="text-muted-foreground leading-relaxed">
                Indigenous communities have long understood the healing properties of plants. Traditional ecological
                knowledge includes understanding which plants grow in disturbed areas and how they contribute to
                ecosystem recovery. This wisdom is now being recognized and integrated into modern environmental
                restoration projects.
              </p>

              <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Implementing Phyto-remediation</h2>
              <p className="text-muted-foreground leading-relaxed">
                Successful phyto-remediation requires careful planning and understanding of your soil conditions. Start
                with soil testing to identify contaminants, then select appropriate plant species. Consider factors like
                climate, soil type, and the specific contaminants present. Many projects combine multiple plant species
                to address different contaminants and create a more resilient ecosystem.
              </p>

              <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Benefits for Farmers</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Cost-effective compared to conventional remediation methods</li>
                <li>• Improves soil health and fertility over time</li>
                <li>• Increases biodiversity and ecosystem services</li>
                <li>• Can be integrated with agricultural production</li>
                <li>• Provides aesthetic and cultural benefits</li>
              </ul>

              <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Getting Started</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you're interested in implementing phyto-remediation on your farm, start by conducting a thorough soil
                assessment. Our co-op offers workshops and consulting services to help you design and implement a
                phyto-remediation plan tailored to your specific needs. Contact us to learn more about upcoming
                educational opportunities.
              </p>
            </div>

            {/* Related Articles */}
            <div className="mt-12 border-t border-border pt-12">
              <h3 className="mb-6 text-2xl font-bold text-foreground">Related Articles</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardContent className="p-6">
                    <div className="mb-2 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                      Education
                    </div>
                    <h4 className="mb-2 text-lg font-semibold text-card-foreground">Soil Health Fundamentals</h4>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Understanding the basics of soil biology and how to improve soil health naturally.
                    </p>
                    <Link href="/blog/education" onClick={handleLinkClick}>
                      <Button variant="link" className="h-auto p-0 text-primary">
                        Read More →
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="mb-2 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                      Sustainable Practices
                    </div>
                    <h4 className="mb-2 text-lg font-semibold text-card-foreground">Regenerative Agriculture Basics</h4>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Learn the principles of regenerative farming and how to apply them to your operation.
                    </p>
                    <Link href="/blog/sustainable-practices" onClick={handleLinkClick}>
                      <Button variant="link" className="h-auto p-0 text-primary">
                        Read More →
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
