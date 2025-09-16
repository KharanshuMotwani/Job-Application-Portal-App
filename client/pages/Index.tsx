import { useState } from "react";
import { ArrowRight, Building2, Users, Shield, Star, Sparkles } from "lucide-react";
import { Footer } from "@/components/site/Footer";
import { SearchBar } from "@/components/site/SearchBar";
import { JobCard } from "@/components/site/JobCard";
import { jobs } from "@/data/jobs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Index() {
  const [filtered, setFiltered] = useState(jobs);

  function handleSearch({ q, location, category }: { q: string; location: string; category: string }) {
    const qv = q.toLowerCase();
    const lv = location.toLowerCase();
    const cv = category.toLowerCase();
    setFiltered(
      jobs.filter((j) =>
        [j.title, j.company, j.location, j.type, j.tags.join(" ")]
          .join(" ")
          .toLowerCase()
          .includes(qv) && (lv ? j.location.toLowerCase().includes(lv) : true) && (cv ? j.tags.join(" ").toLowerCase().includes(cv) : true)
      )
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-indigo-50/50 dark:from-background dark:via-background dark:to-indigo-950/20">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(60%_50%_at_50%_0%,#000_40%,transparent_80%)]">
          <div className="absolute -top-28 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/20 via-violet-500/20 to-fuchsia-500/20 blur-3xl" />
        </div>
        <div className="container pt-10 md:pt-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-violet-600" />
              Introducing the next-gen job portal
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">
              Find your next role with confidence
            </h1>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Discover curated opportunities, apply in seconds, and track your applications—all in one beautiful, modern portal.
            </p>
            <div className="mt-8">
              <SearchBar onSubmit={handleSearch} />
              <div className="mt-3 flex items-center justify-center gap-4 text-xs text-muted-foreground">
                <span>Popular: Frontend, Product Design, Data Science</span>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Button asChild variant="secondary">
                <Link to="/jobs" className="inline-flex items-center gap-1">
                  Browse all jobs <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white">Create profile</Button>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.slice(0, 6).map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/jobs">See more openings</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mt-24 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <div className="mb-3 inline-grid h-10 w-10 place-items-center rounded-lg bg-indigo-600/10 text-indigo-700">
            <Building2 className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-semibold">Top companies</h3>
          <p className="mt-1 text-sm text-muted-foreground">We partner with vetted startups and enterprises to bring you quality roles.</p>
        </div>
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <div className="mb-3 inline-grid h-10 w-10 place-items-center rounded-lg bg-violet-600/10 text-violet-700">
            <Users className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-semibold">Tailored matches</h3>
          <p className="mt-1 text-sm text-muted-foreground">Smart suggestions based on your skills, interests, and experience.</p>
        </div>
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <div className="mb-3 inline-grid h-10 w-10 place-items-center rounded-lg bg-fuchsia-600/10 text-fuchsia-700">
            <Shield className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-semibold">Privacy-first</h3>
          <p className="mt-1 text-sm text-muted-foreground">Your data stays secure. Choose what to share and when to reveal details.</p>
        </div>
      </section>

      <section className="container mt-24 grid items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold md:text-3xl">How it works</h2>
          <ul className="mt-6 space-y-5 text-sm text-muted-foreground">
            <li className="flex gap-3"><span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600/10 text-indigo-700">1</span> Create your profile and import your resume.</li>
            <li className="flex gap-3"><span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-violet-600/10 text-violet-700">2</span> Get matched with roles that fit your skills.</li>
            <li className="flex gap-3"><span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-fuchsia-600/10 text-fuchsia-700">3</span> Apply in one click and track progress.</li>
          </ul>
          <div className="mt-6">
            <Button className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white">Get started</Button>
          </div>
        </div>
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-2 text-amber-600"><Star className="h-4 w-4" /> Success stories</div>
          <blockquote className="mt-3 text-lg font-medium">
            “I found my dream job in under two weeks. The experience was fast, friendly, and effective.”
          </blockquote>
          <p className="mt-2 text-sm text-muted-foreground">— Priya, Senior Designer at Nova Labs</p>
        </div>
      </section>

      <section className="mt-24">
        <div className="container">
          <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-10 text-center text-white md:px-12">
            <h3 className="text-2xl font-bold">Ready to take the next step?</h3>
            <p className="mt-1 text-white/80">Join thousands of professionals using HireFlow to level up their careers.</p>
            <div className="mt-5">
              <Button variant="secondary" className="rounded-full">Join now</Button>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-24" />
      <Footer />
    </div>
  );
}
