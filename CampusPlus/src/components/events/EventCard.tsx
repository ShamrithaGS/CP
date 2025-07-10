import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Heart,
  Share2,
  Ticket,
  Star,
} from "lucide-react";

interface EventCardProps {
  event: {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    venue: string;
    organizer: string;
    image: string;
    category: string;
    tags: string[];
    attendees: number;
    maxAttendees?: number;
    isRegistered?: boolean;
    isFavorite?: boolean;
    rating?: number;
    price?: string;
  };
  className?: string;
}

const EventCard = ({ event, className }: EventCardProps) => {
  const isPopular = event.attendees > 100;
  const isSoldOut = event.maxAttendees && event.attendees >= event.maxAttendees;

  const getCategoryColor = (category: string) => {
    const colors = {
      Cultural: "bg-pink-100 text-pink-700 border-pink-200",
      Technical: "bg-blue-100 text-blue-700 border-blue-200",
      Sports: "bg-green-100 text-green-700 border-green-200",
      Workshop: "bg-purple-100 text-purple-700 border-purple-200",
      Fest: "bg-orange-100 text-orange-700 border-orange-200",
      Academic: "bg-indigo-100 text-indigo-700 border-indigo-200",
    };
    return (
      colors[category as keyof typeof colors] ||
      "bg-gray-100 text-gray-700 border-gray-200"
    );
  };

  return (
    <Card
      className={cn(
        "event-card event-card-dark group relative overflow-hidden",
        className,
      )}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Overlay badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <Badge
            className={cn(
              "text-xs font-medium border",
              getCategoryColor(event.category),
            )}
          >
            {event.category}
          </Badge>
          {isPopular && (
            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0">
              <Star className="w-3 h-3 mr-1" />
              Popular
            </Badge>
          )}
          {isSoldOut && (
            <Badge className="bg-red-500 text-white border-0">Sold Out</Badge>
          )}
        </div>

        {/* Favorite & Share */}
        <div className="absolute top-3 right-3 flex gap-1">
          <Button
            size="sm"
            variant="ghost"
            className={cn(
              "w-8 h-8 p-0 bg-white/80 backdrop-blur-sm hover:bg-white/90",
              event.isFavorite && "text-red-500",
            )}
            onClick={(e) => {
              e.stopPropagation();
              alert(
                event.isFavorite
                  ? "💔 Removed from favorites"
                  : "❤️ Added to favorites!",
              );
            }}
          >
            <Heart
              className={cn("w-4 h-4", event.isFavorite && "fill-current")}
            />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="w-8 h-8 p-0 bg-white/80 backdrop-blur-sm hover:bg-white/90"
            onClick={(e) => {
              e.stopPropagation();
              if (navigator.share) {
                navigator.share({
                  title: event.title,
                  text: event.description,
                  url: window.location.href,
                });
              } else {
                navigator.clipboard.writeText(
                  `Check out this event: ${event.title} - ${window.location.href}`,
                );
                alert("📋 Event link copied to clipboard!");
              }
            }}
          >
            <Share2 className="w-4 h-4" />
          </Button>
        </div>

        {/* Price */}
        {event.price && (
          <div className="absolute bottom-3 right-3">
            <Badge className="bg-white/90 text-gray-900 font-semibold">
              {event.price === "0" ? "Free" : `₹${event.price}`}
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="p-4 space-y-3">
        {/* Title & Rating */}
        <div className="space-y-1">
          <h3 className="font-semibold text-lg leading-tight group-hover:text-violet-600 transition-colors">
            {event.title}
          </h3>
          {event.rating && (
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm text-muted-foreground">
                {event.rating}
              </span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {event.description}
        </p>

        {/* Event Details */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4 text-violet-500" />
            <span>{event.date}</span>
            <Clock className="w-4 h-4 text-violet-500 ml-2" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4 text-violet-500" />
            <span>{event.venue}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="w-4 h-4 text-violet-500" />
            <span>{event.attendees} attending</span>
            {event.maxAttendees && <span>/ {event.maxAttendees} max</span>}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {event.tags.slice(0, 3).map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs bg-violet-50 text-violet-700 hover:bg-violet-100"
            >
              {tag}
            </Badge>
          ))}
          {event.tags.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{event.tags.length - 3}
            </Badge>
          )}
        </div>

        {/* Action Button */}
        <Button
          className={cn(
            "w-full mt-4 transition-all duration-300",
            event.isRegistered
              ? "bg-green-100 text-green-700 hover:bg-green-200 border border-green-200"
              : isSoldOut
                ? "bg-gray-100 text-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white shadow-md hover:shadow-lg",
          )}
          disabled={isSoldOut}
          onClick={(e) => {
            e.stopPropagation();
            if (event.isRegistered) {
              if (
                confirm("Are you sure you want to unregister from this event?")
              ) {
                alert("❌ Unregistered successfully!");
              }
            } else if (!isSoldOut) {
              if (event.price && event.price !== "0") {
                alert(
                  `💰 Registration fee: ₹${event.price}. Proceeding to payment...`,
                );
              } else {
                alert(
                  "🎉 Registration successful! Check your email for confirmation.",
                );
              }
            }
          }}
        >
          <Ticket className="w-4 h-4 mr-2" />
          {event.isRegistered
            ? "Registered"
            : isSoldOut
              ? "Sold Out"
              : "Register Now"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default EventCard;
