import { useTranslations } from 'next-intl';
import Image from 'next/image'

export default function IndustriesServed() {
  const t = useTranslations('industries_served'); // Use 'industries_served' as the namespace

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
          src="/images/office2.webp"
          alt="Office"
          width={1400}
          height={400}
          className="rounded-xl"
        />
      </div>

      {/* Section 1: Retail Solutions */}
      <div className="mb-24 bg-background-secondary p-8 rounded-lg shadow-md">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-primary">
          {t('retail_title')}
        </h2>
        <p className="text-lg lg:text-xl text-text-secondary mb-2">
          {t('retail_desc')}
        </p>
        <div className="flex justify-center py-8 mb-6">
          <Image
            src="/images/retail3.webp"
            alt="Retail"
            width={900}
            height={400}
            className="rounded-xl"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="p-6 bg-background rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('retail_point1_title')}</h3>
            <p className="text-lg text-text-secondary">{t('retail_point1_desc')}</p>
          </div>
          <div className="p-6 bg-background rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('retail_point2_title')}</h3>
            <p className="text-lg text-text-secondary">{t('retail_point2_desc')}</p>
          </div>
        </div>
      </div>

      {/* Section 2: E-Commerce Solutions */}
      <div className="mb-24">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8">{t('ecommerce_title')}</h2>
        <p className="text-lg lg:text-xl text-text-secondary mb-2 px-4 lg:px-16">
          {t('ecommerce_desc')}
        </p>

        <div className="flex justify-center py-8 mb-6">
          <Image
            src="/images/ecommerce5.webp"
            alt="ECommerce"
            width={1200}
            height={400}
            className="rounded-xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('ecommerce_point1_title')}</h3>
            <p className="text-lg text-text-secondary">{t('ecommerce_point1_desc')}</p>
          </div>
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('ecommerce_point2_title')}</h3>
            <p className="text-lg text-text-secondary">{t('ecommerce_point2_desc')}</p>
          </div>
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('ecommerce_point3_title')}</h3>
            <p className="text-lg text-text-secondary">{t('ecommerce_point3_desc')}</p>
          </div>
        </div>
      </div>

      {/* Section 3: Hospitality Solutions */}
      <div className="mb-24 bg-background-secondary p-8 rounded-lg shadow-md">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8">{t('hospitality_title')}</h2>
        <p className="text-lg lg:text-xl text-text-secondary mb-2">
          {t('hospitality_desc')}
        </p>
        <div className="flex justify-center py-8 mb-6">
          <Image
            src="/images/venue1.webp"
            alt="Venue"
            width={900}
            height={400}
            className="rounded-xl"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="p-6 bg-background rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('hospitality_point1_title')}</h3>
            <p className="text-lg text-text-secondary">{t('hospitality_point1_desc')}</p>
          </div>
          <div className="p-6 bg-background rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('hospitality_point2_title')}</h3>
            <p className="text-lg text-text-secondary">{t('hospitality_point2_desc')}</p>
          </div>
        </div>
      </div>

      {/* Section 4: Why Us? */}
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
            alt="Venue"
            width={900}
            height={400}
            className="rounded-xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('custom_solutions_title')}</h3>
            <p className="text-lg text-text-secondary">{t('custom_solutions_desc')}</p>
          </div>
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('security_focus_title')}</h3>
            <p className="text-lg text-text-secondary">{t('security_focus_desc')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
