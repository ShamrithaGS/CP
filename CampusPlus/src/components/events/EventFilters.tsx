import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import {
  Search,
  Filter,
  Calendar as CalendarIcon,
  MapPin,
  Tag,
  X,
  SlidersHorizontal,
} from "lucide-react";
import { format } from "date-fns";

interface EventFiltersProps {
  onFiltersChange: (filters: any) => void;
}

const EventFilters = ({ onFiltersChange }: EventFiltersProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedVenue, setSelectedVenue] = useState("all");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [priceFilter, setPriceFilter] = useState("all");
  const [showAdvanced, setShowAdvanced] = useState(false);

  const categories = [
    "All Categories",
    "Cultural",
    "Technical",
    "Sports",
    "Workshop",
    "Fest",
    "Academic",
  ];

  const venues = [
    "All Venues",
    "Main Auditorium",
    "Sports Complex",
    "Tech Park",
    "Cultural Center",
    "Library Hall",
    "Open Ground",
  ];

  const popularTags = [
    "Free Food",
    "Certificate",
    "Open to All",
    "Registration Required",
    "Team Event",
    "Prizes",
    "Networking",
    "Hands-on",
  ];

  const priceOptions = [
    { value: "all", label: "All Prices" },
    { value: "free", label: "Free Events" },
    { value: "paid", label: "Paid Events" },
    { value: "under100", label: "Under ₹100" },
    { value: "under500", label: "Under ₹500" },
  ];

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedDate(undefined);
    setSelectedVenue("all");
    setSelectedTags([]);
    setPriceFilter("all");
    onFiltersChange({});
  };

  const hasActiveFilters =
    searchQuery ||
    (selectedCategory && selectedCategory !== "all") ||
    selectedDate ||
    (selectedVenue && selectedVenue !== "all") ||
    selectedTags.length > 0 ||
    (priceFilter && priceFilter !== "all");

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder="Search events, organizers, venues..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-4 h-12 bg-white/80 backdrop-blur-sm border-white/20 focus:bg-white transition-all"
        />
      </div>

      {/* Quick Filters */}
      <div className="flex flex-wrap gap-2 items-center">
        {/* Category Filter */}
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-auto min-w-[140px] bg-white/80 backdrop-blur-sm border-white/20">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem
                key={category}
                value={category === "All Categories" ? "all" : category}
              >
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Date Filter */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-auto justify-start text-left font-normal bg-white/80 backdrop-blur-sm border-white/20",
                !selectedDate && "text-muted-foreground",
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {selectedDate ? format(selectedDate, "PPP") : "Pick date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        {/* Venue Filter */}
        <Select value={selectedVenue} onValueChange={setSelectedVenue}>
          <SelectTrigger className="w-auto min-w-[120px] bg-white/80 backdrop-blur-sm border-white/20">
            <MapPin className="w-4 h-4 mr-1" />
            <SelectValue placeholder="Venue" />
          </SelectTrigger>
          <SelectContent>
            {venues.map((venue) => (
              <SelectItem
                key={venue}
                value={venue === "All Venues" ? "all" : venue}
              >
                {venue}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Advanced Filters Toggle */}
        <Button
          variant="outline"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="bg-white/80 backdrop-blur-sm border-white/20"
        >
          <SlidersHorizontal className="w-4 h-4 mr-2" />
          Filters
        </Button>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <Button
            variant="ghost"
            onClick={clearFilters}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4 mr-1" />
            Clear
          </Button>
        )}
      </div>

      {/* Advanced Filters */}
      {showAdvanced && (
        <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-white/20 space-y-4">
          {/* Price Filter */}
          <div>
            <label className="text-sm font-medium mb-2 block">
              Price Range
            </label>
            <Select value={priceFilter} onValueChange={setPriceFilter}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select price range" />
              </SelectTrigger>
              <SelectContent>
                {priceOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Tags Filter */}
          <div>
            <label className="text-sm font-medium mb-2 flex items-center">
              <Tag className="w-4 h-4 mr-1" />
              Event Tags
            </label>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "secondary"}
                  className={cn(
                    "cursor-pointer transition-all hover:scale-105",
                    selectedTags.includes(tag)
                      ? "bg-violet-500 hover:bg-violet-600"
                      : "hover:bg-violet-100",
                  )}
                  onClick={() => handleTagToggle(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-sm text-muted-foreground">Active filters:</span>
          {selectedCategory && selectedCategory !== "all" && (
            <Badge variant="outline" className="bg-white/80">
              {selectedCategory}
              <X
                className="w-3 h-3 ml-1 cursor-pointer"
                onClick={() => setSelectedCategory("all")}
              />
            </Badge>
          )}
          {selectedDate && (
            <Badge variant="outline" className="bg-white/80">
              {format(selectedDate, "MMM dd")}
              <X
                className="w-3 h-3 ml-1 cursor-pointer"
                onClick={() => setSelectedDate(undefined)}
              />
            </Badge>
          )}
          {selectedVenue && selectedVenue !== "all" && (
            <Badge variant="outline" className="bg-white/80">
              {selectedVenue}
              <X
                className="w-3 h-3 ml-1 cursor-pointer"
                onClick={() => setSelectedVenue("all")}
              />
            </Badge>
          )}
          {selectedTags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-white/80">
              {tag}
              <X
                className="w-3 h-3 ml-1 cursor-pointer"
                onClick={() => handleTagToggle(tag)}
              />
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventFilters;
