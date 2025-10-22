import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export default function WhoWeArePage() {
  const communityVoices = [
    {
      name: "Anishinaabe Agriculture Institute",
      description: "Leading indigenous agricultural education and traditional farming practices",
      link: "https://www.anishinaabeagriculture.org/",
    },
    {
      name: "Lower Sioux Housing & Hempcrete",
      description: "Pioneering sustainable housing with hemp-based construction materials",
      link: "https://lowersioux.com/hemp-program-and-housing-project/",
      linkText: "Learn More",
    },
    {
      name: "Diné Weavers",
      description: "Traditional textile arts using hemp and native fibers",
    },
    {
      name: "Prairie Band Potawatomi",
      description: "Hemp cultivation and sustainable agriculture initiatives",
      link: "https://prairiebandag.com/",
    },
    {
      name: "Cheyenne River Sioux Tribe",
      description: "Community-led hemp farming and economic development",
      link: "https://www.cheyenneriversioux.com/",
    },
    {
      name: "Macoche Pine Ridge",
      description: "Regenerative agriculture and hemp production on tribal lands",
      link: "https://makoceag.org/",
    },
    {
      name: "Mi'kmaq Bioremediation Project",
      description: "Using hemp for environmental restoration and soil healing",
    },
    {
      name: "Indigenous Habitat Institute",
      description: "Ecosystem restoration through indigenous agricultural practices",
      link: "https://www.indigenoushabitatinstitute.com/",
    },
    {
      name: "Turtle Mountain Chippewa Hemp",
      description: "Tribal hemp cultivation and processing operations",
      link: "https://chippewaharvest.com/",
    },
  ]

  return (
    <main>
      {/* Banner Image Section */}
      <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        <img
          src="/indigenous-farmers-working-together-in-field-commu.jpg"
          alt="Indigenous farmers working together"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white drop-shadow-lg md:text-5xl lg:text-6xl text-balance">
              Who We Are
            </h1>
            <p className="mt-4 text-lg text-white/90 drop-shadow-md md:text-xl text-pretty">
              A collective of indigenous communities cultivating hemp for a sustainable future
            </p>
          </div>
        </div>
      </section>

      {/* Community Voices Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-foreground">Community Voices</h2>
            <p className="mb-12 text-center text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Our co-op brings together indigenous tribes and organizations across North America, each contributing
              unique knowledge, traditions, and innovations in hemp cultivation and sustainable agriculture.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {communityVoices.map((voice, index) => (
                <Card key={index} className="transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">{voice.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{voice.description}</p>
                    {voice.link && (
                      <Link
                        href={voice.link}
                        className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {voice.linkText || "Learn More"}
                        <ExternalLink className="h-3 w-3" />
                      </Link>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Interviews Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">Stories from the Field</h2>
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
              Video interviews and stories from our community members
            </p>
            <Card>
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-4">Video content coming soon</p>
                <p className="text-sm text-muted-foreground">
                  We're collecting stories and interviews from our members to share their experiences, traditional
                  knowledge, and innovations in hemp farming.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl text-balance">Join Our Community</h2>
            <p className="mt-4 text-lg text-primary-foreground/90 leading-relaxed">
              Become part of the indigenous hemp farming movement and connect with communities across North America.
            </p>
            <div className="mt-8">
              <Link href="/signup">
                <Button size="lg" variant="secondary">
                  Become a Member
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
