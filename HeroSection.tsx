import { ArrowLeft } from 'lucide-react';
import ResponsivePicture from '@/components/ResponsivePicture';
import { heroPhoto } from '@/config/gallery';
import { siteCopy } from '@/config/site';

export default function HeroSection() {
  const { hero } = siteCopy;

  return (
    <section aria-labelledby="hero-title" className="bg-ivory">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-12 sm:px-8 md:py-16 lg:grid-cols-12 lg:gap-16 lg:py-24">
        <div className="space-y-8 lg:col-span-5">
          <p className="flex items-center text-sm font-medium text-olive-deep">
            <span aria-hidden="true" className="me-4 inline-block h-px w-10 bg-clay" />
            {hero.eyebrow}
          </p>
          <h1 id="hero-title" className="text-4xl font-bold leading-[1.2] text-charcoal sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="max-w-xl text-lg leading-[1.5] text-muted">{hero.description}</p>
          <a
            href={hero.cta.href}
            className="group inline-flex h-12 items-center gap-3 bg-charcoal px-7 font-medium text-ivory transition-colors hover:bg-olive-deep"
          >
            {hero.cta.label}
            <ArrowLeft
              aria-hidden="true"
              size={18}
              className="transition-transform duration-300 group-hover:-translate-x-1 motion-reduce:transition-none"
            />
          </a>
        </div>

        <figure className="lg:col-span-7">
          <div className="aspect-[4/5] overflow-hidden bg-stone sm:aspect-[4/3] lg:aspect-[5/4]">
            <ResponsivePicture
              photoId={heroPhoto.id}
              alt={heroPhoto.alt}
              width={heroPhoto.width}
              height={heroPhoto.height}
              widths={[960, 1280, 1920]}
              sizes="(min-width: 1024px) 58vw, 100vw"
              loading="eager"
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="mt-3 text-sm text-muted">{hero.imageCaption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
