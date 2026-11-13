import { pexelsSrcSet, pexelsUrl } from '@/lib/pexels';

interface ResponsivePictureProps {
  photoId: string;
  alt: string;
  width: number;
  height: number;
  widths: number[];
  sizes: string;
  className?: string;
  loading?: 'eager' | 'lazy';
}

export default function ResponsivePicture({
  photoId,
  alt,
  width,
  height,
  widths,
  sizes,
  className,
  loading = 'lazy',
}: ResponsivePictureProps) {
  return (
    <picture>
      <source type="image/avif" srcSet={pexelsSrcSet(photoId, widths, 'avif')} sizes={sizes} />
      <source type="image/webp" srcSet={pexelsSrcSet(photoId, widths, 'webp')} sizes={sizes} />
      <img
        src={pexelsUrl(photoId, widths[0], 'jpeg')}
        srcSet={pexelsSrcSet(photoId, widths, 'jpeg')}
        sizes={sizes}
        width={width}
        height={height}
        alt={alt}
        loading={loading}
        decoding="async"
        className={className}
      />
    </picture>
  );
}
