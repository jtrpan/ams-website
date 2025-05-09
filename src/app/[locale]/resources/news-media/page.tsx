import { useTranslations } from 'next-intl';

export default function News_Media() {
  const t = useTranslations('news_media'); // Use 'news_media' as the namespace

  return (
    <div className="px-10 lg:px-32 py-24 text-center">
      {/* Main Title */}
      <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-8 text-primary">{t('title')}</h1>

      {/* Intro Paragraphs */}
      <p className="text-lg lg:text-xl mb-6 text-text-secondary px-4 lg:px-16">{t('intro1')}</p>
      <p className="text-lg lg:text-xl mb-12 text-text-secondary px-4 lg:px-16">{t('intro2')}</p>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* News Item 1 */}
        <div className="p-6 bg-background-secondary rounded-lg shadow-md text-left">
          <p className="text-sm text-text-tertiary mb-2">{t('news1.date')} · {t('news1.tag')}</p>
          <h3 className="text-2xl font-semibold mb-2">{t('news1.title')}</h3>
          <p className="text-text-secondary">{t('news1.summary')}</p>
        </div>

        {/* News Item 2 */}
        <div className="p-6 bg-background-secondary rounded-lg shadow-md text-left">
          <p className="text-sm text-text-tertiary mb-2">{t('news2.date')} · {t('news2.tag')}</p>
          <h3 className="text-2xl font-semibold mb-2">{t('news2.title')}</h3>
          <p className="text-text-secondary">{t('news2.summary')}</p>
        </div>

        {/* News Item 3 */}
        <div className="p-6 bg-background-secondary rounded-lg shadow-md text-left">
          <p className="text-sm text-text-tertiary mb-2">{t('news3.date')} · {t('news3.tag')}</p>
          <h3 className="text-2xl font-semibold mb-2">{t('news3.title')}</h3>
          <p className="text-text-secondary">{t('news3.summary')}</p>
        </div>

        {/* News Item 4 */}
        <div className="p-6 bg-background-secondary rounded-lg shadow-md text-left">
          <p className="text-sm text-text-tertiary mb-2">{t('news4.date')} · {t('news4.tag')}</p>
          <h3 className="text-2xl font-semibold mb-2">{t('news4.title')}</h3>
          <p className="text-text-secondary">{t('news4.summary')}</p>
        </div>

        {/* News Item 5 */}
        <div className="p-6 bg-background-secondary rounded-lg shadow-md text-left">
          <p className="text-sm text-text-tertiary mb-2">{t('news5.date')} · {t('news5.tag')}</p>
          <h3 className="text-2xl font-semibold mb-2">{t('news5.title')}</h3>
          <p className="text-text-secondary">{t('news5.summary')}</p>
        </div>
      </div>
    </div>
  );
}
