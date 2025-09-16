import { MapPin, Briefcase, DollarSign, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export interface Job {
  id: string;
  title: string;
  company: string;
  logo?: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  salary: string;
  tags: string[];
  posted: string;
}

export function JobCard({ job }: { job: Job }) {
  return (
    <div className="group relative rounded-xl border bg-card p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 shrink-0 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 text-white grid place-items-center font-bold">
          {job.company.charAt(0)}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <h3 className="truncate text-base font-semibold">{job.title}</h3>
            <Badge variant="secondary" className="rounded-full px-2 py-1 text-xs">
              {job.type}
            </Badge>
            <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" />{job.posted}</span>
          </div>
          <div className="mt-1 text-sm text-muted-foreground flex flex-wrap gap-4">
            <span className="inline-flex items-center gap-1"><Briefcase className="h-4 w-4" />{job.company}</span>
            <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" />{job.location}</span>
            <span className="inline-flex items-center gap-1"><DollarSign className="h-4 w-4" />{job.salary}</span>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {job.tags.map((t) => (
              <Badge key={t} variant="outline" className="rounded-full">
                {t}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <Button asChild variant="secondary" className="rounded-full">
          <Link to={"/jobs#" + job.id}>View details</Link>
        </Button>
        <Button className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-95">
          Apply now
        </Button>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-indigo-600/0 via-violet-600/0 to-fuchsia-600/0 opacity-0 blur-2xl transition group-hover:opacity-30" />
    </div>
  );
}
