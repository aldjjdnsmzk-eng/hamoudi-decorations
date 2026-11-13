import { Armchair, Blinds, Lamp, type LucideIcon, PaintRoller, Ruler, Sofa } from 'lucide-react';

// VERIFIED: the only business facts confirmed by the owner.
export const verifiedBusiness = {
  name: 'ديكورات حمودي',
  address: 'ميسان، الحولي، مقاطعة 2',
} as const;

// PENDING: leave value and href as null until the owner supplies and verifies each channel.
// Channels with a null value are hidden everywhere on the site.
export interface ContactChannel {
  label: string;
  value: string | null;
  href: string | null;
}

export const contactChannels: ContactChannel[] = [
  { label: 'الهاتف', value: null, href: null },
  { label: 'واتساب', value: null, href: null },
  { label: 'البريد الإلكتروني', value: null, href: null },
  { label: 'وسائل التواصل الاجتماعي', value: null, href: null },
];

export const availableContactChannels = contactChannels.filter(
  (channel): channel is ContactChannel & { value: string; href: string } =>
    channel.value !== null && channel.href !== null,
);

// CONFIRMED: the owner approved the six service categories. Descriptions and other promotional copy remain draft until reviewed.
export interface ServiceDraft {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ValueDraft {
  id: string;
  title: string;
  description: string;
}

export const navigation = [
  { href: '#services', label: 'الخدمات' },
  { href: '#inspiration', label: 'الإلهام' },
  { href: '#approach', label: 'فلسفة التصميم' },
] as const;

export const headerCta = { label: 'موقعنا', href: '#location' } as const;

export const siteCopy = {
  hero: {
    eyebrow: verifiedBusiness.address,
    title: 'مساحات هادئة، وتفاصيل تصنع الفرق',
    description:
      'نساعدك على تحويل المكان إلى بيت يعكس ذوقك، بتوازن في الضوء، واختيار دقيق للمواد، وحلول عملية تناسب الحياة اليومية.',
    cta: { label: 'استكشف خدماتنا', href: '#services' },
    imageCaption: 'صورة إلهامية لأغراض العرض فقط',
  },
  intro: {
    eyebrow: 'عن ديكورات حمودي',
    title: 'الديكور ليس زينة فقط، بل طريقة للعيش في المكان',
    paragraphs: [
      `${verifiedBusiness.name} مشروع للديكور الداخلي يقع في ${verifiedBusiness.address}. نهتم بفهم احتياجات كل مساحة قبل اقتراح أي حل.`,
      'ننظر إلى كل غرفة كجزء من مشروع أكبر: الإضاءة والألوان والأثاث والمواد، ليخرج المكان متناغماً وعملياً في آن واحد.',
    ],
  },
  services: {
    eyebrow: 'خدماتنا',
    title: 'خدمات الديكور الداخلي',
    note: 'نقدم مجموعة من خدمات التصميم والديكور الداخلي، وتشمل المجالات التالية.',
    items: [
      {
        id: 'interior-planning',
        title: 'تصميم داخلي للمنازل',
        description: 'تخطيط المساحات وتوزيع الأثاث بما يناسب نمط حياتك.',
        icon: Sofa,
      },
      {
        id: 'lighting',
        title: 'الإضاءة الداخلية',
        description: 'اختيار مصادر الإضاءة وتوزيعها لإبراز الأجواء والتفاصيل.',
        icon: Lamp,
      },
      {
        id: 'finishes',
        title: 'الدهانات والتشطيبات',
        description: 'اختيار ألوان وتشطيبات الجدران بما يوازن المساحة والضوء.',
        icon: PaintRoller,
      },
      {
        id: 'textiles',
        title: 'الستائر والأقمشة',
        description: 'اختيار الأقمشة والستائر والمفروشات بما يحقق الراحة والأناقة.',
        icon: Blinds,
      },
      {
        id: 'custom-furniture',
        title: 'الأثاث والقطع المخصصة',
        description: 'اقتراح قطع أثاث تناسب المكان والمقاسات المطلوبة.',
        icon: Armchair,
      },
      {
        id: 'site-survey',
        title: 'القياس والتخطيط الأولي',
        description: 'قياس المكان ووضع تصور أولي للمساحة قبل بدء التنفيذ.',
        icon: Ruler,
      },
    ] satisfies ServiceDraft[],
  },
  inspiration: {
    eyebrow: 'معرض الإلهام',
    title: 'أفكار للاستلهام',
    disclaimer: 'صور إلهامية وليست مشاريع منفذة للشركة',
    description:
      'مجموعة مختارة من صور تصميم داخلي مرخصة، نعرضها لاستلهام الألوان والمواد والإضاءة. انقر على أي صورة لعرضها بحجم أكبر.',
  },
  approach: {
    eyebrow: 'فلسفة التصميم',
    title: 'قيم نحرص عليها في كل مساحة',
    description: 'مبادئ عامة نعتمدها في التصميم الداخلي.',
    values: [
      {
        id: 'harmony',
        title: 'الانسجام',
        description: 'توازن الألوان والخطوط والمساحات، بحيث يبدو كل عنصر جزءاً من صورة واحدة متكاملة.',
      },
      {
        id: 'materials',
        title: 'اختيار المواد',
        description: 'الخشب والحجر والمعادن والأقمشة تُختار لطبيعتها وقدرتها على التقادم بجمال.',
      },
      {
        id: 'function',
        title: 'الوظيفة',
        description: 'لكل قطعة في المكان غرض واضح، وكل مساحة مصممة لتسهيل الحركة والاستخدام اليومي.',
      },
      {
        id: 'details',
        title: 'العناية بالتفاصيل',
        description: 'من تركيب الإضاءة إلى مسار الظل على الجدار، تفاصيل صغيرة تصنع الفرق.',
      },
    ] satisfies ValueDraft[],
  },
  location: {
    eyebrow: 'الموقع',
    title: 'موقعنا',
    addressLabel: 'العنوان',
    description: 'يمكنك الوصول إلى موقعنا عبر خرائط Google باستخدام العنوان التالي.',
    mapLabel: 'فتح الموقع في خرائط Google',
  },
  footer: {
    navigationTitle: 'روابط سريعة',
    addressTitle: 'العنوان',
    contactTitle: 'التواصل',
    rights: 'جميع الحقوق محفوظة.',
  },
} as const;

export const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(verifiedBusiness.address)}`;
