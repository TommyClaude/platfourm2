import {
  BadgePercent,
  CalendarCheck,
  Coins,
  Layers,
  Mail,
  MessageSquareText,
  Palette,
  Rocket,
  Send,
  type LucideIcon,
} from "lucide-react";

export type Plugin = {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  category: string;
  icon: LucideIcon;
  href: string;
  installs?: string;
  rating?: number;
  badge?: string;
};

export const plugins: Plugin[] = [
  {
    name: "YayMail",
    slug: "yaymail",
    tagline: "WooCommerce Email Customizer",
    description:
      "Design beautiful transactional emails with a live drag-and-drop builder — no coding needed.",
    category: "Emails",
    icon: Mail,
    href: "https://wordpress.org/plugins/yaymail/",
    installs: "50,000+",
    rating: 4.8,
    badge: "Most popular",
  },
  {
    name: "YayPricing",
    slug: "yaypricing",
    tagline: "Dynamic Pricing & Discounts",
    description:
      "Automate BOGO deals, tiered discounts, flash sales, and cart rules with flexible conditions.",
    category: "Sales",
    icon: BadgePercent,
    href: "https://wordpress.org/plugins/yaypricing/",
    installs: "3,000+",
  },
  {
    name: "YayCurrency",
    slug: "yaycurrency",
    tagline: "Multi-Currency Switcher",
    description:
      "Let shoppers browse, check out, and pay in their local currency with automatic exchange rates.",
    category: "Checkout",
    icon: Coins,
    href: "https://wordpress.org/plugins/yaycurrency/",
    rating: 4.7,
  },
  {
    name: "YaySMTP",
    slug: "yaysmtp",
    tagline: "SMTP & Email Logs",
    description:
      "Deliver every email reliably via Amazon SES, SendGrid, Gmail, or any SMTP service — with full logs.",
    category: "Emails",
    icon: Send,
    href: "https://wordpress.org/plugins/yaysmtp/",
    installs: "10,000+",
    rating: 4.9,
  },
  {
    name: "YaySwatches",
    slug: "yayswatches",
    tagline: "Variation Swatches",
    description:
      "Turn plain variation dropdowns into beautiful color, image, and button swatches that convert.",
    category: "Product Pages",
    icon: Palette,
    href: "https://wordpress.org/plugins/yayswatches/",
  },
  {
    name: "YayExtra",
    slug: "yayextra",
    tagline: "Extra Product Options",
    description:
      "Add custom option fields — text, checkboxes, swatches, file uploads — to any product page.",
    category: "Product Pages",
    icon: Layers,
    href: "https://wordpress.org/plugins/yayextra/",
    installs: "1,000+",
    rating: 4.8,
  },
  {
    name: "YayReviews",
    slug: "yayreviews",
    tagline: "Advanced Customer Reviews",
    description:
      "Collect richer reviews with photos and reminders, then showcase them to build buyer trust.",
    category: "Marketing",
    icon: MessageSquareText,
    href: "https://wordpress.org/plugins/yay-customer-reviews-woocommerce/",
    badge: "New",
  },
  {
    name: "YayBoost",
    slug: "yayboost",
    tagline: "Sales Booster",
    description:
      "Add frequently-bought-together offers, countdowns, and free shipping bars that lift order value.",
    category: "Marketing",
    icon: Rocket,
    href: "https://wordpress.org/plugins/yayboost-sales-booster-for-woocommerce/",
    badge: "New",
  },
  {
    name: "Bookster",
    slug: "bookster",
    tagline: "Appointment Booking",
    description:
      "Take bookings for services and appointments with flexible schedules, staff, and payments.",
    category: "Booking",
    icon: CalendarCheck,
    href: "https://wordpress.org/plugins/bookster/",
  },
];

export const categories = [
  ...new Set(plugins.map((plugin) => plugin.category)),
];
