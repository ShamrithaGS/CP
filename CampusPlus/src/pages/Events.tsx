import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Search, Filter, Plus } from "lucide-react";

const Events = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              All Campus Events
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover, filter, and register for all upcoming campus events.
              Advanced filtering and search capabilities coming soon!
            </p>
          </div>

          {/* Placeholder Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="event-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-6 h-6 mr-2 text-violet-500" />
                  Advanced Event Listing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive event catalog with advanced filtering, sorting,
                  and search capabilities.
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
                  AI-powered search to help you find events based on your
                  interests and past attendance.
                </p>
              </CardContent>
            </Card>

            <Card className="event-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="w-6 h-6 mr-2 text-violet-500" />
                  Advanced Filters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Filter by date, category, venue, price, organizer, and custom
                  tags to find exactly what you're looking for.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700">
              <Plus className="w-4 h-4 mr-2" />
              Coming Soon - Full Event Management
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Events;
