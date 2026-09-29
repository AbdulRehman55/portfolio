import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl text-sm text-paper-muted">
        <p>
          © {year} {site.name}
        </p>
      </div>
    </footer>
  );
}
