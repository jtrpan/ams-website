import { useTranslations } from 'next-intl';

export default function FAQs() {
  const t = useTranslations('faqs'); // Use 'faqs' as the namespace

  return (
    <div className="px-10 lg:px-32 py-24 text-center">
      {/* Main Heading */}
      <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-12 text-primary">
        {t('title')}
      </h1>
      <p className="text-lg lg:text-xl mb-16 text-text-secondary px-4 lg:px-16">
        {t('intro')}
      </p>

      {/* General Questions */}
      <div className="mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-primary">
          {t('general_title')}
        </h2>
        <div className="space-y-8 text-left">
          <div>
            <h3 className="text-3xl font-semibold mb-2">{t('general_question1')}</h3>
            <p className="text-lg text-text-secondary">{t('general_answer1')}</p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold mb-2">{t('general_question2')}</h3>
            <p className="text-lg text-text-secondary">{t('general_answer2')}</p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold mb-2">{t('general_question3')}</h3>
            <p className="text-lg text-text-secondary">{t('general_answer3')}</p>
          </div>
        </div>
      </div>

      {/* Account & Setup */}
      <div className="mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-primary">
          {t('account_setup_title')}
        </h2>
        <div className="space-y-8 text-left">
          <div>
            <h3 className="text-3xl font-semibold mb-2">{t('account_setup_question1')}</h3>
            <p className="text-lg text-text-secondary">{t('account_setup_answer1')}</p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold mb-2">{t('account_setup_question2')}</h3>
            <p className="text-lg text-text-secondary">{t('account_setup_answer2')}</p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold mb-2">{t('account_setup_question3')}</h3>
            <p className="text-lg text-text-secondary">{t('account_setup_answer3')}</p>
          </div>
        </div>
      </div>

      {/* Payments & Transactions */}
      <div className="mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-primary">
          {t('payments_title')}
        </h2>
        <div className="space-y-8 text-left">
          <div>
            <h3 className="text-3xl font-semibold mb-2">{t('payments_question1')}</h3>
            <p className="text-lg text-text-secondary">{t('payments_answer1')}</p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold mb-2">{t('payments_question2')}</h3>
            <p className="text-lg text-text-secondary">{t('payments_answer2')}</p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold mb-2">{t('payments_question3')}</h3>
            <p className="text-lg text-text-secondary">{t('payments_answer3')}</p>
          </div>
        </div>
      </div>

      {/* Security */}
      <div className="mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-primary">
          {t('security_title')}
        </h2>
        <div className="space-y-8 text-left">
          <div>
            <h3 className="text-3xl font-semibold mb-2">{t('security_question1')}</h3>
            <p className="text-lg text-text-secondary">{t('security_answer1')}</p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold mb-2">{t('security_question2')}</h3>
            <p className="text-lg text-text-secondary">{t('security_answer2')}</p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold mb-2">{t('security_question3')}</h3>
            <p className="text-lg text-text-secondary">{t('security_answer3')}</p>
          </div>
        </div>
      </div>

      {/* Integration & Support */}
      <div className="mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-primary">
          {t('integration_title')}
        </h2>
        <div className="space-y-8 text-left">
          <div>
            <h3 className="text-3xl font-semibold mb-2">{t('integration_question1')}</h3>
            <p className="text-lg text-text-secondary">{t('integration_answer1')}</p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold mb-2">{t('integration_question2')}</h3>
            <p className="text-lg text-text-secondary">{t('integration_answer2')}</p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold mb-2">{t('integration_question3')}</h3>
            <p className="text-lg text-text-secondary">{t('integration_answer3')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
