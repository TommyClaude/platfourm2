"use client";

import * as React from "react";
import { ArrowRight, Download, Search, Star } from "lucide-react";

import { plugins, categories, type Plugin } from "@/lib/plugins";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

function PluginCard({ plugin }: { plugin: Plugin }) {
  const Icon = plugin.icon;
  return (
    <a href={plugin.href} className="group block h-full">
      <Card className="h-full gap-4 shadow-none transition-all group-hover:-translate-y-0.5 group-hover:border-foreground/20 group-hover:shadow-sm">
        <CardHeader className="gap-3">
          <div className="flex size-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
            <Icon className="size-5" aria-hidden="true" />
          </div>
          <div className="flex items-center gap-2">
            <CardTitle className="text-base">{plugin.name}</CardTitle>
            {plugin.badge ? (
              <Badge
                variant="secondary"
                className="bg-brand/10 text-brand"
              >
                {plugin.badge}
              </Badge>
            ) : null}
          </div>
          <CardDescription className="leading-relaxed">
            {plugin.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-auto">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            {plugin.installs ? (
              <span className="flex items-center gap-1">
                <Download className="size-3.5" aria-hidden="true" />
                {plugin.installs} installs
              </span>
            ) : null}
            {plugin.rating ? (
              <span className="flex items-center gap-1">
                <Star
                  className="size-3.5 fill-amber-400 text-amber-400"
                  aria-hidden="true"
                />
                {plugin.rating.toFixed(1)}
              </span>
            ) : null}
            <span className="ml-auto flex items-center gap-1 font-medium text-foreground opacity-0 transition-opacity group-hover:opacity-100">
              Learn more
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </span>
          </div>
        </CardContent>
      </Card>
    </a>
  );
}

function PluginGrid() {
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState<string>("All");

  const filtered = plugins.filter((plugin) => {
    const matchesCategory =
      category === "All" || plugin.category === category;
    const q = query.trim().toLowerCase();
    const matchesQuery =
      q.length === 0 ||
      plugin.name.toLowerCase().includes(q) ||
      plugin.tagline.toLowerCase().includes(q) ||
      plugin.description.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search
            className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            type="search"
            placeholder="Search plugins…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="pl-9"
            aria-label="Search plugins"
          />
        </div>
        <div
          className="flex flex-wrap gap-1.5"
          role="group"
          aria-label="Filter plugins by category"
        >
          {["All", ...categories].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
              className={cn(
                "cursor-pointer rounded-full border px-3 py-1 text-xs font-medium transition-colors",
                category === item
                  ? "border-transparent bg-primary text-primary-foreground"
                  : "bg-background text-muted-foreground hover:bg-accent hover:text-foreground"
              )}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((plugin) => (
            <PluginCard key={plugin.slug} plugin={plugin} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed py-16 text-center">
          <p className="text-sm text-muted-foreground">
            No plugins match “{query}”. Try a different search.
          </p>
          <Button
            variant="link"
            size="sm"
            onClick={() => {
              setQuery("");
              setCategory("All");
            }}
          >
            Clear filters
          </Button>
        </div>
      )}

      <p className="text-center text-sm text-muted-foreground">
        Showing {filtered.length} of {plugins.length} plugins — and the
        catalog keeps growing.
      </p>
    </div>
  );
}

export { PluginGrid };
