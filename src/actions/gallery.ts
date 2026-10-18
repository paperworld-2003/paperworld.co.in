"use server";

import fs from "fs";
import path from "path";

export async function getGalleryImages(slug: string): Promise<string[]> {
  try {
    const dir = path.join(process.cwd(), "public", "products", slug);
    if (!fs.existsSync(dir)) {
      return [];
    }
    
    const files = fs.readdirSync(dir);
    // Filter out only image files and sort them alphabetically
    const images = files
      .filter((file) => /\.(png|jpe?g|webp|gif|svg)$/i.test(file))
      .sort((a, b) => {
        const numA = parseInt(a.replace(/\D/g, ""), 10);
        const numB = parseInt(b.replace(/\D/g, ""), 10);
        if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
        return a.localeCompare(b);
      })
      .map((file) => `/products/${slug}/${file}`);
      
    return images;
  } catch (error) {
    console.error("Error reading gallery images for slug:", slug, error);
    return [];
  }
}
