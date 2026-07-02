import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/logo";
import { CurrentYear } from "@/components/current-year";

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
      { label: "About us", href: "https://yaycommerce.com/" },
      { label: "Blog", href: "https://yaycommerce.com/blog/" },
      { label: "Contact", href: "https://yaycommerce.com/contact/" },
      { label: "Affiliates", href: "https://yaycommerce.com/affiliate-program/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "https://docs.yaycommerce.com" },
      { label: "Live demos", href: "https://demo.yaycommerce.com" },
      { label: "Support", href: "https://yaycommerce.com/support/" },
      { label: "WordPress.org profile", href: "https://profiles.wordpress.org/yaycommerce/" },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        label: "Terms & conditions",
        href: "https://yaycommerce.com/terms-and-conditions/",
      },
      {
        label: "Privacy policy",
        href: "https://yaycommerce.com/privacy-policy/",
      },
      {
        label: "Affiliate guidelines",
        href: "https://yaycommerce.com/affiliate-guidelines/",
      },
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
            © <CurrentYear /> YayCommerce. All rights reserved.
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
