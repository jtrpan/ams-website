import { useTranslations } from 'next-intl';
import Image from 'next/image'

export default function Card_Payment() {
  const t = useTranslations('card_payment');

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
          src="/images/card8.webp"
          alt="Card"
          width={900}
          height={400}
          className="rounded-xl"
        />
      </div>


      {/* Key Features */}
      <div className="mb-24">
        <h2 className="text-4xl font-bold mb-12 text-primary text-center">{t('features_title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="p-6 bg-background-secondary rounded-lg shadow text-left">
              <h3 className="text-2xl font-semibold mb-2 text-primary">{t(`feature${i}_title`)}</h3>
              <p className="text-text-secondary">{t(`feature${i}_desc`)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Industry-Specific Benefits */}
      <div className="mb-24 bg-background-secondary p-8 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold mb-2 text-primary text-center">{t('benefits_title')}</h2>
        <div className="flex justify-center py-8 mb-6">
          <Image
            src="/images/retail5.webp"
            alt="Retail"
            width={900}
            height={400}
            className="rounded-xl"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-text-secondary">
          <ul className="list-disc pl-6 space-y-2">
            <li>{t('benefit1')}</li>
            <li>{t('benefit2')}</li>
            <li>{t('benefit3')}</li>
            <li>{t('benefit4')}</li>
          </ul>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t('benefit5')}</li>
            <li>{t('benefit6')}</li>
            <li>{t('benefit7')}</li>
            <li>{t('benefit8')}</li>
          </ul>
        </div>
      </div>

      {/* How It Works */}
      <div className="mb-24 bg-background-secondary p-8 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold mb-8 text-primary text-center">{t('workflow_title')}</h2>
        <ol className="list-decimal space-y-4 text-lg text-text-secondary pl-6 max-w-4xl mx-auto">
          <li>{t('workflow_step1')}</li>
          <li>{t('workflow_step2')}</li>
          <li>{t('workflow_step3')}</li>
          <li>{t('workflow_step4')}</li>
          <li>{t('workflow_step5')}</li>
        </ol>
      </div>

      {/* Developer Integration */}
      <div className="mb-24 bg-background-secondary p-8 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold mb-8 text-primary text-center">{t('integration_title')}</h2>
        <div className="grid md:grid-cols-2 gap-10 text-left text-lg text-text-secondary">
          <div>
            <h3 className="text-2xl font-semibold mb-2">{t('integration_api')}</h3>
            <p>{t('integration_api_desc')}</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">{t('integration_docs')}</h3>
            <p>{t('integration_docs_desc')}</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">{t('integration_support')}</h3>
            <p>{t('integration_support_desc')}</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">{t('integration_sandbox')}</h3>
            <p>{t('integration_sandbox_desc')}</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-24">
        <h2 className="text-4xl font-bold mb-8 text-primary text-center">{t('testimonials_title')}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2, 3].map((i) => (
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
        <p className="text-lg text-text-secondary text-center max-w-3xl mx-auto mb-2">{t('security_desc')}</p>
        <div className="flex justify-center py-8 mb-6">
          <Image
            src="/images/data3.webp"
            alt="Data"
            width={900}
            height={400}
            className="rounded-xl"
          />
        </div>
        <ul className="grid md:grid-cols-2 gap-6 text-lg text-text-secondary list-disc pl-6">
          <li>{t('security_point1')}</li>
          <li>{t('security_point2')}</li>
          <li>{t('security_point3')}</li>
          <li>{t('security_point4')}</li>
        </ul>
      </div>

      {/* Onboarding Process */}
      <div className="mb-24 bg-background-secondary p-8 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold mb-6 text-primary text-center">{t('onboarding_title')}</h2>
        <p className="text-lg text-text-secondary text-center max-w-3xl mx-auto mb-6">{t('onboarding_desc')}</p>
        <ol className="list-decimal pl-6 space-y-4 text-lg text-text-secondary max-w-4xl mx-auto">
          <li>{t('onboarding_step1')}</li>
          <li>{t('onboarding_step2')}</li>
          <li>{t('onboarding_step3')}</li>
          <li>{t('onboarding_step4')}</li>
        </ol>
        <div className="flex justify-center py-8 mb-2">
          <Image
            src="/images/service2.webp"
            alt="Onboarding"
            width={900}
            height={400}
            className="rounded-xl"
          />
        </div>
      </div>

      {/* Call to Action */}
      <div className="mb-24 bg-background-secondary p-8 rounded-lg shadow-md">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t('cta_title')}</h2>
        <div className="flex justify-center py-8 mb-6">
          <Image
            src="/images/card1.webp"
            alt="Card"
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
