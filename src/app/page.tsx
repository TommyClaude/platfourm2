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
      <SiteHeader />
      <main className="flex-1">
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
