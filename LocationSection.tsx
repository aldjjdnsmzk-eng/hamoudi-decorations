import { ExternalLink, MapPin } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { availableContactChannels, mapsSearchUrl, siteCopy, verifiedBusiness } from '@/config/site';

export default function LocationSection() {
  const { location } = siteCopy;

  return (
    <section id="location" aria-labelledby="location-title" className="scroll-mt-24 bg-charcoal py-20 text-ivory md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="space-y-10 lg:col-span-6">
          <SectionHeading
            id="location-title"
            eyebrow={location.eyebrow}
            title={location.title}
            description={location.description}
            tone="dark"
          />

          <div className="space-y-2">
            <p className="text-sm font-medium text-stone">{location.addressLabel}</p>
            <p className="flex items-start gap-3 text-2xl font-bold leading-[1.2] text-ivory sm:text-3xl">
              <MapPin aria-hidden="true" size={26} className="mt-1 shrink-0 text-clay" />
              {verifiedBusiness.address}
            </p>
          </div>

          <a
            href={mapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-3 border border-ivory px-6 font-medium text-ivory transition-colors hover:bg-ivory hover:text-charcoal"
          >
            {location.mapLabel}
            <ExternalLink aria-hidden="true" size={18} />
            <span className="sr-only">(يفتح في نافذة جديدة)</span>
          </a>
        </div>

        {availableContactChannels.length > 0 && (
          <ul className="space-y-4 border-t border-stone/30 pt-8 lg:col-span-5 lg:col-start-8 lg:border-t-0 lg:pt-16">
            {availableContactChannels.map((channel) => (
              <li key={channel.label} className="flex flex-col gap-1 border-b border-stone/30 pb-4">
                <span className="text-sm text-stone">{channel.label}</span>
                <a href={channel.href} className="text-lg text-ivory underline-offset-4 hover:underline">
                  {channel.value}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
