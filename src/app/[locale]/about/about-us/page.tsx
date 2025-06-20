import { useTranslations } from 'next-intl';
import Image from 'next/image'

export default function About() {
  const t = useTranslations('about'); // Use 'about' as the namespace

  return (
    <div className="px-10 lg:px-32 py-24 text-center">
      {/* Main Title */}
      <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-8 text-primary">{t('title')}</h1>

      {/* Subtitle Section */}
      <p className="text-lg lg:text-xl mb-2 text-text-secondary px-4 lg:px-16">{t('subtitle')}</p>
      <div className="flex justify-center py-8 mb-6">
        <Image
          src="/images/building1.webp"
          alt="Building"
          width={1000}
          height={400}
          className="rounded-xl"
        />
      </div>
      <p className="text-lg lg:text-xl mb-12 text-text-secondary px-4 lg:px-16">{t('subtitle2')}</p>

      {/* Mission Section */}
      <div className="bg-background-secondary p-8 rounded-lg shadow-md mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">{t('mission')}</h2>
        <p className="text-lg lg:text-xl text-text-secondary mb-8">{t('mission2')}</p>
        <p className="text-lg lg:text-xl text-text-secondary">{t('mission3')}</p>
      </div>

      {/* Why Choose Us Section */}
      <div className="mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8">{t('choose')}</h2>
        <p className="text-lg lg:text-xl text-text-secondary mb-2">{t('choose1')}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4 text-primary">{t('cutting_edge')}</h3>
            <p className="text-lg text-text-secondary">{t('cutting_edge2')}</p>
          </div>
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4 text-primary">{t('global_reach')}</h3>
            <p className="text-lg text-text-secondary">{t('global_reach2')}</p>
          </div>
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4 text-primary">{t('support')}</h3>
            <p className="text-lg text-text-secondary">{t('support2')}</p>
          </div>
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4 text-primary">{t('industry')}</h3>
            <p className="text-lg text-text-secondary">{t('industry2')}</p>
          </div>
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div className="bg-background-secondary p-8 rounded-lg shadow-md">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">{t('team')}</h2>
        <p className="text-lg lg:text-xl text-text-secondary mb-8">{t('team2')}</p>
        <p className="text-lg lg:text-xl text-text-secondary mb-8">{t('team3')}</p>
        <p className="text-lg lg:text-xl text-text-secondary">{t('team4')}</p>
      </div>


    </div>
  );
}
