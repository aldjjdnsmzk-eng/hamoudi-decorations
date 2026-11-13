export type GalleryOrientation = 'landscape' | 'portrait';

// Licensed stock photography (Pexels). These are inspiration images, not completed projects.
export interface GalleryPhoto {
  id: string;
  width: number;
  height: number;
  orientation: GalleryOrientation;
  alt: string;
  caption: string;
  photographer: string;
}

export const heroPhoto = {
  id: '20451394',
  width: 5966,
  height: 3977,
  alt: 'غرفة معيشة بإطلالات واسعة وأرضيات رخامية وأثاث أنيق',
  photographer: 'Ansar Muhammad',
} as const;

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: '1364054',
    width: 5184,
    height: 3456,
    orientation: 'landscape',
    alt: 'ظلال هندسية على جدران خرسانية ومعدنية في مساحة داخلية هادئة',
    caption: 'ظلال هندسية على الخرسانة والمعدن',
    photographer: 'Paweł L.',
  },
  {
    id: '15743375',
    width: 4672,
    height: 7008,
    orientation: 'portrait',
    alt: 'غرفة نوم دافئة بإضاءة ناعمة وفرش أنيق',
    caption: 'غرفة نوم بإضاءة دافئة',
    photographer: 'Ushindi Namegabe',
  },
  {
    id: '7031402',
    width: 7348,
    height: 4904,
    orientation: 'landscape',
    alt: 'مساحة مفتوحة بأرضيات حجرية وخشب دافئ ودرج يصعد إلى الطابق العلوي',
    caption: 'أرضيات حجرية وخشب دافئ في مساحة مفتوحة',
    photographer: 'Max Vakhtbovych',
  },
  {
    id: '18891783',
    width: 4000,
    height: 2667,
    orientation: 'landscape',
    alt: 'درج بخطوط هندسية وظلال الشمس على جدار خرساني',
    caption: 'درج بخطوط هندسية وظلال الشمس',
    photographer: 'Filipp Romanovski',
  },
  {
    id: '17735412',
    width: 2854,
    height: 3806,
    orientation: 'portrait',
    alt: 'غرفة نوم حديثة بألوان دافئة وتصميم بسيط',
    caption: 'غرفة نوم حديثة بألوان دافئة',
    photographer: 'Bruno Saito',
  },
  {
    id: '4250577',
    width: 8151,
    height: 5434,
    orientation: 'landscape',
    alt: 'بلاطات رخام طبيعي مرتبة مع أوراق الكينا',
    caption: 'تفاصيل من الرخام الطبيعي',
    photographer: 'Edward Jenner',
  },
  {
    id: '1002742',
    width: 5874,
    height: 3640,
    orientation: 'landscape',
    alt: 'تقاطع سطح خشبي هندسي مع أرضية خرسانية',
    caption: 'تقاطع الخشب والخرسانة',
    photographer: 'Igor Starkov',
  },
  {
    id: '6315804',
    width: 3239,
    height: 3200,
    orientation: 'portrait',
    alt: 'مطبخ عصري بخزائن خشبية وأجهزة طهي مدمجة',
    caption: 'مطبخ عصري بخزائن خشبية',
    photographer: 'Max Vakhtbovych',
  },
];
