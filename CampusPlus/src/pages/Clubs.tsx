import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Users,
  Calendar,
  Star,
  Plus,
  Search,
  Filter,
  MessageCircle,
} from "lucide-react";

const Clubs = () => {
  // Mock clubs data
  const clubs = [
    {
      id: "1",
      name: "Computer Science Association",
      description:
        "Advancing technology education and fostering innovation among CS students.",
      members: 245,
      upcomingEvents: 3,
      category: "Technical",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300",
      isJoined: true,
    },
    {
      id: "2",
      name: "Cultural Committee",
      description:
        "Celebrating diversity and organizing cultural events throughout the year.",
      members: 180,
      upcomingEvents: 5,
      category: "Cultural",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300",
      isJoined: false,
    },
    {
      id: "3",
      name: "Entrepreneurship Cell",
      description:
        "Nurturing entrepreneurial spirit and supporting startup initiatives.",
      members: 156,
      upcomingEvents: 2,
      category: "Business",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300",
      isJoined: true,
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Technical: "bg-blue-100 text-blue-700",
      Cultural: "bg-pink-100 text-pink-700",
      Business: "bg-green-100 text-green-700",
      Sports: "bg-orange-100 text-orange-700",
    };
    return (
      colors[category as keyof typeof colors] || "bg-gray-100 text-gray-700"
    );
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Campus Clubs & Organizations
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Connect with like-minded students, join clubs that match your
              interests, and participate in organized activities and events.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700"
              onClick={() =>
                alert(
                  "🔍 Advanced club search and filtering coming soon! For now, browse the featured clubs below.",
                )
              }
            >
              <Search className="w-4 h-4 mr-2" />
              Browse Clubs
            </Button>
            <Button
              variant="outline"
              className="bg-white/80 backdrop-blur-sm"
              onClick={() =>
                alert(
                  "🏛️ Club creation feature coming soon! Contact admin to register your organization.",
                )
              }
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Club
            </Button>
            <Button
              variant="outline"
              className="bg-white/80 backdrop-blur-sm"
              onClick={() =>
                alert(
                  "🎯 Interest-based filtering coming soon! Personalized club recommendations in development.",
                )
              }
            >
              <Filter className="w-4 h-4 mr-2" />
              Filter by Interest
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="event-card text-center">
              <CardContent className="p-6">
                <Users className="w-8 h-8 text-violet-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-violet-600">25</div>
                <div className="text-sm text-muted-foreground">
                  Active Clubs
                </div>
              </CardContent>
            </Card>
            <Card className="event-card text-center">
              <CardContent className="p-6">
                <Calendar className="w-8 h-8 text-violet-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-violet-600">42</div>
                <div className="text-sm text-muted-foreground">
                  Club Events This Month
                </div>
              </CardContent>
            </Card>
            <Card className="event-card text-center">
              <CardContent className="p-6">
                <Star className="w-8 h-8 text-violet-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-violet-600">4.7</div>
                <div className="text-sm text-muted-foreground">
                  Average Rating
                </div>
              </CardContent>
            </Card>
            <Card className="event-card text-center">
              <CardContent className="p-6">
                <Users className="w-8 h-8 text-violet-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-violet-600">1.2K</div>
                <div className="text-sm text-muted-foreground">
                  Total Members
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Featured Clubs */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Star className="w-6 h-6 text-violet-500 mr-2" />
              Featured Clubs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clubs.map((club) => (
                <Card key={club.id} className="event-card group">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={club.image}
                      alt={club.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className={getCategoryColor(club.category)}>
                        {club.category}
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-white/90 text-gray-900">
                        <Star className="w-3 h-3 mr-1 text-yellow-500 fill-current" />
                        {club.rating}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="line-clamp-1">{club.name}</CardTitle>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {club.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 text-violet-500 mr-1" />
                        <span>{club.members} members</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-violet-500 mr-1" />
                        <span>{club.upcomingEvents} events</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        className={`flex-1 ${
                          club.isJoined
                            ? "bg-green-100 text-green-700 hover:bg-green-200"
                            : "bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white"
                        }`}
                        onClick={() => {
                          if (club.isJoined) {
                            if (confirm(`Leave ${club.name}?`)) {
                              alert("👋 Left the club successfully!");
                            }
                          } else {
                            alert(
                              `🎉 Joined ${club.name}! Welcome to the community.`,
                            );
                          }
                        }}
                      >
                        {club.isJoined ? "Joined" : "Join Club"}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          alert(
                            "💬 Club chat coming soon! Connect with members and stay updated.",
                          )
                        }
                      >
                        <MessageCircle className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="event-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-6 h-6 mr-2 text-violet-500" />
                  Club Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tools for club leaders to manage members, organize events, and
                  communicate with their community.
                </p>
              </CardContent>
            </Card>

            <Card className="event-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="w-6 h-6 mr-2 text-violet-500" />
                  Club Chatrooms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Dedicated chat spaces for each club to foster communication
                  and collaboration among members.
                </p>
              </CardContent>
            </Card>

            <Card className="event-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-6 h-6 mr-2 text-violet-500" />
                  Club Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Integrated event management for clubs to organize meetings,
                  activities, and special events.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700">
              <Users className="w-4 h-4 mr-2" />
              Club Management System Coming Soon
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Clubs;
