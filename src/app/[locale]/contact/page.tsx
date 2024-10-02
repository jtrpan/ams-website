import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('./form'), {
  ssr: false, // Disable server-side rendering for this component
});

export default function Contact() {
  const t = useTranslations('contact'); // Use 'contact' as the namespace

  return (
    <div className="px-32 py-24 text-center text-2xl">
      <h1 className="text-7xl font-extrabold leading-tight mb-12">{t('title')}</h1>
      <p className="text-4xl mb-12 px-8">{t('subtitle')}</p>

      <div className="mb-16 px-8">
        <p className="mb-8">{t('desc')}</p>

        <br/>

        <h2 className="text-5xl font-bold mb-8">{t('contact_options_title')}</h2>
        <ul className="space-y-4">
          <li>{t('phone_desc')}</li>
          <li>{t('email_desc')}</li>
          <li>{t('chat_desc')}</li>
          <li>{t('support_portal_desc')}</li>
        </ul>
      </div>

      <ContactForm />
      <br/><br/>
      <h2 className="text-3xl font-bold mb-8">{t('cta')}</h2>
    </div>
  );
}
