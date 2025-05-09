import { useTranslations } from 'next-intl';

export default function ECommerce() {
  const t = useTranslations('ecommerce');

  return (
    <div className="px-10 lg:px-32 py-24 space-y-24">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 text-primary">
          {t('title')}
        </h1>
        <p className="text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto">
          {t('intro')}
        </p>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-4xl font-bold mb-12 text-primary text-center">{t('features_title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="p-6 bg-background-secondary rounded-lg shadow text-left">
              <h3 className="text-2xl font-semibold mb-2 text-primary">{t(`feature${i}_title`)}</h3>
              <p className="text-text-secondary">{t(`feature${i}_desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Platform Integration */}
      <section className="bg-background-secondary p-10 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold mb-8 text-primary text-center">{t('integration_title')}</h2>
        <div className="grid md:grid-cols-2 gap-10 text-left text-lg text-text-secondary">
          <div>
            <h3 className="text-2xl font-semibold mb-2">{t('integration_shopify_title')}</h3>
            <p>{t('integration_shopify_desc')}</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">{t('integration_woocommerce_title')}</h3>
            <p>{t('integration_woocommerce_desc')}</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">{t('integration_custom_title')}</h3>
            <p>{t('integration_custom_desc')}</p>
          </div>
        </div>
      </section>

      {/* Analytics & Conversion */}
      <section className="bg-background-secondary p-10 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold mb-6 text-primary text-center">{t('analytics_title')}</h2>
        <p className="text-lg text-text-secondary text-center max-w-3xl mx-auto mb-6">{t('analytics_desc')}</p>
        <ul className="list-disc grid md:grid-cols-2 gap-6 text-left text-lg text-text-secondary pl-6">
          <li>{t('analytics_point1')}</li>
          <li>{t('analytics_point2')}</li>
          <li>{t('analytics_point3')}</li>
          <li>{t('analytics_point4')}</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-4xl font-bold mb-8 text-primary text-center">{t('testimonials_title')}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div key={i} className="bg-background-secondary p-6 rounded-lg shadow text-left">
              <p className="italic text-text-secondary mb-2">“{t(`testimonial${i}_text`)}”</p>
              <p className="font-semibold">{t(`testimonial${i}_name`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-background-secondary p-10 rounded-lg shadow-md text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t('cta_title')}</h2>
        <p className="text-lg text-text-secondary mb-6">{t('cta_desc')}</p>
        {/*<button className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-opacity-90 transition">*/}
        {/*  {t('cta_button')}*/}
        {/*</button>*/}
      </section>
    </div>
  );
}
