import { useTranslations } from 'next-intl';

export default function Support() {
  const t = useTranslations('support');

  return (
    <div className="px-32 py-24 text-center text-2xl">
      <h1 className="text-7xl font-extrabold leading-tight mb-12">{t('title')}</h1>

      <p className="mb-12 px-8">{t('desc1')}</p>

      <div className="space-y-16">
        <div>
          <h2 className="text-5xl font-bold mb-8">{t('support1_title')}</h2>
          <p>{t('support1_desc')}</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold mb-8">{t('support2_title')}</h2>
          <p>{t('support2_desc')}</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold mb-8">{t('support3_title')}</h2>
          <p>{t('support3_desc')}</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold mb-8">{t('support4_title')}</h2>
          <p>{t('support4_desc')}</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold mb-8">{t('support5_title')}</h2>
          <p>{t('support5_desc')}</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold mb-8">{t('support6_title')}</h2>
          <p>{t('support6_desc')}</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold mb-8">{t('support7_title')}</h2>
          <p>{t('support7_desc')}</p>
        </div>
      </div>
    </div>
  );
}
