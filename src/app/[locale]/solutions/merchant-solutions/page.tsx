import { useTranslations } from 'next-intl';

export default function MerchantSolutions() {
  const t = useTranslations('merchant_solutions'); // Use 'merchant_solutions' as the namespace

  return (
    <div className="px-10 lg:px-32 py-24 text-center">
      {/* Main Heading */}
      <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-12 text-primary">
        {t('title')}
      </h1>
      <p className="text-lg lg:text-xl mb-16 text-text-secondary px-4 lg:px-16">
        {t('intro')}
      </p>

      {/* Section 1: Simplify Payments */}
      <div className="mb-24 bg-background-secondary p-8 rounded-lg shadow-md">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-primary">
          {t('simplify_payments_title')}
        </h2>
        <p className="text-lg lg:text-xl text-text-secondary mb-8">
          {t('simplify_payments_desc')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="p-6 bg-background rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('payment_methods_title')}</h3>
            <p className="text-lg text-text-secondary">{t('payment_methods_desc')}</p>
          </div>
          <div className="p-6 bg-background rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('secure_transactions_title')}</h3>
            <p className="text-lg text-text-secondary">{t('secure_transactions_desc')}</p>
          </div>
        </div>
      </div>

      {/* Section 2: Designed for Growth */}
      <div className="mb-24">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8">{t('growth_focused_title')}</h2>
        <p className="text-lg lg:text-xl text-text-secondary mb-16 px-4 lg:px-16">
          {t('growth_focused_desc')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('scalable_title')}</h3>
            <p className="text-lg text-text-secondary">{t('scalable_desc')}</p>
          </div>
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('global_reach_title')}</h3>
            <p className="text-lg text-text-secondary">{t('global_reach_desc')}</p>
          </div>
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('conversion_boost_title')}</h3>
            <p className="text-lg text-text-secondary">{t('conversion_boost_desc')}</p>
          </div>
        </div>
      </div>

      {/* Section 3: Seamless Integration */}
      <div className="mb-24 bg-background-secondary p-8 rounded-lg shadow-md">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8">{t('integration_title')}</h2>
        <p className="text-lg lg:text-xl text-text-secondary mb-16">
          {t('integration_desc')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-background rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('api_title')}</h3>
            <p className="text-lg text-text-secondary">{t('api_desc')}</p>
          </div>
          <div className="p-6 bg-background rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('sdk_title')}</h3>
            <p className="text-lg text-text-secondary">{t('sdk_desc')}</p>
          </div>
          <div className="p-6 bg-background rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('customization_title')}</h3>
            <p className="text-lg text-text-secondary">{t('customization_desc')}</p>
          </div>
        </div>
      </div>

      {/* Section 4: Why UCanPay? */}
      <div className="mb-24">
        <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-primary">
          {t('why_title')}
        </h2>
        <p className="text-lg lg:text-xl text-text-secondary mb-12 px-4 lg:px-16">
          {t('why_desc')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('dedicated_support_title')}</h3>
            <p className="text-lg text-text-secondary">{t('dedicated_support_desc')}</p>
          </div>
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('fraud_prevention_title')}</h3>
            <p className="text-lg text-text-secondary">{t('fraud_prevention_desc')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
