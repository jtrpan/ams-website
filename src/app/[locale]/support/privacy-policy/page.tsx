'use client'

import { useTranslations } from 'next-intl'

export default function Privacy_Policy() {
  const t = useTranslations('privacy_policy')

  const principles = Array.from({ length: 10 }).map((_, i) =>
    t(`principle_${i + 1}`)
  )

  return (
    <div className="px-6 lg:px-32 py-24 max-w-7xl mx-auto text-text-primary">
      <h1 className="text-5xl lg:text-6xl font-extrabold mb-10 text-primary text-center">
        {t('title')}
      </h1>
      <p className="text-lg lg:text-xl text-text-secondary text-center mb-16">
        {t('intro')}
      </p>

      <div className="space-y-14 text-lg leading-relaxed">
        {/* Privacy Principles Section */}
        <section className="border-l-4 border-primary pl-6">
          <h2 className="text-2xl font-semibold text-primary mb-2">
            {t('principles_title')}
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-text-secondary">
            {principles.map((line, index) =>
              line ? <li key={index}>{line}</li> : null
            )}
          </ul>
        </section>

        {/* Remaining Sections */}
        {[
          'collection_use',
          'consent',
          'data_transfers',
          'user_rights',
          'changes'
        ].map((key) => (
          <section key={key} className="border-l-4 border-primary pl-6">
            <h2 className="text-2xl font-semibold text-primary mb-2">
              {t(`${key}_title`)}
            </h2>
            <p className="whitespace-pre-line text-text-secondary">
              {t(`${key}_body`)}
            </p>
          </section>
        ))}
      </div>
    </div>
  )
}
