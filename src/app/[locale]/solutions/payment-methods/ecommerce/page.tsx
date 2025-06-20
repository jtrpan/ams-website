import { useTranslations } from 'next-intl';
import Image from 'next/image'

export default function ECommerce() {
  const t = useTranslations('ecommerce');

  return (
    <div className="px-10 lg:px-32 py-24 text-center">
      {/* Main Heading */}
      <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-12 text-primary">
        {t('title')}
      </h1>
      <p className="text-lg lg:text-xl mb-2 text-text-secondary px-4 lg:px-16">
        {t('intro')}
      </p>
      <div className="flex justify-center py-8 mb-6">
        <Image
          src="/images/ecommerce1.webp"
          alt="ECommerce"
          width={1400}
          height={400}
          className="rounded-xl"
        />
      </div>

      {/* Features Section */}
      <div className="mb-24">
        <h2 className="text-4xl font-bold mb-12 text-primary text-center">{t('features_title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="p-6 bg-background-secondary rounded-lg shadow text-left">
              <h3 className="text-2xl font-semibold mb-2 text-primary">{t(`feature${i}_title`)}</h3>
              <p className="text-text-secondary">{t(`feature${i}_desc`)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Platform Integration */}
      <div className="mb-24 bg-background-secondary p-8 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold mb-8 text-primary text-center">{t('integration_title')}</h2>
        <div className="flex justify-center py-8 mb-6">
          <Image
            src="/images/computer4.webp"
            alt="Computer"
            width={900}
            height={400}
            className="rounded-xl"
          />
        </div>
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
      </div>

      {/* Analytics & Conversion */}
      <div className="mb-24 bg-background-secondary p-8 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold mb-6 text-primary text-center">{t('analytics_title')}</h2>
        <p className="text-lg text-text-secondary text-center max-w-3xl mx-auto mb-6">{t('analytics_desc')}</p>
        <div className="flex justify-center py-8 mb-6">
          <Image
            src="/images/data4.webp"
            alt="Data"
            width={900}
            height={400}
            className="rounded-xl"
          />
        </div>
        <ul className="list-disc grid md:grid-cols-2 gap-6 text-left text-lg text-text-secondary pl-6">
          <li>{t('analytics_point1')}</li>
          <li>{t('analytics_point2')}</li>
          <li>{t('analytics_point3')}</li>
          <li>{t('analytics_point4')}</li>
        </ul>
      </div>

      {/* Testimonials */}
      <div className="mb-24">
        <h2 className="text-4xl font-bold mb-8 text-primary text-center">{t('testimonials_title')}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div key={i} className="bg-background-secondary p-6 rounded-lg shadow text-left">
              <p className="italic text-text-secondary mb-2">“{t(`testimonial${i}_text`)}”</p>
              <p className="font-semibold">{t(`testimonial${i}_name`)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mb-24 bg-background-secondary p-8 rounded-lg shadow-md">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t('cta_title')}</h2>
        <div className="flex justify-center py-8 mb-6">
          <Image
            src="/images/ecommerce4.webp"
            alt="ECommerce"
            width={900}
            height={400}
            className="rounded-xl"
          />
        </div>
        <p className="text-lg text-text-secondary mb-6">{t('cta_desc')}</p>
        {/*<button className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-opacity-90 transition">*/}
        {/*  {t('cta_button')}*/}
        {/*</button>*/}
      </div>
    </div>
  );
}
