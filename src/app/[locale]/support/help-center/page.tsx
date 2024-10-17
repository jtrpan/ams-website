import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Button from '@locale/[locale]/components/Button'

export default function HelpCenter() {
  const t = useTranslations('help_center'); // Use 'help_center' as the namespace

  return (
    <div className="px-10 lg:px-32 py-24 text-center">
      {/* Main Heading */}
      <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-12 text-primary">
        {t('title')}
      </h1>
      <p className="text-lg lg:text-xl mb-16 text-text-secondary px-4 lg:px-16">
        {t('intro')}
      </p>

      {/* Section 1: Getting Started */}
      <div className="mb-24">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8">{t('section1_title')}</h2>
        <p className="text-lg lg:text-xl text-text-secondary mb-16">{t('section1_desc')}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('account_setup_title')}</h3>
            <p className="text-lg text-text-secondary">{t('account_setup_desc')}</p>
          </div>
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('business_setup_title')}</h3>
            <p className="text-lg text-text-secondary">{t('business_setup_desc')}</p>
          </div>
        </div>
      </div>

      {/* Section 2: Technical Support */}
      <div className="mb-24">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8">{t('section2_title')}</h2>
        <p className="text-lg lg:text-xl text-text-secondary mb-16">{t('section2_desc')}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('integration_support_title')}</h3>
            <p className="text-lg text-text-secondary">{t('integration_support_desc')}</p>
          </div>
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('error_handling_title')}</h3>
            <p className="text-lg text-text-secondary">{t('error_handling_desc')}</p>
          </div>
        </div>
      </div>

      {/* Section 3: Payment Issues */}
      <div className="mb-24">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8">{t('section3_title')}</h2>
        <p className="text-lg lg:text-xl text-text-secondary mb-16">{t('section3_desc')}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('transaction_issues_title')}</h3>
            <p className="text-lg text-text-secondary">{t('transaction_issues_desc')}</p>
          </div>
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('refunds_title')}</h3>
            <p className="text-lg text-text-secondary">{t('refunds_desc')}</p>
          </div>
        </div>
      </div>

      {/* Section 4: FAQs */}
      <div className="mb-24">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8">{t('section4_title')}</h2>
        <p className="text-lg lg:text-xl text-text-secondary mb-16">{t('section4_desc')}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('faq1_title')}</h3>
            <p className="text-lg text-text-secondary">{t('faq1_desc')}</p>
          </div>
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('faq2_title')}</h3>
            <p className="text-lg text-text-secondary">{t('faq2_desc')}</p>
          </div>
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('faq3_title')}</h3>
            <p className="text-lg text-text-secondary">{t('faq3_desc')}</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mb-24">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8">{t('cta_title')}</h2>
        <p className="text-lg lg:text-xl text-text-secondary mb-12">{t('cta_desc')}</p>
        <a href="/en/contact" target="_blank">
          <Button rounded size="large">
            {t('contact_support_button')}
          </Button>
        </a>
      </div>
    </div>
  );
}
