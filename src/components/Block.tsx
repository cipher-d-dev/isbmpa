import { useEffect, useState } from "react";
import MediaBlock from "../components/MediaBlock";
import { loadGalleryImages } from "../utils/galleryLoader";
import { loadGalleryVideos } from "../utils/galleryVideoLoader";
import type { MediaItem } from "../types/media";

interface Props {
  onlyCaption: boolean;
  limit?: number; // default to 12
  refreshKey?: number;
}

function shuffleArray<T>(arr: T[]): T[] {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function GalleryPage({ onlyCaption, limit = 12 }: Props) {
  const [displayedMedia, setDisplayedMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const fetchGallery = async () => {
      try {
        setLoading(true);
        // Fetch images from public Appwrite bucket asynchronously
        const images = await loadGalleryImages();
        // Load videos locally synchronously
        const videos = await loadGalleryVideos();

        if (!active) return;

        // Step 1: Filter by caption if needed
        const filteredImages = onlyCaption ? images.filter((i) => i.caption) : images;
        const filteredVideos = onlyCaption ? videos.filter((v) => v.caption) : videos;

        if (filteredVideos.length === 0 && filteredImages.length === 0) {
          setDisplayedMedia([]);
          return;
        }

        // Step 2: Pick 1 random video
        const guaranteedVideo = filteredVideos.length
          ? [filteredVideos[Math.floor(Math.random() * filteredVideos.length)]]
          : [];

        // Step 3: Combine rest of items, excluding the guaranteed video
        const remainingItems = shuffleArray([
          ...filteredImages,
          ...filteredVideos.filter((v) => !guaranteedVideo.includes(v)),
        ]);

        // Step 4: Pick the rest to fill limit
        const finalMedia = shuffleArray([
          ...guaranteedVideo,
          ...remainingItems.slice(0, limit - guaranteedVideo.length),
        ]);

        setDisplayedMedia(finalMedia);
      } catch (error) {
        console.error("Error loading gallery data:", error);
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    fetchGallery();

    return () => {
      active = false;
    };
  }, [onlyCaption, limit]);

  // 8. Add a glassmorphic skeleton loader while the media is loading
  if (loading) {
    const skeletonCount = limit || 12;
    return (
      <>
        {Array.from({ length: skeletonCount }).map((_, idx) => {
          // Cycle through height variants to produce a dynamic masonry grid feel
          const variant = (idx % 4) + 1;
          const variantClass = variant > 1 ? `variant-${variant}` : "";
          return (
            <div key={idx} className={`gallery-skeleton-card ${variantClass}`}>
              <div className="gallery-skeleton-caption" />
            </div>
          );
        })}
      </>
    );
  }

  if (displayedMedia.length === 0) return null;

  return (
    <>
      {displayedMedia.map((item) => (
        <MediaBlock key={`${item.type}-${item.number}`} item={item} />
      ))}
    </>
  );
}