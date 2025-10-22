import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, FileText, Users, TrendingUp, Building2, Sprout } from "lucide-react"
import Image from "next/image"

export default function FundingAidPage() {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Banner Section */}
      <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        <Image
          src="/funding-financial-assistance-grants-agriculture.jpg"
          alt="Funding and Aid for Indigenous Farmers"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">Funding & Aid</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl drop-shadow-md">
            Financial Resources for Indigenous Farmers
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Access Financial Support</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover grants, loans, and financial assistance programs designed to support indigenous farmers and
            agricultural communities. We help you navigate funding opportunities to grow your operation.
          </p>
        </div>

        {/* Federal Programs */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Federal Funding Programs</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Building2 className="h-10 w-10 text-primary mb-2" />
                <CardTitle>USDA Grants</CardTitle>
                <CardDescription>Direct federal agricultural grants</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Access USDA grant programs including Beginning Farmer and Rancher Development Program, Value-Added
                  Producer Grants, and Specialty Crop Block Grants.
                </p>
                <ul className="text-sm space-y-2 text-muted-foreground mb-4">
                  <li>• Up to $250,000 in funding</li>
                  <li>• Equipment and infrastructure</li>
                  <li>• Training and education support</li>
                </ul>
                <div className="flex flex-col gap-2">
                  <Button variant="outline" size="sm" className="bg-transparent" asChild>
                    <a
                      href="https://www.nifa.usda.gov/grants/programs/beginning-farmer-rancher-development-program-bfrdp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      BFRDP Program
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="bg-transparent" asChild>
                    <a href="https://vapg.rd.usda.gov" target="_blank" rel="noopener noreferrer">
                      Value-Added Grants
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <DollarSign className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Farm Service Agency Loans</CardTitle>
                <CardDescription>Low-interest agricultural loans</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  FSA offers direct and guaranteed loans for farm ownership, operating expenses, and emergency
                  assistance with favorable terms for beginning farmers.
                </p>
                <ul className="text-sm space-y-2 text-muted-foreground mb-4">
                  <li>• Low interest rates (1-5%)</li>
                  <li>• Up to $600,000 available</li>
                  <li>• Flexible repayment terms</li>
                </ul>
                <Button variant="outline" size="sm" className="bg-transparent" asChild>
                  <a
                    href="https://www.fsa.usda.gov/programs-and-services/farm-loan-programs/native-american-loans/index"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    FSA Tribal Loans
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Tribal Programs</CardTitle>
                <CardDescription>Indigenous-specific funding</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Special programs through the Office of Tribal Relations including the Indian Land Tenure Foundation
                  grants and Native American Agriculture Fund.
                </p>
                <ul className="text-sm space-y-2 text-muted-foreground mb-4">
                  <li>• Priority for tribal members</li>
                  <li>• Cultural preservation support</li>
                  <li>• Community development funds</li>
                </ul>
                <Button variant="outline" size="sm" className="bg-transparent" asChild>
                  <a href="https://nativeamericanagriculturefund.org/" target="_blank" rel="noopener noreferrer">
                    NAAF Grants
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* State and Local Programs */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">State & Local Resources</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-primary mb-2" />
                <CardTitle>State Agricultural Grants</CardTitle>
                <CardDescription>Regional funding opportunities</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Many states offer additional grant programs for sustainable agriculture, organic certification, and
                  farm-to-market initiatives.
                </p>
                <Button variant="outline" size="sm" className="mt-2 bg-transparent" asChild>
                  <a href="https://www.farmers.gov/your-business/tribal" target="_blank" rel="noopener noreferrer">
                    Find State Programs
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Sprout className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Conservation Programs</CardTitle>
                <CardDescription>Environmental stewardship funding</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  NRCS conservation programs provide financial assistance for implementing sustainable practices, soil
                  health, and water conservation.
                </p>
                <Button variant="outline" size="sm" className="mt-2 bg-transparent" asChild>
                  <a
                    href="https://www.nrcs.usda.gov/programs-initiatives/eqip-environmental-quality-incentives"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    NRCS Programs
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Private and Foundation Grants */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Private & Foundation Grants</h3>
          <Card>
            <CardHeader>
              <FileText className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Non-Profit and Foundation Support</CardTitle>
              <CardDescription>Alternative funding sources</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Agricultural Foundations</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Organizations like the Sustainable Agriculture Research and Education (SARE) program, National Young
                    Farmers Coalition, and various agricultural foundations offer grants ranging from $5,000 to $50,000.
                  </p>
                  <Button variant="outline" size="sm" className="bg-transparent" asChild>
                    <a href="https://www.sare.org/grants/" target="_blank" rel="noopener noreferrer">
                      SARE Grants
                    </a>
                  </Button>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Community Development Financial Institutions</h4>
                  <p className="text-sm text-muted-foreground">
                    CDFIs provide loans and technical assistance to underserved communities, including indigenous
                    farmers, with flexible terms and lower barriers to entry.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Corporate Grants</h4>
                  <p className="text-sm text-muted-foreground">
                    Major agricultural companies and food corporations offer grant programs supporting sustainable
                    farming, innovation, and community agriculture.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Application Support */}
        <div className="bg-muted rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Need Help with Applications?</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
            Our co-op provides free assistance with grant applications, loan paperwork, and financial planning. We have
            successfully helped members secure over $2 million in funding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Schedule Consultation</Button>
            <Button size="lg" variant="outline">
              Download Application Guide
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
