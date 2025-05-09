import { useTranslations } from 'next-intl';

export default function App_Payment() {
  const t = useTranslations('app_payment');

  return (
    <div className="px-10 lg:px-32 py-24 space-y-24">
      {/* Hero */}
      <section className="text-center">
        <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 text-primary">
          {t('title')}
        </h1>
        <p className="text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto">
          {t('intro')}
        </p>
      </section>

      {/* Seamless Experience */}
      <section className="bg-background-secondary p-10 rounded-lg shadow space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">{t('seamless_experience_title')}</h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">{t('seamless_experience_desc')}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-background p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold text-primary mb-2">{t('omnichannel_payments_title')}</h3>
            <p className="text-text-secondary">{t('omnichannel_payments_desc')}</p>
          </div>
          <div className="bg-background p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold text-primary mb-2">{t('cross_channel_title')}</h3>
            <p className="text-text-secondary">{t('cross_channel_desc')}</p>
          </div>
        </div>
      </section>

      {/* Connected Commerce */}
      <section>
        <h2 className="text-4xl font-bold mb-8 text-primary text-center">{t('connected_commerce_title')}</h2>
        <p className="text-lg text-text-secondary mb-12 text-center max-w-4xl mx-auto">
          {t('connected_commerce_desc')}
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {['ecommerce', 'in_store', 'mobile_payments'].map((k) => (
            <div key={k} className="bg-background-secondary p-6 rounded-lg shadow text-left">
              <h3 className="text-2xl font-semibold mb-2 text-primary">{t(`${k}_title`)}</h3>
              <p className="text-text-secondary">{t(`${k}_desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Developer Features */}
      <section className="bg-background-secondary p-10 rounded-lg shadow space-y-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">{t('dev_title')}</h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">{t('dev_desc')}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {['sdk', 'api', 'testing', 'support'].map((k) => (
            <div key={k} className="bg-background p-6 rounded-lg shadow text-left">
              <h3 className="text-2xl font-semibold text-primary mb-2">{t(`${k}_title`)}</h3>
              <p className="text-text-secondary">{t(`${k}_desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Analytics */}
      <section className="bg-background-secondary p-10 rounded-lg shadow space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">{t('analytics_title')}</h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">{t('analytics_desc')}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {['insights', 'customer_data'].map((k) => (
            <div key={k} className="bg-background p-6 rounded-lg shadow text-left">
              <h3 className="text-2xl font-semibold text-primary mb-2">{t(`${k}_title`)}</h3>
              <p className="text-text-secondary">{t(`${k}_desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why UCanPay */}
      <section>
        <h2 className="text-4xl font-bold mb-8 text-primary text-center">{t('why_title')}</h2>
        <p className="text-lg text-text-secondary mb-12 text-center max-w-3xl mx-auto">{t('why_desc')}</p>
        <div className="grid md:grid-cols-2 gap-8">
          {['flexibility', 'security', 'performance', 'compliance'].map((k) => (
            <div key={k} className="bg-background-secondary p-6 rounded-lg shadow text-left">
              <h3 className="text-2xl font-semibold text-primary mb-2">{t(`${k}_title`)}</h3>
              <p className="text-text-secondary">{t(`${k}_desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-background-secondary p-10 rounded-lg shadow text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t('cta_title')}</h2>
        <p className="text-lg text-text-secondary mb-6">{t('cta_desc')}</p>
        {/*<button className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-opacity-90 transition">*/}
        {/*  {t('cta_button')}*/}
        {/*</button>*/}
      </section>
    </div>
  );
}
