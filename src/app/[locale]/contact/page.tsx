import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('./form'), {
  ssr: false, // Disable server-side rendering for this component
});

export default function Contact() {
  const t = useTranslations('contact'); // Use 'contact' as the namespace

  return (
    <div className="px-6 sm:px-12 md:px-20 lg:px-32 py-16 sm:py-20 md:py-24 text-center text-lg sm:text-xl md:text-2xl">
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-extrabold leading-tight mb-12">
        {t('title')}
      </h1>
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl mb-12 px-4 sm:px-8">
        {t('subtitle')}
      </p>

      <div className="mb-12 sm:mb-14 md:mb-16 px-2 sm:px-4 md:px-8">
        <p className="mb-6 sm:mb-8">{t('desc')}</p>


        <br/>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">{t('contact_options_title')}</h2>
        <ul className="space-y-2 sm:space-y-3 md:space-y-4 max-w-8xl mx-auto">
          <li>{t('phone_desc')}</li>
          <li>{t('email_desc')}</li>
          <li>{t('chat_desc')}</li>
          <li>{t('support_portal_desc')}</li>
        </ul>
      </div>

      <ContactForm />
      <br/><br/>
      <h3 className="text-2xl font-bold mb-8">{t('cta')}</h3>
    </div>
  );
}
