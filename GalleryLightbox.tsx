import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect, useRef, type KeyboardEvent, type MouseEvent } from 'react';
import ResponsivePicture from '@/components/ResponsivePicture';
import type { GalleryPhoto } from '@/config/gallery';

interface GalleryLightboxProps {
  photos: GalleryPhoto[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (step: number) => void;
}

const controlClass =
  'flex h-12 w-12 shrink-0 items-center justify-center border border-stone/40 text-ivory transition-colors hover:border-clay hover:text-clay focus-visible:outline-clay';

export default function GalleryLightbox({ photos, activeIndex, onClose, onNavigate }: GalleryLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const isOpen = activeIndex !== null;
  const photo = activeIndex !== null ? photos[activeIndex] : undefined;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) onClose();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      onNavigate(1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      onNavigate(-1);
    }
  };

  const hasMultiple = photos.length > 1;

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      aria-label="عرض الصورة"
      className="m-0 h-dvh max-h-none w-dvw max-w-none bg-transparent p-4 backdrop:bg-charcoal/95 open:flex open:items-center open:justify-center sm:p-8"
    >
      {photo && activeIndex !== null && (
        <div className="w-full max-w-6xl space-y-5">
          <div className="flex items-center justify-between gap-4">
            <p aria-live="polite" className="text-sm text-stone">
              {activeIndex + 1} / {photos.length}
            </p>
            <button type="button" onClick={onClose} className={controlClass} aria-label="إغلاق">
              <X aria-hidden="true" size={22} />
            </button>
          </div>

          <div className="flex items-center justify-center bg-charcoal">
            <ResponsivePicture
              key={photo.id}
              photoId={photo.id}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              widths={[960, 1280, 1920]}
              sizes="90vw"
              className="max-h-[70dvh] w-auto max-w-full object-contain"
            />
          </div>

          <div className="flex items-end justify-between gap-6">
            <div className="space-y-1">
              <p className="text-lg font-medium text-ivory">{photo.caption}</p>
              <p className="text-sm text-stone">صورة إلهامية. تصوير: {photo.photographer}</p>
            </div>
            {hasMultiple && (
              <div className="flex shrink-0 gap-3">
                <button type="button" onClick={() => onNavigate(-1)} className={controlClass} aria-label="الصورة السابقة">
                  <ChevronRight aria-hidden="true" size={22} />
                </button>
                <button type="button" onClick={() => onNavigate(1)} className={controlClass} aria-label="الصورة التالية">
                  <ChevronLeft aria-hidden="true" size={22} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
}
