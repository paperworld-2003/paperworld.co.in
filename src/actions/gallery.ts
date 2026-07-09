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
      .sort() // Sort alphabetically to maintain a consistent order
      .map((file) => `/products/${slug}/${file}`);
      
    return images;
  } catch (error) {
    console.error("Error reading gallery images for slug:", slug, error);
    return [];
  }
}
