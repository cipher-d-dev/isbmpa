export interface VideoItem {
  type: "video";
  number: number;
  src: string;
  caption?: string;
}

// Optional captions for specific videos
const videoCaptions: Record<number, string> = {
  1: "Group Managing Director of ESTYMOL Rev (Mrs) Maureen Okoro-Sokoh been decorated as Patron and Member Governing Council of the Institute of Strategic Business Management and Public Administration Ghana recently",
  2: "Group Managing Director of ESTYMOL Rev (Mrs) Maureen Okoro-Sokoh been decorated as Patron and Member Governing Council of the Institute of Strategic Business Management and Public Administration Ghana recently",
  3: "Group Managing Director of ESTYMOL Rev (Mrs) Maureen Okoro-Sokoh been decorated as Patron and Member Governing Council of the Institute of Strategic Business Management and Public Administration Ghana recently",
};

const videoModules = import.meta.glob(
  "/src/assets/gallery/videos/t-awardee-label (*).mp4",
  {
    eager: true,
    import: "default",
  },
);

export const loadGalleryVideos = (): VideoItem[] => {
  const videos: VideoItem[] = [];

  Object.entries(videoModules).forEach(([path, src]) => {
    const match = path.match(/t-awardee-label\s*\((\d+)\)\.mp4$/i);
    if (!match) return;

    const number = parseInt(match[1]);

    videos.push({
      type: "video",
      number,
      src: src as string,
      caption: videoCaptions[number],
    });
  });

  return videos.sort((a, b) => a.number - b.number);
};
