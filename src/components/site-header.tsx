import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

const navItems = [
  { label: "Plugins", href: "#plugins" },
  { label: "Bundle", href: "#bundle" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-6">
        <Link href="/" aria-label="YayCommerce home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navItems.map((item) => (
            <Button key={item.href} variant="ghost" size="sm" asChild>
              <a
                href={item.href}
                className="text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </a>
            </Button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Sign in
          </Button>
          <Button size="sm" asChild>
            <a href="#bundle">Get the bundle</a>
          </Button>
        </div>
      </div>
    </header>
  );
}

export { SiteHeader };
