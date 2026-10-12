import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/layout/LoadingScreen";
import CustomCursor from "@/components/effects/CustomCursor";
import BackgroundEffects from "@/components/effects/BackgroundEffects";
import SmoothScroll from "@/components/effects/SmoothScroll";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhyPaperBags from "@/components/sections/WhyPaperBags";
import Products from "@/components/sections/Products";
import Customization from "@/components/sections/Customization";
import Manufacturing from "@/components/sections/Manufacturing";
import Industries from "@/components/sections/Industries";
import Sustainability from "@/components/sections/Sustainability";
import Clients from "@/components/sections/Clients";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import { ThemeProvider } from "@/context/ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <LoadingScreen />
      <SmoothScroll>
        <CustomCursor />
        <BackgroundEffects />
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
      </SmoothScroll>
    </ThemeProvider>
  );
}
