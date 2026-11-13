import { Frame } from 'lucide-react';
import { availableContactChannels, navigation, siteCopy, verifiedBusiness } from '@/config/site';

export default function SiteFooter() {
  const { footer } = siteCopy;

  return (
    <footer className="border-t border-stone bg-stone/50">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-3">
        <div className="space-y-5">
          <a href="#main" className="flex items-center gap-3" aria-label={verifiedBusiness.name}>
            <span className="flex h-10 w-10 items-center justify-center border border-charcoal text-charcoal">
              <Frame aria-hidden="true" size={20} strokeWidth={1.5} />
            </span>
            <span className="text-lg font-bold text-charcoal">{verifiedBusiness.name}</span>
          </a>
          <div className="space-y-2">
            <p className="text-sm font-medium text-olive-deep">{footer.addressTitle}</p>
            <p className="text-charcoal">{verifiedBusiness.address}</p>
          </div>
        </div>

        <nav aria-label="روابط التذييل">
          <p className="mb-4 text-sm font-medium text-olive-deep">{footer.navigationTitle}</p>
          <ul className="space-y-3">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-charcoal transition-colors hover:text-clay-deep">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {availableContactChannels.length > 0 && (
          <div>
            <p className="mb-4 text-sm font-medium text-olive-deep">{footer.contactTitle}</p>
            <ul className="space-y-3">
              {availableContactChannels.map((channel) => (
                <li key={channel.label}>
                  <a href={channel.href} className="text-charcoal transition-colors hover:text-clay-deep">
                    {channel.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="border-t border-stone">
        <p className="mx-auto max-w-7xl px-5 py-6 text-sm text-muted sm:px-8">
          © {new Date().getFullYear()} {verifiedBusiness.name}. {footer.rights}
        </p>
      </div>
    </footer>
  );
}
