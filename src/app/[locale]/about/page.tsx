import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about'); // Use 'about' as the namespace

  return (
    <div className='px-32 py-24 text-center text-2xl'>
      <h1>{t('About UCanPay AMS')}</h1>
      <p>{t('We provide secure, seamless, and scalable payment solutions tailored to grow your business.')}</p>

      <h2>{t('Our Mission')}</h2>
      <p>{t('Our mission is to empower businesses with advanced payment technologies, ensuring smoother transactions, higher conversion rates, and comprehensive security solutions.')}</p>

      <h2>{t('Why Choose Us?')}</h2>
      <ul>
        <li>{t('Cutting-edge payment technology to boost your business.')}</li>
        <li>{t('Global reach with localized payment solutions.')}</li>
        <li>{t('Dedicated customer support 24/7.')}</li>
        <li>{t('Industry-leading fraud prevention and security tools.')}</li>
      </ul>

      <h2>{t('Meet Our Team')}</h2>
      <p>{t('UCanPay AMS is led by a passionate team of engineers, designers, and payment experts who are dedicated to revolutionizing the payment landscape for businesses worldwide.')}</p>
    </div>
  );
}
