import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home, Search, Calendar, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* 404 Animation */}
          <div className="relative">
            <h1 className="text-9xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent opacity-20">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-gradient-to-r from-violet-400/20 to-purple-400/20 rounded-full blur-3xl floating-animation"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-foreground">
              Oops! Event Not Found
            </h2>
            <p className="text-xl text-muted-foreground max-w-md mx-auto">
              The event you're looking for seems to have ended or moved to a
              different venue. Let's get you back to the action!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link to="/">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/80 backdrop-blur-sm border-white/20 hover:bg-white/90"
            >
              <Link to="/events">
                <Calendar className="w-5 h-5 mr-2" />
                Browse Events
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/80 backdrop-blur-sm border-white/20 hover:bg-white/90"
            >
              <Link to="/discover">
                <Search className="w-5 h-5 mr-2" />
                Discover
              </Link>
            </Button>
          </div>

          {/* Go Back Link */}
          <div className="pt-8">
            <Button
              variant="ghost"
              onClick={() => window.history.back()}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go back to previous page
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
