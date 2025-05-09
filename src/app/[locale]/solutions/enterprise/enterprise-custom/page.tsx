import { useTranslations } from 'next-intl';

export default function Enterprise_Solutions() {
  const t = useTranslations('enterprise');

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

      {/* Custom Solutions */}
      <section className="bg-background-secondary p-10 rounded-lg shadow space-y-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">{t('custom_title')}</h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">{t('custom_desc')}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {['api', 'integration', 'scaling'].map((k) => (
            <div key={k} className="bg-background p-6 rounded-lg shadow text-left">
              <h3 className="text-2xl font-semibold text-primary mb-2">{t(`${k}_title`)}</h3>
              <p className="text-text-secondary">{t(`${k}_desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Enterprise-Grade Infrastructure */}
      <section>
        <h2 className="text-4xl font-bold mb-8 text-primary text-center">{t('performance_title')}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {['uptime', 'fraud', 'latency', 'redundancy'].map((k) => (
            <div key={k} className="bg-background-secondary p-6 rounded-lg shadow text-left">
              <h3 className="text-2xl font-semibold text-primary mb-2">{t(`${k}_title`)}</h3>
              <p className="text-text-secondary">{t(`${k}_desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance & Partnerships */}
      <section className="bg-background-secondary p-10 rounded-lg shadow space-y-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">{t('compliance_title')}</h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">{t('compliance_desc')}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {['certifications', 'partnerships'].map((k) => (
            <div key={k} className="bg-background p-6 rounded-lg shadow text-left">
              <h3 className="text-2xl font-semibold text-primary mb-2">{t(`${k}_title`)}</h3>
              <p className="text-text-secondary">{t(`${k}_desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Support */}
      <section>
        <h2 className="text-4xl font-bold mb-8 text-primary text-center">{t('support_title')}</h2>
        <p className="text-lg text-text-secondary text-center max-w-3xl mx-auto mb-6">{t('support_desc')}</p>
        <p className="text-lg text-text-secondary text-center max-w-3xl mx-auto">{t('support_extra')}</p>
      </section>

      {/* CTA */}
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
