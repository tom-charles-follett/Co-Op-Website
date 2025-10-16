"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock } from "lucide-react"

export default function EducationPage() {
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
              Education
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
              Traditional Seed Saving Techniques
            </h1>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>February 20, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>10 min read</span>
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
                Seed saving is a fundamental practice that connects us to our ancestors and ensures food sovereignty for
                future generations. Indigenous communities have preserved crop varieties for thousands of years through
                careful selection and traditional knowledge.
              </p>

              <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Why Save Seeds?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Saving seeds preserves genetic diversity, adapts crops to local conditions, maintains cultural heritage,
                and provides independence from commercial seed companies. Each generation of saved seeds becomes better
                adapted to your specific growing conditions, creating resilient varieties suited to your land.
              </p>

              <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Basic Principles</h2>

              <h3 className="mt-6 mb-3 text-xl font-semibold text-foreground">Selection</h3>
              <p className="text-muted-foreground leading-relaxed">
                Choose seeds from the healthiest, most productive plants that display desired characteristics. Consider
                disease resistance, flavor, yield, and adaptation to your climate. Save seeds from multiple plants to
                maintain genetic diversity.
              </p>

              <h3 className="mt-6 mb-3 text-xl font-semibold text-foreground">Isolation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Prevent cross-pollination between varieties by understanding plant reproduction. Some crops require
                significant distance between varieties, while others can be grown close together. Learn which crops are
                self-pollinating and which require isolation.
              </p>

              <h3 className="mt-6 mb-3 text-xl font-semibold text-foreground">Harvesting</h3>
              <p className="text-muted-foreground leading-relaxed">
                Collect seeds at the right stage of maturity. Most seeds should be fully mature and dry on the plant
                before harvesting. Timing varies by crop, so learn the specific indicators for each plant you grow.
              </p>

              <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Processing and Storage</h2>
              <p className="text-muted-foreground leading-relaxed">
                Clean seeds thoroughly to remove plant debris and damaged seeds. Dry seeds completely before storage to
                prevent mold and decay. Store in cool, dry, dark conditions using breathable containers or paper
                envelopes. Label clearly with variety name, harvest date, and any relevant notes.
              </p>

              <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Crop-Specific Techniques</h2>

              <h3 className="mt-6 mb-3 text-xl font-semibold text-foreground">Tomatoes</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ferment seeds in their gel for 2-3 days to remove germination inhibitors. Rinse thoroughly and dry on
                screens or plates. Tomatoes are self-pollinating, making them easy for beginners.
              </p>

              <h3 className="mt-6 mb-3 text-xl font-semibold text-foreground">Beans and Peas</h3>
              <p className="text-muted-foreground leading-relaxed">
                Allow pods to dry completely on the plant. Shell and store in airtight containers. These crops are
                excellent for beginners as they're self-pollinating and easy to save.
              </p>

              <h3 className="mt-6 mb-3 text-xl font-semibold text-foreground">Squash and Melons</h3>
              <p className="text-muted-foreground leading-relaxed">
                Harvest seeds from fully mature fruits. Clean, dry thoroughly, and store in cool conditions. These crops
                cross-pollinate easily, so maintain isolation distances or hand-pollinate.
              </p>

              <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Traditional Knowledge</h2>
              <p className="text-muted-foreground leading-relaxed">
                Indigenous seed saving practices often include ceremonies, prayers, and specific timing based on lunar
                cycles or seasonal indicators. These traditions honor the sacred relationship between people and plants.
                Respect and learn from elders who carry this knowledge.
              </p>

              <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Seed Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                Sharing seeds strengthens community resilience and preserves diversity. Our co-op hosts annual seed
                swaps where members exchange varieties and knowledge. Participate in seed libraries and regional seed
                networks to access rare varieties and connect with other seed savers.
              </p>

              <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Learning More</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our co-op offers hands-on seed saving workshops throughout the growing season. Join us to learn
                techniques specific to crops grown in our region and connect with experienced seed savers. Contact us
                for the workshop schedule and registration information.
              </p>
            </div>

            {/* Upcoming Workshops */}
            <div className="mt-12 border-t border-border pt-12">
              <h3 className="mb-6 text-2xl font-bold text-foreground">Upcoming Workshops</h3>
              <Card>
                <CardContent className="p-6">
                  <h4 className="mb-2 text-lg font-semibold text-card-foreground">Seed Saving Basics Workshop</h4>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Join us for a hands-on introduction to seed saving techniques. Learn selection, harvesting, and
                    storage methods for common crops.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">April 20, 2024 • 2:00 PM - 5:00 PM</span>
                    <Button size="sm">Register</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
