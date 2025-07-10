import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Trophy,
  Medal,
  Award,
  Star,
  Users,
  TrendingUp,
  Crown,
  Zap,
} from "lucide-react";

const Leaderboard = () => {
  // Mock leaderboard data
  const topUsers = [
    {
      rank: 1,
      name: "Alex Chen",
      points: 2540,
      eventsAttended: 45,
      badges: ["Event Explorer", "Tech Enthusiast", "Culture Champion"],
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
    },
    {
      rank: 2,
      name: "Sarah Johnson",
      points: 2380,
      eventsAttended: 42,
      badges: ["Sports Star", "Leadership", "Community Builder"],
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b1e8?w=100",
    },
    {
      rank: 3,
      name: "Michael Park",
      points: 2150,
      eventsAttended: 38,
      badges: ["Workshop Warrior", "Networking Pro", "Innovator"],
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
    },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return <Trophy className="w-6 h-6 text-violet-500" />;
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Campus Leaderboard
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              See where you stand among the most active and engaged students on
              campus. Earn points, badges, and recognition!
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="event-card text-center">
              <CardContent className="p-6">
                <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-violet-600">2,540</div>
                <div className="text-sm text-muted-foreground">Top Score</div>
              </CardContent>
            </Card>
            <Card className="event-card text-center">
              <CardContent className="p-6">
                <Users className="w-8 h-8 text-violet-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-violet-600">847</div>
                <div className="text-sm text-muted-foreground">
                  Active Participants
                </div>
              </CardContent>
            </Card>
            <Card className="event-card text-center">
              <CardContent className="p-6">
                <Star className="w-8 h-8 text-violet-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-violet-600">25</div>
                <div className="text-sm text-muted-foreground">
                  Badges Available
                </div>
              </CardContent>
            </Card>
            <Card className="event-card text-center">
              <CardContent className="p-6">
                <TrendingUp className="w-8 h-8 text-violet-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-violet-600">94%</div>
                <div className="text-sm text-muted-foreground">
                  Engagement Rate
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topUsers.map((user) => (
              <Card
                key={user.rank}
                className={`event-card text-center ${
                  user.rank === 1
                    ? "ring-2 ring-yellow-500 bg-gradient-to-br from-yellow-50 to-amber-50"
                    : user.rank === 2
                      ? "ring-2 ring-gray-400 bg-gradient-to-br from-gray-50 to-slate-50"
                      : "ring-2 ring-amber-600 bg-gradient-to-br from-amber-50 to-orange-50"
                }`}
              >
                <CardHeader>
                  <div className="flex items-center justify-center mb-4">
                    {getRankIcon(user.rank)}
                  </div>
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">{user.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Rank #{user.rank}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Points
                      </span>
                      <span className="font-bold text-violet-600">
                        {user.points.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Events
                      </span>
                      <span className="font-bold">{user.eventsAttended}</span>
                    </div>
                    <div className="space-y-2">
                      <span className="text-sm text-muted-foreground block">
                        Badges
                      </span>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {user.badges.slice(0, 2).map((badge) => (
                          <Badge
                            key={badge}
                            variant="secondary"
                            className="text-xs"
                          >
                            {badge}
                          </Badge>
                        ))}
                        {user.badges.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{user.badges.length - 2}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="event-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-6 h-6 mr-2 text-violet-500" />
                  Point System
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Earn points for attending events, participating in activities,
                  volunteering, and engaging with the community.
                </p>
              </CardContent>
            </Card>

            <Card className="event-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-6 h-6 mr-2 text-violet-500" />
                  Achievement Badges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Unlock special badges for different achievements: event
                  categories, participation streaks, and community
                  contributions.
                </p>
              </CardContent>
            </Card>

            <Card className="event-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="w-6 h-6 mr-2 text-violet-500" />
                  Rewards & Perks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Top performers get exclusive access to premium events, campus
                  store discounts, and special recognition.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700">
              <Trophy className="w-4 h-4 mr-2" />
              Gamification System Coming Soon
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Leaderboard;
