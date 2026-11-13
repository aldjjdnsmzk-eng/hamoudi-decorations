export type ImageFormat = 'avif' | 'webp' | 'jpeg';

const PEXELS_PHOTO_BASE = 'https://images.pexels.com/photos';

export function pexelsUrl(photoId: string, width: number, format: ImageFormat): string {
  const formatParam = format === 'jpeg' ? '' : `&fm=${format}`;
  return `${PEXELS_PHOTO_BASE}/${photoId}/pexels-photo-${photoId}.jpeg?auto=compress&cs=tinysrgb&w=${width}${formatParam}`;
}

export function pexelsSrcSet(photoId: string, widths: number[], format: ImageFormat): string {
  return widths.map((width) => `${pexelsUrl(photoId, width, format)} ${width}w`).join(', ');
}
