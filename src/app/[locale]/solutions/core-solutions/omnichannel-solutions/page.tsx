import { useTranslations } from 'next-intl';
import Image from 'next/image'

export default function OmnichannelSolutions() {
  const t = useTranslations('omnichannel_solutions'); // Use 'omnichannel_solutions' as the namespace

  return (
    <div className="px-10 lg:px-32 py-24 text-center">
      {/* Main Heading */}
      <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-12 text-primary">
        {t('title')}
      </h1>
      <p className="text-lg lg:text-xl mb-2 text-text-secondary px-4 lg:px-16">
        {t('intro')}
      </p>

      <div className="flex justify-center py-8 mb-12">
        <Image
          src="/images/retail2.webp"
          alt="Dashboard"
          width={1000}
          height={400}
          className="rounded-xl"
        />
      </div>

      {/* Section 1: Seamless Customer Experience */}
      <div className="mb-24 bg-background-secondary p-8 rounded-lg shadow-md">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-primary">
          {t('seamless_experience_title')}
        </h2>
        <p className="text-lg lg:text-xl text-text-secondary mb-2">
          {t('seamless_experience_desc')}
        </p>
        <div className="flex justify-center py-8 mb-8">
          <Image
            src="/images/customer1.webp"
            alt="Customer"
            width={900}
            height={400}
            className="rounded-xl"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="p-6 bg-background rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('omnichannel_payments_title')}</h3>
            <p className="text-lg text-text-secondary">{t('omnichannel_payments_desc')}</p>
          </div>
          <div className="p-6 bg-background rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('cross_channel_title')}</h3>
            <p className="text-lg text-text-secondary">{t('cross_channel_desc')}</p>
          </div>
        </div>
      </div>

      {/* Section 2: Connected Commerce */}
      <div className="mb-24">
        <h2 className="text-4xl lg:text-5xl font-bold mb-2">{t('connected_commerce_title')}</h2>
        <div className="flex justify-center py-8 mb-6">
          <Image
            src="/images/plane1.webp"
            alt="Plane"
            width={900}
            height={400}
            className="rounded-xl"
          />
        </div>
        <p className="text-lg lg:text-xl text-text-secondary mb-16 px-4 lg:px-16">
          {t('connected_commerce_desc')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('ecommerce_title')}</h3>
            <p className="text-lg text-text-secondary">{t('ecommerce_desc')}</p>
          </div>
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('in_store_title')}</h3>
            <p className="text-lg text-text-secondary">{t('in_store_desc')}</p>
          </div>
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('mobile_payments_title')}</h3>
            <p className="text-lg text-text-secondary">{t('mobile_payments_desc')}</p>
          </div>
        </div>
      </div>

      {/* Section 3: Advanced Analytics */}
      <div className="mb-24 bg-background-secondary p-8 rounded-lg shadow-md">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8">{t('analytics_title')}</h2>
        <p className="text-lg lg:text-xl text-text-secondary mb-2">
          {t('analytics_desc')}
        </p>
        <div className="flex justify-center py-8 mb-6">
          <Image
            src="/images/data1.webp"
            alt="Analytics"
            width={900}
            height={400}
            className="rounded-xl"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="p-6 bg-background rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('insights_title')}</h3>
            <p className="text-lg text-text-secondary">{t('insights_desc')}</p>
          </div>
          <div className="p-6 bg-background rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('customer_data_title')}</h3>
            <p className="text-lg text-text-secondary">{t('customer_data_desc')}</p>
          </div>
        </div>
      </div>

      {/* Section 4: Why Choose AMS Omnichannel Solutions? */}
      <div className="mb-24">
        <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-primary">
          {t('why_title')}
        </h2>
        <p className="text-lg lg:text-xl text-text-secondary mb-2 px-4 lg:px-16">
          {t('why_desc')}
        </p>
        <div className="flex justify-center py-8 mb-6">
          <Image
            src="/images/business2.webp"
            alt="Business"
            width={1000}
            height={400}
            className="rounded-xl"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('flexibility_title')}</h3>
            <p className="text-lg text-text-secondary">{t('flexibility_desc')}</p>
          </div>
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('security_title')}</h3>
            <p className="text-lg text-text-secondary">{t('security_desc')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
