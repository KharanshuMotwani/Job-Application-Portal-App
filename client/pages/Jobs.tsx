import { useMemo, useState } from "react";
import { SearchBar } from "@/components/site/SearchBar";
import { JobCard, type Job } from "@/components/site/JobCard";
import { jobs as seed } from "@/data/jobs";
import { Badge } from "@/components/ui/badge";

export default function Jobs() {
  const [filters, setFilters] = useState<{
    q?: string;
    location?: string;
    category?: string;
  }>({});

  const jobs = useMemo(() => {
    const q = (filters.q || "").toLowerCase();
    const l = (filters.location || "").toLowerCase();
    const c = (filters.category || "").toLowerCase();
    return seed.filter(
      (j) =>
        [j.title, j.company, j.location, j.type, j.tags.join(" ")]
          .join(" ")
          .toLowerCase()
          .includes(q) &&
        (l ? j.location.toLowerCase().includes(l) : true) &&
        (c ? j.tags.join(" ").toLowerCase().includes(c) : true),
    );
  }, [filters]);

  const activeCount = jobs.length;

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold tracking-tight">Explore jobs</h1>
      <p className="mt-1 text-muted-foreground">
        Find roles that match your skills and preferences.
      </p>

      <div className="mt-6">
        <SearchBar onSubmit={(v) => setFilters(v)} />
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing{" "}
          <span className="font-medium text-foreground">{activeCount}</span>{" "}
          openings
        </p>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job as Job} />
        ))}
      </div>

      {jobs.length === 0 && (
        <div className="mt-10 rounded-xl border bg-card p-10 text-center text-sm text-muted-foreground">
          No results. Try adjusting your search.
        </div>
      )}

      <div className="mt-10 flex flex-wrap gap-2 text-xs">
        <span className="text-muted-foreground">Trending searches:</span>
        {["React", "Remote", "Design", "iOS", "DevOps"].map((t) => (
          <Badge
            key={t}
            variant="outline"
            className="cursor-pointer rounded-full"
            onClick={() => setFilters((f) => ({ ...f, q: t }))}
          >
            {t}
          </Badge>
        ))}
      </div>
    </div>
  );
}
