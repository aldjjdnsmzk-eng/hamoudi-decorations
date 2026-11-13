import { Frame, Menu, X } from 'lucide-react';
import { useEffect, useId, useRef, useState } from 'react';
import { headerCta, navigation, verifiedBusiness } from '@/config/site';

const navLinkClass =
  'relative py-2 text-charcoal transition-colors hover:text-clay-deep after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-right after:scale-x-0 after:bg-clay after:transition-transform after:duration-300 hover:after:scale-x-100 motion-reduce:after:transition-none';

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-stone bg-ivory">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#main" className="flex items-center gap-3" aria-label={verifiedBusiness.name}>
          <span className="flex h-10 w-10 items-center justify-center border border-charcoal text-charcoal">
            <Frame aria-hidden="true" size={20} strokeWidth={1.5} />
          </span>
          <span className="text-lg font-bold text-charcoal">{verifiedBusiness.name}</span>
        </a>

        <nav aria-label="التنقل الرئيسي" className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className={navLinkClass}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={headerCta.href}
            className="inline-flex h-11 items-center border border-charcoal px-6 font-medium text-charcoal transition-colors hover:bg-charcoal hover:text-ivory"
          >
            {headerCta.label}
          </a>
        </div>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls={menuId}
          className="flex h-11 w-11 items-center justify-center text-charcoal lg:hidden"
        >
          {isOpen ? <X aria-hidden="true" size={24} /> : <Menu aria-hidden="true" size={24} />}
          <span className="sr-only">{isOpen ? 'إغلاق القائمة' : 'فتح القائمة'}</span>
        </button>
      </div>

      {isOpen && (
        <nav id={menuId} aria-label="القائمة المحمولة" className="border-t border-stone bg-ivory lg:hidden">
          <ul className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
            {[...navigation, headerCta].map((item) => (
              <li key={item.href} className="border-b border-stone last:border-b-0">
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex min-h-12 items-center text-lg text-charcoal transition-colors hover:text-clay-deep"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
