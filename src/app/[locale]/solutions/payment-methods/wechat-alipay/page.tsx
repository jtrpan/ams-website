import { useTranslations } from 'next-intl';
import Image from 'next/image'

export default function WeChat_AliPay() {
  const t = useTranslations('wechat_alipay');

  return (
    <div className="px-10 lg:px-32 py-24 text-center">
      {/* Main Heading */}
      <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-12 text-primary">
        {t('title')}
      </h1>
      <p className="text-lg lg:text-xl mb-2 text-text-secondary px-4 lg:px-16">
        {t('intro')}
      </p>
      <div className="flex justify-center py-8 mb-2">
        <Image
          src="/images/chinatown1.webp"
          alt="Chinatown"
          width={900}
          height={400}
          className="rounded-xl"
        />
      </div>

      {/* Key Features */}
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

      {/* Why Offer Chinese Mobile Wallets */}
      <div className="mb-24 bg-background-secondary p-8 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold mb-8 text-primary text-center">{t('why_title')}</h2>
        <p className="text-lg text-text-secondary text-center max-w-4xl mx-auto mb-6">{t('why_desc')}</p>
        <div className="flex justify-center py-8 mb-6">
          <Image
            src="/images/alipay2.webp"
            alt="AliPay"
            width={900}
            height={400}
            className="rounded-xl"
          />
        </div>
        <ul className="grid md:grid-cols-2 gap-6 list-disc pl-6 text-lg text-text-secondary">
          <li>{t('why_point1')}</li>
          <li>{t('why_point2')}</li>
          <li>{t('why_point3')}</li>
          <li>{t('why_point4')}</li>
        </ul>
      </div>

      {/* Integration Guide */}
      <div className="mb-24 bg-background-secondary p-8 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold mb-8 text-primary text-center">{t('integration_title')}</h2>
        <ol className="list-decimal pl-6 text-left text-lg text-text-secondary space-y-4 max-w-4xl mx-auto">
          <li>{t('step1')}</li>
          <li>{t('step2')}</li>
          <li>{t('step3')}</li>
          <li>{t('step4')}</li>
        </ol>
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

      {/* Security & Trust */}
      <div className="mb-24 bg-background-secondary p-8 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold mb-6 text-primary text-center">{t('security_title')}</h2>
        <p className="text-lg text-text-secondary text-center max-w-3xl mx-auto mb-8">{t('security_desc')}</p>
        <div className="flex justify-center py-8 mb-6">
          <Image
            src="/images/qr2.webp"
            alt="QR"
            width={900}
            height={400}
            className="rounded-xl"
          />
        </div>
        <ul className="grid md:grid-cols-2 gap-6 list-disc pl-6 text-lg text-text-secondary">
          <li>{t('security_point1')}</li>
          <li>{t('security_point2')}</li>
          <li>{t('security_point3')}</li>
          <li>{t('security_point4')}</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="mb-24 bg-background-secondary p-8 rounded-lg shadow-md">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t('cta_title')}</h2>
        <div className="flex justify-center py-8 mb-6">
          <Image
            src="/images/alipay3.webp"
            alt="AliPay"
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
