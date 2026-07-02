"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

const navItems = [
  { label: "Plugins", href: "#plugins" },
  { label: "Bundle", href: "#bundle" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

function SiteHeader() {
  const [menuOpen, setMenuOpen] = React.useState(false);

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
          <Button
            variant="ghost"
            size="sm"
            className="hidden sm:inline-flex"
            asChild
          >
            <a href="https://yaycommerce.com/my-account/">Sign in</a>
          </Button>
          <Button size="sm" asChild>
            <a href="#bundle">Get the bundle</a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {menuOpen ? (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="border-t px-6 py-3 md:hidden"
        >
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-md px-2 py-2.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="sm:hidden">
              <a
                href="https://yaycommerce.com/my-account/"
                className="block rounded-md px-2 py-2.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
              >
                Sign in
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

export { SiteHeader };
