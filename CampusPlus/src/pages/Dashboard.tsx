import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  Users,
  Calendar,
  Settings,
  Upload,
  TrendingUp,
} from "lucide-react";

const Dashboard = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Admin Dashboard
              </h1>
              <p className="text-muted-foreground text-lg">
                Manage events, view analytics, and configure your campus event
                portal.
              </p>
            </div>
            <Badge className="bg-gradient-to-r from-violet-500 to-purple-600 text-white">
              Coming Soon
            </Badge>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="event-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Events
                </CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-violet-600">150</div>
                <p className="text-xs text-muted-foreground">
                  +12% from last month
                </p>
              </CardContent>
            </Card>

            <Card className="event-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Registrations
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-violet-600">5,234</div>
                <p className="text-xs text-muted-foreground">
                  +25% from last month
                </p>
              </CardContent>
            </Card>

            <Card className="event-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Users
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-violet-600">2,847</div>
                <p className="text-xs text-muted-foreground">
                  +8% from last month
                </p>
              </CardContent>
            </Card>

            <Card className="event-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Engagement Rate
                </CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-violet-600">94.2%</div>
                <p className="text-xs text-muted-foreground">
                  +2.1% from last month
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="event-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-6 h-6 mr-2 text-violet-500" />
                  Event Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Create, edit, and manage campus events with rich media
                  support, bulk uploads, and advanced scheduling.
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() =>
                    alert(
                      "📅 Event management dashboard coming soon! Create, edit, and manage all your events.",
                    )
                  }
                >
                  Manage Events
                </Button>
              </CardContent>
            </Card>

            <Card className="event-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-6 h-6 mr-2 text-violet-500" />
                  Analytics & Reports
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Detailed analytics on event performance, student engagement,
                  and registration trends.
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() =>
                    alert(
                      "📊 Advanced analytics coming soon! Track registrations, engagement, and event performance.",
                    )
                  }
                >
                  View Analytics
                </Button>
              </CardContent>
            </Card>

            <Card className="event-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Upload className="w-6 h-6 mr-2 text-violet-500" />
                  Bulk Operations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Upload multiple events via spreadsheet, send bulk
                  notifications, and manage registrations efficiently.
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() =>
                    alert(
                      "📁 Bulk upload feature coming soon! Upload multiple events via CSV or Excel files.",
                    )
                  }
                >
                  Bulk Upload
                </Button>
              </CardContent>
            </Card>

            <Card className="event-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-6 h-6 mr-2 text-violet-500" />
                  User Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Manage student profiles, permissions, and roles. Track user
                  engagement and participation history.
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() =>
                    alert(
                      "�� User management coming soon! Manage student profiles, roles, and permissions.",
                    )
                  }
                >
                  Manage Users
                </Button>
              </CardContent>
            </Card>

            <Card className="event-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="w-6 h-6 mr-2 text-violet-500" />
                  System Settings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Configure notifications, customize branding, manage
                  integrations, and set up automated workflows.
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() =>
                    alert(
                      "⚙️ System settings coming soon! Configure notifications, branding, and integrations.",
                    )
                  }
                >
                  Settings
                </Button>
              </CardContent>
            </Card>

            <Card className="event-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-6 h-6 mr-2 text-violet-500" />
                  Firebase Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Real-time database, authentication, cloud storage, and push
                  notifications powered by Firebase.
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() =>
                    alert(
                      "🔥 Firebase integration coming soon! Real-time database, auth, and cloud functions.",
                    )
                  }
                >
                  Configure
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700">
              <Settings className="w-4 h-4 mr-2" />
              Complete Admin Dashboard Coming Soon
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
