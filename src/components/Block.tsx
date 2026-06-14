import MediaBlock from "../components/MediaBlock";
import { loadGalleryImages } from "../utils/galleryLoader";
import { loadGalleryVideos } from "../utils/galleryVideoLoader";

interface Props {
  onlyCaption: boolean;
  limit?: number; // default to 12
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
  const images = loadGalleryImages();
  const videos = loadGalleryVideos();

  // Step 1: Filter by caption if needed
  const filteredImages = onlyCaption ? images.filter((i) => i.caption) : images;
  const filteredVideos = onlyCaption ? videos.filter((v) => v.caption) : videos;

  if (filteredVideos.length === 0 && filteredImages.length === 0) return null;

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
  const displayedMedia = shuffleArray([
    ...guaranteedVideo,
    ...remainingItems.slice(0, limit - guaranteedVideo.length),
  ]);

  return (
    <div className="flexImages">
      {displayedMedia.map((item) => (
        <MediaBlock key={`${item.type}-${item.number}`} item={item} />
      ))}
    </div>
  );
}