import { ImageProperties } from "./imageProperties";

export interface Gif {
  id: string;
  title?: string;
  embed_url?: string;
  url?: string;
  images: any;
}