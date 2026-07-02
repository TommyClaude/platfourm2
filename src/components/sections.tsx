import {
  HeartHandshake,
  Puzzle,
  RefreshCw,
  ShieldCheck,
  Star,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PluginGrid } from "@/components/plugin-grid";
import { heroStats, testimonials, faqs } from "@/lib/content";

function Hero() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 pt-20 pb-16 text-center sm:pt-28 sm:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-16 -z-10 mx-auto h-105 max-w-4xl rounded-full bg-[radial-gradient(ellipse_at_top,--alpha(var(--color-brand)/10%),transparent_65%)]"
      />
      <Badge
        variant="secondary"
        className="mb-6 gap-1.5 rounded-full px-3 py-1 text-xs font-normal text-muted-foreground"
      >
        <span className="inline-block size-1.5 rounded-full bg-brand" />
        New: YayReviews & YayBoost just launched
      </Badge>
      <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
        WooCommerce plugins that simply{" "}
        <span className="text-brand">work</span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-pretty text-muted-foreground">
        Customize emails, automate pricing, sell in any currency, and more —
        with lightweight plugins designed to make store owners say “Yay!”
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button size="lg" asChild>
          <a href="#plugins">Explore plugins</a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="#bundle">Get the bundle</a>
        </Button>
      </div>
      <div className="mt-14 grid grid-cols-2 gap-8 border-t pt-10 sm:grid-cols-4">
        {heroStats.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl font-semibold tracking-tight">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Plugins() {
  return (
    <section id="plugins" className="scroll-mt-20 border-t bg-muted/40">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            One plugin for every job
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Each plugin does one thing brilliantly — no bloat, no lock-in.
            Install only what your store needs.
          </p>
        </div>
        <PluginGrid />
      </div>
    </section>
  );
}

const reasons = [
  {
    icon: Puzzle,
    title: "Lightweight by design",
    description:
      "Every plugin is built to do its job without slowing your store down or cluttering your dashboard.",
  },
  {
    icon: HeartHandshake,
    title: "Support that actually helps",
    description:
      "Real developers answer your questions — most reviews mention our fast, friendly support first.",
  },
  {
    icon: RefreshCw,
    title: "Always up to date",
    description:
      "Frequent releases keep every plugin compatible with the latest WordPress and WooCommerce versions.",
  },
  {
    icon: ShieldCheck,
    title: "Risk-free purchase",
    description:
      "Try any premium plugin with a 30-day money-back guarantee. No questions asked.",
  },
];

function WhyYayCommerce() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
      <div className="mb-12 max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Why stores choose YayCommerce
        </h2>
      </div>
      <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason) => (
          <div key={reason.title}>
            <div className="mb-4 flex size-10 items-center justify-center rounded-lg border bg-background">
              <reason.icon
                className="size-5 text-brand"
                aria-hidden="true"
              />
            </div>
            <h3 className="font-medium">{reason.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20 border-t bg-muted/40">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Loved by store owners
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Thousands of five-star reviews across WordPress.org and beyond.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="gap-4 shadow-none">
              <CardContent className="space-y-4">
                <div
                  className="flex gap-0.5"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="size-4 fill-amber-400 text-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed">
                  “{testimonial.quote}”
                </blockquote>
                <div>
                  <p className="text-sm font-medium">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function BundleCta() {
  return (
    <section id="bundle" className="scroll-mt-20">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
        <div className="rounded-2xl bg-primary px-6 py-16 text-center text-primary-foreground sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Every plugin. One bundle. Endless “Yay!”
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-primary-foreground/70">
            Get access to all premium YayCommerce plugins — including every
            new plugin we ship — with a single license.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" variant="secondary" asChild>
              <a href="#plugins">Get YayCommerce Bundle</a>
            </Button>
            <span className="text-sm text-primary-foreground/60">
              30-day money-back guarantee
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 border-t">
      <div className="mx-auto w-full max-w-3xl px-6 py-20 sm:py-24">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Frequently asked questions
        </h2>
        <Accordion type="single" collapsible className="mt-8">
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger className="text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export { Hero, Plugins, WhyYayCommerce, Testimonials, BundleCta, Faq };
