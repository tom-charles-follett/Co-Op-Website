import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Users, FileText, TrendingUp } from "lucide-react"

export default function EnotriumPage() {
  const features = [
    {
      icon: MapPin,
      title: "Visualize Supply Chain Geography",
      description:
        "Map and track the geographic distribution of your entire supply chain. See where your suppliers, manufacturers, and partners are located in real-time with interactive visualizations.",
    },
    {
      icon: Users,
      title: "Discover Suppliers & Manufacturers",
      description:
        "Connect with verified suppliers and manufacturers in our network. Search by location, specialty, certifications, and more to find the perfect partners for your agricultural needs.",
    },
    {
      icon: FileText,
      title: "Draft Smart Contracts",
      description:
        "Create and manage smart contracts with your partners directly on the platform. Automate agreements, ensure transparency, and build trust with blockchain-powered contracts.",
    },
    {
      icon: TrendingUp,
      title: "Monitor Live Commodity Markets",
      description:
        "Stay informed with real-time commodity market data. Track prices, trends, and forecasts for agricultural products to make data-driven decisions for your co-op.",
    },
  ]

  return (
    <>
      {/* Banner */}
      <div className="relative h-[400px] w-full md:h-[500px]">
        <img
          src="/professional-minimalist-supply-chain-network.jpg"
          alt="Professional supply chain network visualization"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold text-white drop-shadow-lg md:text-6xl">Enotrium</h1>
          <p className="max-w-2xl text-lg text-white/90 drop-shadow-md md:text-xl">
            Advanced Supply Chain Monitoring Platform
          </p>
        </div>
      </div>

      <main className="flex-1">
        {/* Introduction */}
        <section className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Manage Your Supply Chain with Confidence
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              Enotrium is a comprehensive supply chain monitoring platform for agricultural producers and co-ops. Track
              your suppliers, manage partnerships, and stay informed about market conditions—all in one powerful
              platform.
            </p>
            <Link
              href="#"
              className="inline-block font-quicksand text-4xl font-light uppercase tracking-wide text-accent transition-colors hover:text-accent/80 md:text-5xl"
            >
              Launch Enotrium
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center font-serif text-3xl font-bold text-foreground">Platform Features</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {features.map((feature, index) => (
                <Card key={index} className="border-2">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-3xl rounded-lg bg-primary/5 p-8 text-center md:p-12">
            <h2 className="mb-4 font-serif text-2xl font-bold text-foreground md:text-3xl">
              Ready to Transform Your Supply Chain?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Join agricultural producers and co-ops who are using Enotrium to build stronger, more transparent supply
              chains.
            </p>
            <Link
              href="#"
              className="inline-block font-quicksand text-4xl font-light uppercase tracking-wide text-accent transition-colors hover:text-accent/80 md:text-5xl"
            >
              Launch Enotrium
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
