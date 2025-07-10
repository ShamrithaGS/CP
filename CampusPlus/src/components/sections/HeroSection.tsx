import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Users,
  Sparkles,
  ArrowRight,
  Play,
  TrendingUp,
} from "lucide-react";

const HeroSection = () => {
  const stats = [
    { label: "Active Events", value: "150+", icon: Calendar },
    { label: "Students Joined", value: "5,000+", icon: Users },
    { label: "Campus Engagement", value: "95%", icon: TrendingUp },
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-100/50 via-purple-50/30 to-fuchsia-100/50"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-violet-400/20 to-purple-400/20 rounded-full blur-3xl floating-animation"></div>
      <div
        className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-fuchsia-400/20 to-pink-400/20 rounded-full blur-3xl floating-animation"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <Badge className="bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 border-violet-200 px-4 py-2 text-sm font-medium">
            <Sparkles className="w-4 h-4 mr-2" />
            The Future of Campus Events is Here
          </Badge>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                Discover
              </span>{" "}
              <br className="hidden sm:block" />
              Campus Events
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-fuchsia-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
                Like Never Before
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join thousands of students discovering, registering, and attending
              the most exciting campus events. From tech talks to cultural
              festivals - your next adventure awaits.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 px-8 py-3 text-lg pulse-glow"
              onClick={() => {
                const eventsSection = document.querySelector(
                  '[data-section="events"]',
                );
                eventsSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Explore Events
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/80 backdrop-blur-sm border-white/20 hover:bg-white/90 px-8 py-3 text-lg"
              onClick={() => {
                alert(
                  "🎬 Demo video coming soon! For now, explore the events below.",
                );
              }}
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="text-center space-y-2 group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-violet-100 to-purple-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-violet-600" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-violet-600">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-1 h-32 bg-gradient-to-b from-violet-500 to-purple-500 rounded-full opacity-20"></div>
      <div className="absolute top-1/3 right-0 w-1 h-24 bg-gradient-to-b from-fuchsia-500 to-pink-500 rounded-full opacity-20"></div>
    </section>
  );
};

export default HeroSection;
