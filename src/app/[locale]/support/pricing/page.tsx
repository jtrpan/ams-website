import { useTranslations } from 'next-intl';

export default function Pricing() {
  const t = useTranslations('pricing');

  return (
    <div className="px-10 lg:px-32 py-24">
      <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-12 text-primary text-center">
        {t('title')}
      </h1>
      <p className="text-lg lg:text-xl text-text-secondary text-center mb-16">
        {t('intro')}
      </p>

      {/* Pricing Tiers */}
      <div className="mb-24">
        <h2 className="text-4xl font-bold mb-8 text-primary text-center">{t('pricing_comparison_title')}</h2>
        <p className="text-lg text-text-secondary text-center mb-12">{t('pricing_comparison_desc')}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('tier1_title')}</h3>
            <p className="text-lg text-text-secondary mb-6">{t('tier1_desc')}</p>
            <ul className="list-disc pl-6">
              <li>{t('tier1_point1')}</li>
              <li>{t('tier1_point2')}</li>
              <li>{t('tier1_point3')}</li>
              <li>{t('tier1_point4')}</li>
              <li>{t('tier1_point5')}</li>
              <li>{t('tier1_point6')}</li>
              <li>{t('tier1_point7')}</li>
            </ul>
          </div>

          {/* Growth Plan */}
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('tier2_title')}</h3>
            <p className="text-lg text-text-secondary mb-6">{t('tier2_desc')}</p>
            <ul className="list-disc pl-6">
              <li>{t('tier2_point1')}</li>
              <li>{t('tier2_point2')}</li>
              <li>{t('tier2_point3')}</li>
              <li>{t('tier2_point4')}</li>
              <li>{t('tier2_point5')}</li>
              <li>{t('tier2_point6')}</li>
              <li>{t('tier2_point7')}</li>
            </ul>
          </div>

          {/* Enterprise Plan */}
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{t('tier3_title')}</h3>
            <p className="text-lg text-text-secondary mb-6">{t('tier3_desc')}</p>
            <ul className="list-disc pl-6">
              <li>{t('tier3_point1')}</li>
              <li>{t('tier3_point2')}</li>
              <li>{t('tier3_point3')}</li>
              <li>{t('tier3_point4')}</li>
              <li>{t('tier3_point5')}</li>
              <li>{t('tier3_point6')}</li>
              <li>{t('tier3_point7')}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Competitive Pricing Table */}
      <div className="mb-24">
        <h2 className="text-4xl font-bold mb-8 text-primary text-center">
          {t('competitive_pricing_table_title')}
        </h2>

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
          <tr className="border-t">
            <td className="px-4 py-2">{t('table_row1_provider')}</td>
            <td className="px-4 py-2">{t('table_row1_interchange_rate')}</td>
            <td className="px-4 py-2">{t('table_row1_monthly_fee')}</td>
            <td className="px-4 py-2">{t('table_row1_pci_compliance')}</td>
            <td className="px-4 py-2">{t('table_row1_chargeback_fee')}</td>
            <td className="px-4 py-2">{t('table_row1_settlement_time')}</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">{t('table_row2_provider')}</td>
            <td className="px-4 py-2">{t('table_row2_interchange_rate')}</td>
            <td className="px-4 py-2">{t('table_row2_monthly_fee')}</td>
            <td className="px-4 py-2">{t('table_row2_pci_compliance')}</td>
            <td className="px-4 py-2">{t('table_row2_chargeback_fee')}</td>
            <td className="px-4 py-2">{t('table_row2_settlement_time')}</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">{t('table_row3_provider')}</td>
            <td className="px-4 py-2">{t('table_row3_interchange_rate')}</td>
            <td className="px-4 py-2">{t('table_row3_monthly_fee')}</td>
            <td className="px-4 py-2">{t('table_row3_pci_compliance')}</td>
            <td className="px-4 py-2">{t('table_row3_chargeback_fee')}</td>
            <td className="px-4 py-2">{t('table_row3_settlement_time')}</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">{t('table_row4_provider')}</td>
            <td className="px-4 py-2">{t('table_row4_interchange_rate')}</td>
            <td className="px-4 py-2">{t('table_row4_monthly_fee')}</td>
            <td className="px-4 py-2">{t('table_row4_pci_compliance')}</td>
            <td className="px-4 py-2">{t('table_row4_chargeback_fee')}</td>
            <td className="px-4 py-2">{t('table_row4_settlement_time')}</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">{t('table_row5_provider')}</td>
            <td className="px-4 py-2">{t('table_row5_interchange_rate')}</td>
            <td className="px-4 py-2">{t('table_row5_monthly_fee')}</td>
            <td className="px-4 py-2">{t('table_row5_pci_compliance')}</td>
            <td className="px-4 py-2">{t('table_row5_chargeback_fee')}</td>
            <td className="px-4 py-2">{t('table_row5_settlement_time')}</td>
          </tr>
          </tbody>
        </table>
      </div>

      {/* Additional Fees */}
      <div className="mb-24">
        <h2 className="text-4xl font-bold mb-8 text-primary text-center">{t('additional_fees_title')}</h2>
        <p className="text-lg text-text-secondary text-center mb-12">{t('additional_fees_desc')}</p>

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
        <p className="text-lg text-text-secondary text-center mb-12">{t('why_choose_us_desc')}</p>

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
