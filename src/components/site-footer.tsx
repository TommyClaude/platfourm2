import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/logo";

const footerColumns = [
  {
    title: "Plugins",
    links: [
      { label: "YayMail", href: "#plugins" },
      { label: "YayPricing", href: "#plugins" },
      { label: "YayCurrency", href: "#plugins" },
      { label: "YaySMTP", href: "#plugins" },
      { label: "View all plugins", href: "#plugins" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Affiliates", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Changelog", href: "#" },
      { label: "Support", href: "#" },
      { label: "Community", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of service", href: "#" },
      { label: "Privacy policy", href: "#" },
      { label: "Refund policy", href: "#" },
    ],
  },
];

function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="space-y-4">
            <Link href="/" aria-label="YayCommerce home">
              <Logo />
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              Simple, lightweight WooCommerce plugins that help your store sell
              more — built with care since 2017.
            </p>
          </div>
          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="mb-4 text-sm font-medium">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <Separator className="my-10" />
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} YayCommerce. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with care for WooCommerce stores worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}

export { SiteFooter };
