import { Info } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import GalleryLightbox from '@/components/GalleryLightbox';
import ResponsivePicture from '@/components/ResponsivePicture';
import SectionHeading from '@/components/SectionHeading';
import { galleryPhotos, type GalleryOrientation } from '@/config/gallery';
import { siteCopy } from '@/config/site';

const aspectClass: Record<GalleryOrientation, string> = {
  landscape: 'aspect-[4/3]',
  portrait: 'aspect-[4/5]',
};

export default function InspirationGallery() {
  const { inspiration } = siteCopy;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (activeIndex === null) triggerRef.current?.focus();
  }, [activeIndex]);

  const openPhoto = (index: number, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setActiveIndex(index);
  };

  const navigate = (step: number) => {
    setActiveIndex((current) => {
      if (current === null) return null;
      const total = galleryPhotos.length;
      return (current + step + total) % total;
    });
  };

  return (
    <section id="inspiration" aria-labelledby="inspiration-title" className="scroll-mt-24 border-t border-stone bg-stone/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading id="inspiration-title" eyebrow={inspiration.eyebrow} title={inspiration.title} />

        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <p className="inline-flex items-center gap-3 border border-clay-deep px-4 py-3 text-sm font-medium text-charcoal">
            <Info aria-hidden="true" size={18} className="shrink-0 text-clay-deep" />
            {inspiration.disclaimer}
          </p>
          <p className="max-w-md leading-[1.5] text-muted">{inspiration.description}</p>
        </div>

        <ul className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {galleryPhotos.map((photo, index) => (
            <li key={photo.id} className="mb-6 break-inside-avoid">
              <figure>
                <button
                  type="button"
                  onClick={(event) => openPhoto(index, event.currentTarget)}
                  aria-haspopup="dialog"
                  aria-label={`تكبير الصورة: ${photo.caption}`}
                  className={`group block w-full cursor-zoom-in overflow-hidden bg-stone ${aspectClass[photo.orientation]}`}
                >
                  <ResponsivePicture
                    photoId={photo.id}
                    alt=""
                    width={photo.width}
                    height={photo.height}
                    widths={[480, 720, 960]}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                </button>
                <figcaption className="mt-3 text-sm text-muted">{photo.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>

      <GalleryLightbox
        photos={galleryPhotos}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={navigate}
      />
    </section>
  );
}
