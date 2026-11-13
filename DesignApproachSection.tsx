import SectionHeading from '@/components/SectionHeading';
import { siteCopy } from '@/config/site';

export default function DesignApproachSection() {
  const { approach } = siteCopy;

  return (
    <section id="approach" aria-labelledby="approach-title" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading id="approach-title" eyebrow={approach.eyebrow} title={approach.title} description={approach.description} />

        <ol className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {approach.values.map((value, index) => (
            <li key={value.id} className="border-t border-charcoal pt-6">
              <p className="text-sm font-medium text-clay-deep">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="mt-4 text-xl font-bold text-charcoal">{value.title}</h3>
              <p className="mt-3 leading-[1.5] text-muted">{value.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
