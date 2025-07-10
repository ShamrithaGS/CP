import { useState } from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import EventCard from "@/components/events/EventCard";
import EventFilters from "@/components/events/EventFilters";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TrendingUp,
  Clock,
  Star,
  Users,
  Zap,
  Calendar,
  Trophy,
  Heart,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const Index = () => {
  const [filters, setFilters] = useState({});

  // Mock data for events
  const events = [
    {
      id: "1",
      title: "TechFest 2024: AI & Machine Learning Summit",
      description:
        "Join industry experts and fellow students for cutting-edge discussions on AI, ML, and the future of technology. Network with professionals and participate in hands-on workshops.",
      date: "March 15, 2024",
      time: "9:00 AM - 6:00 PM",
      venue: "Main Auditorium",
      organizer: "Computer Science Association",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500",
      category: "Technical",
      tags: [
        "AI",
        "Machine Learning",
        "Networking",
        "Workshops",
        "Certificate",
      ],
      attendees: 245,
      maxAttendees: 300,
      isRegistered: false,
      isFavorite: true,
      rating: 4.8,
      price: "0",
    },
    {
      id: "2",
      title: "Cultural Night: Fusion of Traditions",
      description:
        "Experience the rich cultural heritage through dance, music, and art. Students from different backgrounds showcase their talents in this vibrant celebration.",
      date: "March 18, 2024",
      time: "7:00 PM - 11:00 PM",
      venue: "Cultural Center",
      organizer: "Cultural Committee",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500",
      category: "Cultural",
      tags: ["Dance", "Music", "Art", "Free Food", "Open to All"],
      attendees: 180,
      maxAttendees: 250,
      isRegistered: true,
      isFavorite: false,
      rating: 4.6,
      price: "50",
    },
    {
      id: "3",
      title: "Startup Pitch Competition",
      description:
        "Present your innovative ideas to a panel of investors and entrepreneurs. Win prizes and get funding opportunities for your startup.",
      date: "March 22, 2024",
      time: "10:00 AM - 4:00 PM",
      venue: "Innovation Hub",
      organizer: "Entrepreneurship Cell",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500",
      category: "Workshop",
      tags: ["Startup", "Entrepreneurship", "Prizes", "Networking"],
      attendees: 95,
      maxAttendees: 100,
      isRegistered: false,
      isFavorite: true,
      rating: 4.9,
      price: "100",
    },
    {
      id: "4",
      title: "Inter-College Basketball Championship",
      description:
        "Compete with the best teams from colleges across the region. Show your skills and represent your college in this prestigious tournament.",
      date: "March 25, 2024",
      time: "8:00 AM - 6:00 PM",
      venue: "Sports Complex",
      organizer: "Sports Committee",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500",
      category: "Sports",
      tags: ["Basketball", "Competition", "Team Event", "Prizes"],
      attendees: 64,
      maxAttendees: 64,
      isRegistered: false,
      isFavorite: false,
      rating: 4.7,
      price: "0",
    },
    {
      id: "5",
      title: "Digital Marketing Workshop",
      description:
        "Learn the latest digital marketing strategies from industry experts. Hands-on sessions covering SEO, social media, and content marketing.",
      date: "March 28, 2024",
      time: "2:00 PM - 5:00 PM",
      venue: "Library Hall",
      organizer: "Marketing Club",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
      category: "Workshop",
      tags: ["Digital Marketing", "SEO", "Hands-on", "Certificate"],
      attendees: 120,
      maxAttendees: 150,
      isRegistered: false,
      isFavorite: false,
      rating: 4.5,
      price: "200",
    },
    {
      id: "6",
      title: "Annual Food Festival",
      description:
        "Taste delicious cuisines from around the world prepared by student chefs. Live cooking demonstrations and food competitions.",
      date: "April 2, 2024",
      time: "11:00 AM - 9:00 PM",
      venue: "Open Ground",
      organizer: "Culinary Society",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500",
      category: "Cultural",
      tags: ["Food", "Cooking", "Competition", "Free Food", "Family"],
      attendees: 300,
      maxAttendees: 500,
      isRegistered: true,
      isFavorite: true,
      rating: 4.8,
      price: "0",
    },
  ];

  const categories = [
    { name: "All Events", count: events.length, color: "violet" },
    {
      name: "Technical",
      count: events.filter((e) => e.category === "Technical").length,
      color: "blue",
    },
    {
      name: "Cultural",
      count: events.filter((e) => e.category === "Cultural").length,
      color: "pink",
    },
    {
      name: "Sports",
      count: events.filter((e) => e.category === "Sports").length,
      color: "green",
    },
    {
      name: "Workshop",
      count: events.filter((e) => e.category === "Workshop").length,
      color: "purple",
    },
  ];

  const trendingEvents = events
    .filter((event) => event.attendees > 150)
    .slice(0, 3);
  const upcomingEvents = events.slice(0, 4);
  const popularEvents = events
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Quick Stats */}
      <section className="py-16 bg-white/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card
                key={category.name}
                className="text-center bg-white/80 backdrop-blur-sm border-white/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-violet-600">
                    {category.count}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {category.name}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4 space-y-16">
          {/* Trending Events */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold flex items-center">
                  <TrendingUp className="w-8 h-8 text-violet-500 mr-3" />
                  Trending Events
                </h2>
                <p className="text-muted-foreground">
                  Most popular events with high engagement
                </p>
              </div>
              <Button
                variant="outline"
                className="bg-white/80 backdrop-blur-sm border-white/20"
                onClick={() => (window.location.href = "/events")}
              >
                View All
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trendingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>

          {/* Event Discovery with Filters */}
          <div data-section="events">
            <div className="space-y-2 mb-8">
              <h2 className="text-3xl font-bold flex items-center">
                <Calendar className="w-8 h-8 text-violet-500 mr-3" />
                Discover Events
              </h2>
              <p className="text-muted-foreground">
                Find the perfect events that match your interests
              </p>
            </div>

            {/* Filters */}
            <div className="mb-8">
              <EventFilters onFiltersChange={setFilters} />
            </div>

            {/* Event Tabs */}
            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-3 bg-white/80 backdrop-blur-sm">
                <TabsTrigger
                  value="upcoming"
                  className="flex items-center gap-2"
                >
                  <Clock className="w-4 h-4" />
                  Upcoming
                </TabsTrigger>
                <TabsTrigger
                  value="popular"
                  className="flex items-center gap-2"
                >
                  <Star className="w-4 h-4" />
                  Popular
                </TabsTrigger>
                <TabsTrigger
                  value="favorites"
                  className="flex items-center gap-2"
                >
                  <Heart className="w-4 h-4" />
                  Favorites
                </TabsTrigger>
              </TabsList>

              <TabsContent value="upcoming" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {upcomingEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="popular" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {popularEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="favorites" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {events
                    .filter((event) => event.isFavorite)
                    .map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-violet-100 to-purple-100 border-violet-200">
              <CardHeader>
                <CardTitle className="flex items-center text-violet-700">
                  <Zap className="w-6 h-6 mr-2" />
                  Quick Register
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-violet-600 mb-4">
                  Register for multiple events at once and never miss out!
                </p>
                <Button
                  className="w-full bg-violet-600 hover:bg-violet-700"
                  onClick={() =>
                    alert(
                      "🚀 Bulk registration feature coming soon! For now, register for events individually.",
                    )
                  }
                >
                  Bulk Register
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-fuchsia-100 to-pink-100 border-fuchsia-200">
              <CardHeader>
                <CardTitle className="flex items-center text-fuchsia-700">
                  <Trophy className="w-6 h-6 mr-2" />
                  Leaderboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-fuchsia-600 mb-4">
                  See where you rank among the most active students!
                </p>
                <Button
                  className="w-full bg-fuchsia-600 hover:bg-fuchsia-700"
                  onClick={() => (window.location.href = "/leaderboard")}
                >
                  View Rankings
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-100 to-amber-100 border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center text-orange-700">
                  <Sparkles className="w-6 h-6 mr-2" />
                  Create Event
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-600 mb-4">
                  Organize your own event and bring your ideas to life!
                </p>
                <Button
                  className="w-full bg-orange-600 hover:bg-orange-700"
                  onClick={() => (window.location.href = "/dashboard")}
                >
                  Create Event
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-gradient-to-r from-violet-500 via-purple-600 to-fuchsia-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6 text-white">
            <h2 className="text-4xl font-bold">
              Ready to Transform Your Campus Experience?
            </h2>
            <p className="text-xl text-violet-100">
              Join thousands of students who are already discovering amazing
              events and building incredible memories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-violet-600 hover:bg-violet-50 px-8 py-3 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                onClick={() => {
                  alert(
                    "🎉 Welcome to CampusPulse! Start by exploring events above and registering for ones that interest you.",
                  );
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <Users className="w-5 h-5 mr-2" />
                Join CampusPulse
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg"
                onClick={() =>
                  alert(
                    "📱 Mobile app coming soon! For now, enjoy the web experience on any device.",
                  )
                }
              >
                Download App
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
