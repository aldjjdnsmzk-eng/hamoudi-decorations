import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <article className="group flex flex-col gap-6 bg-ivory p-8 transition-colors duration-300 hover:bg-stone/40 md:p-10">
      <span className="flex h-12 w-12 items-center justify-center border border-olive text-olive-deep transition-colors duration-300 group-hover:border-clay-deep group-hover:text-clay-deep">
        <Icon aria-hidden="true" size={22} strokeWidth={1.5} />
      </span>
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-charcoal">{title}</h3>
        <p className="leading-[1.5] text-muted">{description}</p>
      </div>
    </article>
  );
}
