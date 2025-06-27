import { useTranslations } from 'next-intl';
import Image from 'next/image'

export default function Pricing() {
  const t = useTranslations('pricing');

  return (
    <div className="px-10 lg:px-32 py-24">
      <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-12 text-primary text-center">
        {t('title')}
      </h1>
      <p className="text-lg lg:text-xl text-text-secondary text-center mb-2">
        {t('intro')}
      </p>

      <div className="flex justify-center py-8 mb-6">
        <Image
          src="/images/price1.webp"
          alt="Price"
          width={1000}
          height={400}
          className="rounded-xl"
        />
      </div>

      {/* Pricing Tiers */}
      <div className="mb-6">
        <h2 className="text-4xl font-bold mb-8 text-primary text-center">{t('pricing_comparison_title')}</h2>
        <p className="text-lg text-text-secondary text-center mb-12">{t('pricing_comparison_desc')}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Interchange Plus */}
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('tier1_title')}</h3>
            <p className="text-lg text-text-secondary mb-6">{t('tier1_desc')}</p>
            <h4 className="text-2xl font-bold mb-4 flex items-center">⚡ {t('key_features')}</h4>
            <ul className="list-none space-y-3">
              <li>✅ {t('tier1_point1')}</li>
              <li>✅ {t('tier1_point2')}</li>
              <li>✅ {t('tier1_point3')}</li>
              <li>✅ {t('tier1_point4')}</li>
            </ul>
            <br/>
            <h4 className="text-2xl font-bold mb-4 flex items-center">🎯 {t('who_should_choose')}</h4>
            <ul className="list-none space-y-3">
              <li>✔ {t('tier1_point5')}</li>
              <li>✔ {t('tier1_point6')}</li>
              <li>✔ {t('tier1_point7')}</li>
            </ul>
          </div>

          {/* Flat Rate (Growth Plan) */}
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('tier2_title')}</h3>
            <p className="text-lg text-text-secondary mb-6">{t('tier2_desc')}</p>
            <h4 className="text-2xl font-bold mb-4 flex items-center">⚡ {t('key_features')}</h4>
            <ul className="list-none space-y-3">
              <li>✅ {t('tier2_point1')}</li>
              <li>✅ {t('tier2_point2')}</li>
              <li>✅ {t('tier2_point3')}</li>
              <li>✅ {t('tier2_point4')}</li>
            </ul>
            <br />
            <h4 className="text-2xl font-bold mb-4 flex items-center">🎯 {t('who_should_choose')}</h4>
            <ul className="list-none space-y-3">
              <li>✔ {t('tier2_point5')}</li>
              <li>✔ {t('tier2_point6')}</li>
              <li>✔ {t('tier2_point7')}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center py-8 mb-6">
        <Image
          src="/images/computer5.webp"
          alt="Computer"
          width={9000}
          height={400}
          className="rounded-xl"
        />
      </div>


      {/* Competitive Pricing Table */}
      <div className="mb-24">
        <h2 className="text-4xl font-bold mb-8 text-primary text-center">
          {t('competitive_pricing_table_title')}
        </h2>

        {/* Desktop table */}
        <div className="hidden md:block">
          <table className="w-full table-auto bg-background-secondary rounded-lg shadow-lg">
            <thead>
            <tr>
              <th className="px-4 py-2">{t('column_provider')}</th>
              <th className="px-4 py-2">{t('column_interchange_rate')}</th>
              <th className="px-4 py-2">{t('column_monthly_fee')}</th>
              <th className="px-4 py-2">{t('column_pci_compliance')}</th>
              <th className="px-4 py-2">{t('column_chargeback_fee')}</th>
              <th className="px-4 py-2">{t('column_settlement_time')}</th>
            </tr>
            </thead>
            <tbody>
            {[1, 2, 3, 4, 5].map((i) => (
              <tr key={i} className="border-t">
                <td className="px-4 py-2">{t(`table_row${i}_provider`)}</td>
                <td className="px-4 py-2">{t(`table_row${i}_interchange_rate`)}</td>
                <td className="px-4 py-2">{t(`table_row${i}_monthly_fee`)}</td>
                <td className="px-4 py-2">{t(`table_row${i}_pci_compliance`)}</td>
                <td className="px-4 py-2">{t(`table_row${i}_chargeback_fee`)}</td>
                <td className="px-4 py-2">{t(`table_row${i}_settlement_time`)}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="space-y-6 md:hidden">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="bg-background-secondary rounded-lg shadow-md p-4 space-y-2"
            >
              <p>
                <span className="font-semibold">{t('column_provider')}: </span>
                {t(`table_row${i}_provider`)}
              </p>
              <p>
                <span className="font-semibold">{t('column_interchange_rate')}: </span>
                {t(`table_row${i}_interchange_rate`)}
              </p>
              <p>
                <span className="font-semibold">{t('column_monthly_fee')}: </span>
                {t(`table_row${i}_monthly_fee`)}
              </p>
              <p>
                <span className="font-semibold">{t('column_pci_compliance')}: </span>
                {t(`table_row${i}_pci_compliance`)}
              </p>
              <p>
                <span className="font-semibold">{t('column_chargeback_fee')}: </span>
                {t(`table_row${i}_chargeback_fee`)}
              </p>
              <p>
                <span className="font-semibold">{t('column_settlement_time')}: </span>
                {t(`table_row${i}_settlement_time`)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Fees */}
      <div className="mb-24">
        <h2 className="text-4xl font-bold mb-8 text-primary text-center">{t('additional_fees_title')}</h2>
        <p className="text-lg text-text-secondary text-center mb-2">{t('additional_fees_desc')}</p>
        <div className="flex justify-center py-8 mb-6">
          <Image
            src="/images/ecommerce3.webp"
            alt="ECommerce"
            width={900}
            height={400}
            className="rounded-xl"
          />
        </div>

        <ul className="list-disc pl-6">
          <li>{t('additional_fee1')}</li>
          <li>{t('additional_fee2')}</li>
          <li>{t('additional_fee3')}</li>
          <li>{t('additional_fee4')}</li>
          <li>{t('additional_fee5')}</li>
        </ul>
      </div>

      {/* Why Choose Us */}
      <div className="mb-24">
        <h2 className="text-4xl font-bold mb-8 text-primary text-center">{t('why_choose_us_title')}</h2>
        <p className="text-lg text-text-secondary text-center mb-2">{t('why_choose_us_desc')}</p>
        <div className="flex justify-center py-8 mb-6">
          <Image
            src="/images/price3.webp"
            alt="Price"
            width={1050}
            height={400}
            className="rounded-xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('why_point1')}</h3>
            <p className="text-lg text-text-secondary">{t('why_desc1')}</p>
          </div>
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('why_point2')}</h3>
            <p className="text-lg text-text-secondary">{t('why_desc2')}</p>
          </div>
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('why_point3')}</h3>
            <p className="text-lg text-text-secondary">{t('why_desc3')}</p>
          </div>
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('why_point4')}</h3>
            <p className="text-lg text-text-secondary">{t('why_desc4')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
