import { useTranslations } from 'next-intl';

export default function HowItWorks() {
  const t = useTranslations('how_it_works'); // Use 'how_it_works' as the namespace

  return (
    <div className="px-10 lg:px-32 py-24 text-center">
      {/* Main Heading */}
      <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-12 text-primary">
        {t('title')}
      </h1>
      <p className="text-lg lg:text-xl mb-16 text-text-secondary px-4 lg:px-16">
        {t('intro')}
      </p>

      {/* Step 1: Getting Started */}
      <div className="mb-24 bg-background-secondary p-8 rounded-lg shadow-md">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-primary">
          {t('getting_started_title')}
        </h2>
        <p className="text-lg lg:text-xl text-text-secondary mb-8">
          {t('getting_started_desc')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="p-6 bg-background rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('account_setup_title')}</h3>
            <p className="text-lg text-text-secondary">{t('account_setup_desc')}</p>
          </div>
          <div className="p-6 bg-background rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('integration_title')}</h3>
            <p className="text-lg text-text-secondary">{t('integration_desc')}</p>
          </div>
        </div>
      </div>

      {/* Step 2: Seamless Transactions */}
      <div className="mb-24">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8">{t('transactions_title')}</h2>
        <p className="text-lg lg:text-xl text-text-secondary mb-16 px-4 lg:px-16">
          {t('transactions_desc')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('payment_processing_title')}</h3>
            <p className="text-lg text-text-secondary">{t('payment_processing_desc')}</p>
          </div>
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('secure_authentication_title')}</h3>
            <p className="text-lg text-text-secondary">{t('secure_authentication_desc')}</p>
          </div>
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('real_time_analytics_title')}</h3>
            <p className="text-lg text-text-secondary">{t('real_time_analytics_desc')}</p>
          </div>
        </div>
      </div>

      {/* Step 3: Managing Growth */}
      <div className="mb-24 bg-background-secondary p-8 rounded-lg shadow-md">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8">{t('growth_title')}</h2>
        <p className="text-lg lg:text-xl text-text-secondary mb-16">
          {t('growth_desc')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-background rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('scalability_title')}</h3>
            <p className="text-lg text-text-secondary">{t('scalability_desc')}</p>
          </div>
          <div className="p-6 bg-background rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('customization_title')}</h3>
            <p className="text-lg text-text-secondary">{t('customization_desc')}</p>
          </div>
          <div className="p-6 bg-background rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('support_title')}</h3>
            <p className="text-lg text-text-secondary">{t('support_desc')}</p>
          </div>
        </div>
      </div>

      {/* Why Choose UCanPay */}
      <div className="mb-24">
        <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-primary">
          {t('why_title')}
        </h2>
        <p className="text-lg lg:text-xl text-text-secondary mb-12 px-4 lg:px-16">
          {t('why_desc')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('comprehensive_support_title')}</h3>
            <p className="text-lg text-text-secondary">{t('comprehensive_support_desc')}</p>
          </div>
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('innovation_title')}</h3>
            <p className="text-lg text-text-secondary">{t('innovation_desc')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
