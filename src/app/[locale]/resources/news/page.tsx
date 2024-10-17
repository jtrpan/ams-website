import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Button from '@locale/[locale]/components/Button'

export default function News() {
  const t = useTranslations('news'); // Use 'news' as the namespace

  return (
    <div className="px-10 lg:px-32 py-24 text-center">
      {/* Main Heading */}
      <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-12 text-primary">
        {t('title')}
      </h1>
      <p className="text-lg lg:text-xl mb-16 text-text-secondary px-4 lg:px-16">
        {t('description')}
      </p>

      {/* CTA Section */}
      <div className="flex flex-col items-center mb-16">
        <p className="text-lg lg:text-xl text-text-secondary mb-8">
          {t('contact_cta')}
        </p>
        <a href="/en/contact" target="_blank">
          <Button rounded size="large">
            {t('contact_button')}
          </Button>
        </a>
      </div>
    </div>
  );
}