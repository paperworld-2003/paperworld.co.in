import { useState, useEffect } from "react";
import { getGalleryImages } from "@/actions/gallery";

export function useDynamicGallery(slug: string, initialImage: string) {
  const [gallery, setGallery] = useState<string[]>([initialImage]);

  useEffect(() => {
    let mounted = true;

    const fetchGallery = async () => {
      try {
        const images = await getGalleryImages(slug);
        
        if (mounted && images && images.length > 0) {
          if (images.includes(initialImage)) {
            const otherImages = images.filter(img => img !== initialImage);
            setGallery([initialImage, ...otherImages]);
          } else {
            setGallery(images);
          }
        }
      } catch (error) {
        console.error("Failed to fetch gallery:", error);
      }
    };

    fetchGallery();

    return () => {
      mounted = false;
    };
  }, [slug, initialImage]);

  return gallery;
}
