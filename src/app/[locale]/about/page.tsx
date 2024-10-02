import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about'); // Use 'about' as the namespace

  return (
    <div className="px-32 py-24 text-center text-2xl">
      <h1 className="text-7xl font-extrabold leading-tight mb-12">{t('title')}</h1>

      <p className="mb-12 px-8">{t('subtitle')}</p>

      <h2 className="text-5xl font-bold mb-8">{t('mission')}</h2>
      <p className="mb-16 px-8">{t('mission2')}</p>

      <h2 className="text-5xl font-bold mb-8">{t('subtitle2?')}</h2>
      <div className="space-y-4 mb-16 px-8">
        <p>{t('desc1')}</p>
        <p>{t('desc2')}</p>
        <p>{t('desc3')}</p>
        <p>{t('desc4')}</p>
      </div>

      <h2 className="text-5xl font-bold mb-8">{t('team')}</h2>
      <p className="px-8">{t('team2')}</p>
    </div>
  );
}
