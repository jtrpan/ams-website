import { useTranslations } from 'next-intl';

export default function Careers() {
  const t = useTranslations('careers');

  return (
    <div className="px-10 lg:px-32 py-24">
      <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-12 text-primary text-center">
        {t('title')}
      </h1>
      <p className="text-lg lg:text-xl text-text-secondary text-center mb-16">
        {t('intro')}
      </p>

      {/* Why Work With Us */}
      <div className="mb-24">
        <h2 className="text-4xl font-bold mb-8 text-primary text-center">{t('why_title')}</h2>
        <p className="text-lg text-text-secondary text-center mb-12">{t('why_desc')}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('why_point1')}</h3>
            <p className="text-lg text-text-secondary">{t('why_point1_desc')}</p>
          </div>
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('why_point2')}</h3>
            <p className="text-lg text-text-secondary">{t('why_point2_desc')}</p>
          </div>
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('why_point3')}</h3>
            <p className="text-lg text-text-secondary">{t('why_point3_desc')}</p>
          </div>
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('why_point4')}</h3>
            <p className="text-lg text-text-secondary">{t('why_point4_desc')}</p>
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="mb-24">
        <h2 className="text-4xl font-bold mb-8 text-primary text-center">{t('open_positions_title')}</h2>
        <p className="text-lg text-text-secondary text-center mb-12">{t('open_positions_desc')}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">{t('job1_title')}</h3>
            <p className="text-text-secondary mb-4">{t('job1_desc')}</p>
            <button className="text-primary underline">{t('apply_now')}</button>
          </div>
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">{t('job2_title')}</h3>
            <p className="text-text-secondary mb-4">{t('job2_desc')}</p>
            <button className="text-primary underline">{t('apply_now')}</button>
          </div>
          {/* Add more jobs as needed */}
        </div>
      </div>

      {/* Perks & Benefits */}
      <div className="mb-24">
        <h2 className="text-4xl font-bold mb-8 text-primary text-center">{t('perks_title')}</h2>
        <p className="text-lg text-text-secondary text-center mb-12">{t('perks_desc')}</p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-12 text-lg text-text-secondary list-disc pl-6 pr-6">
          <li>{t('perk1')}</li>
          <li>{t('perk6')}</li>
          <li>{t('perk2')}</li>
          <li>{t('perk7')}</li>
          <li>{t('perk3')}</li>
          <li>{t('perk8')}</li>
          <li>{t('perk4')}</li>
          <li>{t('perk9')}</li>
          <li>{t('perk5')}</li>
          <li>{t('perk10')}</li>
        </ul>
      </div>


      {/* Call to Action */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold text-primary mb-4">{t('cta_title')}</h2>
        <p className="text-lg text-text-secondary mb-6">{t('cta_desc')}</p>
        <a href="mailto:careers@ucanpay.ca" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
          {t('cta_button')}
        </a>
      </div>
    </div>
  );
}
