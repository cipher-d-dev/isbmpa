export interface ImageItem {
  type: "image";
  number: number;
  src: string;
  fileId?: string;
  name?: string;
  mimeType?: string;
  caption?: string;
}

export interface VideoItem {
  type: "video";
  number: number;
  src: string;
  fileId?: string;
  name?: string;
  mimeType?: string;
  caption?: string;
}

export type MediaItem = ImageItem | VideoItem;
