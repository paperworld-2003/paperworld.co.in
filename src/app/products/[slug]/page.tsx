import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/data/products";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/effects/CustomCursor";
import BackgroundEffects from "@/components/effects/BackgroundEffects";
import SmoothScroll from "@/components/effects/SmoothScroll";
import { ThemeProvider } from "@/context/ThemeContext";
import ProductDetailContent from "@/components/sections/ProductDetailContent";

type Props = {
  params: Promise<{ slug: string }>;
};

// Next.js dynamic static path rendering
export async function generateStaticParams() {
  return products.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: `${product.title} | Paper World Premium Bags`,
    description: product.shortDescription,
    openGraph: {
      title: product.title,
      description: product.shortDescription,
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Find related products (excluding the current one)
  const relatedProducts = products.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <ThemeProvider>
      <SmoothScroll>
        <CustomCursor />
        <BackgroundEffects />
        <Header />
        <ProductDetailContent
          product={product}
          relatedProducts={relatedProducts}
        />
        <Footer />
      </SmoothScroll>
    </ThemeProvider>
  );
}
