import { Client, Storage, Query } from "appwrite";

export interface VideoItem {
  type: "video";
  number: number;
  src: string;
  caption?: string;
}

const videoCaptions: Record<number, string> = {
  1: "Group Managing Director of ESTYMOL Rev (Mrs) Maureen Okoro-Sokoh been decorated as Patron and Member Governing Council of the Institute of Strategic Business Management and Public Administration Ghana recently",
  2: "Group Managing Director of ESTYMOL Rev (Mrs) Maureen Okoro-Sokoh been decorated as Patron and Member Governing Council of the Institute of Strategic Business Management and Public Administration Ghana recently",
  3: "Group Managing Director of ESTYMOL Rev (Mrs) Maureen Okoro-Sokoh been decorated as Patron and Member Governing Council of the Institute of Strategic Business Management and Public Administration Ghana recently",
  4: "WIFE OF GEN. CHRIS-GARUBA (RTD), DR ENEWA RITA CHRIS-GARUBA (MRS), PRINCIPAL PARTNER, TEMPLE CHAMBERS ABUJA BEEN CONFERED WITH A DISTINGUISHED FELLOWSHIP DOCTORATE IN ARBITRATION AND WOMEN EMPOWERMENT BY ISBMPA GHANA",
  5: "WIFE OF GEN. CHRIS-GARUBA (RTD), DR ENEWA RITA CHRIS-GARUBA (MRS), PRINCIPAL PARTNER, TEMPLE CHAMBERS ABUJA BEEN CONFERED WITH A DISTINGUISHED FELLOWSHIP DOCTORATE IN ARBITRATION AND WOMEN EMPOWERMENT BY ISBMPA GHANA",
};

export const loadGalleryVideos = async (): Promise<VideoItem[]> => {
  const endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT;
  const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;
  const bucketId = import.meta.env.VITE_APPWRITE_GALLERY_BUCKET_ID;

  if (!endpoint || !projectId || !bucketId) {
    console.error("Appwrite environment variables are missing.");
    return [];
  }

  try {
    const client = new Client().setEndpoint(endpoint).setProject(projectId);
    const storage = new Storage(client);
    const limit = 100;

    // Fetch Page 1 cleanly first
    const res1 = await storage.listFiles(bucketId, [
      Query.limit(limit),
      Query.offset(0),
    ]);
    let files = [...res1.files];

    // Only run the second fetch if Appwrite explicitly tells us there are more files remaining
    if (res1.total > limit) {
      const res2 = await storage.listFiles(bucketId, [
        Query.limit(limit),
        Query.offset(limit),
      ]);
      files = [...files, ...res2.files];
    }

    const videos: VideoItem[] = [];

    files.forEach((file: any) => {
      // FIXED REGEX: Dynamically matches whatever string prefix introduces your (index).mp4 format
      const match = file.name.match(/.+?\s*\((\d+)\)\.mp4$/i);

      if (!match) return;

      const num = parseInt(match[1], 10);
      const viewUrl = `${endpoint}/storage/buckets/${bucketId}/files/${file.$id}/view?project=${projectId}`;

      videos.push({
        src: viewUrl,
        type: "video",
        number: num,
        caption: videoCaptions[num],
      });
    });

    // Safe inline copy mutation sort
    return [...videos].sort((a, b) => a.number - b.number);
  } catch (error) {
    console.error("Error fetching gallery videos from Appwrite:", error);
    return [];
  }
};
