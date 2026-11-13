interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  tone?: 'light' | 'dark';
}

export default function SectionHeading({ id, eyebrow, title, description, tone = 'light' }: SectionHeadingProps) {
  const isDark = tone === 'dark';

  return (
    <div className="max-w-2xl space-y-5">
      <p className={`flex items-center text-sm font-medium ${isDark ? 'text-stone' : 'text-olive-deep'}`}>
        <span aria-hidden="true" className="me-4 inline-block h-px w-10 bg-clay" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`text-3xl font-bold leading-[1.2] sm:text-4xl lg:text-5xl ${isDark ? 'text-ivory' : 'text-charcoal'}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-base leading-[1.5] sm:text-lg ${isDark ? 'text-stone' : 'text-muted'}`}>{description}</p>
      )}
    </div>
  );
}
