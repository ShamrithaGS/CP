import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Sparkles,
  Heart,
  Bookmark,
  TrendingUp,
  Map,
} from "lucide-react";

const Discover = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Discover Amazing Events
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              AI-powered recommendations, trending events, and personalized
              discovery to help you find your next favorite campus experience.
            </p>
            <Badge className="bg-gradient-to-r from-violet-500 to-purple-600 text-white">
              Smart Discovery Coming Soon
            </Badge>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="event-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Sparkles className="w-6 h-6 mr-2 text-violet-500" />
                  AI Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Personalized event suggestions based on your interests, past
                  attendance, and social connections.
                </p>
              </CardContent>
            </Card>

            <Card className="event-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-6 h-6 mr-2 text-violet-500" />
                  Trending Now
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  See what's hot on campus right now. Events gaining popularity
                  and buzz among students.
                </p>
              </CardContent>
            </Card>

            <Card className="event-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="w-6 h-6 mr-2 text-violet-500" />
                  For You
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Curated events based on your profile, department, year, and
                  expressed interests.
                </p>
              </CardContent>
            </Card>

            <Card className="event-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Search className="w-6 h-6 mr-2 text-violet-500" />
                  Smart Search
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Advanced search with natural language queries, semantic
                  understanding, and intelligent filtering.
                </p>
              </CardContent>
            </Card>

            <Card className="event-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bookmark className="w-6 h-6 mr-2 text-violet-500" />
                  Saved & Wishlist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Keep track of events you're interested in and get notified
                  about similar future events.
                </p>
              </CardContent>
            </Card>

            <Card className="event-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Map className="w-6 h-6 mr-2 text-violet-500" />
                  Campus Map
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Interactive campus map showing event locations, directions,
                  and real-time capacity updates.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700">
              <Sparkles className="w-4 h-4 mr-2" />
              Smart Discovery Features Coming Soon
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Discover;
