import { getCollection, type CollectionEntry } from "astro:content";

export type PhotoEntry = CollectionEntry<"photos">;

export const photoImages = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/photos/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

export const photoImageUrls = import.meta.glob<{ default: string }>(
  "/src/assets/photos/*.svg",
  { eager: true, query: "?url" }
);

export async function getPhotos() {
  const photos = await getCollection("photos");
  return photos.sort((a, b) => a.data.order - b.data.order);
}

export function getFeaturedPhotos(photos: PhotoEntry[]) {
  return photos.filter((photo) => photo.data.featured);
}

export function getSeriesPhotos(photos: PhotoEntry[], series: PhotoEntry["data"]["series"]) {
  return photos.filter((photo) => photo.data.series === series);
}

export function getAdjacentPhotos(photos: PhotoEntry[], slug: string) {
  const index = photos.findIndex((photo) => getPhotoSlug(photo) === slug);
  return {
    previous: index > 0 ? photos[index - 1] : undefined,
    next: index >= 0 && index < photos.length - 1 ? photos[index + 1] : undefined
  };
}

export function getPhotoSlug(photo: PhotoEntry) {
  return photo.slug;
}

export function resolvePhotoImage(path: string) {
  const filename = path.trim().replaceAll("\\", "/").split("/").filter(Boolean).pop();
  const normalized = filename ? `/src/assets/photos/${filename}` : "";
  return photoImages[normalized]?.default ?? photoImageUrls[normalized]?.default;
}
