import { Search, MapPin, ListFilter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  onSubmit?: (q: { q: string; location: string; category: string }) => void;
}

export function SearchBar({ className, onSubmit }: Props) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    onSubmit?.({
      q: String(form.get("q") || ""),
      location: String(form.get("location") || ""),
      category: String(form.get("category") || ""),
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "grid gap-3 rounded-xl border bg-card p-3 shadow-sm md:grid-cols-5",
        className,
      )}
    >
      <div className="md:col-span-2 flex items-center gap-2 rounded-md border bg-background px-3 py-2">
        <Search className="h-4 w-4 text-muted-foreground" />
        <input
          name="q"
          placeholder="Job title, keywords, or company"
          className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        />
      </div>
      <div className="flex items-center gap-2 rounded-md border bg-background px-3 py-2">
        <MapPin className="h-4 w-4 text-muted-foreground" />
        <input
          name="location"
          placeholder="Location"
          className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        />
      </div>
      <div className="flex items-center gap-2 rounded-md border bg-background px-3 py-2">
        <ListFilter className="h-4 w-4 text-muted-foreground" />
        <input
          name="category"
          placeholder="Category (e.g. Design, Engineering)"
          className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        />
      </div>
      <div className="md:flex md:items-stretch">
        <Button
          type="submit"
          className="h-full w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-95"
        >
          Search jobs
        </Button>
      </div>
    </form>
  );
}
