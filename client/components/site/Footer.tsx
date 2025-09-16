import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-bold text-lg">
            <span className="inline-grid h-6 w-6 place-items-center rounded bg-gradient-to-br from-indigo-600 to-violet-600 text-white">HF</span>
            HireFlow
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            A modern job application portal to discover roles, track applications, and connect with top companies.
          </p>
        </div>
        <div>
          <div className="font-semibold mb-3">Explore</div>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:underline" to="/">Home</Link></li>
            <li><Link className="hover:underline" to="/jobs">Jobs</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Get updates</div>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 rounded-md border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
            <button
              className="rounded-md bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2 text-sm font-medium text-white"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t">
        <div className="container flex flex-col md:flex-row items-center justify-between py-6 text-xs text-muted-foreground gap-2">
          <p>© {new Date().getFullYear()} HireFlow. All rights reserved.</p>
          <p>
            Built with ❤️ using React & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
}
