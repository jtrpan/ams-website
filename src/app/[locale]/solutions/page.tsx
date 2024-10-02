import { useTranslations } from 'next-intl';

export default function Solutions() {
  const t = useTranslations('solutions');

  return (
    <div className="px-32 py-24 text-center text-2xl">
      <h1 className="text-7xl font-extrabold leading-tight mb-12">{t('title')}</h1>

      <p className="mb-12 px-8">{t('desc1')}</p>

      <div className="space-y-16">
        <div>
          <h2 className="text-5xl font-bold mb-8">{t('solution1_title')}</h2>
          <p>{t('solution1_desc')}</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold mb-8">{t('solution2_title')}</h2>
          <p>{t('solution2_desc')}</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold mb-8">{t('solution3_title')}</h2>
          <p>{t('solution3_desc')}</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold mb-8">{t('solution4_title')}</h2>
          <p>{t('solution4_desc')}</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold mb-8">{t('solution5_title')}</h2>
          <p>{t('solution5_desc')}</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold mb-8">{t('solution6_title')}</h2>
          <p>{t('solution6_desc')}</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold mb-8">{t('solution7_title')}</h2>
          <p>{t('solution7_desc')}</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold mb-8">{t('solution8_title')}</h2>
          <p>{t('solution8_desc')}</p>
        </div>
      </div>
    </div>
  );
}
