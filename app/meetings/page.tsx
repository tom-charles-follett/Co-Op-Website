import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, Users, Video } from "lucide-react"

export default function MeetingsPage() {
  const upcomingMeetings = [
    {
      date: "March 15, 2024",
      time: "6:00 PM - 8:00 PM",
      title: "Spring Planting Strategy",
      location: "Community Center",
      type: "In-Person",
      description:
        "Planning session for spring crops, seed sharing, and coordinating planting schedules across member farms.",
    },
    {
      date: "April 12, 2024",
      time: "7:00 PM - 8:30 PM",
      title: "Soil Health Workshop",
      location: "Virtual Meeting",
      type: "Online",
      description:
        "Guest speaker on regenerative soil practices, composting techniques, and soil testing interpretation.",
    },
    {
      date: "May 10, 2024",
      time: "6:00 PM - 8:00 PM",
      title: "Equipment Sharing Coordination",
      location: "Community Center",
      type: "In-Person",
      description: "Organizing shared equipment schedules for the growing season and discussing maintenance needs.",
    },
  ]

  const pastMeetings = [
    {
      date: "February 8, 2024",
      title: "Annual Planning Meeting",
      summary: "Reviewed 2023 successes and set goals for 2024. Elected new board members and approved budget.",
    },
    {
      date: "January 11, 2024",
      title: "Winter Seed Catalog Review",
      summary: "Collective seed ordering session and discussion of new varieties to trial this season.",
    },
  ]

  return (
    <main>
      {/* Banner Image Section */}
      <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        <img
          src="/community-gathering-farmers-meeting-discussion.jpg"
          alt="Community gathering"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white drop-shadow-lg md:text-5xl lg:text-6xl text-balance">
              Monthly Meetings
            </h1>
            <p className="mt-4 text-lg text-white/90 drop-shadow-md md:text-xl text-pretty">
              Building community through collaboration
            </p>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
              Monthly Meetings
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
              Join us for regular gatherings to share knowledge, coordinate activities, and strengthen our farming
              community. All co-op members and interested farmers are welcome.
            </p>
          </div>
        </div>
      </section>

      {/* Meeting Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 grid gap-6 md:grid-cols-3">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-card-foreground">Second Friday</h3>
                  <p className="text-sm text-muted-foreground">
                    Monthly meetings held on the second Friday of each month
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-card-foreground">Evening Hours</h3>
                  <p className="text-sm text-muted-foreground">
                    Typically 6:00 PM - 8:00 PM to accommodate work schedules
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-card-foreground">Open to All</h3>
                  <p className="text-sm text-muted-foreground">Members and prospective members welcome to attend</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Meetings */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground">Upcoming Meetings</h2>
            <div className="space-y-6">
              {upcomingMeetings.map((meeting, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="bg-card">
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div className="flex-1">
                        <CardTitle className="mb-2 text-2xl">{meeting.title}</CardTitle>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{meeting.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{meeting.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            {meeting.type === "Online" ? <Video className="h-4 w-4" /> : <MapPin className="h-4 w-4" />}
                            <span>{meeting.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span
                          className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                            meeting.type === "Online" ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
                          }`}
                        >
                          {meeting.type}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="mb-4 text-muted-foreground leading-relaxed">{meeting.description}</p>
                    <Button>RSVP for Meeting</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Meetings */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground">Past Meetings</h2>
            <div className="space-y-4">
              {pastMeetings.map((meeting, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div className="flex-1">
                        <div className="mb-2 flex items-center gap-3">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{meeting.date}</span>
                        </div>
                        <h3 className="mb-2 text-lg font-semibold text-card-foreground">{meeting.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{meeting.summary}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        View Notes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Guidelines */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Meeting Guidelines</h2>
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-card-foreground">What to Expect</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Our meetings are informal gatherings focused on collaboration and knowledge sharing. We typically
                      start with updates from members, followed by the main topic or workshop, and end with open
                      discussion and planning.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-card-foreground">How to Participate</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• RSVP through our website or contact us directly</li>
                      <li>• Bring questions, ideas, and experiences to share</li>
                      <li>• Respect all voices and traditional knowledge</li>
                      <li>• Stay for the potluck dinner after in-person meetings</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-card-foreground">Virtual Meeting Access</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Online meetings are held via video conference. Registered participants will receive a meeting link
                      24 hours before the scheduled time.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
              Join Us at Our Next Meeting
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90 leading-relaxed">
              Whether you're a current member or interested in learning more about our co-op, we'd love to see you at
              our next gathering.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary">
                RSVP Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
              >
                Add to Calendar
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
