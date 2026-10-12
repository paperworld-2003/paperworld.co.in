import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import { ThemeProvider } from "@/context/ThemeContext";

// Dynamically load below-the-fold sections for instant FCP/LCP and 100% Lighthouse Performance
const WhyPaperBags = dynamic(() => import("@/components/sections/WhyPaperBags"));
const Products = dynamic(() => import("@/components/sections/Products"));
const Customization = dynamic(() => import("@/components/sections/Customization"));
const Manufacturing = dynamic(() => import("@/components/sections/Manufacturing"));
const Industries = dynamic(() => import("@/components/sections/Industries"));
const Sustainability = dynamic(() => import("@/components/sections/Sustainability"));
const Clients = dynamic(() => import("@/components/sections/Clients"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

export default function Home() {
  return (
    <ThemeProvider>
      <Header />

      <main className="relative z-10 w-full overflow-x-clip">
        <Hero />
        <About />
        <WhyPaperBags />
        <Products />
        <Customization />
        <Manufacturing />
        <Industries />
        <Sustainability />
        <Clients />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </ThemeProvider>
  );
}
