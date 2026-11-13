import SectionHeading from '@/components/SectionHeading';
import { siteCopy } from '@/config/site';

export default function IntroSection() {
  const { intro } = siteCopy;

  return (
    <section aria-labelledby="intro-title" className="border-t border-stone py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <SectionHeading id="intro-title" eyebrow={intro.eyebrow} title={intro.title} />
        </div>
        <div className="space-y-6 text-lg leading-[1.5] text-charcoal lg:col-span-5 lg:col-start-8 lg:pt-14">
          {intro.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
