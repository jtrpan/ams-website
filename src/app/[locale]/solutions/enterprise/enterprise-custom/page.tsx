import { useTranslations } from 'next-intl';
import Image from 'next/image'

export default function Enterprise_Solutions() {
  const t = useTranslations('enterprise');

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
          src="/images/building3.webp"
          alt="Building"
          width={1400}
          height={400}
          className="rounded-xl"
        />
      </div>

      {/* Custom Solutions */}
      <div className="mb-24 bg-background-secondary p-8 rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">{t('custom_title')}</h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">{t('custom_desc')}</p>
          <div className="flex justify-center py-8 mb-6">
            <Image
              src="/images/trucks1.webp"
              alt="Trucks"
              width={900}
              height={400}
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {['api', 'integration', 'scaling'].map((k) => (
            <div key={k} className="bg-background p-6 rounded-lg shadow text-left">
              <h3 className="text-2xl font-semibold text-primary mb-2">{t(`${k}_title`)}</h3>
              <p className="text-text-secondary">{t(`${k}_desc`)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Enterprise-Grade Infrastructure */}
      <div className="mb-24">
        <h2 className="text-4xl font-bold mb-8 text-primary text-center">{t('performance_title')}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {['uptime', 'fraud', 'latency', 'redundancy'].map((k) => (
            <div key={k} className="bg-background-secondary p-6 rounded-lg shadow text-left">
              <h3 className="text-2xl font-semibold text-primary mb-2">{t(`${k}_title`)}</h3>
              <p className="text-text-secondary">{t(`${k}_desc`)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance & Partnerships */}
      <div className="mb-24 bg-background-secondary p-8 rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">{t('compliance_title')}</h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">{t('compliance_desc')}</p>
          <div className="flex justify-center py-8 mb-6">
            <Image
              src="/images/plane3.webp"
              alt="Plane"
              width={900}
              height={400}
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {['certifications', 'partnerships'].map((k) => (
            <div key={k} className="bg-background p-6 rounded-lg shadow text-left">
              <h3 className="text-2xl font-semibold text-primary mb-2">{t(`${k}_title`)}</h3>
              <p className="text-text-secondary">{t(`${k}_desc`)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Support */}
      <div className="mb-24">
        <h2 className="text-4xl font-bold mb-8 text-primary text-center">{t('support_title')}</h2>
        <p className="text-lg text-text-secondary text-center max-w-3xl mx-auto mb-6">{t('support_desc')}</p>
        <div className="flex justify-center py-8 mb-6">
          <Image
            src="/images/office4.webp"
            alt="Office"
            width={900}
            height={400}
            className="rounded-xl"
          />
        </div>
        <p className="text-lg text-text-secondary text-center max-w-3xl mx-auto">{t('support_extra')}</p>
      </div>

      {/* CTA */}
      <div className="mb-24 bg-background-secondary p-8 rounded-lg shadow-md">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t('cta_title')}</h2>
        <div className="flex justify-center py-8 mb-6">
          <Image
            src="/images/office6.webp"
            alt="Office"
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
