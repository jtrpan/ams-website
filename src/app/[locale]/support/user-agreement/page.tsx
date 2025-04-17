'use client'

import { useTranslations } from 'next-intl'

export default function User_Agreement() {
  const t = useTranslations('user_agreement')

  return (
    <div className="px-6 lg:px-32 py-24 max-w-7xl mx-auto text-text-primary">
      <h1 className="text-5xl lg:text-6xl font-extrabold mb-10 text-primary text-center">
        {t('title')}
      </h1>
      <p className="text-lg lg:text-xl text-text-secondary text-center mb-16">
        {t('intro')}
      </p>

      <div className="space-y-14 text-lg leading-relaxed">
        {Array.from({ length: 15 }).map((_, i) => {
          const section = i + 1
          return (
            <section key={section} className="border-l-4 border-primary pl-6">
              <h2 className="text-2xl font-semibold text-primary mb-2">
                {t(`section${section}_title`)}
              </h2>
              <p className="whitespace-pre-line text-text-secondary">
                {t(`section${section}_body`)}
              </p>
            </section>
          )
        })}
      </div>
    </div>
  )
}
