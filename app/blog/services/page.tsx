"use client"

import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"

export default function ServicesPage() {
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
              Services & Labor
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
              Building a Farmer Labor Network
            </h1>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>February 25, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>5 min read</span>
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
                Labor is one of the biggest challenges facing small-scale farmers. Creating a cooperative labor network
                allows farmers to support each other during peak seasons, share skills, and build community resilience.
              </p>

              <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Why Labor Networks Matter</h2>
              <p className="text-muted-foreground leading-relaxed">
                Small farms often face labor shortages during critical times like planting and harvest. A well-organized
                labor network helps members access skilled workers, coordinate work exchanges, and reduce labor costs
                through mutual support. This traditional practice of community work has sustained indigenous communities
                for generations.
              </p>

              <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Types of Labor Arrangements</h2>

              <h3 className="mt-6 mb-3 text-xl font-semibold text-foreground">Work Exchange</h3>
              <p className="text-muted-foreground leading-relaxed">
                Farmers trade labor hours directly, helping each other during busy periods. This builds relationships
                and allows farmers to learn from each other's practices. Track hours carefully to ensure fair exchanges.
              </p>

              <h3 className="mt-6 mb-3 text-xl font-semibold text-foreground">Shared Employees</h3>
              <p className="text-muted-foreground leading-relaxed">
                Multiple farms jointly employ workers, providing more stable employment and reducing individual farm
                costs. This requires coordination but can attract higher-quality workers seeking consistent hours.
              </p>

              <h3 className="mt-6 mb-3 text-xl font-semibold text-foreground">Volunteer Programs</h3>
              <p className="text-muted-foreground leading-relaxed">
                Educational volunteer programs bring people interested in learning farming skills. Volunteers gain
                experience while farms receive help. Clear expectations and good training are essential for success.
              </p>

              <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Setting Up Your Network</h2>
              <p className="text-muted-foreground leading-relaxed">
                Start by identifying interested farmers in your area. Establish clear guidelines for participation,
                including expectations, scheduling, and compensation methods. Use simple tools like shared calendars and
                group messaging to coordinate activities. Our co-op provides templates and support for establishing
                labor networks.
              </p>

              <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Best Practices</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Communicate clearly about expectations and schedules</li>
                <li>• Provide proper training and safety equipment</li>
                <li>• Track hours and contributions accurately</li>
                <li>• Respect traditional knowledge and practices</li>
                <li>• Create a welcoming and inclusive environment</li>
                <li>• Plan ahead for peak season needs</li>
              </ul>

              <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Legal Considerations</h2>
              <p className="text-muted-foreground leading-relaxed">
                Understand labor laws in your area, including requirements for workers' compensation, liability
                insurance, and employment classification. Consult with legal experts familiar with agricultural labor to
                ensure compliance. Our co-op can connect you with resources and advisors.
              </p>

              <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Join Our Network</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our co-op maintains an active labor network connecting farmers with workers and coordinating work
                exchanges. Contact us to learn more about participating and accessing our labor coordination tools.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
