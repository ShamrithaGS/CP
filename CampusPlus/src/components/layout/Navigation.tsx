import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Home,
  Search,
  Bell,
  User,
  Menu,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/events", label: "Events", icon: Calendar },
    { href: "/discover", label: "Discover", icon: Search },
    { href: "/leaderboard", label: "Leaderboard", icon: Trophy },
    { href: "/clubs", label: "Clubs", icon: Users },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-white/20 shadow-lg">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-fuchsia-500 rounded-full animate-pulse"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              CampusPulse
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 hover:bg-white/50",
                    isActive(item.href)
                      ? "bg-white/70 text-violet-700 shadow-md"
                      : "text-gray-700 hover:text-violet-700",
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Notifications */}
            <Button
              variant="ghost"
              size="sm"
              className="relative hidden sm:flex"
              onClick={() =>
                alert(
                  "🔔 Notifications:\n• TechFest registration opens tomorrow\n• Cultural Night tickets available\n• New workshop added: Digital Marketing",
                )
              }
            >
              <Bell className="w-4 h-4" />
              <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 text-xs bg-red-500 hover:bg-red-500">
                3
              </Badge>
            </Button>

            {/* Profile */}
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:flex"
              onClick={() =>
                alert(
                  "👤 Profile features coming soon! Sign in to access personalized recommendations.",
                )
              }
            >
              <User className="w-4 h-4" />
            </Button>

            {/* Login Button */}
            <Button
              className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              size="sm"
              onClick={() =>
                alert(
                  "🔐 Authentication system coming soon! For now, explore events as a guest.",
                )
              }
            >
              <span className="hidden sm:inline">Sign In</span>
              <User className="w-4 h-4 sm:hidden" />
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 flex items-center space-x-3",
                          isActive(item.href)
                            ? "bg-violet-100 text-violet-700"
                            : "text-gray-700 hover:bg-gray-100",
                        )}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}

                  <div className="pt-4 border-t">
                    <Button
                      className="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700"
                      onClick={() => {
                        setIsOpen(false);
                        alert(
                          "🔔 Notifications:\n• TechFest registration opens tomorrow\n• Cultural Night tickets available\n• New workshop added: Digital Marketing",
                        );
                      }}
                    >
                      <Bell className="w-4 h-4 mr-2" />
                      Notifications
                      <Badge className="ml-auto bg-red-500">3</Badge>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
