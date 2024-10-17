// File: src/app/[locale]/about/page.tsx
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('about'); // 'about' namespace

  return (
    <div className="px-10 py-16 text-center">
      <h1 className="text-5xl font-bold mb-8">{t('about_main_title')}</h1>
      <p className="text-lg">{t('about_main_description')}</p>
    </div>
  );
}
