import { useTranslations } from 'next-intl';

export default function Resources() {
  const t = useTranslations('resources');

  return (
    <div className="px-32 py-24 text-center text-2xl">
      <h1 className="text-7xl font-extrabold leading-tight mb-12">{t('title')}</h1>

      <p className="mb-12 px-8">{t('desc1')}</p>

      <div className="space-y-16">
        <div>
          <h2 className="text-5xl font-bold mb-8">{t('resource1_title')}</h2>
          <p>{t('resource1_desc')}</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold mb-8">{t('resource2_title')}</h2>
          <p>{t('resource2_desc')}</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold mb-8">{t('resource3_title')}</h2>
          <p>{t('resource3_desc')}</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold mb-8">{t('resource4_title')}</h2>
          <p>{t('resource4_desc')}</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold mb-8">{t('resource5_title')}</h2>
          <p>{t('resource5_desc')}</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold mb-8">{t('resource6_title')}</h2>
          <p>{t('resource6_desc')}</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold mb-8">{t('resource7_title')}</h2>
          <p>{t('resource7_desc')}</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold mb-8">{t('resource8_title')}</h2>
          <p>{t('resource8_desc')}</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold mb-8">{t('resource9_title')}</h2>
          <p>{t('resource9_desc')}</p>
        </div>
      </div>
    </div>
  );
}
