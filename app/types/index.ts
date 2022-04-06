import type { MicroCMSDate, MicroCMSImage } from "microcms-js-sdk";

export type Content = {
  id: string;
  title: string;
  image: MicroCMSImage;
  content: string;
  excerpt: string;
} & MicroCMSDate;
