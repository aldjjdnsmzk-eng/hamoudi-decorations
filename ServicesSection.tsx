import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import { siteCopy } from '@/config/site';

export default function ServicesSection() {
  const { services } = siteCopy;

  return (
    <section id="services" aria-labelledby="services-title" className="scroll-mt-24 border-t border-stone py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading id="services-title" eyebrow={services.eyebrow} title={services.title} />
          <p className="max-w-sm border-s-2 border-clay ps-4 text-sm leading-[1.5] text-muted">{services.note}</p>
        </div>

        <div className="mt-14 grid gap-px border border-stone bg-stone sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((service) => (
            <ServiceCard key={service.id} title={service.title} description={service.description} icon={service.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
