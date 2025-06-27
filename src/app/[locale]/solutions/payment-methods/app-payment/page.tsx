import { useTranslations } from 'next-intl';
import Image from 'next/image'

export default function App_Payment() {
  const t = useTranslations('app_payment');

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
          src="/images/phone4.webp"
          alt="Phone"
          width={1400}
          height={400}
          className="rounded-xl"
        />
      </div>

      {/* Seamless Experience */}
      <div className="mb-24 bg-background-secondary p-8 rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">{t('seamless_experience_title')}</h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">{t('seamless_experience_desc')}</p>
        </div>
        <div className="flex justify-center py-8 mb-6">
          <Image
            src="/images/phone5.webp"
            alt="Phone"
            width={900}
            height={400}
            className="rounded-xl"
          />
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
      </div>

      {/* Connected Commerce */}
      <div className="mb-24">
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
      </div>

      {/* Developer Features */}
      <div className="mb-24 bg-background-secondary p-8 rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">{t('dev_title')}</h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">{t('dev_desc')}</p>
          <div className="flex justify-center py-8 mb-6">
            <Image
              src="/images/computer3.webp"
              alt="Computer"
              width={900}
              height={400}
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {['sdk', 'api', 'testing', 'support'].map((k) => (
            <div key={k} className="bg-background p-6 rounded-lg shadow text-left">
              <h3 className="text-2xl font-semibold text-primary mb-2">{t(`${k}_title`)}</h3>
              <p className="text-text-secondary">{t(`${k}_desc`)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Analytics */}
      <div className="mb-24 bg-background-secondary p-8 rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">{t('analytics_title')}</h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">{t('analytics_desc')}</p>
          <div className="flex justify-center py-8 mb-6">
            <Image
              src="/images/office3.webp"
              alt="Office"
              width={900}
              height={400}
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {['insights', 'customer_data'].map((k) => (
            <div key={k} className="bg-background p-6 rounded-lg shadow text-left">
              <h3 className="text-2xl font-semibold text-primary mb-2">{t(`${k}_title`)}</h3>
              <p className="text-text-secondary">{t(`${k}_desc`)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why AMS */}
      <div className="mb-24">
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
      </div>

      {/* Call to Action */}
      <div className="mb-24 bg-background-secondary p-8 rounded-lg shadow-md">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t('cta_title')}</h2>
        <div className="flex justify-center py-8 mb-6">
          <Image
            src="/images/phone1.webp"
            alt="Phone"
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
