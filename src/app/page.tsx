import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  BundleCta,
  Faq,
  Hero,
  Plugins,
  Testimonials,
  WhyYayCommerce,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-100 focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:shadow-md"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="flex-1">
        <Hero />
        <Plugins />
        <WhyYayCommerce />
        <Testimonials />
        <BundleCta />
        <Faq />
      </main>
      <SiteFooter />
    </>
  );
}
